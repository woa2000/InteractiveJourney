import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="header-container">
      <h1 className="header-title">{title}</h1>
      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        <div className="user-info">
          <div className="user-avatar">GF</div>
          <span className="user-name">Gestor de Field</span>
        </div>
      </div>
    </header>
  );
}
