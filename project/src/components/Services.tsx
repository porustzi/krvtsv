import { motion } from 'framer-motion';
import { Globe, Smartphone, ShoppingCart, Paintbrush, Search, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Розробка веб-сайтів Київ',
    desc: 'Створюємо корпоративні сайти та сайти-візитки для бізнесу з Києва та всієї України. Сучасний дизайн, швидке завантаження, адаптивна верстка.',
  },
  {
    icon: Smartphone,
    title: 'Лендінг під ключ',
    desc: 'Замовити лендінг в Україні можна за 3 дні. Один екран, одна мета — заявки та продажі. Без зайвого коду і зайвих витрат.',
  },
  {
    icon: ShoppingCart,
    title: 'Інтернет-магазин',
    desc: 'Веб-розробник з нуля збере магазин з кошиком, оплатою та адмінкою. Запускайте продажі онлайн швидко і без болю.',
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] text-gray-900 break-words">
            ЗАМОВИТИ ВЕБ-САЙТ<br />
            <span className="text-rose-500">В УКРАЇНІ</span>
          </h2>
          <p className="text-gray-500 mt-6 text-base sm:text-sm md:text-lg max-w-2xl mx-auto lg:mx-0 break-words">
            Шукаєте надійного веб-розробника чи веб-студію в Києві? Ми створюємо сайти, які продають — від лендінгу до інтернет-магазину. Швидко, сучасно, без переплат.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 md:p-8 hover:border-rose-200 transition-all duration-300"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
