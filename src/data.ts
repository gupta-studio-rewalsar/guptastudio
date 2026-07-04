/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem } from './types';

// Import our custom AI-generated premium luxury wedding imagery
import heroImage from './assets/images/hero_cinematic_wedding_1783104793429.jpg';
import bridePortrait from './assets/images/portfolio_bride_portrait_1783104810888.jpg';
import weddingDance from './assets/images/portfolio_wedding_dance_1783104825460.jpg';
import palaceWedding from './assets/images/portfolio_palace_wedding_1783104838530.jpg';

export const BRAND_NAME = "GUPTA STUDIO";
export const BRAND_TAGLINE = "CINEMATIC WEDDING FILMS & FINE ART PHOTOGRAPHY";
export const PHONE_NUMBER = "+919418359966";
export const PHONE_DISPLAY = "+91 94183 59966";
export const EMAIL_ADDRESS = "Gulshangupta255@gmail.com";
export const OFFICE_LOCATION = "Rewalsar, Mandi (Himachal Pradesh)";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/rewalsar_darpan/",
  facebook: "https://www.facebook.com/rewalsardarpan",
};

export const HERO_DATA = {
  title: "Cinematic Wedding Films",
  subtitle: "We don't just record weddings; we immortalize them. Gupta Studio crafts high-end, deeply emotional, and visually grand cinematic films that reflect the soul of your love story.",
  image: heroImage,
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Royal Heritage Saga',
    type: 'photo',
    category: 'wedding',
    url: palaceWedding,
    description: 'An grand royal union set against ancient sandstone arches, capturing the majestic scale of a heritage palace wedding.',
    location: 'Udaipur, Rajasthan',
    size: 'large'
  },
  {
    id: 'p2',
    title: 'The Eternal Grace of a Bride',
    type: 'photo',
    category: 'portrait',
    url: bridePortrait,
    description: 'A close-up editorial portrait capturing the poise, delicate jewelry details, and profound emotion of an Indian bride preparing for her vows.',
    location: 'Delhi NCR',
    size: 'tall'
  },
  {
    id: 'p3',
    title: 'Golden Sparklers & Sangeet Joy',
    type: 'photo',
    category: 'wedding',
    url: weddingDance,
    description: 'Freezing a high-energy dance performance surrounded by cold-pyro sparklers under a wash of golden ambient light.',
    location: 'Shimla, Himachal Pradesh',
    size: 'wide'
  },
  {
    id: 'p4',
    title: 'The Whispers of Devotion',
    type: 'video',
    category: 'cinematic',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-walking-40455-large.mp4',
    description: 'A cinematic video sequence of a private garden stroll at dusk, emphasizing quiet glances and tender holding of hands.',
    location: 'Chandigarh',
    size: 'regular'
  },
  {
    id: 'p5',
    title: 'The Veil of Red & Gold',
    type: 'video',
    category: 'prewedding',
    url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gorgeous-indian-bride-posing-smiling-40156-large.mp4',
    description: 'A luxury pre-wedding cinematic shoot, revealing the breathtaking detailing of traditional red silk and intricate gold thread work.',
    location: 'Jaipur, Rajasthan',
    size: 'wide'
  },
  {
    id: 'p6',
    title: 'The Covenant Ring',
    type: 'video',
    category: 'wedding',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-putting-on-the-wedding-ring-40457-large.mp4',
    description: 'The precious, nervous moment of slide-ring exchange captured with close-up macro cinematography and soft bokeh.',
    location: 'New Delhi',
    size: 'regular'
  },
  {
    id: 'p7',
    title: 'Timeless Haldi Laughter',
    type: 'photo',
    category: 'prewedding',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200',
    description: 'An explosion of yellow marigold petals and golden turmeric pastes, freezing genuine family laughter.',
    location: 'Amritsar, Punjab',
    size: 'regular'
  },
  {
    id: 'p8',
    title: 'The Majestic Walk of the Groom',
    type: 'photo',
    category: 'portrait',
    url: 'https://images.unsplash.com/photo-1550005816-092e6f0e9b6f?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant portrait of the groom adjusting his cuffs, set against the moody contrast of luxury wood panels and soft window light.',
    location: 'Gurugram, Haryana',
    size: 'regular'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Gupta Studio didn't just document our wedding; they made an absolute masterpiece. Every frame of our cinematic film looks like a high-budget romance. We cry every time we watch it.",
    author: "Aishwarya & Rohan",
    event: "Jaipur Palace Wedding"
  },
  {
    quote: "The photos are breathtaking, but their calm, reassuring presence throughout the wedding was the real gift. They captured the most raw, natural smiles without ever feeling intrusive.",
    author: "Meera & Siddharth",
    event: "Shimla Hills Celebration"
  }
];
