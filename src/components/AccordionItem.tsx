import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AccordionItemProps {
  value: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionItem = ({ value, title, icon: Icon, children, openItems, toggleItem }: AccordionItemProps) => {
  const isOpen = openItems.includes(value);
  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm  bg-white">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => toggleItem(value)}
      >
        <div className="flex items-center space-x-3">
          <Icon className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-gray-800">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-10 border-t  border-gray-100 bg-gray-50">
          <div className="pt-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
