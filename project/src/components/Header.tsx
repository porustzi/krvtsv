import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Переваги', href: '#advantages' },
  { label: 'Проєкт', href: '#project' },
  { label: 'Ціни', href: '#prices' },
  { label: 'Процес', href: '#process' },
  { label: 'Контакти', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight text-gray-900 hover:text-rose-500 transition-colors">
          KRVTSV<span className="text-rose-500"> CORP</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-widest text-gray-600 hover:text-rose-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://t.me/krvtsvcorp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-500 text-white text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-rose-600 transition-colors"
          >
            Telegram
          </a>
        </nav>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-rose-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-rose-500 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://t.me/krvtsvcorp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-500 text-white text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-full text-center hover:bg-rose-600 transition-colors"
              >
                Telegram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
