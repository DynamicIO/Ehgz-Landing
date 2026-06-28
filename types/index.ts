export interface Venue {
  id: number;
  name: string;
  area: string;
  vibe: string;
  gradient: string;
  badge: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Perk {
  icon: string;
  title: string;
  description: string;
}
