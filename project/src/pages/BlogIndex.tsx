import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const articles = [
  {
    tag: 'Вибір',
    read: '5 хв',
    title: 'Лендінг чи повноцінний сайт: що обрати бізнесу',
    body: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Найчастіше питання від підприємців: «Мені лендінг чи повноцінний сайт?». Коротка відповідь — залежить від мети. Лендінг — односторінковий сайт з однією метою (заявка/продаж), ідеально для реклами. Робимо за 3–5 днів, від 4 000 грн.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Повноцінний сайт потрібен, якщо у вас кілька напрямків, блог чи каталог послуг — більше точок входу з пошуку, від 10 000 грн. А якщо продаєте товари — потрібен <Link to="/services/ecommerce" className="text-rose-600 font-bold hover:underline">інтернет-магазин</Link> з кошиком та оплатою.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Почніть з лендінгу, якщо тестуєте гіпотезу. Переросте — додамо сторінки. <Link to="/services/web-developer-kyiv" className="text-rose-600 font-bold hover:underline">Замовити сайт у веб-студії Київ →</Link>
        </p>
      </>
    ),
  },
  {
    tag: 'Проблема',
    read: '6 хв',
    title: 'Чому сайт не дає заявок і як це виправити',
    body: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Сайт є, а заявок немає? 7 причин: (1) повільне завантаження — понад 3 сек біжать 50% відвідувачів; (2) немає довіри — додайте кейси та контакти (див. наші <Link to="/#project" className="text-rose-600 font-bold hover:underline">проєкти</Link>); (3) незручна форма — мінімум полів + Telegram-сповіщення.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          (4) сайт не адаптовано під телефон (60%+ заходів з мобільних); (5) немає базового SEO — метатеги, швидкість, структура (входить у <Link to="/#prices" className="text-rose-600 font-bold hover:underline">пакети</Link>); (6) немає заклику до дії; (7) реклама веде на головну, а не на лендінг.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Зробимо безкоштовний аудит і скажемо, чому немає заявок. Пишіть у Telegram @holdingtokens.
        </p>
      </>
    ),
  },
  {
    tag: 'Гайд',
    read: '4 хв',
    title: 'Чому React + Vite — найкращий вибір для сайту у 2026',
    body: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Vite дає миттєвий HMR і бандл менший за Webpack у кілька разів — це прямо впливає на LCP і ранжування. Сайти на React можна пререндерити (SSG), тому пошуковий робот бачить готовий HTML одразу, без очікування JS.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          WordPress простіший для контенту, але повільніший і важчий в обслузі. React/Vite — для сучасних швидких сайтів, лендінгів та SaaS. Якщо потрібен і бекенд — див. <Link to="/services/fullstack" className="text-rose-600 font-bold hover:underline">фуллстак розробку</Link>.
        </p>
      </>
    ),
  },
  {
    tag: 'Старт',
    read: '7 хв',
    title: 'Сайт для бізнесу з нуля: чекліст',
    body: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          10 кроків: (1) визначте мету; (2) оберіть домен (.com.ua/.ua, без дефісів); (3) хостинг — Cloudflare Pages/Vercel; (4) дизайн під бренд (не шаблони); (5) чіткий контент без «води».
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          (6) адаптив під телефон; (7) проста форма заявки з Telegram; (8) базове SEO (метатеги, швидкість); (9) аналітика GA4 + Meta Pixel; (10) тест як клієнт перед запуском реклами.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Потрібен сайт з нуля? Зробимо під ключ — від ідеї до запуску.
        </p>
      </>
    ),
  },
];

export default function BlogIndex() {
  const [open, setOpen] = useState<number | null>(0);
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
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Блог</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 mb-4 break-words">
            Гайди та <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">чеклісти</span>
          </h1>
          <p className="text-gray-500 text-lg mb-12">
            Коротко і по ділу про те, як зробити сайт, що продає. Без води.
          </p>

          <div className="space-y-4">
            {articles.map((a, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={a.title}
                  className={`rounded-3xl border-2 transition-colors ${isOpen ? 'border-rose-200 bg-rose-50/40' : 'border-gray-100 bg-white'}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-rose-500 bg-rose-100 px-3 py-1 rounded-full">{a.tag}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{a.read}</span>
                      </div>
                      <span className="font-black text-gray-900 text-lg sm:text-xl break-words">{a.title}</span>
                    </div>
                    <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${isOpen ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 md:pb-7">{a.body}</div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Потрібен сайт?</h3>
            <p className="text-gray-500 mb-6">Напишіть нам — порадимо безкоштовно.</p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-rose-600 transition-colors">
              Написати нам
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
