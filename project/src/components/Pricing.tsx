import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Лендінг',
    price: 'від 5 000',
    currency: 'грн',
    timeframe: '3–5 днів',
    desc: 'Один екран — максимум конверсії. Для продукту, послуги або акції.',
    features: ['1 сторінка', 'Адаптивний дизайн', 'SEO-базис', 'Форма заявки', 'Хостинг + домен *'],
    highlight: false,
  },
  {
    name: 'Бізнес-сайт',
    price: 'від 12 000',
    currency: 'грн',
    timeframe: '7–10 днів',
    desc: 'Повноцінний сайт для компанії або фахівця. Всі розділи, які потрібні.',
    features: ['До 8 сторінок', 'Адаптивний дизайн', 'SEO + аналітика', 'Блог / портфоліо', 'CMS для керування', 'Хостинг + домен *'],
    highlight: true,
  },
  {
    name: 'Магазин',
    price: 'від 20 000',
    currency: 'грн',
    timeframe: '14–21 день',
    desc: 'Інтернет-магазин з каталогом, кошиком та прийомом оплат.',
    features: ['Каталог товарів', 'Кошик + оплата', 'Особистий кабінет', 'Адмін-панель', 'SEO + аналітика', 'Хостинг + домен *'],
    highlight: false,
  },
  {
    name: 'Редизайн',
    price: 'від 4 000',
    currency: 'грн',
    timeframe: 'від 3 днів',
    desc: 'Є сайт, але виглядає як 2010 рік? Освіжимо зовнішній вигляд.',
    features: ['Аудит поточного сайту', 'Новий UI/UX', 'Адаптивність', 'Прискорення завантаження', 'Підтримка 1 місяць'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Прайс</span>
          <h2 className="font-black text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tighter text-black mt-2">
            ЦІНИ БЕЗ<br />
            <span className="text-pink-500">СЮРПРИЗІВ.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-md">* Ціни орієнтовні. Фінальна вартість обговорюється після брифінгу.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col rounded-3xl p-7 border transition-shadow hover:shadow-xl ${
                plan.highlight
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Популярний вибір
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.highlight ? 'text-pink-400' : 'text-pink-500'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-black text-3xl">{plan.price}</span>
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{plan.currency}</span>
                </div>
                <p className={`text-xs font-semibold ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{plan.timeframe}</p>
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={14} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-pink-400' : 'text-pink-500'}`} />
                    <span className={`text-xs font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noreferrer"
                className={`group flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-pink-500 hover:bg-pink-400 text-white'
                    : 'bg-pink-50 hover:bg-pink-500 text-pink-600 hover:text-white'
                }`}
              >
                Замовити
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
