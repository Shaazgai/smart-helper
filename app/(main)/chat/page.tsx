'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

export default function ChatPage() {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Сайн байна уу! Би таны ухаалаг туслах. Танд хэрхэн туслах вэ?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // In a real implementation, this would make an API call to the OpenAI service
    // This is a mock response for demonstration purposes
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getMockResponse(input),
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };
  
  // Mock function to simulate responses
  const getMockResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('цаг агаар') || lowerQuery.includes('температур')) {
      return 'Өнөөдөр Улаанбаатар хотод үүлшинэ, цасан шуурга шуурахгүй. Агаарын температур -2..0 градус байна. Салхи баруун хойноос 4-8 м/с.';
    } else if (lowerQuery.includes('валют') || lowerQuery.includes('ханш')) {
      return 'Өнөөдрийн валютын ханш: 1 USD = 3,450₮, 1 EUR = 3,720₮, 1 CNY = 475₮, 1 RUB = 38₮';
    } else if (lowerQuery.includes('шатахуун') || lowerQuery.includes('бензин')) {
      return 'Өнөөдрийн шатахууны үнэ: A-92: 2,150₮, A-95: 2,350₮, Дизель: 2,450₮';
    } else if (lowerQuery.includes('замын') || lowerQuery.includes('түгжрэл')) {
      return 'Энхтайвны гүүрэн дээр зам засварын ажил хийгдэж байгаа тул түгжрэл үүсч байна. Жуулчны гудамж, Бага тойруу дээр хөдөлгөөн хэвийн байна.';
    } else {
      return 'Уучлаарай, таны асуултыг бүрэн ойлгосонгүй. Та асуултаа дахин, тодорхой болгон асууна уу?';
    }
  };

  const suggestedQuestions = [
    'Өнөөдрийн цаг агаарын мэдээ?',
    'Одоогийн валютын ханш хэд вэ?',
    'Шатахууны үнэ өөрчлөгдсөн үү?',
    'Замын хөдөлгөөний мэдээ?',
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl min-h-[calc(100vh-24rem)]">
      <div className="flex flex-col gap-4">
        <Card className="shadow-lg border">
          <CardContent className="p-0">
            <div className="flex flex-col h-[calc(100vh-20rem)]">
              <div className="text-center p-4 border-b flex items-center justify-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <h1 className="font-semibold text-lg">Ухаалаг туслах</h1>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div className="flex items-start gap-3 max-w-[80%]">
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <Sparkles className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          'p-3 rounded-lg',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-tr-none'
                            : 'bg-muted rounded-tl-none'
                        )}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                          <User className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex items-start gap-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg rounded-tl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100"></div>
                          <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="relative">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('chat.placeholder')}
                    className="pr-12 py-6 rounded-full"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-1 top-1 h-10 w-10 rounded-full"
                    disabled={isLoading || !input.trim()}
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">{t('chat.send')}</span>
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Санал болгох асуултууд:</h3>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => {
                  setInput(question);
                }}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}