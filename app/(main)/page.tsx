import { HeroBanner } from '@/components/home/hero-banner';
import { DailyInfoSection } from '@/components/home/daily-info-section';
import { FeaturedNews } from '@/components/home/featured-news';
import { ChatPreview } from '@/components/home/chat-preview';

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <HeroBanner />
      <DailyInfoSection />
      <FeaturedNews />
      <ChatPreview />
    </div>
  );
}