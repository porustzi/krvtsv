import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'FitLife Studio',
    category: 'Фітнес / Лендінг',
    desc: 'Яскравий одностороніковий сайт для фітнес-студії з онлайн-записом.',
    image: 'https://images.pexels.com/photos/3836840/pexels-photo-3836840.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-50 to-pink-50',
    tag: 'Лендінг',
    tagColor: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Verde Coffee',
    category: 'HoReCa / Бізнес-сайт',
    desc: 'Мінімалістичний сайт для кав\'ярні з меню, локацією та атмосферою.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-50 to-emerald-50',
    tag: 'Бізнес',
    tagColor: 'bg-green-100 text-green-600',
  },
  {
    title: 'Bloom Flowers',
    category: 'E-commerce / Магазин',
    desc: 'Інтернет-магазин квіткової крамниці з каталогом і оформленням замовлень.',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-50 to-rose-50',
    tag: 'Магазин',
    tagColor: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'TechStart UA',
    category: 'Стартап / Лендінг',
    desc: 'Продаючий лендінг для IT-стартапу з акцентом на конверсію.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-50 to-sky-50',
    tag: 'Лендінг',
    tagColor: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Atelier Noir',
    category: 'Мода / Портфоліо',
    desc: 'Стильний сайт-портфоліо для дизайнера одягу з галереєю колекцій.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-gray-50 to-slate-50',
    tag: 'Портфоліо',
    tagColor: 'bg-gray-100 text-gray-600',
  },
  {
    title: 'MedCare Clinic',
    category: 'Медицина / Бізнес',
    desc: 'Сайт приватної клініки з онлайн-записом та описом послуг.',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-teal-50 to-cyan-50',
    tag: 'Бізнес',
    tagColor: 'bg-teal-100 text-teal-600',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-pink-500 font-bold uppercase tracking-widest text-sm">Наші роботи</span>
            <h2 className="font-black text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tighter text-black mt-2">
              КЕЙСИ,<br />
              <span className="text-pink-500">ЯКІ ГОВОРЯТЬ.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Кожен проект — індивідуальний підхід. Дивись і надихайся.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ArrowUpRight size={16} className="text-black" />
                </motion.div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">{p.category}</p>
                <h3 className="font-black text-xl text-black mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
