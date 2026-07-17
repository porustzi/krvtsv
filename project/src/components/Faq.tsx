import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

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
    a: 'Напишіть нам у Telegram @holdingtokens або на пошту krvtsvcorp@gmail.com. Обговорюємо завдання, фіксуємо деталі письмово і одразу до роботи.',
  },
  {
    q: 'Чи допомагаєте ви з SEO та просуванням?',
    a: 'Так. Базова та повна SEO-оптимізація входить у пакети бізнес-сайту та магазину: метатеги, мікророзмітка, швидкість та індексація.',
  },
  {
    q: 'Де знаходиться веб-студія KRVTSV CORP?',
    a: 'Ми працюємо з Києва та обслуговуємо клієнтів по всій Україні. Все спілкування — онлайн у Telegram, тому географія не обмежує співпрацю.',
  },
  {
    q: 'Чи можна замовити веб-сайт в Україні дистанційно?',
    a: 'Так, повністю дистанційно. Напишіть у Telegram @holdingtokens або на пошту — обговоримо завдання, погодимо структуру і запустимо сайт без особистих зустрічей.',
  },
  {
    q: 'Скільки коштує веб-розробник для сайту під ключ?',
    a: 'Вартість залежить від типу сайту: лендінг — від 4000 грн, бізнес-сайт — від 10000 грн, магазин — від 15000 грн. Фіксована ціна без прихованих доплат.',
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
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.85] text-gray-900 break-words">
            ПИТАННЯ<br />
            <span className="text-rose-500">ТА ВІДПОВІДІ</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
