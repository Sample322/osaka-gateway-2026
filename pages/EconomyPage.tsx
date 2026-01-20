import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, TrendingUp, PieChart, Activity, Users, Ticket, Home, Building, Hammer, Armchair, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import eventModel from '../assets/images/eventModel.jpg'
import akiyaProject from '../assets/images/akiyaProject.jpg'
import premiumRent from '../assets/images/premiumRent.jpeg'
const AccordionItem: React.FC<{ title: string; cost?: string; children: React.ReactNode }> = ({ title, cost, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center space-x-3">
            <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </span>
            <span className="font-medium text-gray-700 text-left">{title}</span>
        </div>
        {cost && <span className="font-mono font-bold text-invest-navy text-sm whitespace-nowrap ml-2">{cost}</span>}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pl-12 bg-gray-50/50">
          {children}
        </div>
      )}
    </div>
  );
};

const CalculatorInput: React.FC<{ 
    label: string; 
    value: number; 
    onChange: (val: number) => void; 
    icon?: React.ReactNode;
    colorClass: string;
}> = ({ label, value, onChange, icon, colorClass }) => (
    <div className="mb-3">
        <label className={`block text-xs font-bold ${colorClass} uppercase mb-1 flex items-center`}>
            {icon && <span className="mr-1">{icon}</span>} {label}
        </label>
        <div className="relative">
            <input 
                type="number" 
                // Превращаем в строку, чтобы не было проблем с отображением 0
                value={value === 0 ? '' : value}
                onChange={(e) => {
                    const val = e.target.value;
                    // Если строка пустая, ставим 0, иначе парсим число
                    onChange(val === '' ? 0 : parseFloat(val));
                }}
                className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded text-sm font-mono focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-shadow bg-white/90"
                style={{ borderColor: 'inherit' }}
            />
            <span className="absolute right-3 top-2 text-gray-500 text-xs">₽</span>
        </div>
    </div>
);

