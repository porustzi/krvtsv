import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const tech = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design', 'Performance Opt.'];

const done = [
  'Повний рефакторинг застарілого коду',
  'Перехід зі статики на швидкий React/Vite',
  'Оптимізація важкого розкладу та таблиць',
  'Адаптивність під смартфони учнів та вчителів',
  'Інтеграція системи миттєвих новин',
  'Налаштування безпечного деплою на Netlify',
];

export default function TopProject() {
  return (
    <section id="project" className="py-32 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">
            Реальний кейс
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-gray-900">
            ТОП<br />
            <span className="text-rose-500">ПРОЄКТ</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sticky top-28"
          >
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-full text-xs text-gray-400 px-4 py-1 ml-2 font-mono">
                    lyzeum167.com
                  </div>
                </div>

                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src="https://lh5.googleusercontent.com/p/AF1QipO0XUAiZ7Qh1RjzOSv-u1DY1jYA8gya8Hf4je02=w800-h500-k-no"
                    alt="School Portal UI"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://lh5.googleusercontent.com/p/AF1QipO0XUAiZ7Qh1RjzOSv-u1DY1jYA8gya8Hf4je02=w800-h500-k-no';
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-black text-2xl uppercase">
                      Ліцей 167
                    </p>
                    <p className="text-rose-300 text-sm font-semibold uppercase tracking-widest">
                      Школа у Києві
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl px-5 py-4"
              >
                <p className="text-xs uppercase text-gray-400 font-semibold mb-1">
                  Швидкість
                </p>
                <p className="text-2xl font-black text-gray-900">0.8s</p>
                <p className="text-xs text-rose-500 font-bold">
                  час завантаження
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black uppercase text-rose-500 bg-rose-100 px-3 py-1 rounded-full">
                  Освіта / Соцпроєкт
                </span>
                <span className="text-xs font-black uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  2026
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase text-gray-900">
                Modern School UI
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed">
                Повна модернізація шкільного порталу зі швидким React-стеком і адаптивністю.
              </p>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                Технічні рішення
              </p>

              <div className="space-y-3">
                {done.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-rose-500 mt-0.5" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                Стек технологій
              </p>

              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-bold bg-white border-2 border-gray-100 px-4 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* FIXED LINK */}
            <a
              href="https://lyzeum167.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gray-900 text-white font-black uppercase text-sm px-8 py-4 rounded-full hover:bg-rose-500 transition-colors"
            >
              <ExternalLink size={16} />
              Переглянути сайт
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
