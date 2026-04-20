import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, House } from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found — Nyaradzo" description="This page cannot be found." />
      <section className="min-h-[70vh] flex items-center bg-cream-50 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gold-300/20 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-5">404 · Page not found</p>
          <h1 className="font-display text-5xl sm:text-7xl text-navy-700 leading-[1.02]">
            This path has gone quiet.
          </h1>
          <p className="mt-6 text-charcoal-500 max-w-lg mx-auto">
            The page you are looking for may have moved or never existed. Let us
            walk you back to somewhere familiar.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-navy-700 text-cream-50 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-800"
              style={{ borderRadius: '2px' }}
            >
              <House size={15} weight="fill" />
              Back to home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-navy-700 text-navy-700 px-7 py-4 text-[13px] tracking-[0.14em] uppercase hover:bg-navy-700 hover:text-cream-50"
              style={{ borderRadius: '2px' }}
            >
              View our plans
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
