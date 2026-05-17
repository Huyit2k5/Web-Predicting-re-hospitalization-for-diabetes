import React from 'react';
import { LayoutDashboard, Activity, FileText, HelpCircle, Settings } from 'lucide-react';
import { View } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'predictor', label: 'Patient Predictor', icon: Activity },
    { id: 'records', label: 'Patient Records', icon: FileText },
  ] as const;

  return (
    <aside className="fixed left-0 top-0 h-screen w-[260px] flex flex-col z-40 bg-surface-container-low border-r border-outline-variant hidden md:flex">
      <div className="p-6 border-b border-outline-variant">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg">
            SA
          </div>
          <div>
            <h1 className="font-semibold text-lg text-primary">Medical Analytics</h1>
            <p className="text-xs text-on-surface-variant font-medium">Diabetes Readmission Unit</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onViewChange(item.id)}
                className={cn(
                  "w-full flex items-center py-3 px-6 transition-all border-l-4 text-sm font-semibold",
                  currentView === item.id
                    ? "text-primary border-primary bg-surface-container-highest"
                    : "text-on-secondary-container border-transparent hover:bg-surface-container"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-outline-variant">
        <ul className="space-y-1">
          <li>
            <button className="w-full flex items-center py-2 px-4 rounded-lg text-on-secondary-container hover:bg-surface-container transition-all text-xs font-semibold">
              <HelpCircle className="w-4 h-4 mr-3" />
              Support
            </button>
          </li>
          <li>
            <button className="w-full flex items-center py-2 px-4 rounded-lg text-on-secondary-container hover:bg-surface-container transition-all text-xs font-semibold">
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </button>
          </li>
        </ul>
        <div className="mt-4 flex items-center px-4 pt-4">
           <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100" 
            alt="User" 
            className="w-8 h-8 rounded-full border border-outline-variant object-cover mr-3"
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-on-surface">System Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
