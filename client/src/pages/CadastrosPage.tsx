import AdminLayout from '@/components/layout/AdminLayout';
import { Database } from 'lucide-react';

export default function CadastrosPage() {
  return (
    <AdminLayout 
      pageTitle="Cadastros Retail" 
      breadcrumbItems={['Cadastros']}
    >
      <div className="placeholder-page">
        <div className="placeholder-icon">
          <Database size={64} />
        </div>
        <h3 className="placeholder-title">Cadastros Retail</h3>
        <p className="placeholder-text">Gerenciamento de Lojas, PDVs, Promotores e Materiais</p>
      </div>
    </AdminLayout>
  );
}
