export interface ZodiacSign {
  name: string;
  symbol: string;
  shortForecast: string;
  fullForecast: string;
  luckyColor: string;
  luckyNumber: number;
  luckyTime: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: 'Aries',
    symbol: '♈',
    shortForecast: 'High energy day! Key career opportunity arriving before noon.',
    fullForecast: 'High planetary energy! Major career breakthrough arriving before noon. Stay focused, avoid distractions, and communicate clearly in team discussions.',
    luckyColor: 'Golden Yellow',
    luckyNumber: 7,
    luckyTime: '02:15 PM',
  },
  {
    name: 'Taurus',
    symbol: '♉',
    shortForecast: 'Financial stability strengthens today. Avoid hasty emotional spending.',
    fullForecast: 'Financial stability strengthens today. Avoid hasty emotional spending. Auspicious period for reviewing investments and household balance.',
    luckyColor: 'Forest Green',
    luckyNumber: 6,
    luckyTime: '11:30 AM',
  },
  {
    name: 'Gemini',
    symbol: '♊',
    shortForecast: 'Excellent day for creative collaborations and reconnecting with contacts.',
    fullForecast: 'Excellent day for creative collaborations and reconnecting with contacts. A fortuitous phone call brings exciting future travel prospects.',
    luckyColor: 'Sky Blue',
    luckyNumber: 5,
    luckyTime: '04:45 PM',
  },
  {
    name: 'Cancer',
    symbol: '♋',
    shortForecast: 'Intuition is peaked. Trust your instincts in personal and family matters.',
    fullForecast: 'Intuition is peaked. Trust your instincts in personal and family matters. Planetary transit enhances your spiritual calm and inner harmony.',
    luckyColor: 'Silver White',
    luckyNumber: 2,
    luckyTime: '09:15 AM',
  },
  {
    name: 'Leo',
    symbol: '♌',
    shortForecast: 'Leadership charisma shines bright! Favorable planetary window for deals.',
    fullForecast: 'Leadership charisma shines bright! Favorable planetary window for deals. Your natural confidence inspires colleagues and wins crucial approvals.',
    luckyColor: 'Royal Gold',
    luckyNumber: 1,
    luckyTime: '01:00 PM',
  },
  {
    name: 'Virgo',
    symbol: '♍',
    shortForecast: 'Focus on wellness and balanced nutrition. Organization brings instant peace.',
    fullForecast: 'Focus on wellness and balanced nutrition. Organization brings instant peace. Decluttering physical workspace opens new creative pathways.',
    luckyColor: 'Emerald Green',
    luckyNumber: 5,
    luckyTime: '10:20 AM',
  },
  {
    name: 'Libra',
    symbol: '♎',
    shortForecast: 'Relationship harmony restored. Auspicious period for long-term decisions.',
    fullForecast: 'Relationship harmony restored. Auspicious period for long-term decisions. Venus bestows magnetic charm in personal and romantic conversations.',
    luckyColor: 'Pastel Pink',
    luckyNumber: 6,
    luckyTime: '03:40 PM',
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    shortForecast: 'Mystical alignments favor meditation, research, and deep focus.',
    fullForecast: 'Mystical alignments favor meditation, research, and deep focus. Hidden answers surface naturally when you take quiet time for introspection.',
    luckyColor: 'Crimson Red',
    luckyNumber: 9,
    luckyTime: '08:10 PM',
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    shortForecast: 'Optimism runs high! Travel or learning plans gain rapid momentum.',
    fullForecast: 'Optimism runs high! Travel or learning plans gain rapid momentum. Jupiter expands your vision for professional and philosophical ventures.',
    luckyColor: 'Bright Purple',
    luckyNumber: 3,
    luckyTime: '12:15 PM',
  },
  {
    name: 'Capricorn',
    symbol: '♑',
    shortForecast: 'Discipline and strategic planning yield major rewards in professional goals.',
    fullForecast: 'Discipline and strategic planning yield major rewards in professional goals. Consistent efforts over past months are recognized by key superiors.',
    luckyColor: 'Charcoal Navy',
    luckyNumber: 8,
    luckyTime: '05:30 PM',
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    shortForecast: 'Innovative breakthroughs and social support create unexpected opportunities.',
    fullForecast: 'Innovative breakthroughs and social support create unexpected opportunities. Unconventional thinking resolves a persistent technical challenge.',
    luckyColor: 'Electric Cyan',
    luckyNumber: 11,
    luckyTime: '07:25 PM',
  },
  {
    name: 'Pisces',
    symbol: '♓',
    shortForecast: 'Compassion and spiritual creativity bring deep emotional fulfillment.',
    fullForecast: 'Compassion and spiritual creativity bring deep emotional fulfillment. Trust your artistic visions; expressing them unlocks heartfelt gratitude.',
    luckyColor: 'Seafoam Teal',
    luckyNumber: 12,
    luckyTime: '06:15 AM',
  },
];
