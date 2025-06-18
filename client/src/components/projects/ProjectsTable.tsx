import { MoreVertical } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import StatusChip from '@/components/common/StatusChip';
import type { Project } from '@/data/mockData';

interface ProjectsTableProps {
  projects: Project[];
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  return (
    <div className="table-container">
      <div className="table-header">
        <h3 className="table-title">Atividades de Campo</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-5 px-6 font-semibold text-[hsl(219,87%,21%)] bg-[hsl(0,0%,98%)]">
                Nome da Atividade
              </th>
              <th className="text-left py-5 px-6 font-semibold text-[hsl(219,87%,21%)] bg-[hsl(0,0%,98%)]">
                Loja/Cliente
              </th>
              <th className="text-left py-5 px-6 font-semibold text-[hsl(219,87%,21%)] bg-[hsl(0,0%,98%)]">
                Status
              </th>
              <th className="text-left py-5 px-6 font-semibold text-[hsl(219,87%,21%)] bg-[hsl(0,0%,98%)]">
                Prazo
              </th>
              <th className="text-left py-5 px-6 font-semibold text-[hsl(219,87%,21%)] bg-[hsl(0,0%,98%)]">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200">
                <td className="py-5 px-6 text-sm font-medium text-[hsl(219,87%,21%)]">
                  {project.name}
                </td>
                <td className="py-5 px-6 text-sm text-[hsl(219,20%,50%)]">
                  {project.client}
                </td>
                <td className="py-5 px-6">
                  <StatusChip status={project.status} />
                </td>
                <td className="py-5 px-6 text-sm text-[hsl(219,20%,50%)]">
                  {formatDate(project.deadline)}
                </td>
                <td className="py-5 px-6">
                  <button className="text-[hsl(219,20%,50%)] hover:text-[hsl(219,87%,21%)] p-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
