export interface SchoolEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  featured: boolean;
  image?: string;
}
