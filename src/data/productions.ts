// src/data/productions.ts
// Single source of truth for all film/production data.
// Previously duplicated across StudioLandingPage.tsx and ProductionsPage.tsx
// with contradicting values. ProductionsPage synopses used as authoritative source.

export type ProductionStatus = 'Released' | 'In Development' | 'Broadcast';

export interface ProductionDetail {
  label: string;
  value: string;
}

export interface Production {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  // Short teaser used on the landing page cards
  teaser: string;
  // Full synopsis used on individual film pages (from ProductionsPage.tsx)
  synopsis: string;
  status: ProductionStatus;
  // Tailwind classes for status badge
  statusColor: string;
  // Locations shown on landing card (may be empty)
  locations: string[];
  // Detail rows shown on film page (label/value pairs)
  details: ProductionDetail[];
  // CTA on film page
  cta: { label: string; href: string };
}

// TODO: Teaser and synopsis describe different stories — confirm with Glen/Shelly which is correct. Teasers from StudioLandingPage, synopses from ProductionsPage.
const blindAmbition: Production = {
  slug: 'blind-ambition',
  index: '01',
  title: 'Blind Ambition',
  subtitle: 'Adventure Documentary Series',
  teaser:
    'An international documentary series following blind athlete Chad Foster as he takes on extreme challenges across the world.',
  synopsis:
    'A documentary following a remarkable group of Zimbabwean refugees who became the first team from their country to compete in the World Wine Tasting Championship. Their journey from displacement to an international stage is a story of identity, excellence, and extraordinary determination.',
  status: 'Released',
  statusColor: 'text-emerald-400 border-emerald-800/50 bg-emerald-950/30',
  locations: ['Rome', 'Paris', 'Dubai', 'Kilimanjaro'],
  details: [
    {
      label: 'Locations',
      value: 'Zimbabwe, South Africa, France',
    },
    {
      label: 'Partners',
      value: 'International wine community, refugee advocacy networks',
    },
  ],
  cta: { label: 'Watch the Film', href: '#' },
};

const blindAdventures: Production = {
  slug: 'blind-adventures',
  index: '02',
  title: 'Blind Adventures',
  subtitle: 'Documentary Series',
  teaser:
    'A documentary adventure series exploring resilience, accessibility, and global exploration.',
  synopsis:
    'Following the journey of visually impaired adventurers as they navigate extraordinary physical and emotional challenges — redefining what is possible. The project explores accessibility, courage, and the recalibration of what it means to explore the world.',
  status: 'In Development',
  statusColor: 'text-amber-400 border-amber-800/50 bg-amber-950/30',
  locations: [],
  details: [
    {
      label: 'Status',
      value: 'Development — seeking production partners',
    },
  ],
  cta: { label: 'Express Interest', href: '/collaborate' },
};

const thirst: Production = {
  slug: 'thirst',
  index: '03',
  title: 'Thirst',
  subtitle: 'Investigative Documentary',
  teaser:
    'Investigative documentary exploring water sovereignty and systemic failures in water infrastructure.',
  synopsis:
    'A cinematic investigation into the global water crisis — following the stories of communities, scientists, and advocates working to restore access to clean water. Thirst connects local struggles to global systems, profiling the people building solutions at every scale.',
  status: 'In Development',
  statusColor: 'text-sky-400 border-sky-800/50 bg-sky-950/30',
  locations: [],
  details: [
    {
      label: 'Themes',
      value: 'Water health, environmental justice, technology, community',
    },
    {
      label: 'Companion Project',
      value: 'I Drink Living Water',
    },
  ],
  cta: { label: 'Express Interest', href: '/collaborate' },
};

/**
 * All productions in catalog order.
 * Serves as the authoritative source for film/production data across the application.
 */
export const productions: Production[] = [
  blindAmbition,
  blindAdventures,
  thirst,
];

/**
 * Look up a production by its slug.
 * @param slug - The production slug (e.g., 'blind-ambition')
 * @returns The production object, or undefined if not found
 */
export function getProductionBySlug(slug: string): Production | undefined {
  return productions.find((production) => production.slug === slug);
}
