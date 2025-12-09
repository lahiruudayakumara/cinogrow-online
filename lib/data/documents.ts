export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  link: string;       // PDF/DOC/PPT URL
  thumbnail?: string; // optional preview image
}

export const documentsData: DocumentItem[] = [
  {
    id: "1",
    title: "",
    description: "",
    link: "",
    thumbnail: "",
  },
];