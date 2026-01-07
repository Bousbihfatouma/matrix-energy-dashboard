// Les différentes sources d'énergie possibles
export type EnergySource = 'solar' | 'wind' | 'hydro' | 'grid';
// Type pour la période (daily, weekly, monthly)
export type TimeRange = 'daily' | 'weekly' | 'monthly';
// Données de production d'énergie
export interface EnergyProduction {
  id: string;
  timestamp: Date;
  source: EnergySource;
  powerKw: number;
  efficiency: number;       // Efficacité en pourcentage (0-100)
  costPerKwh: number;      // Coût par kWh en euros
}