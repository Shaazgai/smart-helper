// This file can be placed in lib/types.ts for reuse across components
export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
  liked: boolean;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  likes: number;
  comments: Comment[];
  liked: boolean;
  commentCount: number;
}
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
      title: 'Тоглоом', 
      description: 'Хүүхдийн хэрэглэхээ больсон шинээрээ тоглоомууд байгаамаа хэрэгтэй хүн нь аваарай', 
      price: '', 
      category: 'vehicles', 
      location: 'Улаанбаатар', 
      contactPhone: '9911-1234', 
      contactEmail: 'user@example.com', 
      images: ['/images/toy.jpg'], 
      createdAt: '2025-05-10' 
    },
    { 
      id: 2, 
      title: 'Фудволк', 
      description: 'Tabao-аас захиалсан шинээрээ фудволк байгаамаа үүнийг хэрэгтэй хүн нь аваарай', 
      price: '', 
      category: 'property', 
      location: 'Улаанбаатар', 
      contactPhone: '8822-5678', 
      contactEmail: '', 
      images: ['/images/tshirt.webp'], 
      createdAt: '2025-05-09' 
    },
    { 
      id: 3, 
      title: 'Гутал', 
      description: 'Шинээрээ байгаамаа ахдаа авсан багадчихлаа авах хүн нь аваарай. Зарж байснаас хэрэгтэй хүнд нь байсан дээр байх', 
      price: '', 
      category: 'electronics', 
      location: 'Дархан', 
      contactPhone: '9933-9012', 
      contactEmail: 'seller@example.com', 
      images: ['/images/boots.jpg'], 
      createdAt: '2025-05-08' 
    },
    { 
      id: 4, 
      title: 'Ном', 
      description: 'Хүүхдийн маань багадаа уншиж байсан номнууд байгаамаа эдгээрийг үнэгүй аваарай.', 
      price: '', 
      category: 'jobs', 
      location: 'Улаанбаатар', 
      contactPhone: '9955-4321', 
      contactEmail: 'jobs@example.com', 
      images: ['/images/books.jpeg'], 
      createdAt: '2025-05-07' 
    },
    { 
      id: 5, 
      title: 'Дэвтэр', 
      description: 'Нүхтэй том дэвтэрнүү байна. Үнэгүй аваарай☺️', 
      price: '', 
      category: 'services', 
      location: 'Улаанбаатар', 
      contactPhone: '8855-9876', 
      contactEmail: 'cleaning@example.com', 
      images: ['/images/notebook.webp'], 
      createdAt: '2025-05-06' 
    }
  
  ]