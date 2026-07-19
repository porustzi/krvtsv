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
            Відкриваєте бізнес і потрібен сайт, але не знаєте, з чого почати? Ось 10 кроків, які допоможуть створити працюючий сайт, а не просто сторінку в інтернеті.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Визначте мету сайту</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Заявки, продаж товару чи імідж? Мета визначає тип сайту. Для тесту гіпотези підійде <Link to="/blog/landing-vs-website" className="text-rose-600 font-bold hover:underline">лендінг</Link>, для продажу — інтернет-магазин.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Оберіть доменне ім'я</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Коротка назва, бажано .com.ua або .ua. Уникайте дефісів та складних написань. Домен — ваша адреса в інтернеті на роки вперед.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Виберіть хостинг</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Для сучасних сайтів — Cloudflare Pages, Vercel або Netlify. Швидко, безпечно, економно. Ми деплоїмо саме на такі платформи.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Дизайн відповідно до бренду</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Не використовуйте шаблонні рішення. Унікальний дизайн і фірмові кольори — основа впізнаваності. Приклади — у наших <Link to="/#project" className="text-rose-600 font-bold hover:underline">проєктах</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Підготуйте контент</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Чіткі тексти про послуги, ціни та контакти. Люди сканують сторінку по діагоналі — виділяйте головне, уникайте води.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Адаптивна верстка</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Перевірте, як сайт виглядає на телефоні. Більшість клієнтів заходитимуть саме з мобільного пристрою.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Форма зворотного зв'язку</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Проста, зручна форма зі сповіщенням у Telegram, щоб жодна заявка не загубилася.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">8. Базова SEO-оптимізація</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Метатеги, структура, швидкість завантаження. Щоб вас знаходили за запитом «замовити сайт Київ». SEO входить у наші пакети — див. <Link to="/#prices" className="text-rose-600 font-bold hover:underline">ціни</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">9. Підключіть аналітику</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Google Analytics 4 та Meta Pixel. Без даних ви не знатимете, що працює ефективно, а що потребує доопрацювання.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">10. Запуск і тестування</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Пройдіть шлях клієнта: заповніть форму, перевірте сповіщення. Усе працює? Можна запускати рекламу.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Потрібен сайт з нуля?</h3>
            <p className="text-gray-500 mb-6">Зробимо під ключ — від ідеї до запуску за 3–14 днів.</p>
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
