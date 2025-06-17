import AdminLayout from '@/components/layout/AdminLayout';
import StatsCard from '@/components/common/StatsCard';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import { mockStats } from '@/data/mockData';

export default function DashboardPage() {
  return (
    <AdminLayout 
      pageTitle="Painel de Controle Retail" 
      breadcrumbItems={['Dashboard']}
    >
      <div className="stats-grid">
        {mockStats.map((stat) => (
          <StatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            variant={stat.variant}
          />
        ))}
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-6">Execuções Field Recentes</h3>
          <div className="text-center py-10 text-gray-500">
            <TrendingUp size={48} className="mx-auto mb-4 opacity-30" />
            <p>Relatórios de execução e performance das lojas serão exibidos aqui</p>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
