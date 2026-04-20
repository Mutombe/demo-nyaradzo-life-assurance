import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  WhatsappLogo,
  ArrowRight,
} from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { business } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    channel: 'whatsapp',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('Please include at least your name and a message.');
      return;
    }
    const body = [
      `Hello Nyaradzo,`,
      ``,
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.subject && `Subject: ${form.subject}`,
      ``,
      form.message,
    ]
      .filter(Boolean)
      .join('\n');

    if (form.channel === 'whatsapp') {
      window.open(
        `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(body)}`,
        '_blank'
      );
    } else {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        form.subject || 'Enquiry'
      )}&body=${encodeURIComponent(body)}`;
    }
    toast.success('Thank you — your message is on its way.');
  };

  const cards = [
    {
      icon: MapPin,
      label: 'Visit us',
      value: business.address,
      action: {
        label: 'Open in Maps',
        href: `https://maps.google.com/?q=${encodeURIComponent(business.mapsQuery)}`,
      },
    },
    {
      icon: Phone,
      label: 'Call',
      value: business.phone,
      action: { label: 'Dial now', href: `tel:${business.phoneTel}` },
    },
    {
      icon: EnvelopeSimple,
      label: 'Email',
      value: business.email,
      action: { label: 'Compose', href: `mailto:${business.email}` },
    },
    {
      icon: Clock,
      label: 'Open hours',
      value: `Mon–Fri ${business.hours.weekdays} · Sat ${business.hours.saturday}`,
    },
  ];

  const btnIsWhatsapp = form.channel === 'whatsapp';

  return (
    <PageTransition>
      <SEO
        title="Contact — Nyaradzo Life Assurance"
        description={`Visit our Harare office at ${business.address}, call ${business.phone}, or message us on WhatsApp.`}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's start the conversation."
        subtitle="Walk into our Causeway office, phone us, or message on WhatsApp. Our doors, and our ears, are open."
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <SectionReveal
              key={c.label}
              delay={i * 70}
              className="bg-cream-50 border border-cream-200 p-7 flex flex-col h-full"
            >
              <div
                className="h-11 w-11 flex items-center justify-center bg-navy-700 text-gold-400"
                style={{ borderRadius: '2px' }}
              >
                <c.icon size={18} weight="duotone" />
              </div>
              <p className="eyebrow mt-5">{c.label}</p>
              <p className="font-display text-lg text-navy-700 mt-2 leading-snug">
                {c.value}
              </p>
              {c.action && (
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase text-gold-700 hover:text-navy-700"
                >
                  {c.action.label}
                  <ArrowRight size={13} weight="bold" />
                </a>
              )}
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-10 sm:py-16 bg-cream-100 border-y border-cream-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-10">
          <SectionReveal>
            <form
              onSubmit={submit}
              className="bg-cream-50 border border-cream-200 p-8 sm:p-10 space-y-4"
              style={{ borderRadius: '2px' }}
            >
              <div>
                <p className="eyebrow">Send a message</p>
                <h2 className="font-display text-3xl text-navy-700 mt-2 gold-rule">
                  We'll reply within one working day.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                <Field label="Phone" name="phone" value={form.phone} onChange={onChange} type="tel" />
              </div>
              <Field label="Email" name="email" value={form.email} onChange={onChange} type="email" />
              <Field label="Subject" name="subject" value={form.subject} onChange={onChange} />
              <div>
                <label className="block text-[12px] tracking-[0.16em] uppercase text-charcoal-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  required
                  className="w-full bg-white border border-cream-300 px-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none resize-none"
                  style={{ borderRadius: '2px' }}
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-[12px] tracking-[0.16em] uppercase text-charcoal-500 mr-2">
                  Reply via:
                </span>
                {[
                  { key: 'whatsapp', label: 'WhatsApp', Icon: WhatsappLogo },
                  { key: 'email', label: 'Email', Icon: EnvelopeSimple },
                ].map(({ key, label, Icon }) => {
                  const active = form.channel === key;
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setForm({ ...form, channel: key })}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] tracking-wide border transition-colors ${
                        active
                          ? key === 'whatsapp'
                            ? 'bg-[#25D366] text-white border-[#25D366]'
                            : 'bg-navy-700 text-cream-50 border-navy-700'
                          : 'text-charcoal-600 border-cream-300 hover:border-navy-500'
                      }`}
                      style={{ borderRadius: '2px' }}
                    >
                      <Icon size={13} weight={active ? 'fill' : 'regular'} />
                      {label}
                    </button>
                  );
                })}
              </div>
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-4 text-sm tracking-[0.14em] uppercase transition-all ${
                  btnIsWhatsapp
                    ? 'bg-[#25D366] text-white hover:bg-[#1fbc5a]'
                    : 'bg-navy-700 text-cream-50 hover:bg-navy-800'
                }`}
                style={{ borderRadius: '2px' }}
              >
                Send message
                <ArrowRight size={15} weight="bold" />
              </button>
            </form>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div
              className="h-full min-h-[420px] overflow-hidden border border-cream-200 bg-cream-50"
              style={{ borderRadius: '2px' }}
            >
              <iframe
                title="Nyaradzo Harare Map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  business.mapsQuery
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[420px]"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-[12px] tracking-[0.16em] uppercase text-charcoal-500 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white border border-cream-300 px-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none"
        style={{ borderRadius: '2px' }}
      />
    </div>
  );
}
