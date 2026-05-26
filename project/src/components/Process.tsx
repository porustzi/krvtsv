import { motion } from 'framer-motion';
import { Send, MessageSquare, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Send,
    number: '01',
    title: 'Telegram',
    desc: 'Напишіть нам у Telegram — розкажіть про свій проєкт. Відповідаємо швидко, без зайвих питань.',
    link: { label: 'Написати', href: 'https://t.me/krvtsvcorp' },
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Обговорення',
    desc: 'Уточнюємо деталі, погоджуємо структуру, дизайн та терміни. Все фіксуємо письмово.',
    link: null,
  },
  {
    icon: Code2,
    number: '03',
    title: 'Розробка',
    desc: 'Верстаємо, програмуємо, тестуємо. Показуємо результат по ходу роботи — без сюрпризів в кінці.',
    link: null,
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Запуск',
    desc: 'Деплоїмо на ваш домен або допомагаємо з купівлею. Навчаємо керувати сайтом. Готово!',
    link: null,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-32 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-20"
        >
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Як ми працюємо</p>
          <h2 className="text-[clamp(2rem,7vw,5rem)] font-black uppercase leading-tight text-white break-words">
            ПРОЦЕС<br />
            <span className="text-rose-500">БЕЗ МАГІЇ</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-lg break-words">
            4 прості кроки від першого повідомлення до живого сайту.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-rose-900 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10 bg-gray-800 rounded-3xl p-6 sm:p-8 hover:bg-gray-750 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-gray-700">{step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white mb-3 break-words">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm break-words">{step.desc}</p>
                {step.link && (
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-rose-400 font-black text-sm uppercase tracking-widest hover:text-rose-300 transition-colors whitespace-nowrap"
                  >
                    {step.link.label} →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
