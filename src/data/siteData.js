// ============================================================
//  Nyaradzo Life Assurance — Site Content
//  Tagline anchors: "A true Sahwira" · "Standing with families"
//  Principles: Service · Strength · Solutions
// ============================================================

export const business = {
  name: 'Nyaradzo Life Assurance',
  shortName: 'Nyaradzo',
  tagline: 'A true Sahwira for every chapter of life.',
  principle: 'Service · Strength · Solutions',
  phone: '+263 4 290 0935',
  phoneTel: '+26342900935',
  claimsHotline: '+263 8677 000 111',
  whatsapp: '263429009350',
  email: 'info@nyaradzo.co.zw',
  address: '52GQ+HR4, Causeway, Harare, Zimbabwe',
  mapsQuery: '52GQ+HR4 Harare Zimbabwe',
  hours: {
    weekdays: '8:00 – 17:00',
    saturday: '8:30 – 13:00',
    sunday: 'Closed',
  },
  logo: '/logo.svg',
  rating: 4.1,
  reviewCount: 291,
  website: 'https://www.nyaradzo.co.zw',
  social: {
    facebook: 'https://facebook.com/nyaradzo',
    linkedin: 'https://linkedin.com/company/nyaradzo-group',
    instagram: 'https://instagram.com/nyaradzogroup',
  },
  licenses: [
    { body: 'IPEC', label: 'Insurance & Pensions Commission of Zimbabwe' },
    { body: 'ZIMRA', label: 'Tax-compliant pension administrator' },
    { body: 'RBZ', label: 'Reserve Bank of Zimbabwe — registered underwriter' },
  ],
  founded: 2000,
  decades: 'Over two decades',
};

// ------------------------------------------------------------
//  NAVIGATION
// ------------------------------------------------------------
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/claims', label: 'Claims' },
  { to: '/advisors', label: 'Advisors' },
  { to: '/about', label: 'Heritage' },
  { to: '/contact', label: 'Contact' },
];

// ------------------------------------------------------------
//  HERO
// ------------------------------------------------------------
export const hero = {
  eyebrow: 'Since 2000 · A true Sahwira',
  headline: 'Standing with Zimbabwean families, every chapter.',
  subheadline:
    'Life assurance, funeral planning, education policies and pensions — thoughtfully designed for the rhythms of family life in Zimbabwe and the diaspora.',
  primaryCta: { label: 'Get a Quote', to: '/quote' },
  secondaryCta: { label: 'Find an Advisor', to: '/advisors' },
  image:
    'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&fit=crop&w=1600&q=80',
  imageAlt: 'Zimbabwean grandmother with grandchildren, warm afternoon light',
  trustStrip: [
    { k: '24+', v: 'Years of service' },
    { k: '450K+', v: 'Policies held' },
    { k: 'ZWL & USD', v: 'Dual-currency plans' },
    { k: '4.1★', v: '291 Google reviews' },
  ],
};

