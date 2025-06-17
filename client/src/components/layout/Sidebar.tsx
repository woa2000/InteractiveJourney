import { Link, useLocation } from 'wouter';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Database, 
  BarChart3, 
  Settings,
  Menu,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard
  },
  {
    label: 'Projetos',
    href: '/projects',
    icon: FolderKanban
  },
  {
    label: 'Cadastros',
    href: '/cadastros',
    icon: Database
  },
  {
    label: 'Relatórios',
    href: '/reports',
    icon: BarChart3
  }
];

const footerItems = [
  {
    label: 'Configurações',
    href: '/settings',
    icon: Settings
  }
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [location] = useLocation();

  return (
    <nav className={cn("sidebar-container", collapsed && "collapsed")}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <TrendingUp size={18} />
        </div>
        <span className="sidebar-title">Rise Field</span>
        <button className="sidebar-toggle" onClick={onToggle}>
          <Menu size={16} />
        </button>
      </div>

      <div className="sidebar-nav">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          
          return (
            <Link key={item.href} href={item.href}>
              <div className={cn("nav-item", isActive && "active")}>
                <Icon size={18} />
                <span className="nav-text">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="sidebar-footer">
        {footerItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          
          return (
            <Link key={item.href} href={item.href}>
              <div className={cn("nav-item", isActive && "active")}>
                <Icon size={18} />
                <span className="nav-text">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
