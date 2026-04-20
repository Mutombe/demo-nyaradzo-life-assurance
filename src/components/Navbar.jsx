import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone } from '@phosphor-icons/react';
import { business, navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const waHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    "Hello Nyaradzo, I'd like to learn more about your plans."
  )}`;

  return (
    <>
      {/* Top ribbon */}
      <div className="bg-navy-700 text-cream-100 text-[12px] tracking-wide">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-9 flex items-center justify-between gap-4">
          <span className="font-serif italic text-gold-300 hidden sm:block">
            {business.principle}
          </span>
          <div className="flex items-center gap-5 ml-auto">
            <a
              href={`tel:${business.phoneTel}`}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Phone size={13} weight="fill" />
              <span className="hidden xs:inline">{business.phone}</span>
              <span className="xs:hidden">Call</span>
            </a>
            <Link
              to="/claims"
              className="hidden sm:inline hover:text-gold-300 transition-colors"
            >
              Claims hotline
            </Link>
            <Link
              to="/quote"
              className="hidden md:inline text-gold-300 hover:text-cream-50 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'glass-cream'
            : 'bg-cream-50 border-b border-cream-200'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-20 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={business.logo}
              alt={business.name}
              className="h-11 w-11 shrink-0"
              loading="eager"
             onError={e => { e.currentTarget.style.display = 'none'; }} />
            <div className="min-w-0">
              <div className="font-display text-[20px] sm:text-[22px] leading-none tracking-tight text-navy-700 truncate">
                {business.shortName}
              </div>
              <div className="font-serif italic text-[11px] text-gold-600 mt-1 leading-none hidden sm:block">
                Life Assurance · since {business.founded}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13.5px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-navy-700'
                      : 'text-charcoal-700 hover:text-navy-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-5 bg-gold-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/quote"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 bg-navy-700 text-cream-50 text-[13px] tracking-wide hover:bg-navy-800 transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Get a Quote
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hidden sm:flex h-10 w-10 items-center justify-center text-charcoal-700 hover:text-navy-700 transition-colors"
            >
              <WhatsappLogo size={20} />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex lg:hidden items-center justify-center text-navy-700"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-900/50"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-cream-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-cream-200">
            <div className="flex items-center gap-3">
              <img src={business.logo} alt="" className="h-9 w-9"  onError={e => { e.currentTarget.style.display = 'none'; }} />
              <span className="font-display text-lg text-navy-700">
                {business.shortName}
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-navy-700"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-6 gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-[26px] transition-colors ${
                    isActive ? 'text-navy-700' : 'text-charcoal-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              className="mt-4 py-3 font-display text-[26px] text-gold-600"
            >
              Get a Quote →
            </Link>
          </nav>
          <div className="px-6 py-6 border-t border-cream-200 space-y-3 bg-cream-100">
            <a
              href={`tel:${business.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 bg-navy-700 text-cream-50 py-3 text-sm tracking-wide"
              style={{ borderRadius: '2px' }}
            >
              <Phone size={16} weight="fill" />
              {business.phone}
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-navy-700 text-navy-700 py-3 text-sm tracking-wide"
              style={{ borderRadius: '2px' }}
            >
              <WhatsappLogo size={16} weight="fill" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-charcoal-500 text-center pt-2">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
