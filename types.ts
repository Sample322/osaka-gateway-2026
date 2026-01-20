import React from 'react';

export interface StrategyData {
  title: string;
  description: string;
  breakEven: string;
  monthlyProfit?: string;
  timeline?: string;
  profitPerTour?: string;
  investment: string;
  type: 'Akiya' | 'Rent' | 'Cluster' | 'Event';
  steps?: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LifestyleItem {
  title: string;
  description: string;
  imageAlt: string;
}