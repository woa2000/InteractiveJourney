import { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import ProjectsTable from '@/components/projects/ProjectsTable';
import NewProjectModal from '@/components/projects/NewProjectModal';
import { Button } from '@/components/ui/button';
import { Filter, Plus } from 'lucide-react';
import { mockProjects } from '@/data/mockData';

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AdminLayout 
        pageTitle="Atividades & Execuções Retail" 
        breadcrumbItems={['Atividades']}
      >
        <div className="page-header">
          <h2 className="page-title">Atividades & Execuções Retail</h2>
          <div className="table-actions">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filtros
            </Button>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[hsl(38,95%,56%)] hover:bg-[hsl(38,95%,50%)] text-white flex items-center gap-2"
            >
              <Plus size={16} />
              Nova Atividade
            </Button>
          </div>
        </div>

        <ProjectsTable projects={mockProjects} />
      </AdminLayout>

      <NewProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