// ------------------------------------------------------------
//  PRODUCTS — summary + full detail
// ------------------------------------------------------------
export const products = [
  {
    slug: 'funeral-plan',
    name: 'Sahwira Funeral Plan',
    icon: 'Heart',
    blurb:
      'A dignified send-off, arranged in advance — so loved ones can grieve, not organise.',
    longBlurb:
      "At its heart, a funeral plan is an act of love. The Sahwira Plan carries the entire burden of the day — from transportation to repatriation, casket to catering — so your family can gather in peace rather than in panic.",
    hero:
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80',
    accent: 'gold',
    coverage: [
      'Full funeral package including casket, hearse and graveside services',
      'Cash payout for groceries, catering and family support',
      'Repatriation of remains within Zimbabwe and from neighbouring countries',
      'Tombstone benefit available after 12 months of premiums',
      'Extended family cover for up to 10 nominated members',
    ],
    eligibility: [
      'Principal member: 18 – 65 years at entry',
      'Spouse and children automatically covered under family plans',
      'Extended family members up to age 74 at entry',
      'No medical examination required under standard cover',
    ],
    faq: [
      {
        q: 'When does cover begin?',
        a: 'Accidental death cover is immediate. Natural-cause cover begins after a six-month waiting period, as is standard in the industry.',
      },
      {
        q: 'Can I upgrade the plan later?',
        a: 'Yes. You may upgrade the sum assured or add family members at any policy anniversary, subject to a short waiting period on new additions.',
      },
      {
        q: 'What happens if I miss a premium?',
        a: 'There is a 30-day grace period. After that the policy lapses, but it may be reinstated by settling arrears within twelve months.',
      },
      {
        q: 'Is the payout in USD or ZWL?',
        a: 'Both are available. Many families now hold the USD plan for stability, paid either via Ecocash USD, bank transfer, or in-branch.',
      },
    ],
  },
  {
    slug: 'life-cover',
    name: 'Life Cover',
    icon: 'ShieldCheck',
    blurb:
      'Protect your family’s income and dreams if life takes an unexpected turn.',
    longBlurb:
      'Life Cover ensures that the home you are building, the school fees you are paying, and the plans you have whispered to one another continue — even in your absence. A lump-sum payout reaches your beneficiary quickly and with minimum paperwork.',
    hero:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80',
    accent: 'navy',
    coverage: [
      'Lump-sum benefit on death, from USD 5,000 to USD 500,000',
      'Accelerated terminal-illness benefit — up to 50% paid on diagnosis',
      'Total and permanent disability rider available',
      'Waiver of premium if you become unable to work',
      'Indexed cover — sum assured grows annually to resist inflation',
    ],
    eligibility: [
      'Entry age: 18 – 60 years',
      'Cover continues up to age 75',
      'Simple tele-underwriting for smaller amounts',
      'Full medicals required above USD 150,000 sum assured',
    ],
    faq: [
      {
        q: 'How is my premium calculated?',
        a: 'Premiums are based on age at entry, sum assured, gender, smoker status, and chosen term. A personalised illustration can be generated in under a minute.',
      },
      {
        q: 'Can I name more than one beneficiary?',
        a: 'Yes. You may nominate multiple beneficiaries with chosen percentages, and you may update the nomination at any time in writing.',
      },
      {
        q: 'Is the payout taxed?',
        a: 'Life assurance proceeds to a nominated beneficiary are not subject to income tax in Zimbabwe, making them an efficient way to pass wealth.',
      },
    ],
  },
  {
    slug: 'education-policy',
    name: 'Education Policy',
    icon: 'GraduationCap',
    blurb:
      'A disciplined savings plan that matures in time for school or university fees.',
    longBlurb:
      "Education is the inheritance no one can take away. Our Education Policy turns today's small monthly effort into tomorrow's tuition — with a guaranteed payout on maturity and a safety net if a parent passes away before the child reaches the school gate.",
    hero:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    accent: 'terracotta',
    coverage: [
      'Guaranteed maturity benefit tied to your child’s expected entry year',
      'Premiums waived if the parent-breadwinner passes away or is disabled',
      'Annual bonuses declared from the Life Fund',
      'Flexible topping-up — add lump sums when fortune allows',
      'Stagger payouts across primary, secondary, and tertiary milestones',
    ],
    eligibility: [
      'Child’s age at entry: 0 – 12 years',
      'Parent’s age at entry: 18 – 55 years',
      'Policy term: 5 – 18 years',
      'Minimum premium from USD 15 / month',
    ],
    faq: [
      {
        q: 'What if my child chooses a different path?',
        a: 'The maturity value is paid regardless — your family decides how it is used. It is a savings vehicle first, earmarked for education by design.',
      },
      {
        q: 'Can grandparents take the policy?',
        a: 'Absolutely. Many Nyaradzo education policies are held by grandparents, aunts, and uncles as a quiet act of legacy.',
      },
    ],
  },
  {
    slug: 'retirement-annuity',
    name: 'Retirement Annuity',
    icon: 'Briefcase',
    blurb:
      'Plant today so that the years after work feel like a harvest, not a drought.',
    longBlurb:
      'A Retirement Annuity puts discipline behind your future. Contribute what you can, receive tax relief on every dollar, and step into retirement with a monthly pension or a one-third lump sum plus income — the choice is yours at 55.',
    hero:
      'https://images.unsplash.com/photo-1552072804-14b17b39b0c6?auto=format&fit=crop&w=1600&q=80',
    accent: 'navy',
    coverage: [
      'Tax-deductible contributions up to the statutory ceiling',
      'Commutation option: take one-third as a lump sum from age 55',
      'Full vesting from age 55, early retirement from age 50 on approval',
      'Transferable between employers and across the diaspora',
      'Guaranteed annuity option on retirement for life-long income',
    ],
    eligibility: [
      'Open to employees, self-employed individuals and diaspora earners',
      'Entry age: 18 – 60 years',
      'Minimum contribution from USD 25 / month',
      'Top-ups permitted once per quarter',
    ],
    faq: [
      {
        q: 'Does my employer need to be involved?',
        a: 'Not at all. This is an individual retirement annuity. However, your employer may pay premiums on your behalf and receive corresponding tax benefits.',
      },
      {
        q: 'Can I access the funds early?',
        a: 'Retirement annuities are locked to preserve their purpose. Early access is only permitted in strictly defined circumstances such as permanent emigration or total disability.',
      },
    ],
  },
  {
    slug: 'medical-aid',
    name: 'Family Medical Aid',
    icon: 'FirstAid',
    blurb:
      'Access to quality healthcare when your family needs it most — without delay.',
    longBlurb:
      'Developed in partnership with leading Zimbabwean healthcare networks, our medical aid plans sit alongside your life cover for complete peace of mind. Three tiers — Standard, Executive, and Platinum — cover general practice, specialists, hospital admissions and chronic medication.',
    hero:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    accent: 'terracotta',
    coverage: [
      'General practitioner and specialist consultations',
      'Hospitalisation cover with bed-cost top-ups',
      'Chronic medication dispensary — 40 approved conditions',
      'Maternity package: pre-natal, delivery and post-natal visits',
      'Optical and dental benefits on Executive and Platinum tiers',
    ],
    eligibility: [
      'Principal member: 18 – 70 years at entry',
      'Dependants added at any time',
      'No medical exam for Standard tier',
      'Three-month waiting period on pre-existing conditions',
    ],
    faq: [
      {
        q: 'Which hospitals are on the network?',
        a: "The plan accepts Avenues Clinic, Baines Avenue Hospital, West End, St. Anne's and all major Harare and Bulawayo hospitals, plus a growing regional network.",
      },
      {
        q: 'Can I combine medical aid with life cover?',
        a: 'Yes — the Sahwira Complete bundle combines life cover, funeral plan and medical aid at a blended monthly premium with a single debit date.',
      },
    ],
  },
  {
    slug: 'investment-policy',
    name: 'Investment Policy',
    icon: 'ChartLineUp',
    blurb:
      'A medium-term savings plan that pairs growth with a life assurance safety net.',
    longBlurb:
      'Our Investment Policy is designed for the patient builder — a home deposit, a future business, a wedding, a dignified retirement abroad. Contributions are pooled in the Nyaradzo Life Fund, which has delivered consistent bonuses for more than twenty years.',
    hero:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
    accent: 'gold',
    coverage: [
      '5, 10, 15 or 20 year savings horizon',
      'Annual reversionary bonuses declared from Life Fund',
      'Built-in life cover equal to premiums paid',
      'Lump-sum maturity with optional rollover into an annuity',
      'Partial surrenders permitted after year 3 without penalty',
    ],
    eligibility: [
      'Entry age: 18 – 65 years',
      'Minimum premium from USD 30 / month',
      'USD and ZWL variants',
      'Transferable ownership on maturity',
    ],
    faq: [
      {
        q: 'What kind of returns can I expect?',
        a: 'Returns are declared annually from the Life Fund and are never negative, though they vary with market conditions. The five-year rolling average has comfortably outpaced local inflation on the USD plan.',
      },
    ],
  },
];

