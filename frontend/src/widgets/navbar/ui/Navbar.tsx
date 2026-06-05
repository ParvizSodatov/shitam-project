import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGS = ['РУС', 'ТЧК', 'EN'];
const LANG_CODES = ['ru', 'tg', 'en'];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useEffect(() => {
    setSolid(false);
    setOpen(false);
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, [pathname]);

  const transparent = onHome && !solid && !open;

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/about', label: t('nav.about') },
    { to: '/nature', label: t('nav.nature') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/people', label: t('nav.people') },
    { to: '/directions', label: t('nav.directions') },
  ];

  return (
    <>
      <header
        style={{ transition: 'background 0.4s, box-shadow 0.4s' }}
        className={`fixed top-0 inset-x-0 z-50 ${
          transparent ? '' : 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.07)]'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 lg:px-10" style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }}>
          {/* Logo */}
          <NavLink
            to="/"
            className={`font-heading font-black text-xl tracking-widest ${
              transparent ? 'text-white' : 'text-stone-900'
            }`}
          >
            ШИТАМ
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `font-heading text-[13px] font-semibold tracking-wide transition-colors ${
                    transparent
                      ? isActive ? 'text-white' : 'text-white/60 hover:text-white'
                      : isActive ? 'text-emerald-700' : 'text-stone-400 hover:text-stone-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Language select */}
            <div className="relative flex items-center">
              <select
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}
                className={`appearance-none font-heading text-[12px] font-bold cursor-pointer outline-none transition-all border ${
                  transparent
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-emerald-500 hover:text-stone-900'
                }`}
                style={{ letterSpacing: '0.08em', borderRadius: 10, padding: '8px 36px 8px 14px', minWidth: 76 }}
              >
                {LANGS.map((label, i) => (
                  <option key={LANG_CODES[i]} value={LANG_CODES[i]} style={{ color: '#1c1917', background: '#fff' }}>{label}</option>
                ))}
              </select>
              <span className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 ${transparent ? 'text-white/60' : 'text-stone-400'}`}>
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M1 1l3.5 3.5L8 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              aria-label="Menu"
              className={`lg:hidden ml-2 w-8 h-8 flex flex-col items-center justify-center gap-[5px] ${
                transparent ? 'text-white' : 'text-stone-800'
              }`}
            >
              <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 bg-white border-b border-stone-100 transition-all duration-300 overflow-hidden lg:hidden ${
          open ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div style={{ maxWidth: 1400, margin: '0 auto', width: '100%' }} className="px-6">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 font-heading text-[13px] font-semibold tracking-wide ${
                  isActive ? 'text-emerald-700' : 'text-stone-500'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
