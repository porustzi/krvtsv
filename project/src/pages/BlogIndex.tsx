import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'Лендінг чи повноцінний сайт: що обрати бізнесу',
    desc: 'Порівнюємо вартість, терміни та конверсію. Коли лендінг, коли сайт, коли магазин.',
    href: '/blog/landing-vs-website',
    tag: 'Вибір',
    read: '5 хв',
  },
  {
    title: 'Чому сайт не дає заявок і як це виправити',
    desc: '7 причин порожньої форми: швидкість, довіра, адаптив, SEO. Чекліст за 1 день.',
    href: '/blog/no-leads-from-site',
    tag: 'Проблема',
    read: '6 хв',
  },
  {
    title: 'Чому React + Vite — найкращий вибір для сайту у 2026',
    desc: 'Швидкість, SEO, порівняння з WordPress. Чому ми робимо на цьому стеку.',
    href: '/blog/react-vite',
    tag: 'Гайд',
    read: '4 хв',
  },
  {
    title: 'Сайт для бізнесу з нуля: чекліст',
    desc: '10 кроків від ідеї до запуску: домен, хостинг, контент, SEO, аналітика.',
    href: '/blog/site-from-scratch-checklist',
    tag: 'Старт',
    read: '7 хв',
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Блог про веб-розробку та сайти | KRVTSV CORP"
        description="Гайди та чеклісти з веб-розробки: лендінг чи сайт, чому немає заявок, стек React+Vite, запуск сайту для бізнесу. Від веб-студії KRVTSV CORP."
        path="/blog"
        ogType="website"
      />
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Блог</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 mb-4 break-words">
            Гайди та <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">чеклісти</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-12">
            Коротко і по ділу про те, як зробити сайт, що продає. Без води.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                className="group block bg-white border-2 border-gray-100 hover:border-rose-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 bg-rose-100 px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{p.read}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-3 group-hover:text-rose-500 transition-colors break-words">
                  {p.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base break-words">{p.desc}</p>
                <span className="inline-block mt-5 text-rose-500 font-black text-sm uppercase tracking-widest group-hover:underline">
                  Читати →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
