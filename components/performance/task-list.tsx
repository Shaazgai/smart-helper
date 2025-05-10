'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/language-provider';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';

export function TaskList() {
  const { t } = useLanguage();
  
  // Mock data - would be replaced with API data
  const tasks = [
    {
      id: 1,
      title: 'Улирлын тайлан бэлтгэх',
      deadline: '2025.03.15',
      status: 'overdue',
      department: 'Санхүү',
    },
    {
      id: 2,
      title: 'Төслийн санхүүжилтийн баримт бүрдүүлэх',
      deadline: '2025.03.18',
      status: 'pending',
      department: 'Төсөл',
    },
    {
      id: 3,
      title: 'Ажилтнуудын сургалт зохион байгуулах',
      deadline: '2025.03.20',
      status: 'pending',
      department: 'Хүний нөөц',
    },
    {
      id: 4,
      title: 'Шинэ тоног төхөөрөмжийн худалдан авалт хийх',
      deadline: '2025.03.12',
      status: 'overdue',
      department: 'Ханган нийлүүлэлт',
    },
    {
      id: 5,
      title: 'Сайтын хөгжүүлэлт дуусгах',
      deadline: '2025.03.25',
      status: 'pending',
      department: 'Мэдээллийн технологи',
    },
    {
      id: 6,
      title: 'Маркетингийн кампанит ажлын тайлан',
      deadline: '2025.03.08',
      status: 'completed',
      department: 'Маркетинг',
    },
  ];
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'overdue':
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Хугацаа хэтэрсэн
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Хүлээгдэж буй
          </Badge>
        );
      case 'completed':
        return (
          <Badge variant="secondary" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Дууссан
          </Badge>
        );
      default:
        return null;
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Хугацаатай үүргүүд</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{task.title}</h3>
                {getStatusBadge(task.status)}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {task.department}
                </span>
                <span className={`font-medium ${
                  task.status === 'overdue' ? 'text-destructive' : ''
                }`}>
                  Хугацаа: {task.deadline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}