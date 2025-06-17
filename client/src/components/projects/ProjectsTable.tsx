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
              <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50">
                Nome da Atividade
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50">
                Loja/Cliente
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50">
                Status
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50">
                Prazo
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 bg-gray-50">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">
                  {project.name}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {project.client}
                </td>
                <td className="py-4 px-6">
                  <StatusChip status={project.status} />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {formatDate(project.deadline)}
                </td>
                <td className="py-4 px-6">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
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
