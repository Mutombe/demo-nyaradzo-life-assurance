import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CaretDown,
  Quotes,
  Star,
  ShieldCheck,
  Phone,
  MapPin,
  CheckCircle,
  WhatsappLogo,
  Heart,
  GraduationCap,
  Briefcase,
  FirstAid,
  ChartLineUp,
  Handshake,
  UsersThree,
  Lightbulb,
  FolderOpen,
  ClipboardText,
} from '@phosphor-icons/react';

const IconMap = {
  Heart,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  FirstAid,
  ChartLineUp,
  Handshake,
  UsersThree,
  Lightbulb,
  Phone,
  FolderOpen,
  ClipboardText,
};

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import QuoteForm from '../components/QuoteForm';

import {
  business,
  hero,
  products,
  pillars,
  stats,
  stories,
  heritage,
  homeFaq,
  coverageAreas,
  claimSteps,
} from '../data/siteData';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Nyaradzo Life Assurance — Standing With Zimbabwean Families"
        description="Life cover, funeral plans, education policies and pensions designed for Zimbabwean families. Your true sahwira since 2000."
      />

      <Hero />
      <TrustMarquee />
      <PillarsBand />
      <ProductsSection />
      <SahwiraBand />
      <StatsBand />
      <ClaimsPromiseSection />
      <StoriesSection />
      <HeritageGlimpse />
      <FAQandQuote />
      <CoverageBand />
      <FinalCta />
    </PageTransition>
  );
}

