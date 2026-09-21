export interface CarouselItem {
  id: string;
  label: string;
  icon: string;
  iconGradient: string;
  badge?: string;
  actionType: 'scroll' | 'scan' | 'toast';
  target?: string;
  toastTitle?: string;
  toastMsg?: string;
  toastIcon?: string;
}

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 'horoscope',
    label: 'Daily Horoscope',
    icon: '♈',
    iconGradient: 'from-amberGold-400 to-amberGold-600',
    actionType: 'scroll',
    target: 'horoscopeSection',
  },
  {
    id: 'palm',
    label: 'AI Palm Scanner',
    icon: '✋',
    iconGradient: 'from-purple-500 to-indigo-600',
    badge: 'AI',
    actionType: 'scan',
    target: 'palm',
  },
  {
    id: 'kundli',
    label: 'Free Kundli Chart',
    icon: '📜',
    iconGradient: 'from-emerald-500 to-teal-600',
    actionType: 'scroll',
    target: 'kundliSection',
  },
  {
    id: 'flame',
    label: 'FLAME Love Match',
    icon: '❤️',
    iconGradient: 'from-rose-500 to-pink-600',
    actionType: 'scroll',
    target: 'flameSection',
  },
  {
    id: 'tarot',
    label: 'Tarot Pull',
    icon: '🃏',
    iconGradient: 'from-indigo-500 to-purple-600',
    actionType: 'toast',
    toastTitle: '🔮 Tarot Card Deck',
    toastMsg: 'Pulled Card: The Sun • Abundance, Joy, Success!',
    toastIcon: '🃏',
  },
  {
    id: 'panchang',
    label: 'Vedic Panchang',
    icon: '🕉️',
    iconGradient: 'from-amber-400 to-amber-600',
    actionType: 'scroll',
    target: 'panchangWidget',
  },
  {
    id: 'face',
    label: 'AI Face Reading',
    icon: '👤',
    iconGradient: 'from-blue-500 to-indigo-600',
    actionType: 'scan',
    target: 'face',
  },
  {
    id: 'gemstone',
    label: 'Lucky Gemstones',
    icon: '💎',
    iconGradient: 'from-amberGold-400 to-emerald-500',
    actionType: 'toast',
    toastTitle: '💎 Lucky Gemstone',
    toastMsg: 'Recommended: Yellow Sapphire for Jupiter strength & wealth',
    toastIcon: '💎',
  },
  {
    id: 'sade-sati',
    label: 'Sade Sati Check',
    icon: '🪐',
    iconGradient: 'from-slate-600 to-slate-900',
    actionType: 'toast',
    toastTitle: '🪐 Sade Sati Analysis',
    toastMsg: 'Saturn Transit: Phase 2 Active • Remedy: Light Mustard Lamp on Saturdays',
    toastIcon: '🪐',
  },
];
