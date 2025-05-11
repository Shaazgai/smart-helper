import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the type for predefined responses
type PredefinedResponses = {
  [key: string]: {
    response: string;
    keywords?: string[];
  };
};

// Expanded predefined responses with keywords for better matching
const predefinedResponses: PredefinedResponses = {
  'сүхбаатарын талбай ороход ямар автобусанд суух вэ?': {
    response: 'Сүхбаатарын талбай руу дараах автобусууд явдаг:\n\nЧ:2, Ч:8, Ч:37, Ч:48, Ч:48А, Ч:57, Ч:57Б, ШҮ:1, М:1, М:2',
    keywords: ['сүхбаатарын талбай', 'автобус', 'чиглэл']
  },
  'өнөөдрийн цаг агаарын мэдээ?': {
    response: 'Өнөөдөр Улаанбаатар хотод 15-17°C, үүлшинэ. Салхи баруун хойноос 5-10 м/с. Орой бороо орох магадлалтай.',
    keywords: ['цаг агаар', 'температур', 'хэм']
  },
  'одоогийн валютын ханш хэд вэ?': {
    response: '2025 оны 5-р сарын 11-ний ханш:\n\n1 USD = 3,450₮\n1 EUR = 3,750₮\n1 CNY = 490₮\n1 RUB = 40₮\n\nЭх сурвалж: Монголбанк',
    keywords: ['валют', 'ханш', 'доллар', 'юань', 'төгрөг']
  },
  'өнөөдрийн замын хөдөлгөөний мэдээ?': {
    response: 'Өнөөдөр Улаанбаатар хотод тэгш дугаартай автомашин замын хөдөлгөөнд оролцоно. Хойд замд урсгал чөлөөтэй. Баруун 4-н зам болон Энхтайваны гүүрэн дээр түгжрэл үүссэн байна.',
    keywords: ['зам', 'хөдөлгөөн', 'түгжрэл']
  },
};

// Helper function to find matching predefined response using keywords
function findPredefinedResponse(userMessage: string): string | null {
  // Check for exact match first
  if (predefinedResponses[userMessage]) {
    return predefinedResponses[userMessage].response;
  }
  
  // Convert user message to lowercase for case-insensitive matching
  const lowerUserMessage = userMessage.toLowerCase();
  
  // Check for partial match using keywords
  for (const [question, data] of Object.entries(predefinedResponses)) {
    // Skip if no keywords defined
    if (!data.keywords) continue;
    
    // Check if user message contains at least 2 keywords
    const matchCount = data.keywords.filter(keyword => 
      lowerUserMessage.includes(keyword.toLowerCase())
    ).length;
    
    if (matchCount >= 2) {
      return data.response;
    }
  }
  
  return null;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages are required and must be an array' },
        { status: 400 }
      );
    }

    // Get the latest user message
    const lastUserMessage = messages.findLast(msg => msg.role === 'user')?.content?.trim() || '';
    
    // Try to find a predefined response
    const predefinedResponse = findPredefinedResponse(lastUserMessage);
    
    // If we have a predefined response for this question
    if (predefinedResponse) {
      return NextResponse.json({ 
        content: predefinedResponse 
      });
    }

    // Otherwise, proceed with OpenAI API call
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content || '';

    return NextResponse.json({ content });
  } catch (error: any) {
    console.error('OpenAI API error:', error);
    
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}