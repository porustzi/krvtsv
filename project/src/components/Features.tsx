import { motion } from 'framer-motion';
import { DollarSign, Zap, Palette, MessageCircle, Smartphone, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Нормальні ціни',
    desc: 'Без роздутих кошторисів. Платиш за результат, а не за повітря.',
    accent: 'bg-pink-50',
    iconColor: 'text-pink-500',
    border: 'border-pink-100',
  },
  {
    icon: Zap,
    title: 'Швидкий запуск',
    desc: 'Лендінг — від 3 днів. Бізнес-сайт — від тижня. Без затягувань.',
    accent: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
    border: 'border-yellow-100',
  },
  {
    icon: Palette,
    title: 'Сучасний дизайн',
    desc: 'Не шаблони з Canva. Індивідуальний підхід і актуальний стиль.',
    accent: 'bg-pink-50',
    iconColor: 'text-pink-500',
    border: 'border-pink-100',
  },
  {
    icon: MessageCircle,
    title: 'Без бюрократії',
    desc: 'Пишеш — отримуєш відповідь. Жодних зустрічей заради зустрічей.',
    accent: 'bg-green-50',
    iconColor: 'text-green-500',
    border: 'border-green-100',
  },
  {
    icon: Smartphone,
    title: 'Адаптивність',
    desc: '100% адаптивні сайти. Виглядає ідеально на будь-якому екрані.',
    accent: 'bg-blue-50',
    iconColor: 'text-blue-500',
    border: 'border-blue-100',
  },
  {
    icon: ArrowUpRight,
    title: 'Прямий контакт',
    desc: 'Ти спілкуєшся напряму зі мною, а не з менеджером менеджера.',
    accent: 'bg-pink-50',
    iconColor: 'text-pink-500',
    border: 'border-pink-100',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Чому ми</span>
          <h2 className="font-black text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tighter text-black mt-2">
            ПРОСТО. ЧЕСНО.<br />
            <span className="text-pink-500">БЕЗ ПОНТІВ.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`group p-8 rounded-3xl border ${f.border} ${f.accent} cursor-default transition-shadow hover:shadow-lg`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={22} className={f.iconColor} />
                </div>
                <h3 className="font-black text-xl text-black mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
