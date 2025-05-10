'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Complaint() {
  return (

    <div className="container mx-auto grid gap-4 py-16">
          <h1 className='text-3xl font-bold'>Иргэд, олон нийттэй харилцах төв 11-11</h1>
          <section className="mx-auto flex justify-center bg-transparent gap-4 px-4 py-16 ">
      <Button asChild size="lg" className="">
        <Link 
          href="https://www.11-11.mn/" 
          className="flex items-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Санал гомдол илгээх
        </Link>
      </Button>
    </section>
    </div>
 
  );
}