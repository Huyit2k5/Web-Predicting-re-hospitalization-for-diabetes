import React from 'react';
import { Search, Filter, Download, ChevronRight, ChevronLeft } from 'lucide-react';
import { Patient } from '../types';
import { cn } from '../lib/utils';

const patients: Patient[] = [
  { id: 'PT-83921', gender: 'Female', age: '65-75', timeInHospital: '4 days', diagnosis: 'Circulatory', insulin: 'Up', readmitted: true },
  { id: 'PT-44219', gender: 'Male', age: '50-60', timeInHospital: '2 days', diagnosis: 'Respiratory', insulin: 'Steady', readmitted: false },
  { id: 'PT-11094', gender: 'Female', age: '80-90', timeInHospital: '7 days', diagnosis: 'Digestive', insulin: 'Down', readmitted: true },
  { id: 'PT-55632', gender: 'Male', age: '40-50', timeInHospital: '1 day', diagnosis: 'Injury', insulin: 'No', readmitted: false },
  { id: 'PT-99821', gender: 'Female', age: '70-80', timeInHospital: '3 days', diagnosis: 'Circulatory', insulin: 'Steady', readmitted: false },
];

export const PatientRecords: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-background">Patient Records</h2>
          <p className="text-sm text-on-surface-variant mt-1">Review comprehensive patient histories and readmission data.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
            <input
              type="text"
              placeholder="Search by Patient ID..."
              className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-sm font-semibold shadow-sm">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-on-primary/90 transition-colors text-sm font-semibold shadow-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </header>

      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden min-h-[500px] flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-surface-container-lowest z-10 border-b border-outline-variant">
              <tr>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Patient ID</th>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Gender</th>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Age</th>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Time in Hospital</th>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Primary Diagnosis</th>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Insulin</th>
                <th className="py-4 px-6 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Readmitted</th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-xs font-medium text-on-surface divide-y divide-outline-variant/30">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <td className="py-4 px-6 font-bold text-primary">{patient.id}</td>
                  <td className="py-4 px-6 text-on-surface-variant">{patient.gender}</td>
                  <td className="py-4 px-6">{patient.age}</td>
                  <td className="py-4 px-6">{patient.timeInHospital}</td>
                  <td className="py-4 px-6 text-on-surface-variant">{patient.diagnosis}</td>
                  <td className="py-4 px-6">{patient.insulin}</td>
                  <td className="py-4 px-6">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border",
                      patient.readmitted 
                        ? "bg-error-container text-on-error-container border-error/20"
                        : "bg-secondary-container text-on-secondary-container border-secondary/20"
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full mr-1.5", patient.readmitted ? "bg-error" : "bg-primary")}></span>
                      {patient.readmitted ? 'Yes' : 'No'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="border-t border-outline-variant bg-surface-container-lowest px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-on-surface-variant">Showing 1-5 of 1,248 patients</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-md bg-primary text-on-primary text-xs font-bold flex items-center justify-center shadow-sm">1</button>
            <button className="w-8 h-8 rounded-md hover:bg-surface-container-low text-on-surface text-xs font-bold flex items-center justify-center">2</button>
            <button className="w-8 h-8 rounded-md hover:bg-surface-container-low text-on-surface text-xs font-bold flex items-center justify-center">3</button>
            <span className="text-on-surface-variant text-xs font-bold">...</span>
            <button className="p-2 rounded-md border border-outline-variant text-on-surface-variant hover:bg-surface-container-low">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
