import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '@phosphor-icons/react';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  WhatsappLogo,
  Download,
  Clock,
} from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { business, claimSteps, claimDocuments } from '../data/siteData';

export default function Claims() {
  return (
    <PageTransition>
      <SEO
        title="Claims — Nyaradzo Life Assurance"
        description="Our claims promise: one call, and Nyaradzo takes the weight from here. Valid funeral claims paid within 48 hours."
      />

      <PageHero
        eyebrow="Claims"
        title="One call. We take the weight from here."
        subtitle="A bereavement or an accident is not a time for forms. Reach us, and our team is moving before the next hour is out."
        image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Claims' }]}
      />

      {/* Emergency hotline band */}
      <section className="bg-gold-500 text-navy-900 border-b border-gold-600">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="h-11 w-11 flex items-center justify-center bg-navy-700 text-gold-400"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={18} weight="fill" />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-navy-900/70">
                24-hour claims hotline
              </p>
              <p className="font-display text-2xl text-navy-900 leading-none mt-1">
                {business.claimsHotline}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${business.claimsHotline.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-5 py-2.5 text-[12px] tracking-[0.14em] uppercase hover:bg-navy-800"
              style={{ borderRadius: '2px' }}
            >
              Call now
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                'Claim notification: please call me back.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-navy-900 px-5 py-2.5 text-[12px] tracking-[0.14em] uppercase hover:bg-navy-800 hover:text-white"
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={13} weight="fill" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow mb-4">The process</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
              Four steps — most of which we take for you.
            </h2>
          </SectionReveal>

          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {claimSteps.map((s, i) => {
              const Icon = Icons[s.icon] || Icons.Phone;
              return (
                <SectionReveal
                  as="li"
                  key={s.step}
                  delay={i * 90}
                  className="bg-cream-50 border border-cream-200 p-7 flex flex-col h-full relative"
                >
                  <span className="absolute top-4 right-5 font-display text-[44px] text-gold-200 leading-none">
                    {s.step}
                  </span>
                  <div
                    className="h-12 w-12 bg-navy-700 text-gold-400 flex items-center justify-center"
                    style={{ borderRadius: '2px' }}
                  >
                    <Icon size={20} weight="duotone" />
                  </div>
                  <h3 className="font-display text-xl text-navy-700 mt-5 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-charcoal-500 leading-relaxed">
                    {s.body}
                  </p>
                </SectionReveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Documents + SLA */}
      <section className="py-20 sm:py-28 bg-cream-100 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <SectionReveal className="lg:col-span-7">
            <p className="eyebrow mb-4">Document checklist</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-700 gold-rule">
              What to bring — or call us and we’ll collect.
            </h2>
            <ul className="mt-8 space-y-3">
              {claimDocuments.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 bg-cream-50 border border-cream-200 p-4"
                >
                  <CheckCircle
                    size={18}
                    weight="duotone"
                    className="text-gold-600 mt-0.5 shrink-0"
                  />
                  <span className="text-[14.5px] text-charcoal-700">{d}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${business.email}?subject=Claim form request`}
              className="mt-6 inline-flex items-center gap-2 text-navy-700 text-[13px] tracking-[0.16em] uppercase hover:text-gold-700"
            >
              <Download size={14} weight="bold" />
              Request a claim form by email
            </a>
          </SectionReveal>

          <div className="lg:col-span-5 space-y-5">
            <SectionReveal
              className="bg-navy-700 text-cream-100 p-8"
              delay={60}
            >
              <Clock size={28} weight="duotone" className="text-gold-400" />
              <p className="eyebrow eyebrow-on-dark mt-5">Our service level</p>
              <p className="font-display text-3xl text-cream-50 mt-3 leading-tight">
                Valid funeral claims: 48 hours.
              </p>
              <p className="text-[14px] text-cream-100/75 mt-4 leading-relaxed">
                Life cover claims are typically settled within 5 working days of
                documentation. Assessors phone — they do not write cold letters.
              </p>
            </SectionReveal>

            <SectionReveal
              delay={120}
              className="bg-cream-50 border border-cream-200 p-8"
            >
              <p className="eyebrow mb-3">Dispute resolution</p>
              <p className="font-display text-xl text-navy-700 mb-3 leading-snug">
                Unhappy with an outcome? We listen.
              </p>
              <p className="text-[14px] text-charcoal-500 leading-relaxed">
                Email <a href={`mailto:${business.email}`} className="text-navy-700 underline">{business.email}</a> or
                lodge directly with the Insurance & Pensions Commission (IPEC). Our
                complaints ratio is the lowest in the industry — and we intend to
                keep it that way.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 bg-cream-50 text-center">
        <div className="max-w-3xl mx-auto px-5">
          <SectionReveal>
            <p className="eyebrow mb-4">We are here</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-tight">
              Day or night, a sahwira answers.
            </h2>
            <p className="mt-6 text-charcoal-500 max-w-xl mx-auto">
              Our claims desk is staffed 24/7. Save the number now — we hope you
              never need it, but when you do, you will be glad it is there.
            </p>
            <a
              href={`tel:${business.claimsHotline.replace(/\s/g, '')}`}
              className="mt-8 inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-800"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={14} weight="fill" />
              {business.claimsHotline}
            </a>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
