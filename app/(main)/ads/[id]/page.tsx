"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Ad {
  id: number;
  title: string;
  description: string;
  price: string;
  category: string;
  location: string;
  contactPhone: string;
  contactEmail?: string;
  images: string[];
  createdAt: string;
}

export default function AdDetail() {
  const params = useParams();
  const id = params.id as string;
  
  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, you would fetch from your API
    // fetch(`/api/ads/${id}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setAd(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching ad:', error);
    //     setError('Зар ачааллахад алдаа гарлаа');
    //     setLoading(false);
    //   });
    
    // Using mock data for now
    const mockAds = [
      { id: 1, title: 'Тоглоом', description: 'Хүүхдийн хэрэглэхээ больсон шинээрээ тоглоомууд байгаамаа хэрэгтэй хүн нь аваарай', price: '', category: '', location: 'Улаанбаатар', contactPhone: '9911-1234', contactEmail: 'user@example.com', images: ['/images/toy.jpg'], createdAt: '2025-05-10' },
      { id: 2, title: 'Фудволк', description: 'Tabao-аас захиалсан шинээрээ фудволк байгаамаа үүнийг хэрэгтэй хүн нь аваарай', price: '', category: '', location: 'Улаанбаатар', contactPhone: '8822-5678', contactEmail: '', images: ['/images/tshirt.webp'], createdAt: '2025-05-09' },
      { id: 3, title: 'Гутал', description: 'Шинээрээ байгаамаа ахдаа авсан багадчихлаа авах хүн нь аваарай. Зарж байснаас хэрэгтэй хүнд нь байсан дээр байх', price: '', category: '', location: 'Дархан', contactPhone: '9933-9012', contactEmail: 'seller@example.com', images: ['/images/boots.jpg'], createdAt: '2025-05-08' },
    ];
    
    const foundAd = mockAds.find(a => a.id === parseInt(id));
    
    if (foundAd) {
      setAd(foundAd);
      setLoading(false);
    } else {
      setError('Зар олдсонгүй');
      setLoading(false);
    }
  }, [id]);

  // Format the category name for display
  const categoryNames: Record<string, string> = {
    vehicles: 'Тээврийн хэрэгсэл',
    property: 'Үл хөдлөх хөрөнгө',
    electronics: 'Электрон бараа',
    services: 'Үйлчилгээ',
    jobs: 'Ажлын байр',
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error || !ad) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error || 'Зар олдсонгүй'}</p>
          <Link href="/ads" className="inline-block mt-2 text-blue-500 hover:text-blue-700">
            Бүх зарууд руу буцах
          </Link>
        </div>
      </div>
    );
  }

  // Get the first image or use a placeholder
  const mainImage = ad.images.length > 0 
    ? ad.images[0] 
    : '/images/placeholder.jpg';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/ads" className="text-blue-500 hover:text-blue-700">
          &larr; Бүх зарууд руу буцах
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Images */}
        <div className="lg:col-span-2">
          <div className="bg-gray-200 rounded-lg flex items-center justify-center h-96">
            {ad.images.length > 0 ? (
              <Image 
                src={mainImage} 
                alt={ad.title} 
                width={800} 
                height={600} 
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="mt-2">Зураг байхгүй байна</p>
              </div>
            )}
          </div>

          {/* Thumbnail gallery if there are multiple images */}
          {ad.images.length > 1 && (
            <div className="mt-4 grid grid-cols-5 gap-2">
              {ad.images.map((image, index) => (
                <div key={index} className="bg-gray-200 rounded-md overflow-hidden h-16">
                  <Image 
                    src={image} 
                    alt={`${ad.title} - ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Дэлгэрэнгүй</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="whitespace-pre-line">{ad.description}</p>
            </div>
          </div>
        </div>

        {/* Right column - Details */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-2xl font-bold mb-2">{ad.title}</h1>
            <p className="text-green-600 text-2xl font-bold mb-4">{ad.price}</p>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              {ad.category && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Ангилал:</span>
                  <span className="font-medium">{categoryNames[ad.category] || ad.category}</span>
                </div>
              )}
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Байршил:</span>
                <span className="font-medium">{ad.location}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Огноо:</span>
                <span className="font-medium">{ad.createdAt}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Холбоо барих</h2>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${ad.contactPhone}`} className="text-blue-600 font-semibold hover:underline">
                  {ad.contactPhone}
                </a>
              </div>
              
              {ad.contactEmail && (
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${ad.contactEmail}`} className="text-blue-600 font-semibold hover:underline">
                    {ad.contactEmail}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex space-x-3">
            <a 
              href={`tel:${ad.contactPhone}`} 
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md flex-1 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Залгах
            </a>
            {ad.contactEmail && (
              <a 
                href={`mailto:${ad.contactEmail}`}
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md flex-1 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Мессеж
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}