// ------------------------------------------------------------
//  WHY US — pillars
// ------------------------------------------------------------
export const pillars = [
  {
    icon: 'Handshake',
    title: 'A true Sahwira',
    body:
      'Sahwira means a friend who walks with you through joy and sorrow. That is how we approach every policy, every claim, every family we serve.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Regulated strength',
    body:
      'Licensed by IPEC and capitalised to weather economic seasons. Every claim is backed by a conservatively managed Life Fund.',
  },
  {
    icon: 'UsersThree',
    title: 'Generational reach',
    body:
      'From the mine-worker in Shurugwi to the nurse in Manchester — our products follow families wherever life takes them.',
  },
  {
    icon: 'Lightbulb',
    title: 'Plain-language policies',
    body:
      'No small print to squint at. Benefits, waiting periods, and exclusions are written in clear English and translated into Shona and Ndebele on request.',
  },
];

// ------------------------------------------------------------
//  STATS — heritage strip
// ------------------------------------------------------------
export const stats = [
  { number: '450,000+', label: 'Lives covered across Zimbabwe & diaspora' },
  { number: 'USD 120M+', label: 'Claims settled in the last five years' },
  { number: '98.2%', label: 'Valid claims paid within 48 hours' },
  { number: '24', label: 'Years serving Zimbabwean families' },
];

