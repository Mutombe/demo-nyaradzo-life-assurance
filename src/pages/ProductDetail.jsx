import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  CaretDown,
  CaretLeft,
  CaretRight,
  Phone,
  WhatsappLogo,
  Heart,
  ShieldCheck,
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
import QuoteForm from '../components/QuoteForm';
import { products, business, claimSteps } from '../data/siteData';

export default function ProductDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const idx = products.findIndex((p) => p.slug === slug);
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];

  const Icon = IconMap[product.icon] || ShieldCheck;

  return (
    <PageTransition>
      <SEO
        title={`${product.name} — Nyaradzo Life Assurance`}
        description={product.blurb}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-gradient text-cream-50">
        <div className="grain opacity-60" />
        <div className="absolute inset-0">
          <img
            src={product.hero}
            alt={product.name}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/55 via-navy-700/75 to-navy-800/90" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28 lg:py-32">
          <nav className="flex items-center gap-2 text-[12px] text-cream-100/70 mb-6">
            <Link to="/" className="hover:text-gold-300">Home</Link>
            <CaretRight size={10} className="text-cream-100/40" />
            <Link to="/products" className="hover:text-gold-300">Products</Link>
            <CaretRight size={10} className="text-cream-100/40" />
            <span className="text-gold-300 truncate max-w-[180px] sm:max-w-none">{product.name}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div
              className="h-16 w-16 flex items-center justify-center border border-gold-500/40 bg-navy-800 text-gold-400 shrink-0"
              style={{ borderRadius: '2px' }}
            >
              <Icon size={30} weight="duotone" />
            </div>
            <div>
              <p className="eyebrow eyebrow-on-dark mb-3">Plan</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-cream-50 text-balance">
                {product.name}
              </h1>
            </div>
          </div>

          <p className="mt-8 text-lg text-cream-100/85 max-w-2xl leading-relaxed">
            {product.longBlurb}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={`/quote?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-3.5 text-[13px] tracking-[0.14em] uppercase hover:bg-gold-400 font-semibold"
              style={{ borderRadius: '2px' }}
            >
              Request a quote
              <ArrowRight size={15} weight="bold" />
            </Link>
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 border border-cream-50/50 text-cream-50 px-6 py-3.5 text-[13px] tracking-[0.14em] uppercase hover:bg-cream-50 hover:text-navy-700"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={14} weight="fill" />
              Talk to an advisor
            </a>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* LEFT: content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Coverage */}
              <SectionReveal>
                <p className="eyebrow mb-4">What the plan covers</p>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-700 gold-rule">
                  Benefits at a glance.
                </h2>
                <ul className="mt-8 space-y-4">
                  {product.coverage.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle
                        size={20}
                        weight="duotone"
                        className="text-gold-600 mt-0.5 shrink-0"
                      />
                      <span className="text-[15.5px] text-charcoal-700 leading-relaxed">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>

              {/* Eligibility */}
              <SectionReveal>
                <p className="eyebrow mb-4">Eligibility</p>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-700 gold-rule">
                  Who it's for.
                </h2>
                <div className="mt-8 grid sm:grid-cols-2 gap-px bg-cream-300" style={{ borderRadius: '2px' }}>
                  {product.eligibility.map((e) => (
                    <div key={e} className="bg-cream-50 p-5">
                      <p className="text-[14.5px] text-charcoal-700 leading-relaxed">
                        {e}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              {/* Claims process (re-uses siteData) */}
              <SectionReveal>
                <p className="eyebrow mb-4">Claim process</p>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-700 gold-rule">
                  When the day comes, four simple steps.
                </h2>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {claimSteps.map((s) => {
                    const StepIcon = IconMap[s.icon] || Phone;
                    return (
                      <div key={s.step} className="bg-cream-50 border border-cream-200 p-5 flex gap-4">
                        <div
                          className="h-11 w-11 bg-navy-700 text-gold-400 flex items-center justify-center shrink-0"
                          style={{ borderRadius: '2px' }}
                        >
                          <StepIcon size={18} weight="duotone" />
                        </div>
                        <div>
                          <p className="font-display text-[16px] text-navy-700">
                            {s.step} · {s.title}
                          </p>
                          <p className="text-[13.5px] text-charcoal-500 leading-relaxed mt-1">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to="/claims"
                  className="mt-6 inline-flex items-center gap-2 text-navy-700 text-[13px] tracking-[0.16em] uppercase hover:text-gold-700"
                >
                  Full claims guide
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </SectionReveal>

              {/* FAQ */}
              <SectionReveal>
                <p className="eyebrow mb-4">Questions</p>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-700 gold-rule">
                  Frequently asked.
                </h2>
                <ul className="mt-8 divide-y divide-cream-300 border-t border-b border-cream-300">
                  {product.faq.map((f, i) => (
                    <li key={f.q}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        className="w-full text-left py-5 flex items-start justify-between gap-6 group"
                      >
                        <span className="font-display text-[18px] text-navy-700 group-hover:text-gold-700 transition-colors">
                          {f.q}
                        </span>
                        <CaretDown
                          size={14}
                          className={`mt-2 text-gold-600 transition-transform shrink-0 ${
                            openFaq === i ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaq === i ? 'max-h-48 pb-5' : 'max-h-0'
                        }`}
                      >
                        <p className="text-[14.5px] text-charcoal-500 leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>

            {/* RIGHT: sticky sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-5">
                <QuoteForm defaultProduct={product.name} compact />

                <div
                  className="bg-navy-700 text-cream-100 p-6"
                  style={{ borderRadius: '2px' }}
                >
                  <p className="eyebrow eyebrow-on-dark mb-3">Talk to us</p>
                  <p className="font-serif italic text-gold-300 text-[17px] leading-snug mb-5">
                    An advisor is the fastest way to the right plan.
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`tel:${business.phoneTel}`}
                      className="w-full flex items-center justify-center gap-2 bg-cream-50 text-navy-700 py-3 text-[13px] tracking-wide hover:bg-gold-300"
                      style={{ borderRadius: '2px' }}
                    >
                      <Phone size={14} weight="fill" />
                      {business.phone}
                    </a>
                    <a
                      href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                        `Hello, I'd like to discuss the ${product.name} plan.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 text-[13px] tracking-wide hover:bg-[#1fbc5a]"
                      style={{ borderRadius: '2px' }}
                    >
                      <WhatsappLogo size={14} weight="fill" />
                      WhatsApp an advisor
                    </a>
                  </div>
                </div>

                <div
                  className="bg-cream-50 border border-cream-200 p-6"
                  style={{ borderRadius: '2px' }}
                >
                  <p className="eyebrow mb-3">Other plans</p>
                  <ul className="divide-y divide-cream-200 -my-2">
                    {products
                      .filter((p) => p.slug !== product.slug)
                      .slice(0, 4)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            to={`/products/${p.slug}`}
                            className="flex items-center justify-between py-3 text-[14px] text-charcoal-700 hover:text-navy-700"
                          >
                            {p.name}
                            <CaretRight size={12} className="text-gold-600" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / next nav */}
      <nav className="border-t border-cream-300 bg-cream-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 grid sm:grid-cols-2 gap-6">
          <Link
            to={`/products/${prev.slug}`}
            className="group flex items-center gap-4 text-left"
          >
            <CaretLeft
              size={20}
              className="text-gold-600 transition-transform group-hover:-translate-x-1"
            />
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-1">
                Previous plan
              </p>
              <p className="font-display text-lg text-navy-700 group-hover:text-gold-700">
                {prev.name}
              </p>
            </div>
          </Link>
          <Link
            to={`/products/${next.slug}`}
            className="group flex items-center justify-end gap-4 text-right"
          >
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal-500 mb-1">
                Next plan
              </p>
              <p className="font-display text-lg text-navy-700 group-hover:text-gold-700">
                {next.name}
              </p>
            </div>
            <CaretRight
              size={20}
              className="text-gold-600 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </nav>
    </PageTransition>
  );
}
