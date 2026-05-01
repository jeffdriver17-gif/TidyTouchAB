/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  image: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'Perfectly balanced upkeep for busy lifestyles. Weekly, bi-weekly, or monthly luxury maintenance.',
    price: 129,
    icon: 'Home',
    image: '/residential_clean.png',
    features: ['Dusting & Surface Polishing', 'Vacuuming & Floor Sanitization', 'Kitchen & Bathroom Detailing']
  },
  {
    id: 'deep-clean',
    title: 'Deep Clean',
    description: 'A comprehensive restoration of your space. We touch every baseboard, vent, and hidden corner.',
    price: 249,
    icon: 'Sparkles',
    image: '/deep_clean.png',
    features: ['Baseboards & Moulding', 'Behind Appliance Detailing', 'Grout & Tile Revival']
  },
  {
    id: 'move-in-out',
    title: 'Move-In/Out',
    description: 'Seamless transitions. Ensure your new chapter begins in a pristine, sanitized environment.',
    price: 399,
    icon: 'Truck',
    image: '/move_in_out.png',
    features: ['Full Sanitization', 'Inside Cabinets & Drawers', 'Wall Washing']
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'James D.',
    role: 'Executive, Mount Royal',
    content: "Tidy Touch transformed my chaotic downtown condo into a sanctuary. I travel for work constantly, and coming home to their spotless finish is the best part of my week. Worth every penny.",
    initials: 'JD'
  },
  {
    id: 2,
    name: 'Maria L.',
    role: 'Homeowner, Aspen Woods',
    content: "With two dogs and a toddler, I didn't think my white rugs would survive. Tidy Touch uses products that are safe but incredibly effective. Their team is professional and so kind.",
    initials: 'ML'
  }
];
