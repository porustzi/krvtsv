import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Роботи', href: '#portfolio' },
  { label: 'Переваги', href: '#features' },
  { label: 'Ціни', href: '#pricing' },
  { label: 'Процес', href: '#process' },
  { label: 'Контакти', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-pink-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-black text-xl tracking-tight text-black hover:text-pink-500 transition-colors">
          KRVTSV<span className="text-pink-500">.</span>CORP
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-pink-500 transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://t.me/krvtsvcorp"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Написати
        </a>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pink-100 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-semibold text-gray-700 hover:text-pink-500 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/krvtsvcorp"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex bg-pink-500 text-white text-sm font-bold px-5 py-2.5 rounded-full"
                >
                  Написати в Telegram
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
