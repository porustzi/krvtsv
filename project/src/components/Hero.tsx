import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-28 pb-16">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50 rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full -translate-x-1/3 translate-y-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[500px] bg-rose-100 pointer-events-none rotate-12" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="min-w-0">
            <motion.div {...fadeUp(0)} className="mb-4">
              <span className="inline-block text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 bg-rose-50 px-4 sm:px-4 py-3 sm:py-2 rounded-full">
                Веб-студія / Ukraine
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-[clamp(2.5rem,9vw,5.5rem)] font-black leading-[0.9] tracking-tight text-gray-900 uppercase mb-4 break-words">
              САЙТИ, ЯКІ<br />
              <span className="text-rose-500">ПРОДАЮТЬ</span>
            </motion.h1>

            <motion.div {...fadeUp(0.25)} className="mt-6 mb-4">
              <p className="text-[clamp(1rem,4vw,1.4rem)] font-bold uppercase tracking-wide text-gray-500 break-words">
                ШВИДКО. СТИЛЬНО. НОРМАЛЬНО.
              </p>
              <p className="text-[clamp(1rem,4vw,1.4rem)] font-black uppercase tracking-wide text-rose-400 break-words">
                БЕЗ ПЕРЕПЛАТ
              </p>
            </motion.div>

            <motion.p {...fadeUp(0.35)} className="text-gray-500 text-lg sm:text-base leading-relaxed max-w-md mb-10 break-words">
              Створюємо сайти, що реально працюють на ваш бізнес — без зайвих слів та корпоративного нудного дизайну.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#project"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm sm:text-xs px-8 sm:px-8 py-5 sm:py-4 rounded-full hover:bg-rose-500 transition-colors duration-300 whitespace-nowrap"
              >
                ТОП ПРОЄКТ
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-black uppercase tracking-widest text-sm sm:text-xs px-8 sm:px-8 py-5 sm:py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 whitespace-nowrap"
              >
                <Send size={18} className="flex-shrink-0" />
                Telegram
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">50+</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-400 font-semibold whitespace-nowrap">Проєктів</p>
              </div>
              <div className="w-px h-10 sm:h-10 bg-rose-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">3 дні</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-400 font-semibold whitespace-nowrap">Мін. терміни</p>
              </div>
              <div className="w-px h-10 sm:h-10 bg-rose-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-3xl sm:text-3xl font-black text-gray-900">100%</p>
                <p className="text-xs sm:text-[10px] uppercase tracking-widest text-gray-400 font-semibold whitespace-nowrap">Задоволених</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-rose-200 rounded-3xl" />
              <div className="relative bg-rose-50 rounded-3xl p-8 lg:p-10 overflow-hidden">
                <div className="space-y-4">
                  {['Landing Page', 'Business Site', 'E-commerce', 'Redesign'].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm"
                    >
                      <div className="w-3 h-3 rounded-full bg-rose-400 flex-shrink-0" />
                      <p className="font-black text-gray-900 uppercase tracking-wide">{item}</p>
                      <div className="ml-auto text-xs font-bold text-rose-400 uppercase tracking-widest whitespace-nowrap">
                        {['від 3 днів', 'від 5 днів', 'від 7 днів', 'від 2 днів'][i]}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="mt-8 bg-gray-900 rounded-2xl px-6 py-5 text-white"
                >
                  <p className="text-sm sm:text-xs uppercase tracking-widest text-rose-400 font-bold mb-1">Наш підхід</p>
                  <p className="font-black text-lg leading-tight">Прямий контакт. Без менеджерів. Без зайвих витрат.</p>
                </motion.div>

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-400 rounded-full opacity-20" />
                <div className="absolute top-4 right-8 w-8 h-8 bg-rose-300 rounded-full opacity-40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
