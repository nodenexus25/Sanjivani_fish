import { useState } from 'react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageCircle, FiCheckCircle, FiUser, FiFileText } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rural%20Maharashtra%20roadside%20view%20towards%20Kopargaon%20town%2C%20agricultural%20fields%2C%20warm%20afternoon%20light%2C%20editorial%20travel%20photography&image_size=landscape_16_9';

const enquiryOptions = [
  'Pond setup / consultation',
  'Seed / broodstock purchase',
  'Fish feed enquiry',
  'Biofloc setup',
  'Training registration',
  'Marketing / harvest purchase',
  'Other',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
}

const initialForm: FormState = { name: '', phone: '', email: '', type: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your full name.';
    if (!/^[+0-9\s-]{10,}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid phone number (10+ digits).';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid email address.';
    if (!form.type) e.type = 'Please select an enquiry type.';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const fieldCls = (key: keyof FormState) =>
    `w-full px-4 py-3.5 bg-sand border-2 ${
      errors[key] ? 'border-terracotta-500 focus:border-terracotta-500' : 'border-teal-100 focus:border-teal-500'
    } text-charcoal placeholder:text-charcoal/40 transition-colors duration-300`;

  const labelCls = 'block text-xs uppercase tracking-[0.18em] font-semibold text-teal-800 mb-2';

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Sanjivani Fisheries FFPO, Kopargaon. Phone, email, WhatsApp and directions. Submit an enquiry for seed, feed, pond setup, biofloc or training — we reply within a day."
      />
      <PageHero
        title="Get in touch."
        subtitle="We typically respond within a day. For urgent harvest or seed enquiries, please call or WhatsApp directly."
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <div className="divider-gold mb-5" />
              <div className="text-xs uppercase tracking-[0.25em] text-gold-600 font-semibold mb-3">
                Send an Enquiry
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-teal-800 tracking-tight leading-tight mb-8">
                Tell us about your farm.
              </h2>
            </Reveal>

            {submitted ? (
              <Reveal>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-8 sm:p-10">
                  <div className="flex items-start gap-4">
                    <FiCheckCircle className="h-8 w-8 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-teal-800 tracking-tight mb-2">
                        Thank you — your enquiry is with us.
                      </h3>
                      <p className="text-charcoal/80 leading-relaxed mb-6">
                        Our team will reach out by phone or email within one business day.
                        For anything time-sensitive, please call the numbers on the right.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm(initialForm);
                        }}
                        className="btn-secondary"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <Reveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelCls}>
                        <span className="inline-flex items-center gap-2">
                          <FiUser className="h-3.5 w-3.5 text-gold-600" /> Full Name *
                        </span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="e.g. Rajesh Patil"
                        className={fieldCls('name')}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                      />
                      {errors.name && (
                        <p id="err-name" className="mt-1.5 text-xs text-terracotta-600">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>
                        <span className="inline-flex items-center gap-2">
                          <FiPhone className="h-3.5 w-3.5 text-gold-600" /> Phone / Mobile *
                        </span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+91 98 220 12345"
                        className={fieldCls('phone')}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                      />
                      {errors.phone && (
                        <p id="err-phone" className="mt-1.5 text-xs text-terracotta-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={60}>
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      <span className="inline-flex items-center gap-2">
                        <FiMail className="h-3.5 w-3.5 text-gold-600" /> Email
                      </span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="you@example.com"
                      className={fieldCls('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                    />
                    {errors.email && (
                      <p id="err-email" className="mt-1.5 text-xs text-terracotta-600">{errors.email}</p>
                    )}
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div>
                    <label htmlFor="type" className={labelCls}>
                      <span className="inline-flex items-center gap-2">
                        <FiFileText className="h-3.5 w-3.5 text-gold-600" /> Enquiry Type *
                      </span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={form.type}
                      onChange={(e) => update('type', e.target.value)}
                      className={fieldCls('type')}
                      aria-invalid={!!errors.type}
                      aria-describedby={errors.type ? 'err-type' : undefined}
                    >
                      <option value="">Select one…</option>
                      {enquiryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.type && (
                      <p id="err-type" className="mt-1.5 text-xs text-terracotta-600">{errors.type}</p>
                    )}
                  </div>
                </Reveal>
                <Reveal delay={180}>
                  <div>
                    <label htmlFor="message" className={labelCls}>
                      <span className="inline-flex items-center gap-2">
                        <FiMessageCircle className="h-3.5 w-3.5 text-gold-600" /> Message *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Pond size, water source, timeline, crop of interest — the more you share, the better we can advise."
                      className={fieldCls('message')}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                    />
                    {errors.message && (
                      <p id="err-message" className="mt-1.5 text-xs text-terracotta-600">{errors.message}</p>
                    )}
                  </div>
                </Reveal>
                <Reveal delay={240}>
                  <button type="submit" className="btn-primary group w-full sm:w-auto">
                    <FiSend className="mr-2 h-4 w-4" />
                    Submit Enquiry
                  </button>
                </Reveal>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 order-1 lg:order-2">
            <Reveal>
              <div className="bg-teal-800 text-sand-100 p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-terracotta-500/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
                <div className="relative">
                  <div className="divider-gold mb-5" />
                  <div className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold mb-3">
                    Reach us directly
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-sand-50 tracking-tight mb-8 leading-tight">
                    Office & Farm · Kopargaon
                  </h3>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="h-10 w-10 flex items-center justify-center shrink-0 bg-teal-700/80 text-gold-400">
                        <FiMapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-teal-200 font-semibold mb-1">
                          Address
                        </div>
                        <p className="text-sand-100 leading-relaxed">
                          Sanjivani Matsya Vikas Co-op. Society Ltd.
                          <br />
                          Gawande Vasti, Nevasa Road,
                          <br />
                          Kopargaon — 423 601
                          <br />
                          Dist. Ahmednagar, Maharashtra
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="h-10 w-10 flex items-center justify-center shrink-0 bg-teal-700/80 text-gold-400">
                        <FiPhone className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-teal-200 font-semibold mb-1">
                          Call us
                        </div>
                        <p className="text-sand-100 leading-relaxed space-y-0.5">
                          <a href="tel:+912423222888" className="hover:text-terracotta-300 transition-colors block">
                            +91 2423 222 888
                            <span className="text-xs text-teal-300 block">Office · Mon–Sat, 9 am – 6 pm</span>
                          </a>
                          <a href="tel:+919822012345" className="hover:text-terracotta-300 transition-colors block">
                            +91 98220 12345
                            <span className="text-xs text-teal-300 block">Field · WhatsApp enabled</span>
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="h-10 w-10 flex items-center justify-center shrink-0 bg-teal-700/80 text-gold-400">
                        <FiMail className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-teal-200 font-semibold mb-1">
                          Email
                        </div>
                        <a
                          href="mailto:info@sanjivanifisheries.in"
                          className="text-sand-100 hover:text-terracotta-300 transition-colors"
                        >
                          info@sanjivanifisheries.in
                        </a>
                      </div>
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/919822012345?text=Namaste%20Sanjivani%20Fisheries%2C%20I%20would%20like%20to%20enquire%20about"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#20bd5a] transition-colors duration-500"
                  >
                    <SiWhatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 border-2 border-teal-100 overflow-hidden h-72 sm:h-80">
                <iframe
                  title="Sanjivani Fisheries — Kopargaon map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.4600%2C19.8600%2C74.5800%2C19.9300&layer=mapnik&marker=19.8952%2C74.5189"
                  loading="lazy"
                  className="w-full h-full border-0"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=19.8952&mlon=74.5189#map=13/19.8952/74.5189"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-teal-700 hover:text-terracotta-600 transition-colors"
              >
                Open larger map
              </a>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
