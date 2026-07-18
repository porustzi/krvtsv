import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Code2, Paintbrush, LayoutTemplate, ArrowUpRight } from 'lucide-react';
import { Spotlight, Magnetic } from '../lib/anim';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Лендінг під ключ',
    desc: 'Один екран, одна мета — заявки та продажі. Запуск від 3 днів, без зайвого коду.',
    price: 'від 4 000 грн',
    href: '/services/web-developer-kyiv',
    tint: 'from-rose-500 to-pink-500',
    raw: 'rgba(244,63,94',
  },
  {
    icon: Globe,
    title: 'Корпоративний сайт',
    desc: 'Повноцінний сайт для бізнесу: до 10 сторінок, унікальний дизайн, CMS та аналітика.',
    price: 'від 10 000 грн',
    href: '/services/web-developer-kyiv',
    tint: 'from-rose-600 to-red-500',
    raw: 'rgba(168,85,247',
  },
  {
    icon: ShoppingCart,
    title: 'Інтернет-магазин',
    desc: 'Кошик, каталог з фільтрами, оплата (WayForPay/LiqPay/Stripe) та адмінка. Запуск продажів швидко.',
    price: 'від 15 000 грн',
    href: '/services/ecommerce',
    tint: 'from-amber-500 to-orange-500',
    raw: 'rgba(245,158,11',
  },
  {
    icon: Code2,
    title: 'Фуллстак розробка',
    desc: 'Frontend (React/Vite) + backend (Node.js/API/БД) під ключ. Від MVP до масштабованого SaaS.',
    price: 'від 20 000 грн',
    href: '/services/fullstack',
    tint: 'from-sky-500 to-blue-500',
    raw: 'rgba(14,165,233',
  },
  {
    icon: Paintbrush,
    title: 'Редизайн сайту',
    desc: 'Освіжимо застарілий сайт: новий UX/UI, збереження SEO-позицій і швидкість.',
    price: 'від 6 000 грн',
    href: '/services/web-developer-kyiv',
    tint: 'from-emerald-500 to-teal-500',
    raw: 'rgba(16,185,129',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center lg:text-left"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Послуги</p>
          <p className="text-gray-500 mt-2 text-base sm:text-sm md:text-lg max-w-2xl mx-auto lg:mx-0 break-words">
            Шукаєте надійного веб-розробника чи веб-студію в Києві? Ми створюємо сайти, які продають — від лендінгу до інтернет-магазину. Швидко, сучасно, без переплат.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            const card = (
              <Spotlight className="rounded-3xl h-full" from={`${item.raw}22`} to="rgba(139,92,246,0.10)">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-transparent transition-all duration-300 h-full shadow-sm hover:shadow-2xl hover:shadow-rose-500/10"
                >
                  <div className="flex items-start justify-between mb-5 relative z-10">
                    <div className={`bg-gradient-to-br ${item.tint} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <ArrowUpRight size={22} className="text-gray-300 group-hover:text-rose-500 transition-colors" />
                  </div>

                  <h3 className="text-lg md:text-xl font-black tracking-wide text-gray-900 mb-3 break-words relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-sm text-gray-500 leading-relaxed break-words relative z-10">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between relative z-10">
                    <span className="text-rose-600 font-black text-sm uppercase tracking-widest">{item.price}</span>
                    <span className="text-gray-400 font-black text-sm uppercase tracking-widest group-hover:text-rose-500 group-hover:underline transition-colors">
                      Детальніше →
                    </span>
                  </div>
                </motion.div>
              </Spotlight>
            );
            return item.href ? (
              <Magnetic key={item.title} strength={0.12} className="block h-full">
                <Link to={item.href} className="block h-full">{card}</Link>
              </Magnetic>
            ) : (
              <div key={item.title} className="h-full">{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
