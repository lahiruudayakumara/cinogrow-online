interface Document {
  id: string;
  title: string;
  description: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { Document };