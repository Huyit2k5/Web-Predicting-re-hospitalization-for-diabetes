import React from 'react';
import { Search, Bell, Settings, Menu } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center w-full px-4 md:px-8 py-4 bg-surface-container-lowest border-b border-outline-variant">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-on-surface">
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-xl font-bold text-primary md:hidden">ReadmitPath AI</div>
        <div className="hidden md:flex relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input
            type="text"
            placeholder="Search patient ID..."
            className="w-full pl-9 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
        </button>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors hidden md:block">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer">
          <img
            alt="Profile"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100"
          />
        </div>
      </div>
    </header>
  );
};
