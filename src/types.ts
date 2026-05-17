export type View = 'dashboard' | 'predictor' | 'records';

export interface Patient {
  id: string;
  gender: 'Male' | 'Female' | 'Other';
  age: string;
  timeInHospital: string;
  diagnosis: string;
  insulin: 'No' | 'Steady' | 'Up' | 'Down';
  readmitted: boolean;
}

export interface PredictionResult {
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  recommendations: string[];
  featureImportance: Record<string, number>;
}
