import { motion } from 'framer-motion';
import { DollarSign, Zap, MessageCircle, Palette, Smartphone } from 'lucide-react';

const items = [
  {
    icon: DollarSign,
    title: 'Нормальні ціни',
    desc: 'Без космічних рахунків. Платиш за роботу, а не за оренду офісу агентства.',
    accent: 'bg-rose-500',
    number: '01',
  },
  {
    icon: Zap,
    title: 'Швидкий запуск',
    desc: 'Лендінг за 3 дні. Без затягувань, без "ще трошки доробимо". Дедлайн — священний.',
    accent: 'bg-pink-400',
    number: '02',
  },
  {
    icon: MessageCircle,
    title: 'Прямий контакт',
    desc: 'Без менеджерів та посередників. Ти спілкуєшся напряму з розробником.',
    accent: 'bg-rose-400',
    number: '03',
  },
  {
    icon: Palette,
    title: 'Сучасний дизайн',
    desc: 'Не шаблони з Envato. Кожен проєкт — унікальне рішення з характером.',
    accent: 'bg-pink-500',
    number: '04',
  },
  {
    icon: Smartphone,
    title: 'Адаптивність',
    desc: 'Ідеально виглядає на всіх екранах — від iPhone до ультраширокого монітора.',
    accent: 'bg-rose-600',
    number: '05',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center lg:text-left"
        >
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Чому ми</p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] text-gray-900">
            П'ЯТЬ ПРИЧИН<br />
            <span className="text-rose-500">ОБРАТИ НАС</span>
          </h2>
        </motion.div>

        {/* Сетка: 1 колонка на мобайле, 2 на планшете, 3 на десктопе */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-rose-200 transition-all duration-300 ${
                  // Последняя карточка растягивается на 2 колонки ТОЛЬКО на планшетах (md), 
                  // но на десктопе (lg) снова занимает одну
                  i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`${item.accent} w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/10`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-4xl md:text-5xl font-black text-gray-100 group-hover:text-rose-100 transition-colors leading-none">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-wide text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
