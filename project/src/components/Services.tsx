import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, ShoppingCart, Paintbrush, Search, Zap, Code2, Server } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Розробка веб-сайтів Київ',
    desc: 'Створюємо корпоративні сайти та сайти-візитки для бізнесу з Києва та всієї України. Сучасний дизайн, швидке завантаження, адаптивна верстка.',
    href: '/services/web-developer-kyiv',
  },
  {
    icon: Smartphone,
    title: 'Лендінг під ключ',
    desc: 'Замовити лендінг в Україні можна за 3 дні. Один екран, одна мета — заявки та продажі. Без зайвого коду і зайвих витрат.',
  },
  {
    icon: ShoppingCart,
    title: 'Розробка e-commerce сайтів',
    desc: 'Фуллстак веб-розробник збере інтернет-магазин з кошиком, оплатою (WayForPay/LiqPay/Stripe), фільтрами та адмінкою. Запускайте продажі онлайн швидко і без болю.',
    href: '/services/ecommerce',
  },
  {
    icon: Code2,
    title: 'Фуллстак розробка Україна',
    desc: 'Frontend (React/Vite) + backend (Node.js/API/БД) під ключ. Замовити фуллстак проєкт можна дистанційно — від MVP до масштабованого продукту.',
    href: '/services/fullstack',
  },
  {
    icon: Server,
    title: 'Backend та API',
    desc: 'Проектуємо та розробляємо REST/GraphQL API, інтеграції з платіжними системами, CRM і телеграм-ботами. Надійний бекенд для вашого продукту.',
  },
  {
    icon: Paintbrush,
    title: 'Редизайн сайту',
    desc: 'Освіжимо застарілий сайт: новий UX/UI, збереження SEO-позицій і швидкість. Перетворимо на інструмент продажів.',
  },
  {
    icon: Search,
    title: 'SEO-оптимізація',
    desc: 'Базова та повна SEO-оптимізація: метатеги, мікророзмітка, швидкість та індексація в Google. Щоб вас знаходили за запитом «замовити веб-сайт».',
  },
  {
    icon: Zap,
    title: 'Швидкий запуск',
    desc: 'Веб-студія KRVTSV CORP працює без менеджерів — ви спілкуєтесь напряму з розробником. Дедлайн священний, запуск від 3 днів.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 text-center lg:text-left"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Послуги</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-gray-900 break-words">
            Замовити веб-сайт<br />
            <span className="text-rose-500">в Україні</span>
          </h2>
          <p className="text-gray-500 mt-6 text-base sm:text-sm md:text-lg max-w-2xl mx-auto lg:mx-0 break-words">
            Шукаєте надійного веб-розробника чи веб-студію в Києві? Ми створюємо сайти, які продають — від лендінгу до інтернет-магазину. Робимо фуллстак розробку (React + Node) та e-commerce проєкти під ключ. Швидко, сучасно, без переплат.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            const card = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-rose-200 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-rose-500 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/10">
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-wide text-gray-900 mb-3 break-words">
                  {item.title}
                </h3>
                <p className="text-base sm:text-sm text-gray-500 leading-relaxed break-words">
                  {item.desc}
                </p>
                {item.href && (
                  <span className="inline-block mt-4 text-rose-500 font-black text-sm uppercase tracking-widest group-hover:underline">
                    Детальніше →
                  </span>
                )}
              </motion.div>
            );
            return item.href ? (
              <Link key={item.title} to={item.href} className="block">{card}</Link>
            ) : (
              <div key={item.title}>{card}</div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-3xl p-8 md:p-10 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 break-words">
              Фуллстак розробка в Україні
            </h3>
            <p className="text-gray-400 leading-relaxed text-base sm:text-sm break-words">
              Потрібен продукт «під ключ»? Беремо весь цикл: <span className="text-rose-400 font-bold">React + Vite</span> на фронті, <span className="text-rose-400 font-bold">Node.js</span> та REST/GraphQL API на бекенді, бази даних і деплой. Замовити фуллстак проєкт у веб-розробника з Києва можна дистанційно — від MVP до масштабованого SaaS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-rose-50 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-gray-900 mb-4 break-words">
              Розробка e-commerce сайтів
            </h3>
            <p className="text-gray-500 leading-relaxed text-base sm:text-sm break-words">
              Запускаємо інтернет-магазини з кошиком, каталогом, фільтрами та платежами (WayForPay, LiqPay, Stripe, Mono). Інтеграція з Nova Poshta, CRM і телеграм-ботом. Ціна — <span className="text-rose-600 font-black">від 15 000 грн</span>, термін — від 14 днів.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
