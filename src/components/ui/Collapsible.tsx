import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ 
  title, 
  children,
  defaultOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-neutral-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-gray-50"
      >
        <span className="text-lg font-medium text-neutral-gray-900">{title}</span>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-neutral-gray-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-neutral-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="border-t border-neutral-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};