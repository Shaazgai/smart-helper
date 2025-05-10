import { NewsFilters } from '@/components/news/news-filters';
import { NewsGrid } from '@/components/news/news-grid';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Мэдээ, мэдээлэл</h1>
      <NewsFilters />
      <NewsGrid />
    </div>
  );
}