// ------------------------------------------------------------
//  CLAIMS — 4-step process
// ------------------------------------------------------------
export const claimSteps = [
  {
    step: '01',
    icon: 'Phone',
    title: 'Notify us',
    body:
      'Call the 24-hour claims hotline or walk into any branch. In bereavement, we deploy a field officer to the home within six hours.',
  },
  {
    step: '02',
    icon: 'FolderOpen',
    title: 'Submit documents',
    body:
      'We guide you through the short checklist — death certificate, ID, policy number, and proof of relationship. We can collect originals from you.',
  },
  {
    step: '03',
    icon: 'ClipboardText',
    title: 'Assessment',
    body:
      'A dedicated assessor reviews the claim, usually within 24 working hours. Where more information is needed, we will call — not write a cold letter.',
  },
  {
    step: '04',
    icon: 'Handshake',
    title: 'Payout',
    body:
      'Valid claims are paid within 48 hours of approval — direct to the beneficiary’s account, mobile wallet, or collected in person.',
  },
];

export const claimDocuments = [
  'Certified copy of the policy-holder’s ID',
  'Original or certified death certificate',
  'Burial order from the Registrar-General',
  'Certified copy of the beneficiary’s ID',
  'Proof of relationship (marriage or birth certificate)',
  'Completed claim form (we provide — or download from this site)',
  'For accidental death: police report',
];

// ------------------------------------------------------------
//  ADVISORS
// ------------------------------------------------------------
export const advisors = [
  {
    name: 'Tendai Chikafu',
    title: 'Senior Financial Advisor, Harare Central',
    experience: '14 years',
    languages: 'English · Shona',
    photo:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    quote:
      'My role is to listen first, then recommend. A policy is only useful if it matches the life it is meant to protect.',
    phone: '+263 772 441 208',
  },
  {
    name: 'Rudo Mutasa',
    title: 'Family Planner, Avondale',
    experience: '9 years',
    languages: 'English · Shona · Ndebele',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    quote:
      'Every family I meet teaches me something. Protection is not a product — it is a promise.',
    phone: '+263 774 118 902',
  },
  {
    name: 'Brighton Ncube',
    title: 'Pensions Specialist, Bulawayo Office',
    experience: '17 years',
    languages: 'English · Ndebele',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    quote:
      'Retirement is not the end of productivity. It is the chapter you have already paid for.',
    phone: '+263 712 590 447',
  },
  {
    name: 'Farai Mhlanga',
    title: 'Diaspora Advisor, Online Services',
    experience: '11 years',
    languages: 'English · Shona',
    photo:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    quote:
      'From Johannesburg to Birmingham, my clients hold plans for the families they love in Zimbabwe. I sit in that gap.',
    phone: '+263 778 033 512',
  },
  {
    name: 'Chipo Sibanda',
    title: 'Education Specialist, Masvingo',
    experience: '8 years',
    languages: 'English · Shona',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    quote:
      'The proudest day of my job is watching a child walk into university on a policy their late father started.',
    phone: '+263 772 908 316',
  },
  {
    name: 'Takudzwa Moyo',
    title: 'Claims Liaison, Harare',
    experience: '6 years',
    languages: 'English · Shona',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    quote:
      'When a family calls me, it is usually the worst week of their year. My job is to carry some of the weight.',
    phone: '+263 775 622 148',
  },
];

