import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export function getStatusVariant(status: string): 'success' | 'warning' | 'danger' {
  switch (status.toLowerCase()) {
    case 'concluído':
    case 'completed':
      return 'success';
    case 'em andamento':
    case 'in_progress':
      return 'warning';
    case 'atrasado':
    case 'delayed':
      return 'danger';
    default:
      return 'warning';
  }
}
