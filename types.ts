export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  challenge: string;
  bgDirection?: 'left' | 'right';
  hasGenAi?: boolean;
  hasPerformance?: boolean;
}

export interface Skill {
  category: string;
  number: string;
  description: string;
  tools: string[];
  icon: string;
}

export interface Course {
  title: string;
  description: string;
  tags: string[];
  image: string;
}
