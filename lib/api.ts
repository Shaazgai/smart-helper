// File: lib/api.ts
import { Ad } from './types';

// Simple API client for interacting with the ads API
const API_BASE_URL = '/api/ads';

// Get all ads
export async function getAds(): Promise<Ad[]> {
  try {
    const response = await fetch(API_BASE_URL);
    
    if (!response.ok) {
      throw new Error(`Error fetching ads: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Get a single ad by ID
export async function getAd(id: number | string): Promise<Ad> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching ad: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Create a new ad
export async function createAd(adData: Omit<Ad, 'id' | 'createdAt' | 'images'> & { images?: string[] }): Promise<Ad> {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error creating ad: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Update an existing ad
export async function updateAd(id: number | string, adData: Partial<Ad>): Promise<Ad> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error updating ad: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

// Delete an ad
export async function deleteAd(id: number | string): Promise<{ success: boolean }> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error deleting ad: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}