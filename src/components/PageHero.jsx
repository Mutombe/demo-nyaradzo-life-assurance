import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight, House } from '@phosphor-icons/react';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbs = [],
  align = 'left',
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient text-cream-50">
      <div className="grain opacity-60" />
      {image && (
        <>
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-700/70 to-navy-800/85" />
        </>
      )}

      {/* Gold hairline top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div
        className={`relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 sm:py-28 lg:py-32 ${
          align === 'center' ? 'text-center' : ''
        }`}
      >
        {breadcrumbs.length > 0 && (
          <nav
            className={`flex items-center gap-2 text-[12px] text-cream-100/70 mb-6 ${
              align === 'center' ? 'justify-center' : ''
            }`}
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-gold-300 flex items-center gap-1">
              <House size={12} weight="fill" />
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <CaretRight size={10} className="text-cream-100/40" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-gold-300 truncate max-w-[140px] sm:max-w-none">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gold-300 truncate max-w-[180px] sm:max-w-none">
                    {b.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow eyebrow-on-dark mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-tight text-cream-50 max-w-4xl text-balance">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 text-lg text-cream-100/80 max-w-2xl leading-relaxed ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative gold flourish bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-500/25" />
    </section>
  );
}
