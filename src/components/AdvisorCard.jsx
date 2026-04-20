import React from 'react';
import { Phone, ChatCircleDots } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function AdvisorCard({ advisor }) {
  const waText = encodeURIComponent(
    `Hello ${advisor.name.split(' ')[0]}, I would like to discuss a Nyaradzo plan.`
  );
  const waHref = `https://wa.me/${business.whatsapp}?text=${waText}`;

  return (
    <article
      className="group bg-cream-50 border border-cream-200 hover:border-gold-400 transition-all duration-500 overflow-hidden flex flex-col"
      style={{ borderRadius: '2px' }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
        <img
          src={advisor.photo}
          alt={advisor.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-cream-50">
          <p className="font-display text-xl leading-tight">{advisor.name}</p>
          <p className="text-[12px] text-gold-300 mt-0.5">{advisor.title}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[12px] text-charcoal-500 border-b border-cream-200 pb-4 mb-4">
          <span>
            <span className="text-charcoal-700 font-medium">{advisor.experience}</span>{' '}
            experience
          </span>
          <span className="h-3 w-px bg-cream-300" />
          <span>{advisor.languages}</span>
        </div>
        <p className="font-serif italic text-charcoal-600 text-[15px] leading-relaxed flex-1 quote-mark pl-0">
          {advisor.quote}
        </p>
        <div className="mt-6 flex gap-2">
          <a
            href={`tel:${advisor.phone.replace(/\s/g, '')}`}
            className="flex-1 flex items-center justify-center gap-2 bg-navy-700 text-cream-50 py-2.5 text-[13px] tracking-wide hover:bg-navy-800 transition-colors"
            style={{ borderRadius: '2px' }}
          >
            <Phone size={14} weight="fill" />
            Call
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border border-navy-700 text-navy-700 py-2.5 text-[13px] tracking-wide hover:bg-navy-700 hover:text-cream-50 transition-colors"
            style={{ borderRadius: '2px' }}
          >
            <ChatCircleDots size={14} />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
