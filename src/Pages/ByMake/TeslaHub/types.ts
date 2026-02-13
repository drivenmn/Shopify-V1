import { LucideIcon } from 'lucide-react';

export interface TeslaPageProps {
  onNavigate: (page: string) => void;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  page: string;
  gradient: string;
  accentColor: 'primary' | 'warning' | 'gray';
}

export interface ReasonItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  action: string | null;
  page?: string;
}
