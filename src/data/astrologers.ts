export interface Astrologer {
  id: string;
  name: string;
  title: string;
  specialties: string;
  languages: string;
  experience: string;
  consultations: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  isOnline: boolean;
  category: 'love' | 'career' | 'vedic' | 'tarot';
}

export const ASTROLOGERS: Astrologer[] = [
  {
    id: 'ananya',
    name: 'Acharya Ananya',
    title: 'Vedic, Tarot & Relationship Expert',
    specialties: 'Vedic, Tarot, Numerology',
    languages: 'Hindi, English',
    experience: '12+ Years Exp',
    consultations: '14,820 Consultations',
    rating: 4.9,
    originalPrice: 25,
    discountedPrice: 1,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    isOnline: true,
    category: 'love',
  },
  {
    id: 'devraj',
    name: 'Pandit Devraj Sharma',
    title: 'Kundli, KP System, Vastu Expert',
    specialties: 'Kundli, KP System, Vastu',
    languages: 'Hindi, Sanskrit',
    experience: '18 Yrs Exp',
    consultations: '22,100 Consultations',
    rating: 5.0,
    originalPrice: 35,
    discountedPrice: 1,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    isOnline: true,
    category: 'vedic',
  },
  {
    id: 'priya',
    name: 'Dr. Priya Nambiar',
    title: 'Psychic Reader & Palmistry Specialist',
    specialties: 'Psychic Reader & Palmistry',
    languages: 'English, Tamil',
    experience: '10 Yrs Exp',
    consultations: '9,450 Consultations',
    rating: 4.8,
    originalPrice: 30,
    discountedPrice: 1,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    isOnline: true,
    category: 'tarot',
  },
];
