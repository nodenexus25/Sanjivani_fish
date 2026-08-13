import { useEffect, useState, useCallback } from 'react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { FiDownload, FiArrowRight, FiX, FiChevronLeft, FiChevronRight, FiCalendar, FiClock } from 'react-icons/fi';
import { gallery, upcomingTraining, type GalleryImage } from '../data/gallery';

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Candid%20photograph%20of%20Indian%20farmers%20at%20fish%20harvest%2C%20nets%20full%20of%20silver%20carp%2C%20happy%20faces%2C%20golden%20hour%20warm%20light%2C%20documentary%20style&image_size=landscape_16_9';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const current = lightboxIndex !== null ? gallery[lightboxIndex] : null;

  const open = (idx: number) => setLightboxIndex(idx);
  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, close, next, prev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <>
      <SEO
        title="Gallery & Training"
        description="Photographs of Sanjivani Fisheries ponds, biofloc units, harvests and training programs. Register for upcoming aquaculture training & capacity-building workshops in Kopargaon."
      />
      <PageHero
        title="Gallery & Training."
        subtitle="Our ponds, our harvests, our people — and the next programs to bring you on board."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="divider-gold mb-5" />
            <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
              On-site photographs
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 tracking-tight leading-tight">
              A glimpse of life at the farm.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((img, i) => (
            <Reveal key={img.id} delay={i * 40}>
              <button
                type="button"
                onClick={() => open(i)}
                className={`group relative block w-full overflow-hidden card-hover bg-teal-100 text-left ${
                  i % 5 === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto' : 'aspect-[4/3]'
                }`}
                aria-label={`Open photo: ${img.title}`}
              >
                <img
                  src={img.image}
                  alt={img.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-800 ease-cinematic group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-cinematic" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-600 ease-cinematic">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gold-300 font-semibold mb-1">
                    {img.category}
                  </div>
                  <div className="font-serif text-xl font-semibold text-sand-50 tracking-tight mb-1">
                    {img.title}
                  </div>
                  <div className="text-xs text-sand-100/80">{img.caption}</div>
                </div>
                <div className="absolute top-4 right-4 h-9 w-9 items-center justify-center bg-sand-100/90 text-teal-800 hidden group-hover:flex transition-all duration-500">
                  <FiDownload className="h-4 w-4" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — ${current.caption}`}
          className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={close}
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col lg:flex-row gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute -top-12 right-0 lg:top-0 lg:-right-12 h-11 w-11 flex items-center justify-center text-sand-100 hover:text-terracotta-400 hover:bg-sand-100/10 transition-colors"
            >
              <FiX className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-12 w-12 items-center justify-center bg-sand-100/10 hover:bg-terracotta-500 text-sand-100 transition-colors z-10"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-12 w-12 items-center justify-center bg-sand-100/10 hover:bg-terracotta-500 text-sand-100 transition-colors z-10"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>

            <div className="flex-1 flex items-center justify-center bg-teal-950/50 overflow-hidden">
              <img
                src={current.image}
                alt={current.caption}
                className="max-h-[60vh] lg:max-h-[78vh] w-full object-contain"
              />
            </div>

            <div className="lg:w-80 shrink-0 bg-sand p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold mb-2">
                  {current.category} · {lightboxIndex! + 1} / {gallery.length}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-teal-800 tracking-tight mb-2">
                  {current.title}
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">{current.caption}</p>
              </div>
              <div className="mt-6 flex sm:hidden gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="flex-1 btn-secondary !py-2 !px-4"
                >
                  <FiChevronLeft className="h-5 w-5" /> Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex-1 btn-secondary !py-2 !px-4"
                >
                  Next <FiChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="bg-sand-200/60 border-y border-teal-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="divider-gold mb-5" />
              <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
                Upcoming Training
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-teal-800 tracking-tight leading-tight mb-4">
                Learn aquaculture from the pond up.
              </h2>
              <p className="text-charcoal/75 leading-relaxed mb-6">
                Batch sizes are small (max 20 farmers) so every participant gets hands-on time at the
                hatchery, tanks and pond bank.
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="btn-primary group"
              >
                <FiDownload className="mr-2 h-4 w-4" />
                Download Brochure (PDF)
              </a>
            </Reveal>

            <div className="lg:col-span-8">
              <ol className="relative">
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-teal-200 hidden sm:block" />
                {upcomingTraining.map((t, i) => (
                  <Reveal key={t.id} delay={i * 80}>
                    <li className="relative pl-0 sm:pl-12 pb-10 last:pb-0">
                      <span className="hidden sm:flex absolute left-0 top-2 h-[10px] w-[10px] -translate-x-[4px] bg-terracotta-500 ring-4 ring-sand-200/80" />
                      <div className="bg-sand p-6 sm:p-8 hover:shadow-lg transition-all duration-600 ease-cinematic hover:-translate-y-0.5 border border-teal-100 group">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-gold-600">
                            <FiCalendar className="h-4 w-4" />
                            {t.date}
                          </div>
                          <div className="inline-flex items-center gap-2 text-xs text-teal-600 font-medium">
                            <FiClock className="h-4 w-4" />
                            {t.duration}
                          </div>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-teal-800 tracking-tight mb-4">
                          {t.topic}
                        </h3>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-teal-700 group-hover:text-terracotta-600 transition-colors"
                        >
                          Register your seat
                          <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                        </a>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
