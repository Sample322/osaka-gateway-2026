import React from 'react';
import { Link } from 'react-router-dom';
import { StrategyCard } from '../components/StrategyCard';
import { StrategyData } from '../types';
import { ArrowRight } from 'lucide-react';

const strategies: StrategyData[] = [
  {
    type: 'Akiya',
    title: 'Покупка дома (Akiya)',
    description: 'Покупка готовых жилых домов для сдачи в аренду или перепродажи. Инвестиции в ликвидную недвижимость.',
    breakEven: '14–16 месяцев',
    monthlyProfit: '~1,35 млн ₽',
    timeline: '7 месяцев',
    investment: '~19 млн ₽',
    steps: [
      "Поиск и аудит объекта (Legal check)",
      "Покупка и регистрация прав",
      "Реновация и сейсмоусиление",
      "Получение лицензии Minpaku",
      "Запуск на Booking/Airbnb"
    ]
  },
  {
    type: 'Rent',
    title: 'Аренда (Premium)',
    description: 'Аренда домов под субаренду в туристических узлах (Namba). Высокий чек за счет премиальной локации.',
    breakEven: '5 месяцев',
    monthlyProfit: '~1,3 млн ₽',
    investment: '~4.4 млн ₽',
    steps: [
      "Подбор локации (Namba/Umeda)",
      "Договор субаренды с собственником",
      "Дизайнерский ремонт и меблировка",
      "Оформление лицензии",
      "Профессиональный листинг"
    ]
  },
  {
    type: 'Cluster',
    title: 'Аренда (Budget)',
    description: 'Масштабирование в недорогом районе с лояльной лицензией. Стабильный поток за счет доступности.',
    breakEven: '3 месяца',
    monthlyProfit: '~1,15 млн ₽',
    investment: '~3 млн ₽',
    steps: [
      "Поиск объектов в Nishinari",
      "Быстрый косметический ремонт",
      "Оснащение (IKEA/Nitori)",
      "Регистрация на агрегаторах",
      "Автоматизация заселения"
    ]
  },
  {
    type: 'Event',
    title: 'Организация туров',
    description: 'Работа под конкретную группу без постоянного владения. Организация тематических выездов.',
    breakEven: 'С первого заезда',
    profitPerTour: '~750,500 ₽ (за тур)',
    investment: 'Минимальные (маркетинг)',
    steps: [
      "Разработка уникального маршрута",
      "Бронирование жилья и трансфера",
      "Маркетинг (Таргет/Блогеры)",
      "Визовая поддержка группы",
      "Сопровождение 24/7"
    ]
  }
];

export const InvestorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-invest-navy h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Osaka Business District Skyline" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-invest-navy via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Варианты организации бизнеса <br/><span className="text-invest-gold">2026</span>
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Проверенные стратегии на рынке недвижимости Осаки.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Целевой регион</p>
            <p className="text-3xl font-bold text-invest-navy mt-2">Osaka & Kansai</p>
          </div>
          <div className="md:border-l md:border-r border-gray-200">
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Средняя окупаемость</p>
            <p className="text-3xl font-bold text-invest-navy mt-2">8-12 Месяцев</p>
          </div>
          <div>
            <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Дата запуска</p>
            <p className="text-3xl font-bold text-invest-navy mt-2">Январь 2026</p>
          </div>
        </div>
      </div>

      {/* Strategy Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Бизнес Модели</h2>
          <Link to="/economy" className="hidden md:flex items-center text-invest-gold font-medium hover:text-invest-navy transition-colors">
            Подробная экономика <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <StrategyCard key={index} data={strategy} />
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
           <Link to="/economy" className="inline-flex items-center text-invest-gold font-bold">
            Подробная экономика <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Info Block (No Contact Form) */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-invest-navy mb-6">
              Партнерство с Osaka Gateway
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Мы предлагаем полное сопровождение сделки: от юридической проверки объектов до управления потоком гостей через Booking и Airbnb.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                 <h4 className="font-bold text-invest-navy mb-2">Лицензирование</h4>
                 <p className="text-sm text-gray-600">Оформление объектов под Minpaku (частная аренда) в соответствии с законодательством.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                 <h4 className="font-bold text-invest-navy mb-2">Дизайн-код</h4>
                 <p className="text-sm text-gray-600">Адаптация интерьеров под стиль "Modern Japan" для привлечения туристов.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                 <h4 className="font-bold text-invest-navy mb-2">Прозрачность</h4>
                 <p className="text-sm text-gray-600">Ежемесячная отчетность и легальный вывод средств на счета инвесторов.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};