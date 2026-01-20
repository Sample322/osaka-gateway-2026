import React from 'react';
import { StrategyData } from '../types';
import { TrendingUp, Home, Building, Users, CheckCircle2 } from 'lucide-react';

interface Props {
  data: StrategyData;
}

export const StrategyCard: React.FC<Props> = ({ data }) => {
  const getIcon = () => {
    switch (data.type) {
      case 'Akiya': return <Home className="w-6 h-6 text-white" />;
      case 'Rent': return <Building className="w-6 h-6 text-white" />;
      case 'Cluster': return <TrendingUp className="w-6 h-6 text-white" />;
      case 'Event': return <Users className="w-6 h-6 text-white" />;
    }
  };

  const getHeaderColor = () => {
    switch (data.type) {
      case 'Akiya': return 'bg-invest-navy';
      case 'Rent': return 'bg-blue-600';
      case 'Cluster': return 'bg-emerald-600';
      case 'Event': return 'bg-purple-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      <div className={`${getHeaderColor()} p-4 flex items-center justify-between`}>
        <h3 className="text-xl font-bold text-white tracking-wide">{data.title}</h3>
        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
          {getIcon()}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-gray-600 italic mb-6 border-l-4 border-invest-gold pl-3">
            {data.description}
          </p>

          {data.steps && (
            <div className="mb-6 bg-gray-50/80 p-4 rounded-lg border border-gray-100">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Этапы реализации</h4>
              <ul className="space-y-2">
                {data.steps.map((step, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-invest-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm mt-auto">
          <table className="min-w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-500">Точка безубыточности</td>
                <td className="px-4 py-3 font-bold text-gray-900 text-right">{data.breakEven}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-500">Прибыль</td>
                <td className="px-4 py-3 font-bold text-green-700 text-right">
                    {data.monthlyProfit || data.profitPerTour}
                </td>
              </tr>
              {data.timeline && (
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-500">Срок реализации</td>
                  <td className="px-4 py-3 font-bold text-gray-900 text-right">{data.timeline}</td>
                </tr>
              )}
              <tr className="bg-invest-gold/10">
                <td className="px-4 py-3 font-bold text-invest-navy">Инвестиции</td>
                <td className="px-4 py-3 font-bold text-invest-navy text-right text-base">{data.investment}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};