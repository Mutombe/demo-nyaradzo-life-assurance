import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  ShieldCheck,
} from '@phosphor-icons/react';
import { business, products } from '../data/siteData';

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsapp}`;

  return (
    <footer className="relative bg-navy-700 text-cream-100 mt-16 sm:mt-24 overflow-hidden">
      <div className="grain" />
      {/* Gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img src={business.logo} alt={business.name} className="h-11 w-11"  onError={e => { e.currentTarget.style.display = 'none'; }} />
              <div>
                <div className="font-display text-2xl text-cream-50 leading-none">
                  {business.shortName}
                </div>
                <div className="font-serif italic text-[12px] text-gold-300 mt-1">
                  Life Assurance · since {business.founded}
                </div>
              </div>
            </Link>
            <p className="font-serif italic text-gold-200 text-lg leading-relaxed max-w-sm">
              "{business.tagline}"
            </p>
            <p className="text-sm text-cream-100/70 leading-relaxed max-w-sm">
              A dynamic Zimbabwean group providing financial, insurance, risk and
              event-management solutions for families — at home and in the diaspora.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: FacebookLogo, href: business.social.facebook, label: 'Facebook' },
                { icon: LinkedinLogo, href: business.social.linkedin, label: 'LinkedIn' },
                { icon: InstagramLogo, href: business.social.instagram, label: 'Instagram' },
                { icon: WhatsappLogo, href: waHref, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 border border-cream-100/20 flex items-center justify-center text-cream-100/70 hover:bg-gold-500 hover:text-navy-700 hover:border-gold-500 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base text-gold-300 mb-5">Plans</h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-cream-100/75 hover:text-gold-300 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base text-gold-300 mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-cream-100/75 hover:text-gold-300 transition-colors">
                  Heritage
                </Link>
              </li>
              <li>
                <Link to="/advisors" className="text-cream-100/75 hover:text-gold-300 transition-colors">
                  Advisors
                </Link>
              </li>
              <li>
                <Link to="/claims" className="text-cream-100/75 hover:text-gold-300 transition-colors">
                  Claims
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-cream-100/75 hover:text-gold-300 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream-100/75 hover:text-gold-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-display text-base text-gold-300 mb-5">Visit / Reach us</h4>
            <ul className="space-y-3 text-sm text-cream-100/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 text-gold-400 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="mt-0.5 text-gold-400 shrink-0" />
                <span>
                  Mon–Fri {business.hours.weekdays}
                  <br />
                  Sat {business.hours.saturday}
                  <br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 text-gold-400 shrink-0" />
                <a href={`tel:${business.phoneTel}`} className="hover:text-gold-300">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={15} className="mt-0.5 text-gold-400 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-gold-300">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory badges */}
        <div className="mt-14 pt-8 border-t border-cream-100/15 flex flex-wrap items-center gap-6">
          <ShieldCheck size={22} className="text-gold-400" />
          <span className="text-[12px] tracking-wide text-cream-100/60">
            Regulated by:
          </span>
          {business.licenses.map((l) => (
            <span key={l.body} className="text-[12px] text-cream-100/75">
              <span className="font-semibold text-gold-300">{l.body}</span>
              <span className="hidden md:inline"> · {l.label}</span>
            </span>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-cream-100/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-100/55">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <p>Registered in Zimbabwe · Your sahwira since {business.founded}.</p>
        </div>

        <p className="mt-4 text-center text-[11px] text-cream-100/50 tracking-wide">
          Website crafted by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-300 hover:text-gold-200 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
