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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-24">
      {/* Декор */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-rose-50 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-rose-500 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
                Веб-студія / Ukraine
              </span>
            </motion.div>

            {/* Заголовок с безопасным размером */}
            <motion.h1 
              {...fadeUp(0.1)} 
              className="text-[2.8rem] xs:text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] font-black leading-[1.1] md:leading-[0.85] tracking-tight text-gray-900 uppercase mb-6"
            >
              САЙТИ,<br />
              <span className="text-rose-500">ЯКІ</span><br />
              <span className="block mt-1 md:mt-0">ПРОДАЮТЬ</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="mb-8 space-y-1">
              <p className="text-xs sm:text-lg font-bold uppercase tracking-widest text-gray-400">
                ШВИДКО. СТИЛЬНО. НОРМАЛЬНО.
              </p>
              <p className="text-sm sm:text-lg font-black uppercase tracking-widest text-rose-500">
                БЕЗ ПЕРЕПЛАТ
              </p>
            </motion.div>

            {/* Описание с отступами, чтобы не касалось углов */}
            <motion.p 
              {...fadeUp(0.3)} 
              className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mb-10 mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Створюємо сайти, що реально працюють на ваш бізнес — без зайвих слів та складних процесів.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#project"
                className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-[11px] px-8 py-4.5 rounded-full hover:bg-rose-500 transition-all w-full sm:w-auto active:scale-95 shadow-xl shadow-gray-900/10"
              >
                ТОП ПРОЄКТ
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-black uppercase tracking-widest text-[11px] px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all w-full sm:w-auto active:scale-95"
              >
                <Send size={16} />
                Telegram
              </a>
            </motion.div>

            {/* Статистика: пофикшен размер "3 дні" и наезды */}
            <motion.div 
              {...fadeUp(0.5)} 
              className="mt-16 grid grid-cols-1 xs:grid-cols-3 gap-8 xs:gap-2 items-center border-t border-gray-100 pt-10 sm:border-0 sm:pt-0"
            >
              <div className="flex flex-col items-center lg:items-start gap-1">
                <p className="text-3xl font-black text-gray-900 leading-none">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-rose-500 font-black">Проєктів</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-rose-100 mx-auto" />

              <div className="flex flex-col items-center lg:items-start gap-1">
                {/* Уменьшил шрифт именно тут */}
                <p className="text-2xl xs:text-xl md:text-3xl font-black text-gray-900 leading-none whitespace-nowrap">
                  3 ДНІ
                </p>
                <p className="text-[10px] uppercase tracking-widest text-rose-500 font-black">Терміни</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-rose-100 mx-auto" />

              <div className="flex flex-col items-center lg:items-start gap-1">
                <p className="text-3xl font-black text-gray-900 leading-none">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-rose-500 font-black">Клієнтів</p>
              </div>
            </motion.div>
          </div>

          {/* Правая колонка: скрывается на очень маленьких экранах, если мешает */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto lg:max-w-none mt-12 lg:mt-0 px-2"
          >
            <div className="relative bg-rose-50/40 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-10 border border-rose-100 shadow-inner">
              <div className="space-y-3">
                {['Landing Page', 'Business Site', 'E-commerce', 'Redesign'].map((item, i) => (
                  <div key={item} className="flex items-center justify-between gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <p className="font-black text-[10px] sm:text-xs text-gray-900 uppercase tracking-wide">{item}</p>
                    </div>
                    <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">
                      {['3 дні', '7 днів', '14 днів', '5 днів'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
