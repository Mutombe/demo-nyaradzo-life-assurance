import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Quotes } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { business, heritage, pillars, stats, stories } from '../data/siteData';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="Heritage — Nyaradzo Life Assurance"
        description="Two decades of standing with Zimbabwean families. Our story, our regulatory standing, our values."
      />

      <PageHero
        eyebrow="Our Heritage"
        title="A Zimbabwean story, told in decades."
        subtitle="From a single office on Jason Moyo Avenue to a group serving families across four continents — ours is a story written in claims paid and promises kept."
        image="https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Heritage' }]}
      />

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <SectionReveal className="lg:col-span-5">
              <p className="eyebrow mb-4">Our purpose</p>
              <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
                To walk with Zimbabwean families — not sell to them.
              </h2>
            </SectionReveal>
            <SectionReveal delay={100} className="lg:col-span-7">
              <p className="font-serif italic text-[20px] text-charcoal-700 leading-relaxed quote-mark">
                We opened our doors in the year 2000 with a single conviction — that
                no Zimbabwean family should have to face the practical burden of
                bereavement, illness, or education costs entirely alone. Twenty-four
                years later, the same conviction guides every policy we write, every
                claim we pay, and every field officer we dispatch.
              </p>
              <p className="mt-7 text-[15.5px] text-charcoal-500 leading-relaxed">
                Today, Nyaradzo Group is a family of dynamic companies spanning
                assurance, funeral services, manufacturing, and event management.
                We remain proudly Zimbabwean — owned, capitalised, and
                decision-made here. From Harare to Bulawayo, from Leeds to Cape
                Town, our promise is the same: a true sahwira, for every chapter.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-cream-100 border-y border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream-300" style={{ borderRadius: '2px' }}>
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 80} className="bg-cream-100 p-8 sm:p-10 text-center">
              <p className="font-display text-[40px] sm:text-[52px] text-gold-700 leading-none">
                {s.number}
              </p>
              <p className="mt-4 text-[12px] tracking-[0.16em] uppercase text-charcoal-500 leading-relaxed">
                {s.label}
              </p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Our journey</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05]">
              <span className="italic text-gold-700">Twenty-four years,</span>{' '}
              one promise.
            </h2>
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-5 sm:left-[24px] top-2 bottom-2 w-px bg-gold-300/60" />
            <ul className="space-y-12">
              {heritage.map((h, i) => (
                <SectionReveal
                  as="li"
                  key={h.year}
                  delay={i * 70}
                  className="relative pl-16 sm:pl-20 grid lg:grid-cols-[220px_1fr] gap-6"
                >
                  <span className="absolute left-0 top-1 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-cream-50 border border-gold-400 text-gold-700 text-[11px] sm:text-[12px] tracking-[0.14em] font-semibold">
                    {h.year}
                  </span>
                  <h3 className="font-display text-2xl text-navy-700 leading-tight">
                    {h.title}
                  </h3>
                  <p className="text-[15px] text-charcoal-500 leading-relaxed max-w-2xl">
                    {h.body}
                  </p>
                </SectionReveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Regulatory strength */}
      <section className="py-20 sm:py-24 bg-navy-700 text-cream-50 relative overflow-hidden">
        <div className="grain opacity-50" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <SectionReveal className="lg:col-span-5">
            <ShieldCheck size={36} weight="duotone" className="text-gold-400 mb-6" />
            <p className="eyebrow eyebrow-on-dark mb-4">Regulated strength</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream-50 leading-[1.05]">
              Capitalised for the long run.
            </h2>
            <p className="mt-6 text-cream-100/80 text-[15.5px] leading-relaxed max-w-md">
              Our Life Fund has honoured every valid claim since inception.
              Regulated in Zimbabwe, reinsured internationally.
            </p>
          </SectionReveal>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {business.licenses.map((l) => (
              <SectionReveal
                key={l.body}
                delay={80}
                className="seal-border bg-cream-50 text-navy-700 p-6"
              >
                <p className="font-display text-2xl text-gold-700">{l.body}</p>
                <p className="text-[13px] text-charcoal-500 mt-3 leading-snug">
                  {l.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Our values</p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy-700 leading-[1.05] gold-rule">
              Service · Strength · Solutions.
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <SectionReveal
                key={p.title}
                delay={i * 70}
                className="bg-cream-50 border border-cream-200 p-8"
              >
                <h3 className="font-display text-xl text-navy-700 mb-3">
                  {p.title}
                </h3>
                <p className="text-[14.5px] text-charcoal-500 leading-relaxed">
                  {p.body}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story quote */}
      <section className="py-20 sm:py-24 bg-cream-100 border-y border-cream-300">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionReveal>
            <Quotes size={36} weight="fill" className="text-gold-500 mx-auto" />
            <p className="mt-8 font-display italic text-2xl sm:text-3xl text-navy-700 leading-[1.25] text-balance">
              “{stories[0].quote}”
            </p>
            <p className="mt-8 text-[13px] tracking-[0.18em] uppercase text-charcoal-500">
              {stories[0].name} · {stories[0].role}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <SectionReveal>
            <h3 className="font-display text-3xl sm:text-4xl text-navy-700 leading-tight">
              Ready to start your own chapter with us?
            </h3>
            <Link
              to="/quote"
              className="mt-8 inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-800"
              style={{ borderRadius: '2px' }}
            >
              Request a Quote
              <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