/* ------------------------------------------------------------------
   HERO — serif editorial, warm photo right
------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-paper">
      <div className="grain" />

      {/* Soft radial gold glow */}
      <div className="absolute -top-40 -right-40 w-[620px] h-[620px] rounded-full bg-gold-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-52 -left-32 w-[540px] h-[540px] rounded-full bg-navy-100/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-14 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <p className="eyebrow mb-5">{hero.eyebrow}</p>
            <h1 className="font-display font-medium text-[40px] sm:text-[56px] lg:text-[74px] leading-[1.02] tracking-tight text-navy-700 text-balance">
              Standing with{' '}
              <span className="italic text-gold-700">Zimbabwean families</span>,
              every chapter.
            </h1>
            <p className="mt-7 text-[17px] sm:text-[19px] leading-relaxed text-charcoal-600 max-w-2xl">
              {hero.subheadline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to={hero.primaryCta.to}
                className="inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-800 transition-colors"
                style={{ borderRadius: '2px' }}
              >
                {hero.primaryCta.label}
                <ArrowRight size={15} weight="bold" />
              </Link>
              <Link
                to={hero.secondaryCta.to}
                className="inline-flex items-center gap-2 border border-navy-700 text-navy-700 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-700 hover:text-cream-50 transition-colors"
                style={{ borderRadius: '2px' }}
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-12 pt-8 border-t border-cream-300 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {hero.trustStrip.map((t) => (
                <div key={t.v}>
                  <p className="font-display text-[26px] sm:text-[30px] text-navy-700 leading-none">
                    {t.k}
                  </p>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-charcoal-500 mt-2">
                    {t.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image composition */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '.15s' }}>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '2px' }}>
              <img
                src={hero.image}
                alt={hero.imageAlt}
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              {/* Gold corner frame */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400" />
            </div>

            {/* Floating quote card */}
            <div
              className="absolute -bottom-10 -left-4 sm:-left-8 bg-cream-50 border border-cream-200 p-5 sm:p-6 max-w-[280px] shadow-xl hidden sm:block"
              style={{ borderRadius: '2px' }}
            >
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    weight={i < Math.round(business.rating) ? 'fill' : 'regular'}
                    className="text-gold-500"
                  />
                ))}
                <span className="text-[11px] text-charcoal-500 ml-2">
                  {business.rating} · {business.reviewCount} reviews
                </span>
              </div>
              <p className="font-serif italic text-[14.5px] text-charcoal-700 leading-snug">
                “When the day came, Nyaradzo did not make me lift a finger. A true
                sahwira.”
              </p>
              <p className="text-[11px] text-charcoal-500 mt-3">
                Amai Masiiwa · Mutare
              </p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 sm:mt-20 flex items-center gap-3 text-charcoal-500">
          <CaretDown size={14} className="animate-bounce" />
          <span className="text-[11px] tracking-[0.22em] uppercase">
            Our plans
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   TRUST MARQUEE
------------------------------------------------------------------- */
function TrustMarquee() {
  const items = [
    'Regulated by IPEC',
    '24+ years standing with Zimbabwean families',
    'USD & ZWL plans',
    '98.2% claims paid within 48 hours',
    'Diaspora ready — UK · SA · USA · Botswana',
    'Sahwira Connect Card',
    'Tax-efficient pensions',
  ];
  return (
    <section className="bg-navy-700 text-cream-100/90 border-t border-b border-navy-600 overflow-hidden py-4">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase"
          >
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PILLARS — 4 "why us"
------------------------------------------------------------------- */
function PillarsBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionReveal className="max-w-2xl">
          <p className="eyebrow mb-4">Why Nyaradzo</p>
          <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
            Dignity is in the detail.
          </h2>
          <p className="mt-6 text-charcoal-500 text-[16px] leading-relaxed">
            We are an African assurance group built for African realities — from
            the first monthly premium to the day a family leans on us most.
          </p>
        </SectionReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-300" style={{ borderRadius: '2px' }}>
          {pillars.map((p, i) => {
            const Icon = IconMap[p.icon] || ShieldCheck;
            return (
              <SectionReveal
                key={p.title}
                delay={i * 80}
                className="bg-cream-50 p-8 sm:p-10 flex flex-col"
              >
                <Icon size={36} weight="duotone" className="text-gold-700" />
                <h3 className="font-display text-xl text-navy-700 mt-6 mb-3">
                  {p.title}
                </h3>
                <p className="text-[14.5px] text-charcoal-500 leading-relaxed">
                  {p.body}
                </p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PRODUCTS
------------------------------------------------------------------- */
function ProductsSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow mb-4">Our Plans</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05]">
              Plans for the life you are{' '}
              <span className="italic text-gold-700">actually living.</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={120}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-navy-700 text-[13px] tracking-[0.16em] uppercase hover:text-gold-700 transition-colors"
            >
              View all plans
              <ArrowRight size={16} weight="bold" />
            </Link>
          </SectionReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 70}>
              <ProductCard product={p} index={i} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   SAHWIRA BAND — editorial half-image, navy dark
------------------------------------------------------------------- */
function SahwiraBand() {
  return (
    <section className="relative bg-navy-gradient text-cream-50 overflow-hidden">
      <div className="grain opacity-50" />
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[380px] lg:min-h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1400&q=80"
            alt="Elder's hands holding grandchild's hands"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-700/40 lg:to-navy-700" />
        </div>
        <div className="relative flex items-center px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
          <SectionReveal className="max-w-xl">
            <p className="eyebrow eyebrow-on-dark mb-5">The Sahwira principle</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream-50 leading-[1.05]">
              Sahwira:{' '}
              <span className="italic text-gold-300">
                the friend who stays when everyone leaves.
              </span>
            </h2>
            <p className="font-serif italic text-[18px] text-cream-100/85 mt-7 leading-relaxed quote-mark">
              In Shona, <em>sahwira</em> is the friend you can trust with a secret,
              a child, a burial, a celebration. For nearly a quarter-century, our
              promise has been to live up to that word — not just to sell a policy,
              but to take our place beside your family when it matters most.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-5 text-cream-100/80">
              {[
                { k: 'Service', d: 'Field officers on the ground within 6 hours' },
                { k: 'Strength', d: 'Life Fund that has never missed a claim' },
                { k: 'Solutions', d: 'Plans in USD, ZWL & Rand' },
              ].map((x) => (
                <div key={x.k}>
                  <p className="font-display text-gold-300 text-xl">{x.k}</p>
                  <p className="text-[12px] mt-1 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-gold-300 text-[13px] tracking-[0.16em] uppercase hover:text-cream-50 transition-colors"
            >
              Our heritage
              <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   STATS BAND
------------------------------------------------------------------- */
function StatsBand() {
  return (
    <section className="py-20 sm:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionReveal className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">The Nyaradzo Record</p>
          <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule center">
            Trusted by hundreds of thousands.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream-300" style={{ borderRadius: '2px' }}>
          {stats.map((s, i) => (
            <SectionReveal
              key={s.label}
              delay={i * 90}
              className="bg-cream-50 p-8 sm:p-10 text-center"
            >
              <p className="font-display text-[40px] sm:text-[52px] text-gold-700 leading-none">
                {s.number}
              </p>
              <p className="mt-4 text-[12px] tracking-[0.16em] uppercase text-charcoal-500 leading-relaxed">
                {s.label}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   CLAIMS PROMISE — horizontal numbered steps
------------------------------------------------------------------- */
function ClaimsPromiseSection() {
  return (
    <section className="py-20 sm:py-28 bg-cream-100 relative">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <SectionReveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Claims Promise</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
              One call. We take the weight from here.
            </h2>
            <p className="mt-6 text-charcoal-500 text-[15.5px] leading-relaxed">
              A bereavement is not a time for form-filling. The moment you reach
              us, a field officer is on the way and a senior assessor is opening
              your file.
            </p>
            <Link
              to="/claims"
              className="mt-8 inline-flex items-center gap-2 text-navy-700 text-[13px] tracking-[0.16em] uppercase hover:text-gold-700"
            >
              Full claims guide
              <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {claimSteps.map((s, i) => {
              const Icon = IconMap[s.icon] || Phone;
              return (
                <SectionReveal
                  key={s.step}
                  delay={i * 80}
                  className="bg-cream-50 border border-cream-200 p-6 sm:p-7 flex gap-5"
                >
                  <div className="shrink-0">
                    <div
                      className="h-14 w-14 bg-navy-700 text-gold-400 flex items-center justify-center"
                      style={{ borderRadius: '2px' }}
                    >
                      <Icon size={22} weight="duotone" />
                    </div>
                    <p className="mt-3 font-display text-[26px] text-gold-700 text-center leading-none">
                      {s.step}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-navy-700 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-charcoal-500 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   STORIES — editorial carousel-ish grid
------------------------------------------------------------------- */
function StoriesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionReveal className="max-w-2xl">
          <p className="eyebrow mb-4">Stories from the families we serve</p>
          <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05]">
            Kept promises,{' '}
            <span className="italic text-gold-700">whispered in houses</span>{' '}
            across Zimbabwe.
          </h2>
        </SectionReveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((t, i) => (
            <SectionReveal
              key={t.name}
              delay={i * 70}
              className={`relative p-7 sm:p-8 border flex flex-col ${
                i === 0
                  ? 'bg-navy-700 text-cream-50 border-navy-700 lg:col-span-1 lg:row-span-1'
                  : 'bg-cream-50 border-cream-200'
              }`}
            >
              <Quotes
                size={28}
                weight="fill"
                className={i === 0 ? 'text-gold-400' : 'text-gold-500'}
              />
              <p
                className={`font-serif italic text-[17px] leading-relaxed mt-4 flex-1 ${
                  i === 0 ? 'text-cream-100' : 'text-charcoal-700'
                }`}
              >
                {t.quote}
              </p>
              <div
                className={`mt-7 pt-5 border-t flex items-center gap-4 ${
                  i === 0 ? 'border-cream-100/15' : 'border-cream-200'
                }`}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover object-center"
                />
                <div>
                  <p
                    className={`font-display text-[16px] ${
                      i === 0 ? 'text-cream-50' : 'text-navy-700'
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-[11.5px] mt-0.5 ${
                      i === 0 ? 'text-gold-300' : 'text-charcoal-500'
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   HERITAGE GLIMPSE — timeline preview
------------------------------------------------------------------- */
function HeritageGlimpse() {
  return (
    <section className="py-20 sm:py-28 bg-cream-100 relative">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <SectionReveal className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow mb-4">Heritage</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
              A Zimbabwean story, told in decades.
            </h2>
            <p className="mt-6 text-charcoal-500 text-[15.5px] leading-relaxed">
              From a single office on Jason Moyo Avenue in 2000 to a group serving
              families across four continents today — the path from then to now is
              lit by claims paid, promises kept, and families walked through their
              hardest days.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-navy-700 text-[13px] tracking-[0.16em] uppercase hover:text-gold-700"
            >
              Read the full heritage
              <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>

          <div className="lg:col-span-7 relative">
            <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gold-300/60" />
            <ul className="space-y-10">
              {heritage.slice(0, 4).map((h, i) => (
                <SectionReveal
                  as="li"
                  key={h.year}
                  delay={i * 90}
                  className="relative pl-14"
                >
                  <span className="absolute left-0 top-1 h-9 w-9 flex items-center justify-center bg-cream-50 border border-gold-400 text-gold-700 text-[11px] tracking-[0.14em] font-semibold">
                    {h.year}
                  </span>
                  <h3 className="font-display text-xl text-navy-700 mb-2">
                    {h.title}
                  </h3>
                  <p className="text-[14.5px] text-charcoal-500 leading-relaxed max-w-xl">
                    {h.body}
                  </p>
                </SectionReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   FAQ + QUOTE form side by side
------------------------------------------------------------------- */
function FAQandQuote() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <SectionReveal className="lg:col-span-7">
            <p className="eyebrow mb-4">Questions families ask</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
              Answers, in plain English.
            </h2>

            <ul className="mt-10 divide-y divide-cream-300 border-t border-b border-cream-300">
              {homeFaq.map((f, i) => (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  >
                    <span className="font-display text-[19px] sm:text-[21px] text-navy-700 group-hover:text-gold-700 transition-colors">
                      {f.q}
                    </span>
                    <CaretDown
                      size={16}
                      className={`mt-2 text-gold-600 transition-transform shrink-0 ${
                        open === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      open === i ? 'max-h-40 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[15px] text-charcoal-500 leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={120} className="lg:col-span-5">
            <QuoteForm compact />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   COVERAGE
------------------------------------------------------------------- */
function CoverageBand() {
  return (
    <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-300">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <SectionReveal className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">At home & abroad</p>
          <h3 className="font-display text-3xl sm:text-4xl text-navy-700 leading-tight">
            Serving Zimbabwean families{' '}
            <span className="italic text-gold-700">wherever life plants them.</span>
          </h3>
        </SectionReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {coverageAreas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream-50 border border-cream-300 text-[12.5px] text-charcoal-700"
              style={{ borderRadius: '2px' }}
            >
              <MapPin size={12} className="text-gold-600" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   FINAL CTA — BG image + navy overlay
------------------------------------------------------------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=80"
          alt="Zimbabwean family together"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-700/78" />
      </div>
      <div className="grain opacity-60" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 sm:py-32 text-center">
        <SectionReveal>
          <p className="eyebrow eyebrow-on-dark mb-5">Your next chapter</p>
          <h2 className="font-display text-4xl sm:text-6xl text-cream-50 max-w-3xl mx-auto leading-[1.05]">
            Let a <span className="italic text-gold-300">Sahwira</span> walk it
            with you.
          </h2>
          <p className="mt-6 text-cream-100/80 max-w-xl mx-auto text-[16px] leading-relaxed">
            Speak to an advisor in person, over the phone, or on WhatsApp. No
            obligation — only clarity.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-gold-400 transition-colors font-semibold"
              style={{ borderRadius: '2px' }}
            >
              Request a Quote
              <ArrowRight size={15} weight="bold" />
            </Link>
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 border border-cream-50/50 text-cream-50 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-navy-700 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={14} weight="fill" />
              {business.phone}
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-[#1fbc5a] transition-colors"
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={15} weight="fill" />
              WhatsApp
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
