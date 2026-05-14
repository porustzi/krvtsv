import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <a href="#" className="text-2xl font-black tracking-tight text-white">
            KRVTSV<span className="text-rose-500"> CORP</span>
          </a>

          <div className="flex items-center gap-8">
            {[
              { label: 'Переваги', href: '#advantages' },
              { label: 'Проєкт', href: '#project' },
              { label: 'Ціни', href: '#prices' },
              { label: 'Контакти', href: '#contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-rose-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest">
            © 2024 KRVTSV CORP
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
