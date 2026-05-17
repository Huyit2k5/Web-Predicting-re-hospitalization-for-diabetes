/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/Dashboard';
import { PatientRecords } from './components/PatientRecords';
import { PatientPredictor } from './components/PatientPredictor';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'records':
        return <PatientRecords />;
      case 'predictor':
        return <PatientPredictor />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 md:ml-[260px] flex flex-col min-w-0">
        <TopBar />
        
        <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto w-full">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
