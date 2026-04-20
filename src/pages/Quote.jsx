import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';

const promises = [
  'An advisor will reach you within one working day',
  'No medical exam required for most plans',
  'USD or ZWL — whichever suits your rhythm',
  'No obligation, no pressure, no jargon',
];

export default function Quote() {
  const [params] = useSearchParams();
  const defaultProduct = params.get('product') || '';

  return (
    <PageTransition>
      <SEO
        title="Get a Quote — Nyaradzo Life Assurance"
        description="Request a personalised quote for life cover, funeral plans, education policies, retirement annuities, medical aid or investment policies."
      />

      <PageHero
        eyebrow="Get a Quote"
        title="A quote, in your own time."
        subtitle="Share a few details and an advisor will come back with a plan shaped around your life — not the other way around."
        image="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Get a Quote' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <SectionReveal className="lg:col-span-5 lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Our commitment</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-700 leading-tight gold-rule">
                What happens after you send this form?
              </h2>
              <ul className="mt-8 space-y-4">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      weight="duotone"
                      className="text-gold-600 mt-0.5 shrink-0"
                    />
                    <span className="text-[15px] text-charcoal-700 leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <figure className="mt-10 border-l-2 border-gold-400 pl-6">
                <blockquote className="font-serif italic text-[19px] text-charcoal-700 leading-relaxed">
                  "I always say — a good plan is one you can explain in a sentence
                  to your grandmother. That is our house rule."
                </blockquote>
                <figcaption className="mt-4 text-[12px] tracking-[0.14em] uppercase text-charcoal-500">
                  Tendai Chikafu · Senior Advisor
                </figcaption>
              </figure>
            </SectionReveal>

            <div className="lg:col-span-7">
              <QuoteForm defaultProduct={defaultProduct} />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
