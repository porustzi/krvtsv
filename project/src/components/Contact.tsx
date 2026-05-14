import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
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
    <section id="contact" className="py-32 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-4">Зв'язок</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-tight text-gray-900 mb-8">
              ДАВАЙ<br />
              <span className="text-rose-500">ПОГОВОРИМО</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md">
              Маєш ідею або вже точно знаєш, що хочеш? Напиши — відповімо
              протягом декількох годин і одразу до діла.
            </p>

            <div className="space-y-6">
              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white rounded-2xl px-6 py-5 hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-rose-200"
              >
                <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Send size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-0.5">Telegram</p>
                  <p className="font-black text-gray-900">@krvtsvcorp</p>
                </div>
              </a>

              <a
                href="mailto:hello@krvtsv.com"
                className="group flex items-center gap-4 bg-white rounded-2xl px-6 py-5 hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-rose-200"
              >
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-0.5">Email</p>
                  <p className="font-black text-gray-900">hello@krvtsv.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center border-2 border-rose-100"
              >
                <CheckCircle size={56} className="text-rose-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase text-gray-900 mb-3">Заявку отримано!</h3>
                <p className="text-gray-500">
                  Зв'яжемось з тобою протягом кількох годин. Поки що можеш написати напряму в Telegram.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 border-2 border-rose-100 space-y-5"
              >
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                    Ім'я
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Твоє ім'я"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-300 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                    Telegram або email
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="@username або email"
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-300 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                    Про проєкт
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Розкажи про свій проєкт..."
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 text-gray-900 font-semibold placeholder-gray-300 focus:outline-none focus:border-rose-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-900 text-white font-black uppercase tracking-widest text-sm py-4 rounded-full hover:bg-rose-500 transition-colors duration-300 disabled:opacity-60"
                >
                  {loading ? 'Відправляємо...' : 'Відправити заявку'}
                </button>

                <p className="text-center text-xs text-gray-400 font-medium">
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
