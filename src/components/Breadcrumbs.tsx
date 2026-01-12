import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
      <Link
        to="/"
        className="flex items-center gap-1 text-gray-600 hover:text-[#416D50] transition-colors"
      >
        <Home size={16} />
        <span>Home</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-gray-400" />
          {item.path ? (
            <Link
              to={item.path}
              className="text-gray-600 hover:text-[#416D50] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#416D50] font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
