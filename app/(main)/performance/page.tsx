import { PerformanceOverview } from '@/components/performance/performance-overview';
import { RegionalPerformance } from '@/components/performance/regional-performance';
import { TaskList } from '@/components/performance/task-list';
import { KpiCards } from '@/components/performance/kpi-cards';

export default function PerformancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Гүйцэтгэлийн самбар</h1>
      <div className="space-y-8">
        <KpiCards />
        <PerformanceOverview />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RegionalPerformance />
          <TaskList />
        </div>
      </div>
    </div>
  );
}