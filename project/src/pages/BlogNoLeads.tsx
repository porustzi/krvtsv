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
            Ситуація: сайт запущено, витрати зроблені, а заявок немає. Розбираємо 7 найпоширеніших причин та способи їх усунути.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Сайт повільно завантажується</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Якщо сторінка відкривається довше 3 секунд — більшість відвідувачів ідуть. Перевірте швидкість у PageSpeed Insights. Ми робимо сайти з LCP до 0.8 с на React/Vite.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Бракує довіри</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Без портфоліо, контактів та соціальних доказів сайт виглядає ненадійно. Додайте кейси (наприклад, наші <Link to="/#project" className="text-rose-600 font-bold hover:underline">проєкти</Link>), реальні фото, посилання на соцмережі.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Незручна форма заявки</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Чим довша форма — тим менше заявок. Мінімум полів, велика кнопка, контактний номер на видному місці. У нашій формі достатньо ім'я та контакту — все інше в Telegram.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Неадаптовано під мобільні</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Понад 60% заходів — зі смартфонів. Якщо сайт погано виглядає на телефоні, ви втрачаєте більшість потенційних клієнтів.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">5. Сайт не видно в пошуку</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Без базового SEO клієнти вас просто не знайдуть. Метатеги, мікророзмітка, швидкість та структура — обов'язковий мінімум. Це входить у наші пакети — див. <Link to="/#prices" className="text-rose-600 font-bold hover:underline">ціни</Link>.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">6. Відсутній заклик до дії</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Відвідувач має чітко розуміти, що робити далі: «Замовити», «Отримати консультацію», «Написати». CTA-кнопка потрібна на кожному ключовому екрані.
          </p>

          <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">7. Реклама веде на головну сторінку</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Спрямовуйте рекламу на цільову сторінку під конкретну пропозицію, а не на головну. Конверсія зросте в рази.
          </p>

          <div className="mt-12 bg-rose-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-3">Перевірити свій сайт?</h3>
            <p className="text-gray-500 mb-6">Зробимо безкоштовний аудит і знайдемо причину.</p>
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
