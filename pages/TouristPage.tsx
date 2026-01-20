import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Car, Home, Map, Smile } from 'lucide-react';
import naradeerImg from '../assets/images/naradeer.jpg'
export const TouristPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-zen-paper text-zen-ink font-sans pt-16">
      
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Visual Prompt: Osaka Castle in spring with cherry blossoms, soft sunlight, high resolution */}
        <img 
          src="https://lh3.googleusercontent.com/rd-gg/AIJ2gl_3oYi_F83FviUr-_wQavMRLeQ0uD-JdJqHXYyfksBY82pCr86bXv84sn_-BENVDRKEoCo5hEBZE2GHECO2rtAoNzUrlQadmDeYKf7N_KInBFTMF97f1CiQZnrNULQU5ZVeh9xTJYqqkWUCyQerU3RK33MrXi6QtavxnX3cvAM7bVtz_3aN8TB0ehZ9K3x_uId9grfCE-NCJYu2Q_bO_OPHT6J17tTfgtl100szQ4Uq0HvtcCGaGarv7X5JQpA8SGwXWIGe3Xvc-b-irAoMxB9zjbBpp118PoSDSQXn6NDj5xdj5f5b1O2yB9Ci9oU0wEgvrPwyivjQH9pdMFdv9KQwBVBD0W7fs_9xhR4M1qTL8f1KT8I6P3Q6yoLk09vgaghgAKB7StJZYbNKA9yTOT97wYe888O3pywn68dwzutvOfQK3UY7d6AzQgE2ly2OcJUsOMRHLKwZd3I9iaPjpRSMCFqVwmisTEUh4PXCijePes-GfrSdM4vllW2T0lFxI8unP68u1z2iCCkDOzsrjO4gPYEy5T5nxXhhs7Q8cWHWzeEYWVWS9jDn3nJewnFkkaLhdBTB-rE1X3RwL_4vPHOdtRrxhRt-rnN_SJ1LNwLSgdlcKMloZFJ-saLXIqeoGrBfrPtGgFM7p8UUUVx2_TAhXsdbCYHxeS1kdSRZtzMnYFbWygDGwOC12cbtnPrDQenSb2uzRjGBhwa4R8ATbA2KMF_3h_ziDGtiDgDzmuT1fcS7flupxJS0cEy78WZgcibMPP6Gplfd7rTbI4EkHV-eTyFemlJxgq--Pmz_Q2xwXOZ0pGnk1xmLxWPdFmmznyCh48NIQ5Va7PCoCFYrzMi7XOX5VvRbtmULxqR4FDUVpU5w9zueSxOMMGE9oNINVUB3z8sClFV-fySwPFg057QCzSOYQT3pDv2frfelU9RbGg9A-hYDSUwfsjS8OCp0L-hbMKPx0rNvm8_byt-1VHW7m4diRkyQCU3b0cSrxMme3s44Nit930DLIVDmt-m8BSMzHfbgerFraIsrsoZCVjG3FdbvLXuQhzVNG_Jmg4485ziLHPWzQW1wUGVhawPuFNrl3bDkCw22uiKVpCC4-CpB0iFrO70lQv9xhbQ6I0FAd8iUMu3b-_r-CROiwzE9z7Svs8MKqVEPC67R5L0DtqRvLIXIE-1gXzl0w1Osj568Q_i0t-R2T-thIpgGrlyidkoYwMRPaP4gTmpd4fQ6IExd3p4EV5XzvyjBWDkFma2B-WYNAeJFIicWprB8eOSd5Y5mZ-mMC5I5pU7IORrk42mOm0sc-3fVPQX6G3zMUC4BCCzUajX6os4zp_wWQhEGlJjryLfc7TuoDkjTTH6Sk4WkZVSzwboWZn85EGvOgVjoP1LAYn4zf2nEIMfJuTI0e_lWs23eSwyBW4pBfIYbBV-ruv24esf6YhfMg49dpB62Ov9cc1GX9VU0wv_g6n8=s1024-rj" 
          alt="Osaka Castle surrounded by nature, calm and majestic" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zen-paper/20 to-zen-paper z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-3xl">
          <p className="text-lg md:text-xl text-white font-serif tracking-[0.2em] mb-4 uppercase text-shadow">
            Discover the Soul of Japan
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-wide drop-shadow-lg">
            OSAKA <span className="font-light italic">Gateway</span>
          </h1>
          <button onClick={() => document.getElementById('book-now')?.scrollIntoView({behavior: 'smooth'})} className="px-10 py-4 bg-white/90 text-zen-ink font-serif hover:bg-zen-matcha hover:text-white transition-all duration-500 rounded-sm tracking-widest shadow-lg">
            BEGIN JOURNEY
          </button>
        </div>
      </div>

      {/* Service Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-zen-ink mb-4">Наш Сервис</h2>
            <p className="text-zen-ink/60 font-serif italic">Твой комфорт — наша забота</p>
            <div className="w-16 h-0.5 bg-zen-matcha mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Car className="w-8 h-8 text-zen-matcha" />}
              title="Трансфер"
              desc="Встреча в аэропорту Кансай. Индивидуальный трансфер до дверей дома."
            />
            <ServiceCard 
              icon={<Home className="w-8 h-8 text-zen-wood" />}
              title="Аутентичность"
              desc="Проживание в традиционном японском доме. Пространство для всей группы."
            />
            <ServiceCard 
              icon={<Smile className="w-8 h-8 text-zen-ink" />}
              title="Поддержка"
              desc="Забота 24/7. Русскоговорящие гиды для глубокого погружения в культуру."
            />
            <ServiceCard 
              icon={<Map className="w-8 h-8 text-red-700" />}
              title="Экскурсии"
              desc="Авторские маршруты: Храмы Киото, олени Нары и величие Осаки."
            />
          </div>
        </div>
      </section>

      {/* Visual Break - Zen Garden / Temple */}
      <div className="w-full h-[500px] relative group overflow-hidden">
        {/* Visual Prompt: Peaceful Zen garden in Kyoto, raked sand, rocks, maple trees */}
        <img 
          src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?auto=format&fit=crop&w=2069&q=80" 
          alt="Peaceful Zen garden in Kyoto" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-zen-ink/30 flex items-center justify-center">
           <div className="bg-white/90 p-8 md:p-12 text-center max-w-2xl mx-4 shadow-xl">
              <h3 className="text-2xl md:text-3xl text-zen-ink font-serif mb-4">Путешествие к истокам</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы создаем атмосферу спокойствия и созерцания. Откройте для себя Японию без суеты туристических автобусов.
              </p>
           </div>
        </div>
      </div>

      {/* Cultural Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-zen-ink mb-4">Культурное Наследие</h2>
            <p className="text-gray-500">Места силы Кансая</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {/* Kyoto */}
             <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-6 aspect-[4/5] shadow-md">
                   {/* Visual Prompt: Kinkaku-ji Golden Pavilion reflecting in pond */}
                   <img 
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" 
                    alt="Kyoto Temples" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
                <h3 className="text-2xl font-serif text-zen-ink mb-2 text-center">Храмы Киото</h3>
                <p className="text-center text-gray-500 text-sm px-4">
                  Золотой павильон Кинкаку-дзи и тысячи ворот Фусими Инари. Вековая мудрость древней столицы.
                </p>
             </div>

             {/* Nara */}
             <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-6 aspect-[4/5] shadow-md">
                   {/* Visual Prompt: Deer in Nara Park bowing to tourists, green trees */}
                   <img 
                    src={naradeerImg}
                    alt="Nara Deer" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
                <h3 className="text-2xl font-serif text-zen-ink mb-2 text-center">Олени Нары</h3>
                <p className="text-center text-gray-500 text-sm px-4">
                  Прогулка по парку Нара, где священные олени свободно гуляют среди древних храмов и просят печенье.
                </p>
             </div>

             {/* Osaka Castle */}
             <div className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-6 aspect-[4/5] shadow-md">
                   {/* Visual Prompt: Osaka Castle main keep, majestic architecture */}
                   <img 
                    src="https://lh3.googleusercontent.com/rd-gg/AIJ2gl9LmmSEbRMaQaAciKok9wl3uMs4fh91qgMlfJG3zYMNJQ3wKHADuCSOj4R9PUpcWbQ9xgvQkEYZty_8OkvOXPzSzKQ6LP9vmZjUap8bDHe4Ruk_GJMXZHRkrfpltTeNwuE-1C3NSQALOCWIlFjEJpuEVSiNMFCvsJlA-Gh0Q2_bSJH6xTJQzTud4NczU2CmgJ11JuNexpUbHRnt6ZupCR26dakrHmMVKwl6-MDngx_odwqRkfj0QLxxftOTdgHbxcTvzUhWo3rQKy5wzvigOayvVm7_sVouwYfwve_0SvoK_-UwLkSv-O417SxjR8hqrhGGnpnag6OUDt5VUZazb-7p5KVNGIckxOqAg2taxqfvUmZuP1FPLk0n3rzcT5otZKAUnWU82ayGVbOHasc1N61ul2K-UBfkc17GYyQ19wHYGQUJEfskcQ3SAeCKm_LePwZZcC2t1djdpjIzQZIVUOmbyVRC9ctYQXPdICCjbikjOtxcetWjnFIDNYPrIB82SHjTi33fCXW1-Vbmf_UuJIloludA3YoJAeTjoInDFvCkrlLqW7Gvho9jGLQCW7PHYCUeBv8BdBIfmxUgdUxq0jL5fhH6YcdaDFxBmoapEl-GC8vACRtpwNBThzpb3zme1hAqExdDGwQJNAIjZHgF7kxUKpVgYyGGO_vKkJUd2lDrM-hC7C9Pp0MR8xO5kos-afLFmFCghBM3komRQmwpV1ChBsPGqPVGgZ6ILHWO5du9LaslJELoO43LECiMWiwLZDNCJM2VUuaT2wFFZRs4MajcjB6_AL5IJI7bkRjlQcFIE0lbWASJm1PUVyCDVg6SYlQ1uOVMQKLalda5j3iarx8RCKGQI2GSG3-jAYEgGXLZmxhcZYUqg3tliPfWw7kPmTt7XE1YqYxaDDl4PUkcbWuSJjmWVbk2OHOnTJszSolFeSuOvYyEqdVfyVZLkSks7Qe2Dny0xqWZYwmbEp6kzoNueWdmS0_nlFt7xFUeYLjJ5MAsFBpIpJlttRGno3pH0toq_r1toLEUZx2pvmq6cQqjNE5REynszwkw-mzcGK3IrUkLuVjI5p1BkTS-HRs4R09-5fyfM1dqZ0SebobyTlGHdbAAIIhq5g5KyZP63eaztYz4bRzEfx7A7g8_cW2WlC5vQwj3TWwSLbIxa6R54Z2Cndc81i8p9cq7Ndf9VtzpHMBWeY62yxVt8LLe0yQBrhxVom1VIFezPjjPkx-WwIyIVVSX5FjRfSNpO4Vnl2Ujgth7Y5GWspvpdYK2XVPch-CVeDxUVaF7WFqIrnjX1vSmsDXS5A-mkPkCsX1FyGt_dPxxxrboN3CbZFoaKq2M6rTekT_byuS12lx1_iZr_4EqesdhTAEDscr6SwNUyE_vMGUwWuEy1oEg7xhwh0sRWuVqZQpP4QX_f9ibSny7g3Lz9nrN8dxawZSqQqTTmXVwfuU518c07t910M78zAs=s1024-rj" 
                    alt="Osaka Castle" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
                <h3 className="text-2xl font-serif text-zen-ink mb-2 text-center">Замок Осака</h3>
                <p className="text-center text-gray-500 text-sm px-4">
                  Символ власти и истории. Величественная архитектура и панорамный вид на город с главной башни.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book-now" className="py-24 relative bg-zen-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white p-10 md:p-16 shadow-2xl border-t-4 border-zen-matcha">
              <h2 className="text-3xl md:text-4xl font-serif text-center text-zen-ink mb-2">
                Забронировать Путешествие
              </h2>
              <p className="text-center text-gray-500 mb-10">Оставьте заявку, и мы составим для вас идеальный маршрут.</p>
              <ContactForm type="tourist" />
           </div>
        </div>
      </section>
    </div>
  );
};

// Helper Component for Service Card
const ServiceCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="p-6 border border-zen-matcha/10 bg-white hover:border-zen-matcha/50 transition-colors duration-300 shadow-sm rounded-sm text-center group">
    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-xl font-serif font-bold text-zen-ink mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);