// ------------------------------------------------------------
//  CUSTOMER STORIES — respectful, invented
// ------------------------------------------------------------
export const stories = [
  {
    name: 'Amai Masiiwa',
    role: 'Mutare — Sahwira Funeral Plan holder since 2007',
    quote:
      'When my husband passed on, I did not lift a finger. From the hearse to the catering at the church hall, Nyaradzo carried us. A true Sahwira.',
    photo:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tawanda & Ruvimbo Chigovera',
    role: 'Harare — Education Policy since 2014',
    quote:
      'We started at USD 20 a month when our daughter was two. This year she walked into her first lecture at NUST — the policy paid her tuition in full.',
    photo:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mr Shadreck Dube',
    role: 'Diaspora — Leeds, UK · Retirement Annuity',
    quote:
      'Every month from Leeds I contribute in USD. I sleep better knowing my return home in ten years is already planned, not hoped.',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Mrs Nomusa Ndiweni',
    role: 'Bulawayo — Family Life Cover since 2012',
    quote:
      "After my husband's accident last December, the claim was paid in 41 hours. I used it to settle the bond on the house. The children never noticed a gap.",
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tapiwa Mapfumo',
    role: 'Kwekwe — Small business owner',
    quote:
      'My advisor Brighton came to my shop three times to make sure I understood. I now hold the Sahwira plan for my mother, my wife and our three children. Small monthly payment. Large peace of mind.',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
];

// ------------------------------------------------------------
//  HERITAGE MILESTONES
// ------------------------------------------------------------
export const heritage = [
  {
    year: '2000',
    title: 'Founded in Harare',
    body:
      'Opened our doors with a simple promise — that no Zimbabwean family should have to carry the practical burden of bereavement alone.',
  },
  {
    year: '2006',
    title: 'First Bulawayo office',
    body:
      'Expanded into Matabeleland with offices in Bulawayo, Gwanda and Victoria Falls.',
  },
  {
    year: '2011',
    title: 'Diaspora Services launched',
    body:
      'Pioneered dual-currency plans for Zimbabweans working in the UK, South Africa and beyond — with repatriation benefits built in.',
  },
  {
    year: '2015',
    title: 'Sahwira Connect Card',
    body:
      'Introduced an electronic grocery-allowance card so that families could feed the mourners from day one of bereavement.',
  },
  {
    year: '2020',
    title: '20 years · 300,000 policies',
    body:
      'Celebrated two decades of service with 300,000 active policies and the lowest claim-repudiation rate in the industry.',
  },
  {
    year: '2024',
    title: 'Digital-first & greener',
    body:
      'Launched the Nyaradzo mobile platform with biometric claims, solarised every branch, and opened our first fully paperless office in Avondale.',
  },
];

// ------------------------------------------------------------
//  FAQ — homepage sidebar
// ------------------------------------------------------------
export const homeFaq = [
  {
    q: 'How quickly are funeral claims paid?',
    a: '98.2% of valid funeral claims are paid within 48 hours of documentation being submitted. In active bereavement, we mobilise an on-the-ground response within six hours.',
  },
  {
    q: 'Can I hold a policy in USD?',
    a: 'Yes. All our flagship products — Life Cover, Funeral Plan, Education Policy, Retirement Annuity and Investment Policy — are available in USD or ZWL.',
  },
  {
    q: 'I live in the diaspora. Can I still take a plan?',
    a: 'Absolutely. Our Diaspora Services desk handles onboarding remotely with a video call, digital signatures, and debit-order or card payments from abroad.',
  },
  {
    q: 'What is the difference between life cover and a funeral plan?',
    a: 'A funeral plan handles the immediate costs of a dignified send-off. Life cover pays a larger lump sum to your beneficiaries to replace income and keep long-term plans on track. Many families hold both.',
  },
];

// ------------------------------------------------------------
//  COVERAGE AREAS
// ------------------------------------------------------------
export const coverageAreas = [
  'Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Masvingo', 'Kwekwe',
  'Chinhoyi', 'Victoria Falls', 'Kadoma', 'Marondera', 'Bindura', 'Hwange',
  'South Africa', 'United Kingdom', 'United States', 'Botswana',
];
