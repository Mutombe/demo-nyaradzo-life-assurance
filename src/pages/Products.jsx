import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import { products, business } from '../data/siteData';

export default function Products() {
  return (
    <PageTransition>
      <SEO
        title="Our Plans — Nyaradzo Life Assurance"
        description="Life cover, funeral plans, education policies, pensions, medical aid and investment policies designed for Zimbabwean families."
      />

      <PageHero
        eyebrow="Our Plans"
        title="Thoughtful plans, honest conversations."
        subtitle="Every Nyaradzo plan is designed around a real moment in a real family's story — a graduation, a birth, a farewell, a retirement."
        image="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 60}>
                <ProductCard product={p} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream-100 border-t border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <SectionReveal>
            <p className="eyebrow mb-4">Bundle & save</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-700 leading-tight gold-rule">
              The Sahwira Complete Bundle.
            </h2>
            <p className="mt-6 text-charcoal-500 text-[15.5px] leading-relaxed max-w-xl">
              Combine life cover, funeral plan, and medical aid into a single
              monthly premium — with one debit date, one claims line, and up to
              15% blended saving. Perfect for growing families.
            </p>
          </SectionReveal>
          <SectionReveal delay={120} className="flex lg:justify-end">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-800"
              style={{ borderRadius: '2px' }}
            >
              Build my bundle
              <ArrowRight size={15} weight="bold" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
