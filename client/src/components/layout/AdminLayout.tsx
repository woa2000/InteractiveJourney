import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

interface AdminLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  breadcrumbItems: string[];
}

export default function AdminLayout({ children, pageTitle, breadcrumbItems }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="admin-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
      <main className="main-content">
        <Header title={pageTitle} />
        <Breadcrumb items={breadcrumbItems} />
        <div className="content-container">
          {children}
        </div>
      </main>
    </div>
  );
}
