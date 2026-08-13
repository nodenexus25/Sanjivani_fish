import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import { GiDoubleFish } from 'react-icons/gi';
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
      isActive ? 'text-terracotta-500' : 'text-teal-700 hover:text-terracotta-500'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-600 ease-cinematic ${
        scrolled ? 'bg-sand/95 backdrop-blur border-b border-teal-100 shadow-sm' : 'bg-sand border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label={`${orgStrings.en.societyShort} home`}>
            <div className="flex h-11 w-11 items-center justify-center bg-teal-500 text-sand-50 transition-transform duration-600 ease-cinematic group-hover:rotate-[-6deg]">
              <GiDoubleFish className="h-6 w-6" aria-hidden />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg text-teal-800 font-semibold tracking-tight">Sanjivani Fisheries</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-teal-600/80">FFPO · Est. 1996</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right leading-tight pr-4 border-r border-teal-200">
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold-600 font-semibold">An Initiative of</div>
              <div className="text-sm font-semibold text-teal-800">{orgStrings.en.groupName}</div>
            </div>
            <Link to="/contact" className="btn-primary group">
              Enquire Now
              <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-600 ease-cinematic group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-teal-800 hover:text-terracotta-500 transition-colors"
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
          open ? 'max-h-[80vh] opacity-100 border-t border-teal-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 sm:px-6 py-6 space-y-1 bg-sand-100/80" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 uppercase tracking-wider text-sm border-l-2 transition-all duration-300 ${
                  isActive
                    ? 'border-terracotta-500 text-terracotta-600 bg-sand'
                    : 'border-transparent text-teal-700 hover:border-teal-400 hover:bg-sand'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 mt-4 border-t border-teal-100">
            <Link to="/contact" className="btn-primary w-full">
              Enquire Now
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="pt-4 text-center text-xs text-teal-600">
            <div className="uppercase tracking-[0.18em] text-gold-600 font-semibold">An Initiative of</div>
            <div className="font-semibold text-teal-800 text-sm mt-1">{orgStrings.en.groupName}</div>
          </div>
        </nav>
      </div>
    </header>
  );
}
