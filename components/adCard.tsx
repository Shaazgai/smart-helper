// File: components/AdCard.tsx
import Link from 'next/link';
import { Ad } from '@/lib/types';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  return (
    <Link href={`/ads/${ad.id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="h-40 bg-gray-200 flex items-center justify-center">
          {ad.images && ad.images.length > 0 ? (
            <img 
              src={ad.images[0]} 
              alt={ad.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{ad.title}</h3>
          <p className="text-green-600 font-bold mb-2">{ad.price}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{ad.location}</span>
            <span>{ad.createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}