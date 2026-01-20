import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface Props {
  type: 'investor' | 'tourist';
}

export const ContactForm: React.FC<Props> = ({ type }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const isTourist = type === 'tourist';

  // Investor: Corporate style
  // Tourist: Zen style (clean, serif, matcha accents)
  const inputClass = isTourist 
    ? "w-full bg-zen-paper/30 border-b border-gray-300 px-4 py-3 text-zen-ink placeholder-gray-400 focus:outline-none focus:border-zen-matcha focus:bg-white transition-all font-serif"
    : "w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-invest-gold focus:ring-1 focus:ring-invest-gold transition-all";

  const labelClass = isTourist 
    ? "block text-sm font-serif text-zen-matcha mb-1 tracking-widest uppercase" 
    : "block text-sm font-medium text-gray-700 mb-1";

  const btnClass = isTourist
    ? "w-full flex justify-center items-center gap-2 bg-zen-matcha text-white hover:bg-zen-ink font-serif py-4 px-6 transition-all duration-300 uppercase tracking-widest shadow-md hover:shadow-lg"
    : "w-full flex justify-center items-center gap-2 bg-invest-navy hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-lg";

  if (status === 'success') {
    return (
      <div className={`text-center py-12 ${isTourist ? 'bg-zen-paper/50' : 'bg-white shadow-lg'} rounded-xl`}>
        <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${isTourist ? 'text-zen-matcha' : 'text-green-500'}`} />
        <h3 className={`text-2xl font-bold mb-2 ${isTourist ? 'text-zen-ink font-serif' : 'text-gray-900'}`}>
          Заявка принята
        </h3>
        <p className={isTourist ? 'text-gray-600 font-serif' : 'text-gray-600'}>
          {type === 'investor' 
            ? "Наш менеджер свяжется с вами в ближайшее время." 
            : "Спасибо! Мы скоро пришлем вам детали путешествия."}
        </p>
        <button 
          onClick={() => setStatus('idle')} 
          className={`mt-6 underline ${isTourist ? 'text-zen-wood' : 'text-invest-navy'}`}
        >
          Отправить еще одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${isTourist ? '' : ''}`}>
      <div>
        <label className={labelClass}>Имя</label>
        <input type="text" required className={inputClass} placeholder="Иван Иванов" />
      </div>
      <div>
        <label className={labelClass}>Email</label>
        <input type="email" required className={inputClass} placeholder="ivan@example.com" />
      </div>
      <div>
        <label className={labelClass}>
            {type === 'investor' ? 'Интерес' : 'Размер группы'}
        </label>
        <select className={inputClass}>
          {type === 'investor' ? (
            <>
              <option>Покупка дома</option>
              <option>Аренда (Премиум)</option>
              <option>Аренда (Стандарт)</option>
              <option>Организация туров</option>
            </>
          ) : (
            <>
              <option>1-2 Человека</option>
              <option>3-5 Человек</option>
              <option>6+ Человек</option>
            </>
          )}
        </select>
      </div>
      <div>
        <label className={labelClass}>Сообщение</label>
        <textarea required rows={4} className={inputClass} placeholder="Расскажите о ваших планах..."></textarea>
      </div>
      
      <button type="submit" disabled={status === 'submitting'} className={btnClass}>
        {status === 'submitting' ? 'Отправка...' : (
          <>
            {type === 'investor' ? 'Получить презентацию' : 'Отправить заявку'}
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
};