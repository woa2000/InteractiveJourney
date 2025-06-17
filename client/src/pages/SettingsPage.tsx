import AdminLayout from '@/components/layout/AdminLayout';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <AdminLayout 
      pageTitle="Configurações" 
      breadcrumbItems={['Configurações']}
    >
      <div className="placeholder-page">
        <div className="placeholder-icon">
          <Settings size={64} />
        </div>
        <h3 className="placeholder-title">Configurações</h3>
        <p className="placeholder-text">Perfil do usuário e configurações do sistema</p>
      </div>
    </AdminLayout>
  );
}
