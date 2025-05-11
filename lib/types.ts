// This file can be placed in lib/types.ts for reuse across components

// Ad interface
export interface Ad {
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
  
  // Category mapping for display
  export const categoryNames: Record<string, string> = {
    vehicles: 'Тээврийн хэрэгсэл',
    property: 'Үл хөдлөх хөрөнгө',
    electronics: 'Электрон бараа',
    services: 'Үйлчилгээ',
    jobs: 'Ажлын байр',
  };
  
  // Mock data for development
  export const mockAds: Ad[] = [
    { 
      id: 1, 
      title: 'Машин зарна', 
      description: 'Toyota Prius 20, 2009 он, сайн байдалтай. Дугаар бүртгэлтэй, татвар даатгал хийгдсэн. Хурд хязгаарлагчтай, камертай. Яаралтай зарна.', 
      price: '15,000,000₮', 
      category: 'vehicles', 
      location: 'Улаанбаатар', 
      contactPhone: '9911-1234', 
      contactEmail: 'user@example.com', 
      images: [], 
      createdAt: '2025-05-10' 
    },
    { 
      id: 2, 
      title: 'Байр түрээслүүлнэ', 
      description: '2 өрөө байр, Баянгол дүүрэг, бүрэн тавилгатай. 4-р давхарт, лифттэй, 24 цагийн харуултай, дулаан, цэвэр бохир усны шугам сайн.', 
      price: '800,000₮/сар', 
      category: 'property', 
      location: 'Улаанбаатар', 
      contactPhone: '8822-5678', 
      contactEmail: '', 
      images: [], 
      createdAt: '2025-05-09' 
    },
    { 
      id: 3, 
      title: 'Ноутбук зарна', 
      description: 'Macbook Air M1, 256GB, 8GB RAM, шинэ. Баталгаат хугацаа 1 жил үлдсэн. Зөвхөн ажлын зориулалтаар хэрэглэж байсан.', 
      price: '1,200,000₮', 
      category: 'electronics', 
      location: 'Дархан', 
      contactPhone: '9933-9012', 
      contactEmail: 'seller@example.com', 
      images: [], 
      createdAt: '2025-05-08' 
    },
    { 
      id: 4, 
      title: 'Програмист хайж байна', 
      description: 'React, Next.js, TypeScript технологиудыг эзэмшсэн, дор хаяж 2+ жилийн туршлагатай програмист хайж байна. Цалин: Туршлагаас хамаарна.', 
      price: 'Туршлагаас хамаарна', 
      category: 'jobs', 
      location: 'Улаанбаатар', 
      contactPhone: '9955-4321', 
      contactEmail: 'jobs@example.com', 
      images: [], 
      createdAt: '2025-05-07' 
    },
    { 
      id: 5, 
      title: 'Гэр цэвэрлэгээний үйлчилгээ', 
      description: 'Мэргэжлийн багаж, химийн бодистойгоор гэр, оффис, байр цэвэрлэх үйлчилгээ үзүүлнэ. 3 жилийн туршлагатай баг.', 
      price: '50,000₮-с эхэлнэ', 
      category: 'services', 
      location: 'Улаанбаатар', 
      contactPhone: '8855-9876', 
      contactEmail: 'cleaning@example.com', 
      images: [], 
      createdAt: '2025-05-06' 
    }]