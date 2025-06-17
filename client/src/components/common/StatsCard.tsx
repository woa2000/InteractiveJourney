import { 
  LayoutDashboard, 
  AlertTriangle, 
  CheckCircle, 
  Users,
  Store
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
  variant: 'primary' | 'accent' | 'success' | 'error';
}

const iconMap = {
  'project-diagram': LayoutDashboard,
  'store': Store,
  'exclamation-triangle': AlertTriangle,
  'check-circle': CheckCircle,
  'users': Users
};

export default function StatsCard({ title, value, icon, variant }: StatsCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || LayoutDashboard;

  return (
    <div className="stat-card">
      <div className={cn("stat-icon", variant)}>
        <IconComponent size={20} />
      </div>
      <div className="stat-content">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}
