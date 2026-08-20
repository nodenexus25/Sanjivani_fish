import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { FiAward, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { GiLaurelCrown } from 'react-icons/gi';
import { milestones } from '../data/stats';

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Old%20black%20and%20white%20photograph%20of%20village%20cooperative%20leaders%20in%20Maharashtra%20farmland%2C%20vintage%20nostalgic%20composition%2C%20soft%20golden%20light&image_size=landscape_16_9';

const founderImage = '/founder image.png';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Founded 1996 by Late Hon. Shankarraoji Genuji Kolhe. Sanjivani Fisheries — FFPO, Kopargaon — three decades of co-operative fish farming and rural prosperity in Maharashtra."
      />
      <PageHero
        title="A story of water, land & community."
        subtitle="From a small 1996 co-operative to a 2,400-farmer FFPO — the Sanjivani story, in short."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold-200 via-gold-100 to-sand-200 -z-10 rotate-[-3deg]" />
              <div className="relative aspect-square overflow-hidden border-4 border-white shadow-2xl">
                <img src={founderImage} alt="Late Hon. Shri. Shankarraoji Genuji Kolhe" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-900/70 to-transparent p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-300 font-semibold">In Fond Memory</div>
                  <div className="text-sand-100 font-serif font-semibold mt-1">Founder & Mentor</div>
                </div>
              </div>
              <div className="absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center bg-gold-500 text-sand-100 shadow-xl">
                <GiLaurelCrown className="h-8 w-8" aria-hidden />
              </div>
              <div className="absolute -bottom-5 -right-5 h-20 w-20 border-2 border-gold-400 flex items-center justify-center">
                <div className="h-12 w-12 border-2 border-gold-400 flex items-center justify-center">
                  <FiAward className="h-5 w-5 text-gold-500" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="divider-gold mb-5" />
              <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
                Our Founder
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 tracking-tight leading-tight mb-6">
                Late Hon. Shri. Shankarraoji Genuji Kolhe
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  A visionary leader, social reformer and three-time MLA from Kopargaon,
                  Shankarraoji dedicated his life to lifting the farmer. He believed water was
                  Maharashtra's true wealth — and fish farming its quietest, most equitable form.
                </p>
                <p>
                  In 1996 he registered Sanjivani Matsya Vikas as a co-operative with barely
                  forty farmers. Today, more than 2,400 families across six talukas farm with
                  his name as their compass.
                </p>
              </div>
              <div className="mt-8 p-6 bg-teal-50 border-l-4 border-teal-500 italic font-serif text-lg text-teal-800 leading-relaxed">
                "Give a farmer a pond, and his family eats for a generation."
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand-200/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex justify-center mb-5">
                <div className="divider-gold" />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
                Milestones
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 tracking-tight">
                A brief journey, measured in water.
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-teal-300 via-gold-400 to-teal-300" />
            <div className="space-y-12 md:space-y-0">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 120}>
                  <div className={`md:grid md:grid-cols-2 md:gap-16 items-center ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                    <div className={`md:pb-20 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="inline-flex items-center gap-3 mb-3">
                        <span className="font-serif text-5xl font-semibold text-terracotta-500 tracking-tight">
                          {m.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-teal-800 mb-2 tracking-tight">
                        {m.title}
                      </h3>
                      <p className="text-charcoal/75 leading-relaxed">{m.description}</p>
                    </div>
                    <div className={`hidden md:flex md:pb-20 justify-center ${i % 2 === 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'}`}>
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-gold-500 ring-4 ring-sand-200" />
                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 h-[1px] w-12 bg-gold-400" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <Reveal className="lg:col-span-5">
            <div className="divider-gold mb-5" />
            <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
              Mission
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-teal-800 tracking-tight leading-tight">
              Profit for the pond. Dignity for the farmer.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="bg-teal-50 p-10 border-l-4 border-terracotta-500">
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-teal-800">
                To empower every smallholder fish farmer in Maharashtra with <em>affordable quality seed</em>,{' '}
                <em>nutritious feed</em>, <em>sound technical guidance</em> and <em>fair market access</em> —
                so aquaculture remains a profitable, climate-resilient, and proud livelihood for generations.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <div className="inline-flex items-center gap-2 text-teal-700">
                  <FiBriefcase className="h-4 w-4 text-gold-600" /> FFPO registered · member-owned
                </div>
                <div className="inline-flex items-center gap-2 text-teal-700">
                  <FiMapPin className="h-4 w-4 text-gold-600" /> Kopargaon HQ · 6 talukas served
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
