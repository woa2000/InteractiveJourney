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
    name: 'Inauguração Nova Loja Shopping Center',
    client: 'Shopping Vila Olímpia',
    status: 'Concluído',
    deadline: '2024-12-15'
  },
  {
    id: '2',
    name: 'Campanha Black Friday 2024',
    client: 'Rede Varejo Premium',
    status: 'Em Andamento',
    deadline: '2025-01-28'
  },
  {
    id: '3',
    name: 'Auditoria Inventário Natal',
    client: 'SuperMercado Central',
    status: 'Atrasado',
    deadline: '2024-12-10'
  },
  {
    id: '4',
    name: 'Reformulação Layout Loja Flagship',
    client: 'Fashion Store Premium',
    status: 'Em Andamento',
    deadline: '2025-02-05'
  },
  {
    id: '5',
    name: 'Treinamento Equipe Vendas Natal',
    client: 'Eletro Magazine',
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
    title: 'Lojas Ativas',
    value: 23,
    icon: 'store',
    variant: 'primary'
  },
  {
    id: '2',
    title: 'Ações Pendentes',
    value: 7,
    icon: 'exclamation-triangle',
    variant: 'error'
  },
  {
    id: '3',
    title: 'Execuções Concluídas',
    value: 156,
    icon: 'check-circle',
    variant: 'success'
  },
  {
    id: '4',
    title: 'Equipes Field',
    value: 12,
    icon: 'users',
    variant: 'accent'
  }
];

export const mockClients = [
  'Shopping Vila Olímpia',
  'Rede Varejo Premium', 
  'SuperMercado Central',
  'Fashion Store Premium',
  'Eletro Magazine',
  'Drogaria Saúde Total',
  'Livraria Cultura',
  'Óticas VisionMax'
];
