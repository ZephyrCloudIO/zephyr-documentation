import { useState, useRef, useEffect } from 'react';
import { usePageData } from '@rspress/runtime';
import { cn } from '../../lib/cn';

interface SectionOption {
  id: string;
  label: string;
  icon: string;
  path: string;
  description: string;
}

const sections: SectionOption[] = [
  {
    id: 'home',
    label: 'Homepage',
    icon: '🏠',
    path: '/',
    description: 'Overview and getting started'
  },
  {
    id: 'web',
    label: 'Web',
    icon: '🌐',
    path: '/build',
    description: 'Build applications and developer tools'
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: '📱',
    path: '/mobile',
    description: 'React Native development'
  },
  {
    id: 'cloud',
    label: 'Cloud',
    icon: '☁️',
    path: '/deploy',
    description: 'Deploy to cloud providers'
  },
  {
    id: 'learn',
    label: 'Learn',
    icon: '🎓',
    path: '/recipes',
    description: 'Framework recipes and resources'
  },
  {
    id: 'reference',
    label: 'Reference',
    icon: '📚',
    path: '/reference',
    description: 'Documentation and troubleshooting'
  }
];

export const SectionSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<SectionOption>(sections[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pageData = usePageData();

  // Update current section based on current path
  useEffect(() => {
    const path = pageData.page.routePath;
    const section = sections.find(s => {
      if (s.path === '/') return path === '/';
      return path.startsWith(s.path);
    }) || sections[0];
    setCurrentSection(section);
  }, [pageData.page.routePath]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSectionChange = (section: SectionOption) => {
    setCurrentSection(section);
    setIsOpen(false);
    // Use window.location for navigation in RSPress
    window.location.href = section.path;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
          "text-[var(--rp-c-text-1)] hover:bg-[var(--rp-c-bg-soft)]",
          "border border-[var(--rp-c-divider-light)]",
          isOpen && "bg-[var(--rp-c-bg-soft)]"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-base">{currentSection.icon}</span>
        <span className="font-semibold">{currentSection.label}</span>
        <svg
          className={cn(
            "w-4 h-4 transition-transform",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={cn(
          "absolute top-full left-0 mt-1 w-80 z-50",
          "bg-[var(--rp-c-bg)] border border-[var(--rp-c-divider-light)]",
          "rounded-md shadow-lg"
        )}>
          <div className="py-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section)}
                className={cn(
                  "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors",
                  "hover:bg-[var(--rp-c-bg-soft)]",
                  currentSection.id === section.id && "bg-[var(--rp-c-bg-soft)]"
                )}
              >
                <span className="text-lg mt-0.5">{section.icon}</span>
                <div>
                  <div className={cn(
                    "font-semibold text-sm text-[var(--rp-c-text-1)]",
                    currentSection.id === section.id && "text-[var(--rp-c-brand)]"
                  )}>
                    {section.label}
                  </div>
                  <div className="text-xs text-[var(--rp-c-text-2)] mt-0.5">
                    {section.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};