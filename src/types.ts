export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  postedAt: string;
  deadline: string;
  logo?: string;
}

export interface Professional {
  id: string;
  name: string;
  profession: string;
  avatar: string;
  skills: string[];
  experience: string;
  location: string;
  hourlyRate: string;
  rating: number;
  reviewsCount: number;
  about: string;
  portfolio: string[];
  services: Service[];
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  type: 'text' | 'quote' | 'booking';
}

export interface FlyerTemplate {
  id: string;
  name: string;
  thumbnail: string;
  category: string;
  data: any; // We'll mock this
}
