import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-24">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-rose-50 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-pink-50 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div {...fadeUp(0)} className="mb-6">
              <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-rose-500 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
                Веб-студія / Ukraine
              </span>
            </motion.div>

            {/* Исправленный заголовок */}
            <motion.h1 
              {...fadeUp(0.1)} 
              className="text-[3.2rem] sm:text-[5rem] lg:text-[6.5rem] font-black leading-[1] md:leading-[0.85] tracking-tight text-gray-900 uppercase mb-6"
            >
              САЙТИ,<br />
              <span className="text-rose-500">ЯКІ</span><br />
              <span className="block mt-1 md:mt-0">ПРОДАЮТЬ</span>
            </motion.h1>

            {/* Месседжи с правильным интервалом */}
            <motion.div {...fadeUp(0.25)} className="mt-6 mb-8 space-y-1">
              <p className="text-sm sm:text-lg md:text-xl font-bold uppercase tracking-[0.15em] text-gray-400">
                ШВИДКО. СТИЛЬНО. НОРМАЛЬНО.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.15em] text-rose-500">
                БЕЗ ПЕРЕПЛАТ
              </p>
            </motion.div>

            <motion.p 
              {...fadeUp(0.35)} 
              className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mb-10 mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Створюємо сайти, що реально працюють на ваш бізнес — без зайвих слів та корпоративного нудного дизайну.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#project"
                className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-rose-500 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-rose-500/20 active:scale-95"
              >
                ТОП ПРОЄКТ
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto active:scale-95"
              >
                <Send size={16} />
                Telegram
              </a>
            </motion.div>

            {/* Статистика */}
            <motion.div {...fadeUp(0.55)} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl font-black text-gray-900">50+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Проєктів</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-rose-100 mx-auto" />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl font-black text-gray-900">3 дні</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Мін. терміни</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-rose-100 mx-auto" />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-3xl font-black text-gray-900">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Задоволених</p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Card UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="w-full max-w-lg mx-auto lg:max-w-none mt-8 lg:mt-0"
          >
            <div className="relative p-2 sm:p-0">
              <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-full h-full border-2 border-rose-100 rounded-[2.5rem]" />
              <div className="relative bg-rose-50/50 backdrop-blur-sm rounded-[2rem] p-6 sm:p-10 overflow-hidden border border-white">
                <div className="space-y-3 md:space-y-4">
                  {['Landing Page', 'Business Site', 'E-commerce', 'Redesign'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between gap-4 bg-white rounded-2xl px-4 py-4 shadow-sm border border-rose-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                        <p className="font-black text-xs sm:text-sm text-gray-900 uppercase tracking-wide">{item}</p>
                      </div>
                      <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest bg-rose-50 px-2 py-1 rounded-md">
                        {['3 дні', '7 днів', '14 днів', '5 днів'][i]}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-8 bg-gray-900 rounded-2xl px-6 py-5 text-white shadow-xl"
                >
                  <p className="text-[10px] uppercase tracking-widest text-rose-400 font-bold mb-1 text-center sm:text-left">Наш підхід</p>
                  <p className="font-black text-sm sm:text-base leading-tight text-center sm:text-left uppercase tracking-tight">Прямий контакт. Без менеджерів. Без зайвих витрат.</p>
                </motion.div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-200 rounded-full blur-2xl opacity-40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
