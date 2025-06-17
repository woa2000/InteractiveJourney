import AdminLayout from '@/components/layout/AdminLayout';
import { Database } from 'lucide-react';

export default function CadastrosPage() {
  return (
    <AdminLayout 
      pageTitle="Cadastros" 
      breadcrumbItems={['Cadastros']}
    >
      <div className="placeholder-page">
        <div className="placeholder-icon">
          <Database size={64} />
        </div>
        <h3 className="placeholder-title">Página de Cadastros</h3>
        <p className="placeholder-text">Gerenciamento de dados mestre (Clientes, Parceiros, etc.)</p>
      </div>
    </AdminLayout>
  );
}
