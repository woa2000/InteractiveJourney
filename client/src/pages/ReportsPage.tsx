import AdminLayout from '@/components/layout/AdminLayout';
import { BarChart3 } from 'lucide-react';

export default function ReportsPage() {
  return (
    <AdminLayout 
      pageTitle="Relatórios" 
      breadcrumbItems={['Relatórios']}
    >
      <div className="placeholder-page">
        <div className="placeholder-icon">
          <BarChart3 size={64} />
        </div>
        <h3 className="placeholder-title">Página de Relatórios</h3>
        <p className="placeholder-text">Área para visualização de relatórios e analytics</p>
      </div>
    </AdminLayout>
  );
}
