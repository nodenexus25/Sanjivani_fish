import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { orgStrings } from '../data/strings';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'What We Do' },
  { to: '/species', label: 'Species' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm uppercase tracking-wider font-medium transition-colors duration-600 ease-cinematic ${
      isActive ? 'text-terracotta-400' : 'text-teal-100 hover:text-terracotta-400'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-600 ease-cinematic ${
        scrolled ? 'bg-teal-700/95 backdrop-blur border-b border-teal-600/60 shadow-lg' : 'bg-teal-700 border-b border-teal-600/30'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-1 flex items-center">
            <Link to="/" className="flex items-center gap-3 group" aria-label={`${orgStrings.en.societyShort} home`}>
              <img
                src="/Fisheries Logo.png"
                alt="Sanjivani Fisheries Logo"
                className="h-14 w-auto object-contain transition-transform duration-600 ease-cinematic group-hover:scale-[1.03]"
              />
              <div className="leading-tight">
                <div className="font-serif text-lg text-sand-100 font-semibold tracking-tight">Sanjivani Fisheries</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold-400">FFPO · Est. 1996</div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex-1 hidden lg:flex items-center justify-end">
            <div className="flex items-center gap-3">
              <img
                src="/SANJIVANI GROUP LOGO - JAN 2023.png"
                alt="Sanjivani Group Logo"
                className="h-14 w-auto object-contain"
              />
              <div className="leading-tight text-left">
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold">An Initiative of</div>
                <div className="text-sm font-semibold text-sand-100">{orgStrings.en.groupName}</div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-sand-100 hover:text-terracotta-400 transition-colors"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-600 ease-cinematic ${
          open ? 'max-h-[80vh] opacity-100 border-t border-teal-600/60' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 sm:px-6 py-6 space-y-1 bg-teal-700/95" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase tracking-wider text-sm border-l-2 transition-all duration-300 ${
                  isActive
                    ? 'border-terracotta-400 text-terracotta-400 bg-teal-600/40'
                    : 'border-transparent text-teal-100 hover:border-teal-400 hover:bg-teal-600/20'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 flex flex-col items-center text-xs">
            <div className="uppercase tracking-[0.18em] text-gold-400 font-semibold mb-2">An Initiative of</div>
            <img
              src="/SANJIVANI GROUP LOGO - JAN 2023.png"
              alt="Sanjivani Group Logo"
              className="h-9 w-auto object-contain"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
