import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Лендінг',
    price: 'від 5 000 грн',
    duration: '3–5 днів',
    desc: 'Один екран, один месседж, одна ціль — заявки.',
    features: [
      'До 5 секцій',
      'Адаптивна верстка',
      'Форма заявки',
      'Базова SEO',
      'Деплой',
    ],
    highlighted: false,
  },
  {
    name: 'Бізнес-сайт',
    price: 'від 12 000 грн',
    duration: '7–14 днів',
    desc: 'Повноцінний сайт для бізнесу з усіма необхідними сторінками.',
    features: [
      'До 10 сторінок',
      'Унікальний дизайн',
      'CMS / адмінка',
      'SEO-оптимізація',
      'Аналітика',
      'Деплой + домен',
    ],
    highlighted: true,
  },
  {
    name: 'Магазин',
    price: 'від 20 000 грн',
    duration: '14–21 день',
    desc: 'Інтернет-магазин з каталогом, кошиком і платежами.',
    features: [
      'Каталог товарів',
      'Кошик та оплата',
      'Кабінет клієнта',
      'Адмінка',
      'Інтеграції',
      'Підтримка 1 міс.',
    ],
    highlighted: false,
  },
  {
    name: 'Редизайн',
    price: 'від 8 000 грн',
    duration: '5–10 днів',
    desc: 'Перетворимо застарілий сайт на сучасний інструмент продажів.',
    features: [
      'Аудит поточного сайту',
      'Новий дизайн',
      'Збереження SEO',
      'Оновлення коду',
      'Тестування',
    ],
    highlighted: false,
  },
];

export default function Prices() {
  return (
    <section id="prices" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Вартість</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-gray-900">
            ПРОЗОРІ<br />
            <span className="text-rose-500">ЦІНИ</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-lg">
            Фіксована ціна без прихованих доплат. Що домовились — те й буде.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gray-900 text-white'
                  : 'bg-white border-2 border-gray-100 hover:border-rose-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-rose-500 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap">
                    Популярний вибір
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-black uppercase tracking-[0.25em] mb-2 ${plan.highlighted ? 'text-rose-400' : 'text-rose-500'}`}>
                  {plan.duration}
                </p>
                <h3 className={`text-2xl font-black uppercase tracking-wide mb-3 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <p className={`text-3xl font-black ${plan.highlighted ? 'text-rose-400' : 'text-gray-900'}`}>
                  {plan.price}
                </p>
              </div>

              <div className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check size={16} className={plan.highlighted ? 'text-rose-400' : 'text-rose-500'} />
                    <p className={`text-sm font-medium ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>{f}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-black uppercase tracking-widest text-sm py-3.5 rounded-full transition-colors duration-300 ${
                  plan.highlighted
                    ? 'bg-rose-500 text-white hover:bg-rose-400'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Замовити
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8 font-medium"
        >
          Індивідуальні проєкти — обговорюємо ціну особисто в Telegram
        </motion.p>
      </div>
    </section>
  );
}
