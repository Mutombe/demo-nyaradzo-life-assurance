import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  FirstAid,
  ChartLineUp,
  Handshake,
  UsersThree,
  Lightbulb,
  Phone,
  FolderOpen,
  ClipboardText,
} from '@phosphor-icons/react';

const IconMap = {
  Heart,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  FirstAid,
  ChartLineUp,
  Handshake,
  UsersThree,
  Lightbulb,
  Phone,
  FolderOpen,
  ClipboardText,
};

export default function ProductCard({ product, variant = 'cream', index = 0 }) {
  const Icon = IconMap[product.icon] || ShieldCheck;
  const isDark = variant === 'navy';

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group relative flex flex-col h-full border transition-all duration-500 overflow-hidden ${
        isDark
          ? 'bg-navy-800 border-navy-600/50 hover:border-gold-500/60'
          : 'bg-cream-50 border-cream-200 hover:border-gold-400'
      }`}
      style={{ borderRadius: '2px' }}
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gold-500 transition-all duration-500 group-hover:w-full"
        style={{ width: isDark ? '48px' : '36px' }}
      />

      <div className="p-7 sm:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div
            className={`h-14 w-14 flex items-center justify-center border ${
              isDark
                ? 'border-gold-500/30 bg-navy-700 text-gold-400'
                : 'border-gold-300 bg-cream-100 text-gold-700'
            }`}
            style={{ borderRadius: '2px' }}
          >
            <Icon size={26} weight="duotone" />
          </div>
          <span
            className={`text-[10px] tracking-[0.22em] uppercase pt-2 ${
              isDark ? 'text-gold-400/70' : 'text-gold-600/80'
            }`}
          >
            0{index + 1}
          </span>
        </div>

        <h3
          className={`font-display text-[22px] sm:text-[24px] leading-tight mb-3 ${
            isDark ? 'text-cream-50' : 'text-navy-700'
          }`}
        >
          {product.name}
        </h3>
        <p
          className={`text-[14.5px] leading-relaxed flex-1 ${
            isDark ? 'text-cream-100/70' : 'text-charcoal-500'
          }`}
        >
          {product.blurb}
        </p>

        <div
          className={`mt-6 pt-5 flex items-center justify-between border-t ${
            isDark ? 'border-navy-600/60' : 'border-cream-200'
          }`}
        >
          <span
            className={`text-[12px] tracking-[0.18em] uppercase font-medium ${
              isDark ? 'text-gold-300' : 'text-gold-700'
            }`}
          >
            Learn more
          </span>
          <ArrowRight
            size={18}
            className={`transition-transform group-hover:translate-x-1 ${
              isDark ? 'text-gold-300' : 'text-gold-700'
            }`}
          />
        </div>
      </div>
    </Link>
  );
}
