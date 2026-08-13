import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { species, type Species } from '../data/species';

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Assortment%20of%20freshwater%20fish%20species%20swimming%20in%20clear%20pond%20water%2C%20Rohu%20Katla%20Tilapia%20prawn%2C%20underwater%20aquaculture%20photography&image_size=landscape_16_9';

type FilterKey = 'all' | 'freshwater' | 'biofloc' | 'ready';

const filters: { key: FilterKey; label: string; sub: string }[] = [
  { key: 'all', label: 'All Species', sub: 'Full catalogue' },
  { key: 'freshwater', label: 'Freshwater Species', sub: 'Traditional pond culture' },
  { key: 'biofloc', label: 'Biofloc Species', sub: 'Tank & high-density' },
  { key: 'ready', label: 'Ready to Sell', sub: 'Market-size harvest' },
];

export default function SpeciesPage() {
  const [active, setActive] = useState<FilterKey>('all');

  const filtered = useMemo<Species[]>(() => {
    if (active === 'all') return species;
    return species.filter((s) => s.category.includes(active));
  }, [active]);

  return (
    <>
      <SEO
        title="Species & Products"
        description="Rohu, Katla, Mrigal, Tilapia, Pangasius, Common Carp, Grass Carp, Silver Carp and freshwater prawn — quality seed and market-ready fish from Sanjivani FFPO."
      />
      <PageHero
        title="Species & Products."
        subtitle="Quality seed and market-ready fish — each grown with Sanjivani guidance — from fry to full harvest."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div
            role="tablist"
            aria-label="Filter species"
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-teal-100 mb-16"
          >
            {filters.map((f) => {
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActive(f.key)}
                  className={`text-left p-5 transition-all duration-600 ease-cinematic ${
                    isActive ? 'bg-teal-700 text-sand-50' : 'bg-sand hover:bg-sand-50 text-teal-800'
                  }`}
                >
                  <div className={`text-[10px] uppercase tracking-[0.2em] font-semibold mb-1 ${isActive ? 'text-gold-300' : 'text-gold-600'}`}>
                    {f.sub}
                  </div>
                  <div className="font-serif text-lg font-semibold tracking-tight">
                    {f.label}
                  </div>
                  <div className={`mt-3 h-[2px] w-8 transition-all duration-500 ${isActive ? 'w-16 bg-terracotta-400' : 'bg-teal-300'}`} />
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((sp, i) => (
            <Reveal key={sp.id} delay={i * 50}>
              <article className="group bg-sand card-hover overflow-hidden border border-teal-100 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-teal-100">
                  <img
                    src={sp.image}
                    alt={sp.commonName}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-800 ease-cinematic group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {sp.category.map((c) => (
                      <span
                        key={c}
                        className={`text-[10px] uppercase tracking-[0.16em] font-semibold px-3 py-1 ${
                          c === 'ready'
                            ? 'bg-terracotta-500 text-white'
                            : c === 'biofloc'
                            ? 'bg-teal-700 text-sand-100'
                            : 'bg-gold-500 text-white'
                        }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-2xl font-semibold text-teal-800 tracking-tight">
                      {sp.commonName}
                    </h3>
                    <span className="text-sm font-semibold text-gold-700 font-serif italic">
                      {sp.marathiLabel}
                    </span>
                  </div>
                  <p className="text-sm italic text-charcoal/70 mb-5 italic font-serif">
                    {sp.scientificName}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-4 border-t border-teal-100">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-teal-700 group-hover:text-terracotta-600 transition-colors"
                    >
                      Enquire about seed
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-charcoal/60">
              No species match this filter yet.
            </div>
          )}
        </section>

        <section className="bg-sand-200/60 border-t border-teal-100 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="flex justify-center mb-5">
                <div className="divider-gold" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-teal-800 tracking-tight mb-4">
                Full guidance from stocking to harvest.
              </h3>
              <p className="text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-8">
                We don't stop at the seed bag. Stocking density, water quality calendar,
                supplementary feeding regime, disease watch and harvest timing — our technical team
                is on call through the entire crop cycle.
              </p>
              <Link to="/contact" className="btn-primary inline-flex">
                Request Species Catalogue (PDF)
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </section>
    </>
  );
}
