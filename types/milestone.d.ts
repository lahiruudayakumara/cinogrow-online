interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string; // ISO format date
  completed: boolean;
}

export type { Milestone };