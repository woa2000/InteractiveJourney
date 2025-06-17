import AdminLayout from '@/components/layout/AdminLayout';
import { BarChart3 } from 'lucide-react';

export default function ReportsPage() {
  return (
    <AdminLayout 
      pageTitle="Relatórios & Analytics" 
      breadcrumbItems={['Relatórios']}
    >
      <div className="placeholder-page">
        <div className="placeholder-icon">
          <BarChart3 size={64} />
        </div>
        <h3 className="placeholder-title">Relatórios & Analytics</h3>
        <p className="placeholder-text">Performance de Lojas, ROI de Campanhas e Métricas de Execução</p>
      </div>
    </AdminLayout>
  );
}
