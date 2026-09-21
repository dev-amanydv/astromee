export interface ServiceItem {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  badge?: {
    text: string;
    bg: string;
    textColor: string;
  };
  targetSection: string;
  scanMode?: 'palm' | 'face';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'chat-call',
    name: 'Chat & Call',
    subtitle: '500+ Online',
    icon: 'fa-solid fa-comments',
    iconBg: 'bg-amberGold-100',
    iconBorder: 'border-amberGold-200',
    iconColor: 'text-amberGold-600',
    badge: {
      text: 'LIVE',
      bg: 'bg-emerald-100',
      textColor: 'text-emerald-700',
    },
    targetSection: 'astrologersSection',
  },
  {
    id: 'palm-scanner',
    name: 'Palm Scanner',
    subtitle: 'Teaser Free',
    icon: 'fa-solid fa-hand',
    iconBg: 'bg-purple-100',
    iconBorder: 'border-purple-200',
    iconColor: 'text-mysticLight-purple',
    badge: {
      text: 'AI',
      bg: 'bg-purple-100',
      textColor: 'text-purple-700',
    },
    targetSection: 'aiScannerSection',
    scanMode: 'palm',
  },
  {
    id: 'face-reading',
    name: 'Face Reading',
    subtitle: 'Destiny AI',
    icon: 'fa-solid fa-face-smile',
    iconBg: 'bg-blue-100',
    iconBorder: 'border-blue-200',
    iconColor: 'text-blue-600',
    badge: {
      text: 'AI',
      bg: 'bg-blue-100',
      textColor: 'text-blue-700',
    },
    targetSection: 'aiScannerSection',
    scanMode: 'face',
  },
  {
    id: 'free-kundli',
    name: 'Free Kundli',
    subtitle: 'Vedic Chart PDF',
    icon: 'fa-solid fa-scroll',
    iconBg: 'bg-emerald-100',
    iconBorder: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    targetSection: 'kundliSection',
  },
  {
    id: 'horoscope',
    name: 'Horoscope',
    subtitle: 'Daily Transit',
    icon: 'fa-solid fa-star-of-david',
    iconBg: 'bg-rose-100',
    iconBorder: 'border-rose-200',
    iconColor: 'text-rose-600',
    targetSection: 'horoscopeSection',
  },
  {
    id: 'flame-match',
    name: 'FLAME Match',
    subtitle: 'Love % Test',
    icon: 'fa-solid fa-fire-flame-curved',
    iconBg: 'bg-red-100',
    iconBorder: 'border-red-200',
    iconColor: 'text-red-500',
    targetSection: 'flameSection',
  },
];
