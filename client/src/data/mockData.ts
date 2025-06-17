export interface Project {
  id: string;
  name: string;
  client: string;
  status: 'Concluído' | 'Em Andamento' | 'Atrasado';
  deadline: string;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Implementação Sistema CRM',
    client: 'TechCorp Solutions',
    status: 'Concluído',
    deadline: '2024-12-15'
  },
  {
    id: '2',
    name: 'Reforma Escritório Central',
    client: 'BuildMax Construções',
    status: 'Em Andamento',
    deadline: '2025-01-28'
  },
  {
    id: '3',
    name: 'Auditoria Fiscal 2024',
    client: 'Contábil & Associados',
    status: 'Atrasado',
    deadline: '2024-12-10'
  },
  {
    id: '4',
    name: 'Campanha Marketing Digital',
    client: 'CreativeFlow Agency',
    status: 'Em Andamento',
    deadline: '2025-02-05'
  },
  {
    id: '5',
    name: 'Treinamento Equipe Vendas',
    client: 'SalesForce Training',
    status: 'Concluído',
    deadline: '2024-11-20'
  }
];

export interface StatCard {
  id: string;
  title: string;
  value: number;
  icon: string;
  variant: 'primary' | 'accent' | 'success' | 'error';
}

export const mockStats: StatCard[] = [
  {
    id: '1',
    title: 'Projetos Ativos',
    value: 15,
    icon: 'project-diagram',
    variant: 'primary'
  },
  {
    id: '2',
    title: 'Tarefas Atrasadas',
    value: 3,
    icon: 'exclamation-triangle',
    variant: 'error'
  },
  {
    id: '3',
    title: 'Tarefas Concluídas',
    value: 42,
    icon: 'check-circle',
    variant: 'success'
  },
  {
    id: '4',
    title: 'Equipes Ativas',
    value: 8,
    icon: 'users',
    variant: 'accent'
  }
];

export const mockClients = [
  'TechCorp Solutions',
  'BuildMax Construções',
  'CreativeFlow Agency',
  'Contábil & Associados',
  'SalesForce Training'
];
