import React, { useState } from 'react';
import { toast } from 'sonner';
import { WhatsappLogo, EnvelopeSimple, ArrowRight } from '@phosphor-icons/react';
import { business, products } from '../data/siteData';

export default function QuoteForm({ defaultProduct = '', compact = false }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: defaultProduct,
    age: '',
    cover: '',
    message: '',
    channel: 'whatsapp',
  });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.product) {
      toast.error('Please provide your name, phone and product of interest.');
      return;
    }

    const lines = [
      `Hello Nyaradzo — I would like a quote.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      `Product: ${form.product}`,
      form.age && `Age: ${form.age}`,
      form.cover && `Sum assured / cover target: ${form.cover}`,
      form.message && ``,
      form.message && `Note: ${form.message}`,
    ].filter(Boolean);
    const body = lines.join('\n');

    if (form.channel === 'whatsapp') {
      window.open(
        `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(body)}`,
        '_blank'
      );
    } else {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        'Quote request — ' + form.product
      )}&body=${encodeURIComponent(body)}`;
    }
    toast.success('Thank you — your details are on their way to an advisor.');
  };

  const btnIsWhatsapp = form.channel === 'whatsapp';

  return (
    <form
      onSubmit={submit}
      className={`bg-cream-50 border border-cream-200 p-6 sm:p-8 space-y-4 ${
        compact ? '' : 'sm:p-10'
      }`}
      style={{ borderRadius: '2px' }}
    >
      <div>
        <p className="eyebrow">Request a quote</p>
        <h3 className="font-display text-2xl sm:text-3xl text-navy-700 mt-2 gold-rule">
          Tell us a little about you.
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Full name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <Field
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={onChange}
          type="tel"
          placeholder="+263 77…"
          required
        />
      </div>

      <Field
        label="Email (optional)"
        name="email"
        value={form.email}
        onChange={onChange}
        type="email"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <SelectField
          label="Product of interest"
          name="product"
          value={form.product}
          onChange={onChange}
          required
          options={[
            { value: '', label: 'Select a plan…' },
            ...products.map((p) => ({ value: p.name, label: p.name })),
          ]}
        />
        <Field
          label="Your age"
          name="age"
          value={form.age}
          onChange={onChange}
          type="number"
          placeholder="e.g. 38"
        />
      </div>

      <Field
        label="Desired cover / contribution (USD)"
        name="cover"
        value={form.cover}
        onChange={onChange}
        placeholder="e.g. USD 50,000 life cover — or USD 100 / month"
      />

      <div>
        <label className="block text-[12px] tracking-[0.16em] uppercase text-charcoal-500 mb-2">
          Anything else we should know?
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={compact ? 2 : 3}
          className="w-full bg-white border border-cream-300 px-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none transition-colors resize-none"
          style={{ borderRadius: '2px' }}
          placeholder="Dependants, diaspora status, preferred currency…"
        />
      </div>

      {/* Channel toggle */}
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
                  : 'bg-transparent text-charcoal-600 border-cream-300 hover:border-navy-500'
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
        className={`w-full flex items-center justify-center gap-2 py-4 text-sm tracking-[0.14em] uppercase transition-all duration-300 mt-3 ${
          btnIsWhatsapp
            ? 'bg-[#25D366] text-white hover:bg-[#1fbc5a]'
            : 'bg-navy-700 text-cream-50 hover:bg-navy-800'
        }`}
        style={{ borderRadius: '2px' }}
      >
        Send quote request
        <ArrowRight size={16} weight="bold" />
      </button>

      <p className="text-[11px] text-charcoal-400 text-center leading-relaxed pt-1">
        No obligation. An advisor will respond within one working day.
      </p>
    </form>
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
        className="w-full bg-white border border-cream-300 px-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none transition-colors"
        style={{ borderRadius: '2px' }}
      />
    </div>
  );
}

function SelectField({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-[12px] tracking-[0.16em] uppercase text-charcoal-500 mb-2">
        {label}
      </label>
      <select
        {...props}
        className="w-full bg-white border border-cream-300 px-4 py-3 text-[14px] focus:border-gold-500 focus:outline-none transition-colors"
        style={{ borderRadius: '2px' }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
