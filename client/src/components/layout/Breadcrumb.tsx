interface BreadcrumbProps {
  items: string[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb-container">
      <a href="#" className="breadcrumb-item">Home</a>
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-item">{item}</span>
      ))}
    </nav>
  );
}
