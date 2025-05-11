// File: app/api/ads/[id]/route.ts
import { NextResponse } from 'next/server';
import { mockAds } from '@/lib/types';

// We need a reference to ads that's accessible to all handlers
let adsStore = [...mockAds];

// Function to sync with the main route's data store (only needed in development)
const syncWithMainStore = async () => {
  try {
    // Try to import from the parent route
    const mainRouteModule = await import('../route');
    if (mainRouteModule && mainRouteModule.ads) {
      adsStore = mainRouteModule.ads;
    }
  } catch (error) {
    console.error('Error syncing with main store:', error);
    // If there's an error, we'll just use our local store
  }
};

// GET handler for fetching a specific ad by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await syncWithMainStore();
  const id = parseInt(params.id);
  
  const ad = adsStore.find(ad => ad.id === id);
  
  if (!ad) {
    return NextResponse.json(
      { error: 'Ad not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(ad);
}

// PUT handler for updating an ad
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await syncWithMainStore();
    const id = parseInt(params.id);
    
    const adIndex = adsStore.findIndex(ad => ad.id === id);
    
    if (adIndex === -1) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }
    
    const data = await request.json();
    const updatedAd = { ...adsStore[adIndex], ...data };
    
    // Update the ad in our local store
    adsStore = [
      ...adsStore.slice(0, adIndex),
      updatedAd,
      ...adsStore.slice(adIndex + 1)
    ];
    
    // Try to update the main store
    try {
      const mainRouteModule = await import('../route');
      if (mainRouteModule && typeof mainRouteModule.updateAds === 'function') {
        mainRouteModule.updateAds(adsStore);
      }
    } catch (error) {
      console.error('Error updating main store:', error);
    }
    
    return NextResponse.json(updatedAd);
  } catch (error) {
    console.error('Error updating ad:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE handler for removing an ad
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await syncWithMainStore();
    const id = parseInt(params.id);
    
    const adIndex = adsStore.findIndex(ad => ad.id === id);
    
    if (adIndex === -1) {
      return NextResponse.json(
        { error: 'Ad not found' },
        { status: 404 }
      );
    }
    
    // Remove the ad from our local store
    adsStore = [
      ...adsStore.slice(0, adIndex),
      ...adsStore.slice(adIndex + 1)
    ];
    
    // Try to update the main store
    try {
      const mainRouteModule = await import('../route');
      if (mainRouteModule && typeof mainRouteModule.updateAds === 'function') {
        mainRouteModule.updateAds(adsStore);
      }
    } catch (error) {
      console.error('Error updating main store:', error);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting ad:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}