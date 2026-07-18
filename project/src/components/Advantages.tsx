import { motion } from 'framer-motion';
import { DollarSign, Zap, MessageCircle, Palette, Smartphone } from 'lucide-react';
import { Spotlight, Magnetic } from '../lib/anim';

const items = [
  {
    icon: DollarSign, title: 'Нормальні ціни',
    desc: 'Без космічних рахунків. Платиш за роботу, а не за оренду офісу агентства.',
    accent: 'bg-rose-500', number: '01',
  },
  {
    icon: Zap, title: 'Швидкий запуск',
    desc: 'Лендінг за 3 дні. Без затягувань, без "ще трошки доробимо". Дедлайн — священний.',
    accent: 'bg-rose-500', number: '02',
  },
  {
    icon: MessageCircle, title: 'Прямий контакт',
    desc: 'Без менеджерів та посередників. Ти спілкуєшся напряму з розробником.',
    accent: 'bg-rose-400', number: '03',
  },
  {
    icon: Palette, title: 'Сучасний дизайн',
    desc: 'Не шаблони з Envato. Кожен проєкт — унікальне рішення з характером.',
    accent: 'bg-rose-600', number: '04',
  },
  {
    icon: Smartphone, title: 'Адаптивність',
    desc: 'Ідеально виглядає на всіх екранах — від iPhone до ультраширокого монітора.',
    accent: 'bg-rose-600', number: '05',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center lg:text-left"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Чому ми</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-gray-900 break-words">
            П'ять причин<br />
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">обрати нас</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Spotlight key={item.number} className={`rounded-3xl ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-rose-200 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Magnetic strength={0.3}>
                      <div className={`${item.accent} w-12 h-12 md:w-12 md:h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/10 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                    </Magnetic>
                    <span className="text-5xl md:text-5xl font-black text-gray-100 group-hover:text-rose-100 transition-colors leading-none">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-xl font-black uppercase tracking-wide text-gray-900 mb-3 break-words">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-sm text-gray-500 leading-relaxed break-words">
                    {item.desc}
                  </p>
                </motion.div>
              </Spotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
