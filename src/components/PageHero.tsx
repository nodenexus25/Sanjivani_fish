import { useLocation, Link } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

interface Crumb {
  label: string;
  to: string;
  Icon?: IconType;
}

const labelMap: Record<string, string> = {
  about: 'About',
  services: 'What We Do',
  species: 'Species & Products',
  gallery: 'Gallery & Training',
  contact: 'Contact',
};

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs: Crumb[] = [
    { label: 'Home', to: '/', Icon: FiHome },
    ...segments.map((seg, idx): Crumb => ({
      label: labelMap[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1),
      to: '/' + segments.slice(0, idx + 1).join('/'),
    })),
  ];

  return (
    <section className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] overflow-hidden">
      <img
        src={image}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/50 to-teal-900/90" />
      <div className="absolute inset-0 border-b-4 border-gold-400" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-sand-200/80">
            {crumbs.map((c, i) => (
              <li key={c.to} className="flex items-center gap-2">
                {i > 0 && <FiChevronRight className="h-3 w-3 text-gold-400/70" />}
                {i === crumbs.length - 1 ? (
                  <span className="text-gold-300 font-medium">{c.label}</span>
                ) : (
                  <Link to={c.to} className="inline-flex items-center gap-1.5 hover:text-terracotta-300 transition-colors">
                    {c.Icon ? <c.Icon className="h-3 w-3" /> : null}
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="divider-gold mb-5" />
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-sand-50 tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-sand-100/85 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
