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
    <section id="advantages" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Чому ми</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-gray-900">
            П'ЯТЬ ПРИЧИН<br />
            <span className="text-rose-500">ОБРАТИ НАС</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-rose-200 transition-all duration-300 ${
                  i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`${item.accent} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-rose-100 transition-colors">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
