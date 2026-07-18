import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogSiteFromScratch() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Сайт для бізнесу з нуля: чекліст 2026 | KRVTSV CORP"
        description="Запускаєте бізнес і потрібен сайт? Чекліст з 10 пунктів: домен, хостинг, дизайн, контент, SEO, аналітика. Що треба, щоб сайт працював на продажі."
        path="/blog/site-from-scratch-checklist"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Чекліст / Старт · 14 липня 2026</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6 break-words">
            Сайт для бізнесу з нуля: чекліст
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Відкриваєте справу і потрібен сайт? Не знаєте, з чого почати. Ось 10 кроків, які допоможуть зробити сайт, що реально продає, а не просто «є».
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Визначте мету</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Заявки? Продаж товару? Імідж? Мета визначає тип сайту. Для тесту — <Link to="/blog/landing-vs-website" className="text-rose-600 font-bold hover:underline">лендінг</Link>, для магазину — e-commerce.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Оберіть домен</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Коротке ім'я, бажано .com.ua або .ua для України. Уникайте дефісів. Домен — це ваша адреса в інтернеті.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Хостинг або платформа</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Для швидких сучасних сайтів — Cloudflare Pages / Vercel. Швидко, безпечно, дешево. Ми деплоїмо саме туди.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Дизайн під бренд</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Не копіюйте шаблони. Унікальний дизайн + ваші кольори = впізнаваність. Див. наші <Link to="/#project" className="text-rose-600 font-bold hover:underline">проєкти</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Контент</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Чіткі тексти про послуги, ціни, контакти. Без «води». Люди читають по діагоналі — виділяйте головне.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Адаптив</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Перевірте на телефоні. Більшість клієнтів зайдуть саме з мобільного.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Форма заявки</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Проста, зручна, з Telegram-сповіщенням. Щоб заявка не губилася поштою.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">8. Базове SEO</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Метатеги, структура, швидкість. Щоб вас знайшли за запитом «замовити сайт». Входить у пакети — див. <Link to="/#prices" className="text-rose-600 font-bold hover:underline">ціни</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">9. Аналітика</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Підключіть Google Analytics 4 та Meta Pixel. Без даних ви не знатимете, що працює.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">10. Запуск і тест</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Пройдіть сайт як клієнт: замовте заявку, перевірте лист. Все працює? Запускайте рекламу.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Потрібен сайт з нуля?</h3>
            <p className="text-gray-500 mb-6">Зробимо під ключ — від ідеї до запуску.</p>
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
