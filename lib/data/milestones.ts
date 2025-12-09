// src/lib/data/milestones.ts

export interface Milestone {
  id: number;
  title: string;
  description: string;
  month: string;
  year: number;
  marks: number;
  percentage: string;
}

export const milestonesData: Milestone[] = [
  {
    id: 1,
    title: "",
    description:
      "",
    month: "",
    year: 2025,
    marks: 0,
    percentage: "0%",
  },
];