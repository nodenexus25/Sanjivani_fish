import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiDroplet, FiPackage, FiHeart, FiChevronRight } from 'react-icons/fi';
import { GiFishEggs, GiBubbles, GiFlour, GiPlantRoots } from 'react-icons/gi';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { stats } from '../data/stats';

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wide%20panoramic%20fish%20farm%20ponds%20at%20golden%20hour%20sunrise%2C%20aerators%20spraying%20water%2C%20Kopargaon%20Maharashtra%20rural%20landscape%2C%20dramatic%20sky&image_size=landscape_16_9';

const snapshotCards = [
  {
    icon: GiFishEggs,
    title: 'Carp Hatchery',
    blurb: '18 crore quality seed / year — Rohu, Katla, Mrigal & more.',
    to: '/services',
    accent: 'from-teal-500 to-teal-700',
  },
  {
    icon: GiBubbles,
    title: 'Biofloc Systems',
    blurb: 'High-density tank farming with zero water exchange.',
    to: '/services',
    accent: 'from-teal-600 to-teal-800',
  },
  {
    icon: GiFlour,
    title: 'Feed Plant',
    blurb: '10 TPD extruded floating feed — nutritionally balanced.',
    to: '/services',
    accent: 'from-gold-500 to-gold-700',
  },
  {
    icon: GiPlantRoots,
    title: 'Farmer Community',
    blurb: '2,400+ members, 850 ponds under advisory across Maharashtra.',
    to: '/about',
    accent: 'from-terracotta-500 to-terracotta-700',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Sanjivani Fisheries — FFPO empowering 2,400+ fish farmers in Maharashtra with carp hatchery, biofloc ponds, feed plant, training and end-to-end market linkages since 1996."
      />

      <section className="relative w-full h-[88vh] min-h-[560px] max-h-[760px] overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-teal-800/55 to-charcoal-800/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="divider-gold" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold">
                FFPO · Est. 1996 · Kopargaon
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-sand-50 leading-[1.05] tracking-tight max-w-4xl">
              Sustainable Aquaculture for{' '}
              <span className="text-terracotta-400 italic">Rural Prosperity.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg sm:text-xl text-sand-100/85 max-w-2xl leading-relaxed">
              Sanjivani Matsya Vikas Co-operative Society Ltd. — a Fish Farmer Producer Organization
              building profitable, climate-resilient fish farming from pond to market.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="btn-primary group">
                Our Services
                <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-600 ease-cinematic group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary group !border-sand-100 !text-sand-100 hover:!bg-sand-100 hover:!text-teal-800">
                Contact Us
                <FiChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sand to-transparent pointer-events-none" />
      </section>

      <section className="relative -mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-teal-100 shadow-2xl">
            {snapshotCards.map((card, i) => (
              <Link
                key={card.title}
                to={card.to}
                className="group relative bg-sand p-8 overflow-hidden card-hover"
              >
                <div className={`absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${card.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-600 ease-cinematic`} />
                <div className="relative">
                  <card.icon className="h-10 w-10 text-teal-700 mb-5 group-hover:text-terracotta-500 transition-colors duration-500" />
                  <h3 className="font-serif text-xl font-semibold text-teal-800 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed mb-5">{card.blurb}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-terracotta-600 group-hover:gap-3 transition-all duration-500">
                    Learn more <FiArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <span className="absolute top-6 right-6 font-serif text-3xl text-teal-100 group-hover:text-teal-200 transition-colors duration-500">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="divider-gold mb-5" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 tracking-tight leading-tight mb-5">
              Three decades of fish farming. <span className="text-terracotta-500 italic">Rooted</span> in community.
            </h2>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Founded in 1996 by the late Hon. Shankarraoji Genuji Kolhe as a co-operative, today
              Sanjivani operates as an FFPO — uniting seed production, feed manufacture, technical
              guidance and marketing under one roof for the smallholder farmer.
            </p>
            <Link to="/about" className="btn-secondary group">
              Our Story
              <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-600 ease-cinematic group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s, i) => (
                <Reveal key={s.id} delay={i * 100}>
                  <div className="bg-teal-50 p-8 sm:p-10 border-l-4 border-teal-500 hover:border-terracotta-500 transition-colors duration-500 card-hover h-full">
                    <div className="font-serif text-4xl sm:text-5xl font-semibold text-teal-800 mb-2 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-sm uppercase tracking-[0.15em] text-teal-600 font-medium">
                      {s.label}
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-gold-500">
                      {[...Array(3)].map((_, j) => (
                        <span key={j} className="h-1 w-6 bg-gold-400" />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-4 p-6 bg-sand-200/60 border-l-4 border-gold-500">
              <FiUsers className="h-6 w-6 text-gold-600 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed text-charcoal/80">
                Member-owned. Member-governed. Every service, from stocking advice to market linkages,
                is priced for farmer margins first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-24 h-96 w-96 rounded-full bg-terracotta-500 blur-3xl" />
          <div className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-gold-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="flex justify-center mb-6">
              <div className="divider-gold" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-sand-50 tracking-tight leading-tight">
              Planning a new farm? Scaling an existing one?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-teal-100/85 max-w-2xl mx-auto leading-relaxed">
              From a half-acre pond to a 40-tank biofloc unit — our team visits your site,
              runs the economics, and walks with you till your first harvest.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary group bg-terracotta-400 hover:bg-terracotta-300">
                <FiHeart className="mr-2 h-4 w-4" />
                Talk to our Team
              </Link>
              <Link to="/species" className="btn-secondary group !border-sand-100 !text-sand-100 hover:!bg-sand-100 hover:!text-teal-800">
                <FiPackage className="mr-2 h-4 w-4" />
                See Species & Seed
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
