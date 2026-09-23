export type Language = 'en' | 'vi';

export type NavRoute = 'home' | 'research' | 'impact' | 'profile' | 'contact';

export interface ProjectItem {
  id: string;
  category: 'research' | 'impact';
  badge: { en: string; vi: string };
  title: { en: string; vi: string };
  subtitle: { en: string; vi: string };
  role: { en: string; vi: string };
  period: string;
  summary: { en: string; vi: string };
  tags: string[];
  keyMetrics: { label: { en: string; vi: string }; value: string }[];
  details: {
    description: { en: string; vi: string }[];
    outcomes?: { en: string; vi: string }[];
    sdg?: string[];
    publication?: string;
    award?: { en: string; vi: string };
  };
  imageType: 'coffee' | 'trung' | 'data' | 'bicycles' | 'debate' | 'materials' | 'wildlife';
  hasAudio?: boolean;
}

export interface MetricCardData {
  id: string;
  value: string;
  unit?: string;
  label: { en: string; vi: string };
  subtext: { en: string; vi: string };
  icon: string;
  badge?: { en: string; vi: string };
}

export interface AccordionGroup {
  id: string;
  title: { en: string; vi: string };
  icon: string;
  items: {
    title: { en: string; vi: string };
    subtitle?: { en: string; vi: string };
    date?: string;
    points: { en: string; vi: string }[];
    badge?: { en: string; vi: string };
  }[];
}