export const EconomyPage: React.FC = () => {
  // Format helpers
  const fmt = (num: number) => new Intl.NumberFormat('ru-RU').format(Math.round(num));
  
  // --- STATE FOR ALL MODELS ---

  // 1. Akiya Project
  const [akiyaPrice, setAkiyaPrice] = useState(13000000);
  const [akiyaReno, setAkiyaReno] = useState(3900000);
  const [akiyaFurn, setAkiyaFurn] = useState(700000);
  
  const akiyaFixed = 1100000 + 300000; // Taxes + License
  const akiyaInvest = akiyaPrice + akiyaReno + akiyaFurn + akiyaFixed;
  const akiyaMonthlyRev = 1350000; // Fixed for now based on prompt
  const akiyaMonthlyExp = 90000;
  const akiyaNet = akiyaMonthlyRev - akiyaMonthlyExp;
  const akiyaROI = Math.ceil(akiyaInvest / akiyaNet) + 7; // +7 months renovation time

// 2. Premium Rent
  const [premDeposit, setPremDeposit] = useState(1300000);
  const [premReno, setPremReno] = useState(1500000);
  const [premFurn, setPremFurn] = useState(1200000);
  
  // ОБНОВЛЕНО: Ставим дефолтные значения как в вашей старой формуле (250к + 80к)
  const [premiumRentPrice, setPremiumRentPrice] = useState(250000); 
  const [premiumServiceCost, setPremiumServiceCost] = useState(80000); 

  const premFixed = 400000; // License
  const premInvest = premDeposit + premReno + premFurn + premFixed;
  const premMonthlyRev = 1300000;
  
  // ИСПРАВЛЕНО: Теперь считаем динамически
  const premMonthlyExp = premiumRentPrice + premiumServiceCost; 
  
  const premNet = premMonthlyRev - premMonthlyExp;
  const premROI = Math.ceil(premInvest / premNet);

// 3. Budget Cluster
  const [budgDeposit, setBudgDeposit] = useState(800000);
  const [budgReno, setBudgReno] = useState(1200000);
  const [budgFurn, setBudgFurn] = useState(800000);
  
  // ОБНОВЛЕНО: Ставим дефолтные значения как в вашей старой формуле (130к + 50к)
  const [budgetRentPrice, setBudgetRentPrice] = useState(130000);
  const [budgetServiceCost, setBudgetServiceCost] = useState(50000);

  const budgFixed = 200000; // Marketing
  const budgInvest = budgDeposit + budgReno + budgFurn + budgFixed;
  const budgMonthlyRev = 1150000;
  
  // ИСПРАВЛЕНО: Теперь считаем динамически
  const budgMonthlyExp = budgetRentPrice + budgetServiceCost;
  
  const budgNet = budgMonthlyRev - budgMonthlyExp;
  const budgROI = Math.ceil(budgInvest / budgNet);

  // 4. Event Model
  const [ticketPrice, setTicketPrice] = useState(350000);
  const [guestCount, setGuestCount] = useState(8);

  const FIXED_COST_BASE = 680000; 
  const ORGANIZERS_COST = 244000;
  const VAR_COST_PER_GUEST = 122000;

  const eventRevenue = ticketPrice * guestCount;
  const eventExpenses = FIXED_COST_BASE + ORGANIZERS_COST + (guestCount * VAR_COST_PER_GUEST);
  const eventProfit = eventRevenue - eventExpenses;

  // --- CHART DATA ---
  const chartData = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => {
      const month = i;
      
      // Akiya: Negative until month 7 (Reno), then grows
      let akiya = -akiyaInvest;
      if (month > 7) {
        akiya += (month - 7) * akiyaNet;
      }

      // Premium: Immediate growth
      let premium = -premInvest + (month * premNet);

      // Budget: Immediate growth
      let budget = -budgInvest + (month * budgNet);

      // Event: Assuming 1 tour/month start from month 1
      let event = month * eventProfit;

      return {
        name: month === 0 ? 'Start' : `M${month}`,
        Akiya: akiya / 1000000,
        Premium: premium / 1000000,
        Budget: budget / 1000000,
        Event: event / 1000000,
      };
    });
  }, [akiyaInvest, akiyaNet, premInvest, premNet, budgInvest, budgNet, eventProfit]);

  return (
    <div className="min-h-screen bg-invest-slate font-sans pb-20">
      
      {/* Header */}
      <header className="bg-invest-navy text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold font-serif tracking-wide">Подробная Экономика <span className="text-invest-gold">2026</span></h1>
          </div>
          <div className="text-xs md:text-sm text-gray-400 font-mono">
            LIVE CALC MODE
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Chart Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-invest-navy flex items-center">
              <Activity className="w-5 h-5 mr-2 text-invest-gold" />
              Динамика накопленной прибыли (24 месяца)
            </h2>
            <div className="text-sm text-gray-500">млн ₽</div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" tick={{fontSize: 12}} stroke="#94a3b8" />
                <YAxis tick={{fontSize: 12}} stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', borderRadius: '4px' }}
                  itemStyle={{ fontSize: '12px' }}
                  formatter={(value: number) => [`${value.toFixed(2)} млн ₽`, 'Profit']}
                />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="Akiya" stroke="#1a2b4b" strokeWidth={3} dot={false} activeDot={{ r: 6 }} name="Akiya (Покупка)" />
                <Line type="monotone" dataKey="Premium" stroke="#2563eb" strokeWidth={3} dot={false} name="Premium Rent" />
                <Line type="monotone" dataKey="Budget" stroke="#059669" strokeWidth={3} dot={false} name="Budget Cluster" />
                <Line type="monotone" dataKey="Event" stroke="#9333ea" strokeWidth={3} strokeDasharray="5 5" dot={false} name="Events (Tours)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Akiya Project */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="relative h-48">
                <img 
                    src={akiyaProject} 
                    alt="Traditional Kyoto House" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-invest-navy/80 flex items-center justify-center p-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Akiya Project</h3>
                        <p className="text-white/80 text-sm">Покупка готовых жилых домов для сдачи в аренду или перепродажи. Инвестиции в ликвидную недвижимость.</p>
                    </div>
                </div>
                <div className="absolute top-4 right-4 bg-invest-gold text-invest-navy text-xs font-bold px-2 py-1 rounded">
                    ROI ~{akiyaROI} мес
                </div>
            </div>

            <div className="bg-invest-navy/5 p-6 border-b border-gray-200">
                <h4 className="text-xs font-bold text-invest-navy uppercase mb-4 flex items-center">
                    <DollarSign className="w-3 h-3 mr-1" /> Калькулятор инвестиций
                </h4>
                <div className="grid grid-cols-2 gap-4">
                     <CalculatorInput 
                        label="Стоимость Дома" 
                        value={akiyaPrice} 
                        onChange={setAkiyaPrice} 
                        colorClass="text-invest-navy"
                        icon={<Home className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Ремонт" 
                        value={akiyaReno} 
                        onChange={setAkiyaReno} 
                        colorClass="text-invest-navy"
                        icon={<Hammer className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Мебель" 
                        value={akiyaFurn} 
                        onChange={setAkiyaFurn} 
                        colorClass="text-invest-navy"
                        icon={<Armchair className="w-3 h-3"/>}
                    />
                    <div className="flex flex-col justify-end mb-3">
                         <div className="text-xs text-gray-500 mb-1">Total Capex</div>
                         <div className="text-lg font-bold text-red-600 font-mono">-{fmt(akiyaInvest)} ₽</div>
                    </div>
                </div>
            </div>

            <div className="divide-y divide-gray-100">
              <AccordionItem title="Детализация расходов" cost={`${fmt(akiyaFixed)} ₽ (Fix)`}>
                <ul className="text-sm text-gray-500 list-disc ml-4 space-y-1">
                  <li>Налоги и оформление (1.1 млн)</li>
                  <li>Лицензирование и Пожарная безопасность (300к)</li>
                  <li>Риелторская комиссия включена в налоги</li>
                </ul>
              </AccordionItem>
              <div className="p-4 bg-gray-50">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Операционные показатели</h4>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Доход (Туры + Аренда)</span>
                  <span className="font-mono text-green-600">+{fmt(akiyaMonthlyRev)} ₽</span>
                </div>
                 <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Расходы (Налоги, ЖКХ)</span>
                  <span className="font-mono text-red-500">-{fmt(akiyaMonthlyExp)} ₽</span>
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                    <span className="font-bold text-invest-navy">Чистая прибыль/мес</span>
                    <span className="font-mono font-bold text-invest-navy">+{fmt(akiyaNet)} ₽</span>
                </div>
              </div>
            </div>
          </div>

{/* 2. Premium Rent */}
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col relative"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url({premiumRent})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
          >
            <div className="relative h-48">
                <img 
                    src={premiumRent} 
                    alt="Modern Osaka Interior" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center p-6">
                     <div className="text-center">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Premium Rent</h3>
                        <p className="text-white/80 text-sm">Аренда домов под субаренду в туристических узлах (Namba). Высокий чек за счет премиальной локации.</p>
                    </div>
                </div>
                 <div className="absolute top-4 right-4 bg-white text-blue-900 text-xs font-bold px-2 py-1 rounded">
                    ROI ~{premROI} мес
                </div>
            </div>

             <div className="bg-blue-50/80 p-6 border-b border-gray-200 backdrop-blur-sm">
                <h4 className="text-xs font-bold text-blue-800 uppercase mb-4 flex items-center">
                    <DollarSign className="w-3 h-3 mr-1" /> Калькулятор запуска
                </h4>
                <div className="grid grid-cols-2 gap-4">
                     <CalculatorInput 
                        label="Депозит/Ключевые" 
                        value={premDeposit} 
                        onChange={setPremDeposit} 
                        colorClass="text-blue-800"
                        icon={<Building className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Ремонт" 
                        value={premReno} 
                        onChange={setPremReno} 
                        colorClass="text-blue-800"
                        icon={<Hammer className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Мебель/Техника" 
                        value={premFurn} 
                        onChange={setPremFurn} 
                        colorClass="text-blue-800"
                        icon={<Armchair className="w-3 h-3"/>}
                    />
                     {/* НОВЫЕ ПОЛЯ */}
                     <CalculatorInput 
                        label="Аренда (Расходы)" 
                        value={premiumRentPrice} 
                        onChange={setPremiumRentPrice} 
                        colorClass="text-blue-800"
                        icon={<Home className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Сервис/Клининг" 
                        value={premiumServiceCost} 
                        onChange={setPremiumServiceCost} 
                        colorClass="text-blue-800"
                        icon={<Activity className="w-3 h-3"/>}
                    />

                     <div className="flex flex-col justify-end mb-3">
                         <div className="text-xs text-gray-500 mb-1">Total Capex</div>
                         <div className="text-lg font-bold text-red-600 font-mono">-{fmt(premInvest)} ₽</div>
                    </div>
                </div>
            </div>

            <div className="divide-y divide-gray-100 bg-white/80 backdrop-blur-sm">
              <AccordionItem title="Детализация расходов" cost={`${fmt(premFixed)} ₽ (License)`}>
                 <p className="text-sm text-gray-500">Административные сборы, оформление Minpaku лицензии, юрлицо.</p>
              </AccordionItem>
               <div className="p-4 bg-gray-50/90">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Операционные показатели</h4>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Выручка (Namba)</span>
                  <span className="font-mono text-green-600">+{fmt(premMonthlyRev)} ₽</span>
                </div>
                 <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Аренда + Сервис</span>
                  <span className="font-mono text-red-500">-{fmt(premMonthlyExp)} ₽</span>
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                    <span className="font-bold text-blue-900">Чистая прибыль/мес</span>
                    <span className="font-mono font-bold text-blue-900">+{fmt(premNet)} ₽</span>
                </div>
              </div>
            </div>
          </div>
          {/* 3. Budget Cluster */}
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col relative"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=2070&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
          >
            <div className="relative h-48">
                <img 
                    src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=2070&q=80" 
                    alt="Simple Japanese Room" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-emerald-900/80 flex items-center justify-center p-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Budget Cluster</h3>
                        <p className="text-white/80 text-sm">Масштабирование в недорогом районе с лояльной лицензией. Стабильный поток за счет доступности.</p>
                    </div>
                </div>
                 <div className="absolute top-4 right-4 bg-white text-emerald-900 text-xs font-bold px-2 py-1 rounded">
                    ROI ~{budgROI} мес
                </div>
            </div>

             <div className="bg-emerald-50/80 p-6 border-b border-gray-200 backdrop-blur-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase mb-4 flex items-center">
                    <DollarSign className="w-3 h-3 mr-1" /> Калькулятор запуска
                </h4>
                <div className="grid grid-cols-2 gap-4">
                     <CalculatorInput 
                        label="Депозиты" 
                        value={budgDeposit} 
                        onChange={setBudgDeposit} 
                        colorClass="text-emerald-800"
                        icon={<Building className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Быстрый Ремонт" 
                        value={budgReno} 
                        onChange={setBudgReno} 
                        colorClass="text-emerald-800"
                        icon={<Hammer className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Мебель (IKEA)" 
                        value={budgFurn} 
                        onChange={setBudgFurn} 
                        colorClass="text-emerald-800"
                        icon={<Armchair className="w-3 h-3"/>}
                    />
                    {/* НОВЫЕ ПОЛЯ */}
                    <CalculatorInput 
                        label="Аренда (Расходы)" 
                        value={budgetRentPrice} 
                        onChange={setBudgetRentPrice} 
                        colorClass="text-emerald-800"
                        icon={<Home className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Сервис/Клининг" 
                        value={budgetServiceCost} 
                        onChange={setBudgetServiceCost} 
                        colorClass="text-emerald-800"
                        icon={<Activity className="w-3 h-3"/>}
                    />

                     <div className="flex flex-col justify-end mb-3">
                         <div className="text-xs text-gray-500 mb-1">Total Capex</div>
                         <div className="text-lg font-bold text-red-600 font-mono">-{fmt(budgInvest)} ₽</div>
                    </div>
                </div>
            </div>

            <div className="divide-y divide-gray-100 bg-white/80 backdrop-blur-sm">
               <AccordionItem title="Детализация расходов" cost={`${fmt(budgFixed)} ₽ (Mkt)`}>
                 <p className="text-sm text-gray-500">Маркетинг старта, Hostelworld, Agoda листинги.</p>
              </AccordionItem>
              <div className="p-4 bg-gray-50/90">
                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Операционные показатели</h4>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Выручка (Nishinari)</span>
                  <span className="font-mono text-green-600">+{fmt(budgMonthlyRev)} ₽</span>
                </div>
                 <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Аренда + Сервис</span>
                  <span className="font-mono text-red-500">-{fmt(budgMonthlyExp)} ₽</span>
                </div>
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between">
                    <span className="font-bold text-emerald-900">Чистая прибыль/мес</span>
                    <span className="font-mono font-bold text-emerald-900">+{fmt(budgNet)} ₽</span>
                </div>
              </div>
            </div>
          </div>
          {/* 4. Event Model (Interactive) */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="relative h-48">
                <img 
                    src={eventModel} 
                    alt="Tourists in Japan" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-purple-900/80 flex items-center justify-center p-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Event Model</h3>
                        <p className="text-white/80 text-sm">Работа под конкретную группу без постоянного владения. Организация тематических выездов.</p>
                    </div>
                </div>
                 <div className="absolute top-4 right-4 bg-white text-purple-900 text-xs font-bold px-2 py-1 rounded">
                    Без рисков
                </div>
            </div>
             
            {/* Interactive Calculator Section */}
            <div className="bg-purple-50 p-6 border-b border-gray-200">
                <h4 className="text-xs font-bold text-purple-800 uppercase mb-4 flex items-center">
                    <Users className="w-3 h-3 mr-1" /> Калькулятор Тура
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <CalculatorInput 
                        label="Цена тура" 
                        value={ticketPrice} 
                        onChange={setTicketPrice} 
                        colorClass="text-purple-900"
                        icon={<Ticket className="w-3 h-3"/>}
                    />
                    <CalculatorInput 
                        label="Участники" 
                        value={guestCount} 
                        onChange={setGuestCount} 
                        colorClass="text-purple-900"
                        icon={<Users className="w-3 h-3"/>}
                    />
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-100 shadow-sm space-y-2">
                     <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Выручка</span>
                        <span className="font-mono font-bold text-gray-900">{fmt(eventRevenue)} ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Расходы (Fix+Var)</span>
                        <span className="font-mono text-red-500">-{fmt(eventExpenses)} ₽</span>
                    </div>
                    <div className="border-t border-dashed border-gray-200 pt-2 flex justify-between items-end">
                        <span className="text-sm font-bold text-purple-900">Чистая Прибыль</span>
                        <span className="font-mono text-xl font-bold text-green-600">+{fmt(eventProfit)} ₽</span>
                    </div>
                     <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>Выручка с одного гостя:</span>
                        <span className="font-mono">{fmt(ticketPrice)} ₽</span>
                    </div>
                </div>
            </div>

            <div className="divide-y divide-gray-100">
              <AccordionItem title="Структура расходов" cost={`~${fmt(eventExpenses)} ₽`}>
                 <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex justify-between">
                        <span>Аренда дома, Трансфер, Маркетинг:</span>
                        <span className="font-mono">{fmt(FIXED_COST_BASE)} ₽</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Команда (2 чел):</span>
                        <span className="font-mono">{fmt(ORGANIZERS_COST)} ₽</span>
                    </p>
                    <p className="flex justify-between font-medium text-purple-700">
                        <span>Переменные ({guestCount} чел × 122к):</span>
                        <span className="font-mono">{fmt(guestCount * VAR_COST_PER_GUEST)} ₽</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        *Включает авиабилеты (85к), питание/билеты (27к), визы (10к) на человека.
                    </p>
                 </div>
              </AccordionItem>
            </div>
          </div>

        </div>

        <div className="mt-12 mb-12 text-center">
            <Link to="/" className="inline-flex items-center text-invest-navy hover:text-invest-gold font-bold transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад к выбору стратегии
            </Link>
        </div>

      </main>
    </div>
  );
};