import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogNoLeads() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Seo
        title="Чому сайт не дає заявок і як це виправити | KRVTSV CORP"
        description="Сайт є, а заявок немає? Розбираємо 7 причин: швидкість, довіра, форми, мобільна версія, SEO. Покроковий чекліст, як виправити за 1 день."
        path="/blog/no-leads-from-site"
        ogType="article"
      />
      <Header />
      <main>
        <article className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-3xl mx-auto px-4 sm:px-8">
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Проблема / Рішення · 12 липня 2026</p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 mb-6 break-words">
            Чому сайт не дає заявок і як це виправити
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Класична ситуація: сайт запущено, гроші витрачені, а дзвінків і повідомлень — нуль. Розбираємо 7 причин, чому так буває, і що зробити.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Сайт повільно грузиться</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо сторінка відкривається довше 3 секунд — половина відвідувачів тікає. Перевірте швидкість у PageSpeed Insights. Ми робимо сайти з LCP до 0.8s на React/Vite.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Немає довіри</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Без відгуків, кейсів та контактів сайт виглядає як «одноденка». Додайте реальні проєкти (див. наші <Link to="/#project" className="text-rose-600 font-bold hover:underline">кейси</Link>), фото, посилання на соцмережі.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Форма заявки незручна</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Довга форма = менше заявок. Мінімум полів (ім'я + телефон/Telegram), велика кнопка, видимий номер. У нас форма відкриває чат у Telegram одним кліком.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Не адаптовано під телефон</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Понад 60% заходів — з мобільних. Якщо сайт «їде» на смартфоні, ви втрачаєте більшість клієнтів. Адаптив — обов'язково.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Сайт не в пошуку</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Без базового SEO вас ніхто не знайде. Потрібні метатеги, мікророзмітка, швидкість і структура. Це входить у наші пакети — див. <Link to="/#prices" className="text-rose-600 font-bold hover:underline">ціни</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Немає заклику до дії</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Відвідувач має розуміти, що робити: «Замовити», «Отримати консультацію», «Написати». CTA має бути на кожному екрані.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Реклама веде на головну</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ведіть рекламу на лендінг під конкретну пропозицію, а не на головну. Конверсія зросте в рази.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Перевірити свій сайт?</h3>
            <p className="text-gray-500 mb-6">Зробимо безкоштовний аудит і скажемо, чому немає заявок.</p>
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
