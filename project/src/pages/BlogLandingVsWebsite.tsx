import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogLandingVsWebsite() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Лендінг чи повноцінний сайт: що обрати бізнесу у 2026 | KRVTSV CORP"
        description="Лендінг або сайт — що вибрати для бізнесу? Порівнюємо вартість, терміни, конверсію та коли потрібен інтернет-магазин. Гайд від веб-студії KRVTSV CORP."
        path="/blog/landing-vs-website"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Гайд / Вибір · 10 липня 2026</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6 break-words">
            Лендінг чи повноцінний сайт: що обрати бізнесу
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Одне з найпоширеніших запитань від підприємців: лендінг чи повноцінний сайт? Відповідь залежить від мети. Розбираємо варіанти, щоб ви не переплатили за непотрібний функціонал.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Що таке лендінг</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Лендінг (landing page) — односторінковий сайт з однією ціллю: отримати заявку або продаж. Оптимальне рішення для запуску реклами в Facebook, Instagram або Google Ads. Термін — 3–5 днів, вартість — від 4 000 грн.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Коли потрібен повноцінний сайт</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо у вас кілька напрямків бізнесу, каталог послуг або блог — потрібен багатосторінковий сайт. Це дає більше точок входу з пошуку та краще покриття запитань клієнтів. Вартість — від 10 000 грн, термін — 7–14 днів.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Коли потрібен інтернет-магазин</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Продаєте товари онлайн? Тоді потрібен магазин з кошиком, платіжною системою та каталогом. Це окремий тип проєкту — <Link to="/services/ecommerce" className="text-rose-600 font-bold hover:underline">розробка e-commerce</Link> від 15 000 грн.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Порівняння в таблиці</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 pr-4 font-black text-gray-900">Тип</th>
                  <th className="py-3 pr-4 font-black text-gray-900">Ціна</th>
                  <th className="py-3 pr-4 font-black text-gray-900">Термін</th>
                  <th className="py-3 font-black text-gray-900">Коли</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100"><td className="py-3 pr-4 font-bold">Лендінг</td><td className="py-3 pr-4">від 4 000 грн</td><td className="py-3 pr-4">3–5 днів</td><td className="py-3">Запуск реклами</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4 font-bold">Бізнес-сайт</td><td className="py-3 pr-4">від 10 000 грн</td><td className="py-3 pr-4">7–14 днів</td><td className="py-3">Багато послуг</td></tr>
                <tr><td className="py-3 pr-4 font-bold">Магазин</td><td className="py-3 pr-4">від 15 000 грн</td><td className="py-3 pr-4">14–21 день</td><td className="py-3">Продаж товарів</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Висновок</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Почніть з лендінгу, якщо тестуєте гіпотезу. Якщо бізнес зросте — розширите до багатосторінкового сайту. Потрібна допомога з вибором? <Link to="/services/web-developer-kyiv" className="text-rose-600 font-bold hover:underline">Замовте сайт у веб-студії Київ</Link>.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Не знаєте, що обрати?</h3>
            <p className="text-gray-500 mb-6">Напишіть нам — проконсультуємо безкоштовно.</p>
            <a href="https://t.me/holdingtokens" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 text-white font-black uppercase tracking-widest text-sm px-8 py-5 rounded-full hover:bg-rose-600 transition-colors">
              Написати нам
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
