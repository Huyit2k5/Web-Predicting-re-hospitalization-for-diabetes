import React from 'react';
import { 
  Users, 
  Activity, 
  Clock, 
  AlertTriangle,
  ArrowUpRight,
  MoreVertical
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const ageData = [
  { name: 'Young (<30)', rate: 15.2 },
  { name: 'Middle-aged', rate: 32.8 },
  { name: 'Elderly (>65)', rate: 48.5 },
];

const diagnosisData = [
  { name: 'Circulatory', value: 35, color: '#006591' },
  { name: 'Diabetes', value: 28, color: '#0ea5e9' },
  { name: 'Respiratory', value: 20, color: '#ba1a1a' },
  { name: 'Other', value: 17, color: '#505f76' },
];

const medicationData = [
  { name: 'Insulin', no: 40, steady: 20, up: 30, down: 10 },
  { name: 'Metformin', no: 60, steady: 15, up: 20, down: 5 },
  { name: 'Glipizide', no: 50, steady: 25, up: 15, down: 10 },
];

const MetaCard = ({ title, value, icon: Icon, trend, trendLabel, colorClass, bgColorClass }: any) => (
  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant flex flex-col justify-between">
    <div className="flex justify-between items-start mb-4">
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{title}</span>
      <div className={`p-2 rounded-lg ${bgColorClass} ${colorClass}`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div>
      <div className="text-3xl font-bold text-on-surface mb-1">{value}</div>
      {trend && (
        <div className="flex items-center gap-2">
          <span className={`flex items-center text-xs font-bold ${colorClass}`}>
            <ArrowUpRight className="w-3 h-3 mr-1" /> {trend}
          </span>
          <span className="text-xs text-on-surface-variant">{trendLabel}</span>
        </div>
      )}
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-on-surface">Overview Analytics</h2>
        <p className="text-sm text-on-surface-variant">System-wide readmission metrics and risk stratification.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetaCard 
          title="Total Sample" 
          value="64,562" 
          icon={Users} 
          trend="2.4%" 
          trendLabel="vs last month"
          colorClass="text-primary"
          bgColorClass="bg-primary-container/10"
        />
        <MetaCard 
          title="Avg Readmission" 
          value="42.5%" 
          icon={Activity} 
          trend="1.2%" 
          trendLabel="vs benchmark"
          colorClass="text-error"
          bgColorClass="bg-error-container/10"
        />
        <MetaCard 
          title="Time in Hospital" 
          value="4.3 days" 
          icon={Clock}
          colorClass="text-primary"
          bgColorClass="bg-primary-container/10"
        />
        <MetaCard 
          title="High-Risk Alerts" 
          value="1,204" 
          icon={AlertTriangle}
          colorClass="text-error"
          bgColorClass="bg-error-container/10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6 lg:col-span-2 h-96">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-on-surface">Readmission Rate by Age Group</h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} unit="%" />
                <Tooltip 
                  cursor={{ fill: 'rgba(14, 165, 233, 0.1)' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="rate" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6 h-96">
          <h3 className="font-bold text-on-surface mb-6">Primary Diagnosis</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={diagnosisData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {diagnosisData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant p-6">
        <h3 className="font-bold text-on-surface mb-6">Medication Changes (Insulin, Metformin, Glipizide)</h3>
        <div className="space-y-6">
          {medicationData.map((med) => (
            <div key={med.name}>
              <div className="flex justify-between mb-2 text-sm">
                <span className="font-semibold text-on-surface">{med.name}</span>
              </div>
              <div className="w-full h-8 bg-surface-container rounded-lg overflow-hidden flex shadow-inner">
                <div className="h-full bg-outline-variant/40" style={{ width: `${med.no}%` }} title="No Change"></div>
                <div className="h-full bg-secondary-container" style={{ width: `${med.steady}%` }} title="Steady"></div>
                <div className="h-full bg-primary-container" style={{ width: `${med.up}%` }} title="Dose Up"></div>
                <div className="h-full bg-error" style={{ width: `${med.down}%` }} title="Dose Down"></div>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-4 mt-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-outline-variant/40 rounded-sm"></span> No Change</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-secondary-container rounded-sm"></span> Steady</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-primary-container rounded-sm"></span> Dose Up</div>
            <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-error rounded-sm"></span> Dose Down</div>
          </div>
        </div>
      </div>
    </div>
  );
};
