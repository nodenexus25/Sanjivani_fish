import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { orgStrings } from '../data/strings';

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/species', label: 'Species & Products' },
  { to: '/gallery', label: 'Gallery & Training' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-teal-100 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="inline-block" aria-label={`${orgStrings.en.societyShort} home`}>
                <img
                  src="/Fisheries Logo.png"
                  alt="Sanjivani Fisheries Logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gold-400 mt-3">{orgStrings.en.ffpo} · Est. 1996</div>
            </div>
            <p className="text-sm leading-relaxed text-teal-200 max-w-md mb-6">
              {orgStrings.en.societyName} — working with smallholder fish farmers across Maharashtra
              since 1996 to build profitable, climate-resilient aquaculture from hatchery to harvest.
            </p>
            <div className="space-y-2 text-sm text-teal-100">
              <div className="flex items-center gap-3">
                <FiMapPin className="h-4 w-4 text-gold-400 shrink-0" />
                <span>Sahajanandnagar, Post-Shinganapur, Tal. Kopargaon, Dist. Ahilyanagar, Maharashtra 423603</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 text-gold-400 shrink-0" />
                <span>+91 2423 222 888 · +91 98220 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="h-4 w-4 text-gold-400 shrink-0" />
                <a href="mailto:contactus@sanjivanifish.com" className="hover:text-terracotta-300 transition-colors">
                  contactus@sanjivanifish.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-5">Quick Links</div>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="text-teal-100 hover:text-terracotta-300 transition-colors inline-flex items-center gap-2 group">
                    <span className="h-[1px] w-4 bg-teal-500 group-hover:w-6 group-hover:bg-terracotta-400 transition-all duration-500" />
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold mb-5">Sanjivani Group</div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/SANJIVANI GROUP LOGO - JAN 2023.png"
                alt="Sanjivani Group Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="leading-tight text-left">
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold-400 font-semibold">A</div>
                <div className="text-xs font-semibold text-sand-100 font-serif italic">sanjivani Group</div>
                <div className="text-[9px] uppercase tracking-[0.18em] text-gold-400 font-semibold">Brand · Since 1962</div>
              </div>
            </div>
            <p className="text-sm text-teal-200 mb-4 leading-relaxed">
              Part of a diversified group spanning sugar, pharma, and rural development.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://amrutsugar.com" target="_blank" rel="noreferrer" className="text-teal-100 hover:text-terracotta-300 transition-colors">
                  → Amrut Sugar Industries
                </a>
              </li>
              <li>
                <a href="https://sanjivanipharma.com" target="_blank" rel="noreferrer" className="text-teal-100 hover:text-terracotta-300 transition-colors">
                  → Sanjivani Pharma Pvt. Ltd.
                </a>
              </li>
              <li>
                <a href="https://sanjivani.edu" target="_blank" rel="noreferrer" className="text-teal-100 hover:text-terracotta-300 transition-colors">
                  → Sanjivani Education Society
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-teal-600/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-300">
          <div>© {new Date().getFullYear()} {orgStrings.en.societyName}. All rights reserved.</div>
          <div className="text-teal-300">
            <span className="text-gold-400">A Sanjivani Group Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
