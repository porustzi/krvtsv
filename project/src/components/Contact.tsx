import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    setSent(true);
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-32 bg-rose-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left max-w-[620px]"
          >
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">
              ЗВ'ЯЗОК
            </p>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-8xl font-black uppercase leading-[0.9] tracking-tight text-gray-900 mb-6 md:mb-8">
              ДАВАЙ
              <br />

              <span className="text-rose-500 block break-words">
                ПОГОВОРИМО
              </span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md mx-auto lg:mx-0">
              Маєш ідею або вже точно знаєш, що хочеш?
              Напиши — відповімо протягом декількох
              годин і одразу до діла.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-sm mx-auto lg:mx-0">
              
              {/* TELEGRAM */}
              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 md:px-6 md:py-5 border-2 border-transparent hover:border-rose-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Send size={18} className="text-white" />
                </div>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-0.5">
                    Telegram
                  </p>

                  <p className="font-black text-sm md:text-base text-gray-900">
                    @krvtsvcorp
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@krvtsv.com"
                className="group flex items-center gap-4 bg-white rounded-2xl px-5 py-4 md:px-6 md:py-5 border-2 border-transparent hover:border-rose-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-white" />
                </div>

                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-0.5">
                    Email
                  </p>

                  <p className="font-black text-sm md:text-base text-gray-900">
                    hello@krvtsv.com
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 md:p-12 text-center border-2 border-rose-100"
              >
                <CheckCircle
                  size={48}
                  className="text-rose-500 mx-auto mb-4"
                />

                <h3 className="text-xl md:text-2xl font-black uppercase text-gray-900 mb-3">
                  Заявку отримано!
                </h3>

                <p className="text-gray-500 text-sm md:text-base">
                  Зв'яжемось з тобою протягом кількох годин.
                  Поки що можеш написати напряму в Telegram.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 md:p-10 border-2 border-rose-100 space-y-4 md:space-y-5 shadow-xl shadow-rose-500/5 w-full"
              >
                {/* NAME */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Ім'я
                  </label>

                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    placeholder="Твоє ім'я"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 md:px-5 md:py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-300 transition-colors"
                  />
                </div>

                {/* CONTACT */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Telegram або email
                  </label>

                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        contact: e.target.value,
                      })
                    }
                    placeholder="@username або email"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 md:px-5 md:py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-300 transition-colors"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Про проєкт
                  </label>

                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    placeholder="Розкажи про свій проєкт..."
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 md:px-5 md:py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-300 transition-colors resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 text-white font-black uppercase tracking-widest text-xs md:text-sm py-4 rounded-full hover:bg-rose-500 transition-all duration-300 disabled:opacity-60 shadow-lg hover:shadow-rose-500/20 active:scale-95"
                >
                  {loading
                    ? 'Відправляємо...'
                    : 'Відправити заявку'}
                </button>

                <p className="text-center text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                  Або одразу в{' '}

                  <a
                    href="https://t.me/krvtsvcorp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-500 font-bold hover:underline"
                  >
                    Telegram
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
