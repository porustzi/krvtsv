import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Spotlight } from '../lib/anim';

const faqs = [
  {
    q: 'Скільки коштує створити сайт у KRVTSV CORP?',
    a: 'Лендінг — від 4000 грн, бізнес-сайт — від 10000 грн, інтернет-магазин — від 15000 грн, редизайн — від 6000 грн. Ціна фіксована, без прихованих доплат.',
  },
  {
    q: 'За скільки часу ви робите лендінг?',
    a: 'Лендінг запускаємо за 3–5 днів, бізнес-сайт — за 7–14 днів. Дедлайн для нас священний — без затягувань.',
  },
  {
    q: 'На якому стеку ви робите сайти?',
    a: 'Використовуємо сучасний швидкий стек: React, Vite, Tailwind CSS і Framer Motion. Це дає швидке завантаження та чистий код.',
  },
  {
    q: 'Чи робите ви адаптивну верстку під телефон?',
    a: 'Так. Кожен сайт ідеально виглядає на всіх екранах — від iPhone до ультраширокого монітора.',
  },
  {
    q: 'Як замовити сайт у веб-студії у Києві?',
    a: 'Напишіть нам у Telegram @holdingtokens або на пошту krvtsvcorp@gmail.com. Працюємо дистанційно по всій Україні — обговорюємо завдання, фіксуємо деталі письмово і одразу до роботи.',
  },
  {
    q: 'Чи допомагаєте ви з SEO та просуванням?',
    a: 'Так. Базова та повна SEO-оптимізація входить у пакети бізнес-сайту та магазину: метатеги, мікророзмітка, швидкість та індексація.',
  },
  {
    q: 'Що входить у фуллстак розробку?',
    a: 'Повний цикл: фронтенд на React/Vite, бекенд на Node.js з REST або GraphQL API, база даних, авторизація, інтеграції (платежі, CRM, боти) і деплой. Один виконавець = менше комунікації і швидший запуск.',
  },
  {
    q: 'Скільки коштує розробка e-commerce сайту?',
    a: 'Інтернет-магазин — від 15 000 грн, термін від 14 днів. До складу входять кошик, каталог з фільтрами, оплата (WayForPay/LiqPay/Stripe), адмінка та базова SEO-оптимізація.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="text-xs sm:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4">FAQ</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.9] text-gray-900 break-words">
            Питання<br />
            <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">та відповіді</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Spotlight key={item.q} className="rounded-3xl" from="rgba(244,63,94,0.10)" to="rgba(139,92,246,0.06)">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-3xl border-2 transition-colors ${isOpen ? 'border-rose-200 bg-rose-50/40' : 'border-gray-100 bg-white'}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-black uppercase tracking-wide text-gray-900 text-base sm:text-lg break-words">{item.q}</span>
                    <span className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${isOpen ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 md:px-8 pb-6 md:pb-7 text-gray-500 leading-relaxed text-sm sm:text-base break-words">
                      {item.a}
                    </p>
                  )}
                </motion.div>
              </Spotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
