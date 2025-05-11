// File: app/api/ads/route.ts
import { NextResponse } from 'next/server';
import { mockAds } from '@/lib/types';

// We'll use a simple in-memory store for the mock API
export let ads = [...mockAds];

// Helper function to update ads (used by other routes)
export function updateAds(newAds: typeof ads) {
  ads = newAds;
}

// GET handler for fetching all ads
export async function GET() {
  return NextResponse.json(ads);
}

// POST handler for creating a new ad
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.description || !data.price || !data.category || !data.location || !data.contactPhone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new ad
    const newAd = {
      id: ads.length > 0 ? Math.max(...ads.map(ad => ad.id)) + 1 : 1,
      ...data,
      images: data.images || [],
      createdAt: new Date().toISOString().split('T')[0],
    };
    
    // Add to "database"
    ads = [...ads, newAd];
    
    return NextResponse.json(newAd, { status: 201 });
  } catch (error) {
    console.error('Error creating ad:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}