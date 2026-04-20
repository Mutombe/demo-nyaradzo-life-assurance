import React, { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { MapPin, MagnifyingGlass, ArrowRight, Phone, WhatsappLogo } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import AdvisorCard from '../components/AdvisorCard';
import { advisors, business, coverageAreas } from '../data/siteData';

export default function Advisors() {
  const [q, setQ] = useState('');
  const [city, setCity] = useState('');

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return advisors.filter((a) => {
      const matchQ =
        !term ||
        a.name.toLowerCase().includes(term) ||
        a.title.toLowerCase().includes(term) ||
        a.languages.toLowerCase().includes(term);
      const matchCity = !city || a.title.toLowerCase().includes(city.toLowerCase());
      return matchQ && matchCity;
    });
  }, [q, city]);

  const onFind = (e) => {
    e.preventDefault();
    if (filtered.length === 0) {
      toast.message('No advisors match those filters yet.', {
        description: `Reach our central office on ${business.phone} — we will match you within the hour.`,
      });
    } else {
      toast.success(`Showing ${filtered.length} advisor${filtered.length > 1 ? 's' : ''}.`);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Find an Advisor — Nyaradzo Life Assurance"
        description="Speak to a Nyaradzo advisor in Harare, Bulawayo, Mutare, Masvingo or online from the diaspora."
      />

      <PageHero
        eyebrow="Advisors"
        title="People first, policies second."
        subtitle="Every Nyaradzo advisor is a licensed professional — and, more importantly, someone who listens before they recommend."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Advisors' }]}
      />

      {/* Find form */}
      <section className="py-12 bg-cream-100 border-b border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <form
            onSubmit={onFind}
            className="grid md:grid-cols-[1fr_220px_auto] gap-3 items-end"
          >
            <div>
              <label className="block text-[11px] tracking-[0.16em] uppercase text-charcoal-500 mb-2">
                Search by name, specialty or language
              </label>
              <div className="relative">
                <MagnifyingGlass
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400"
                />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="e.g. Education, Shona, Bulawayo…"
                  className="w-full bg-cream-50 border border-cream-300 pl-9 pr-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none"
                  style={{ borderRadius: '2px' }}
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.16em] uppercase text-charcoal-500 mb-2">
                Region
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-cream-50 border border-cream-300 px-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none"
                style={{ borderRadius: '2px' }}
              >
                <option value="">All regions</option>
                {coverageAreas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-navy-700 text-cream-50 px-7 py-3.5 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-800"
              style={{ borderRadius: '2px' }}
            >
              Find Advisor
              <ArrowRight size={14} weight="bold" />
            </button>
          </form>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif italic text-xl text-charcoal-500">
                No advisors match yet — please widen your search.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((a, i) => (
                <SectionReveal key={a.name} delay={i * 60}>
                  <AdvisorCard advisor={a} />
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Regions map band */}
      <section className="py-16 bg-navy-700 text-cream-50 relative overflow-hidden">
        <div className="grain opacity-50" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow eyebrow-on-dark mb-4">Our reach</p>
            <h2 className="font-display text-3xl sm:text-4xl text-cream-50 leading-tight">
              28 branches · 4 continents.
            </h2>
            <p className="mt-5 text-cream-100/75 max-w-md">
              Nyaradzo advisors serve clients in-branch, in-home, and via video
              call from anywhere in the world.
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-7 inline-flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-3.5 text-[13px] tracking-[0.14em] uppercase hover:bg-gold-400 font-semibold"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={14} weight="fill" />
              Call head office
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {coverageAreas.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 px-4 py-3 border border-cream-100/15 bg-navy-800/50 text-[13px] text-cream-100/80"
                style={{ borderRadius: '2px' }}
              >
                <MapPin size={13} className="text-gold-400" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
