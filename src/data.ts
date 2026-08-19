import { Job, Professional, Review, Message } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechNova',
    description: 'We are looking for an experienced React developer to lead our frontend team.',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    location: 'Remote',
    salary: '$120k - $150k',
    type: 'Full-time',
    postedAt: '2 days ago',
    deadline: '2026-09-30',
  },
  {
    id: '2',
    title: 'Freelance Graphic Designer',
    company: 'Creative Edge',
    description: 'Need a designer to create marketing materials for a new product launch.',
    skills: ['Photoshop', 'Illustrator', 'Figma'],
    location: 'New York, NY',
    salary: '$40 - $60 / hr',
    type: 'Freelance',
    postedAt: '5 hours ago',
    deadline: '2026-08-25',
  },
  {
    id: '3',
    title: 'Master Plumber',
    company: 'City Plumbing Inc.',
    description: 'Looking for a licensed plumber for residential and commercial projects.',
    skills: ['Pipe Fitting', 'Repair', 'Installation'],
    location: 'Chicago, IL',
    salary: '$30 - $45 / hr',
    type: 'Full-time',
    postedAt: '1 week ago',
    deadline: '2026-09-10',
  },
];

export const MOCK_PROFESSIONALS: Professional[] = [
  {
    id: 'p1',
    name: 'Sarah Jenkins',
    profession: 'Professional Photographer',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    skills: ['Portrait', 'Wedding', 'Event Photography', 'Lightroom'],
    experience: '8 years',
    location: 'Los Angeles, CA',
    hourlyRate: '$150/hr',
    rating: 4.9,
    reviewsCount: 124,
    about: 'I capture moments that matter. Specialized in outdoor and event photography with a cinematic style.',
    portfolio: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400'
    ],
    services: [
      { id: 's1', title: 'Wedding Package', price: '$2000', description: 'Full day coverage with edited photos.' },
      { id: 's2', title: 'Portrait Session', price: '$300', description: '2-hour session, 20 retouched photos.' }
    ]
  },
  {
    id: 'p2',
    name: 'David Chen',
    profession: 'Full Stack Engineer',
    avatar: 'https://i.pravatar.cc/150?u=david',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS'],
    experience: '5 years',
    location: 'Remote',
    hourlyRate: '$80/hr',
    rating: 4.8,
    reviewsCount: 56,
    about: 'Building scalable web applications. I turn complex problems into elegant, simple solutions.',
    portfolio: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
    ],
    services: [
      { id: 's3', title: 'Web App MVP', price: '$5000', description: 'Build your MVP in 4 weeks.' },
      { id: 's4', title: 'Consultation', price: '$100', description: '1-hour technical consultation.' }
    ]
  },
  {
    id: 'p3',
    name: 'Marcus Johnson',
    profession: 'Certified Electrician',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    skills: ['Wiring', 'Panel Upgrades', 'Lighting', 'Troubleshooting'],
    experience: '12 years',
    location: 'Houston, TX',
    hourlyRate: '$75/hr',
    rating: 4.9,
    reviewsCount: 312,
    about: 'Licensed electrician handling both residential and commercial electrical needs safely and efficiently.',
    portfolio: [],
    services: [
      { id: 's5', title: 'Service Call', price: '$150', description: 'Diagnostic and first hour of labor.' },
      { id: 's6', title: 'Panel Upgrade', price: '$1200', description: 'Upgrade to 200 amp service.' }
    ]
  }
];

export const MOCK_REVIEWS: Record<string, Review[]> = {
  'p1': [
    { id: 'r1', author: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?u=emma', rating: 5, comment: 'Sarah did an amazing job at our wedding! Highly recommend.', date: '1 month ago' },
    { id: 'r2', author: 'James Smith', avatar: 'https://i.pravatar.cc/150?u=james', rating: 5, comment: 'Very professional and great eye for detail.', date: '3 months ago' }
  ],
  'p2': [
    { id: 'r3', author: 'Startup Inc', avatar: 'https://i.pravatar.cc/150?u=startup', rating: 5, comment: 'David delivered our MVP ahead of schedule.', date: '2 weeks ago' }
  ]
};

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'm1',
    senderId: 'p1',
    senderName: 'Sarah Jenkins',
    senderAvatar: 'https://i.pravatar.cc/150?u=sarah',
    content: 'Hi! I saw your request for the portrait session. I have availability next Tuesday. Does that work for you?',
    timestamp: '10:30 AM',
    isRead: false,
    type: 'text'
  },
  {
    id: 'm2',
    senderId: 'p2',
    senderName: 'David Chen',
    senderAvatar: 'https://i.pravatar.cc/150?u=david',
    content: 'Here is the quotation for the Web App MVP project.',
    timestamp: 'Yesterday',
    isRead: true,
    type: 'quote'
  }
];
