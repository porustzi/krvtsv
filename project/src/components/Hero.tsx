import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20 pb-12 md:pt-32 md:pb-24">
      {/* Мягкий декор на фоне */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[700px] md:h-[700px] bg-rose-50 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[500px] md:h-[500px] bg-pink-50 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">
          
          {/* Левая часть */}
          <div className="text-center lg:text-left">
            <motion.div {...fadeUp(0)} className="mb-8">
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-rose-500 bg-rose-50 px-4 py-2 rounded-full">
                Веб-студія / Ukraine
              </span>
            </motion.div>

            <motion.h1 
              {...fadeUp(0.1)} 
              className="text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] font-black leading-[0.9] md:leading-[0.8] tracking-tighter text-gray-900 uppercase mb-8"
            >
              САЙТИ,<br />
              <span className="text-rose-500">ЯКІ</span><br />
              ПРОДАЮТЬ
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="mb-10">
              <p className="text-sm md:text-xl font-bold uppercase tracking-widest text-gray-400 mb-1">
                ШВИДКО. СТИЛЬНО. НОРМАЛЬНО.
              </p>
              <p className="text-sm md:text-xl font-black uppercase tracking-widest text-rose-500">
                БЕЗ ПЕРЕПЛАТ
              </p>
            </motion.div>

            <motion.p 
              {...fadeUp(0.3)} 
              className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mb-12 mx-auto lg:mx-0"
            >
              Створюємо сайти, що реально працюють на ваш бізнес — без зайвих слів та корпоративного нудного дизайну.
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-20">
              <a href="#project" className="inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white font-black uppercase tracking-widest text-[11px] px-10 py-5 rounded-full hover:bg-rose-600 transition-all active:scale-95 shadow-xl shadow-gray-200">
                ТОП ПРОЄКТ <ArrowRight size={18} />
              </a>
              <a href="https://t.me/krvtsvcorp" className="inline-flex items-center justify-center gap-2 border-2 border-[#0F172A] text-[#0F172A] font-black uppercase tracking-widest text-[11px] px-10 py-5 rounded-full hover:bg-[#0F172A] hover:text-white transition-all active:scale-95">
                <Send size={18} /> TELEGRAM
              </a>
            </div>

            {/* Статистика ровно в ряд как на скрине */}
            <div className="flex flex-row justify-center lg:justify-start items-center gap-8 md:gap-12">
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black text-gray-900 leading-none">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">Проєктів</p>
              </div>
              <div className="w-px h-12 bg-gray-100" />
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black text-gray-900 leading-none">3 дні</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">Мін. терміни</p>
              </div>
              <div className="w-px h-12 bg-gray-100" />
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black text-gray-900 leading-none">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-2">Задоволених</p>
              </div>
            </div>
          </div>

          {/* Правая часть - Карточка */}
          <div className="relative hidden lg:block">
            {/* Декоративная рамка сзади */}
            <div className="absolute top-10 -left-6 w-full h-full border border-rose-100 rounded-[40px]" />
            
            <div className="relative bg-white/40 backdrop-blur-md rounded-[40px] p-12 border border-white shadow-2xl shadow-rose-100/50">
              <div className="space-y-6 mb-10">
                {[
                  { n: 'LANDING PAGE', t: 'ВІД 3 ДНІВ' },
                  { n: 'BUSINESS SITE', t: 'ВІД 5 ДНІВ' },
                  { n: 'E-COMMERCE', t: 'ВІД 7 ДНІВ' },
                  { n: 'REDESIGN', t: 'ВІД 2 ДНІВ' },
                ].map((item) => (
                  <div key={item.n} className="flex items-center justify-between bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="font-black text-sm tracking-widest text-gray-900">{item.n}</span>
                    </div>
                    <span className="text-[10px] font-black text-rose-400 tracking-widest uppercase">{item.t}</span>
                  </div>
                ))}
              </div>

              {/* Черный блок с подходом */}
              <div className="bg-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden group">
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-[0.2em] mb-2">Наш підхід</p>
                <p className="font-black text-lg leading-tight uppercase">
                  Прямий контакт. Без менеджерів. Без зайвих витрат.
                </p>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-rose-500/10 rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
