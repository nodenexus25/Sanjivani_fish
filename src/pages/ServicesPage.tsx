import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wide%20aerial%20of%20modern%20aquaculture%20facility%20with%20ponds%20biofloc%20tanks%20feed%20mill%20and%20hatchery%20buildings%2C%20organized%20layout%2C%20rural%20Maharashtra&image_size=landscape_16_9';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="What We Do"
        description="Carp hatchery, biofloc ponds, floating feed plant, seed transport, technical guidance, fish marketing, and training — end-to-end aquaculture services for Maharashtra farmers."
      />
      <PageHero
        title="What We Do."
        subtitle="End-to-end aquaculture — from the moment your pond is dry to the day your harvest reaches the market."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <div className="divider-gold mb-5" />
            <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
              Core Services
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 tracking-tight leading-tight">
              Seven services. One promise — your harvest, on time.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-teal-100">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <div className="group relative bg-sand p-8 h-full overflow-hidden card-hover flex flex-col">
                <div className="absolute top-0 left-0 h-[3px] w-full bg-teal-500 group-hover:bg-terracotta-500 transition-colors duration-600 ease-cinematic" />
                <div className="h-14 w-14 flex items-center justify-center bg-teal-50 text-teal-700 group-hover:bg-terracotta-500 group-hover:text-white transition-all duration-600 ease-cinematic mb-6">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold-600 font-semibold mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-semibold text-teal-800 tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-charcoal/75 leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <div className="h-[2px] w-8 bg-gold-400 group-hover:w-16 group-hover:bg-terracotta-400 transition-all duration-600 ease-cinematic mb-4" />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-teal-700 group-hover:text-terracotta-600 transition-colors"
                >
                  Enquire
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-teal-50 border-y border-teal-100 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <div className="divider-gold mb-5" />
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-teal-800 tracking-tight leading-tight mb-4">
                Not sure where to begin?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Book a free 45-minute consultation. We'll walk through your land, water source and budget — then
                recommend what to stock, how to stock, and when to harvest.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link to="/contact" className="btn-primary">
                  Book a Consultation
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/species" className="btn-secondary">
                  Browse Species
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
