import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ to, children, className, onClick }: NavLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLAnchorElement>(null);

  const isHash = to.startsWith('/#');
  const hash = isHash ? to.slice(2) : '';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.();
    if (isHash) {
      if (location.pathname === '/') {
        scrollToHash(hash);
      } else {
        navigate('/');
        sessionStorage.setItem('scrollTo', hash);
      }
    } else {
      navigate(to);
    }
  };

  return (
    <a ref={ref} href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

function scrollToHash(hash: string) {
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function useHashScrollOnMount() {
  const location = useLocation();
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo');
    if (target) {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => scrollToHash(target), 100);
    }
  }, [location.pathname]);
}
