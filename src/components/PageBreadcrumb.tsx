import { Home, ChevronRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from './ui/breadcrumb';

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  segments: BreadcrumbSegment[];
  onNavigate: (page: string) => void;
  theme?: 'light' | 'dark'; // Optional theme prop
}

export function PageBreadcrumb({ segments, onNavigate, theme = 'light' }: PageBreadcrumbProps) {
  const isDark = theme === 'dark';
  
  return (
    <div className={isDark ? 'bg-black/50 border-b border-white/10 backdrop-blur-sm' : 'bg-white border-b border-gray-200'}>
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList className="flex-wrap">
            {/* Home Link */}
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => onNavigate('home')}
                className={`flex items-center gap-1.5 cursor-pointer transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-[#00CFBE]' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {segments.map((segment, index) => {
              const isLast = index === segments.length - 1;

              return (
                <div key={index} className="flex items-center gap-1.5">
                  <BreadcrumbSeparator>
                    <ChevronRight className={`w-4 h-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                  </BreadcrumbSeparator>

                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className={isDark ? 'text-white font-medium' : 'text-gray-900 font-medium'}>
                        {segment.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        onClick={() => segment.href && onNavigate(segment.href)}
                        className={`cursor-pointer transition-colors ${
                          isDark 
                            ? 'text-gray-300 hover:text-[#00CFBE]' 
                            : 'text-gray-600 hover:text-primary'
                        }`}
                      >
                        {segment.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}