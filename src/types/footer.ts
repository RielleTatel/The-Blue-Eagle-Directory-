export interface FooterLink {
  id: string;
  title: string;
  url: string;
  external?: boolean;
  icon?: string; // Lucide icon name
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  officeHours: string;
}

export interface IgnatianQuote {
  id: string;
  quote: string;
  author: string;
  source?: string;
}

export interface FooterData {
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  mission: string;
  quickLinks: FooterLink[];
  organizationCategories: FooterLink[];
  resources: FooterLink[];
  socialMedia: SocialMedia[];
  contact: ContactInfo;
  quotes: IgnatianQuote[];
  legal: FooterLink[];
}

export const defaultFooterData: FooterData = {
  logo: {
    src: "/landingPage/Amdg.jpg",
    alt: "Ateneo de Zamboanga University",
    width: 120,
    height: 60
  },
  mission: "Forming men and women for others through excellence in education, research, and community service, guided by Ignatian values and committed to social justice.",
  quickLinks: [
    { id: 'home', title: 'Home', url: '/', icon: 'Home' },
    { id: 'organizations', title: 'Organizations Directory', url: '/Organizations', icon: 'Users' },
    { id: 'about', title: 'About Blue-Eagle-Directory', url: '#', icon: 'Info' },
  ],
  organizationCategories: [
    { id: 'student-government', title: 'Student Government', url: '/Organizations?category=student-government', icon: 'Users' },
    { id: 'academic', title: 'Academic Organizations', url: '/Organizations?category=academic', icon: 'GraduationCap' },
    { id: 'culture-arts', title: 'Culture, Arts & Multimedia', url: '/Organizations?category=culture-arts', icon: 'Palette' },
    { id: 'socio-civic', title: 'Socio-civic & Political', url: '/Organizations?category=socio-civic', icon: 'Heart' },
    { id: 'environmental', title: 'Environmental', url: '/Organizations?category=environmental', icon: 'Leaf' },
    { id: 'faith-formation', title: 'Faith & Formation', url: '/Organizations?category=faith-formation', icon: 'Cross' },
    { id: 'sports-recreation', title: 'Sports & Recreation', url: '/Organizations?category=sports-recreation', icon: 'Trophy' },
    { id: 'business', title: 'Business Organizations', url: '/Organizations?category=business', icon: 'Building2' },
    { id: 'public-communications', title: 'Public & Communications', url: '/Organizations?category=public-communications', icon: 'MessageSquare' }
  ],
  resources: [
    { id: 'handbook', title: 'Student Handbook', url: '#', icon: 'BookOpen' },
    { id: 'registration', title: 'Organization Registration', url: '#', icon: 'FileText' },
    { id: 'calendar', title: 'Event Calendar', url: '#', icon: 'Calendar' },
    { id: 'map', title: 'Campus Map', url: '#', icon: 'MapPin' },
    { id: 'academic-calendar', title: 'Academic Calendar', url: '#', icon: 'CalendarDays' },
    { id: 'support', title: 'Support Services', url: '#', icon: 'HelpCircle' }
  ],
  socialMedia: [
    { platform: 'Facebook', url: 'https://facebook.com/adzu', icon: 'Facebook' },
    { platform: 'Instagram', url: 'https://instagram.com/adzu', icon: 'Instagram' },
    { platform: 'Website', url: 'https://adzu.edu.ph', icon: 'Globe' },
    { platform: 'YouTube', url: 'https://youtube.com/adzu', icon: 'Youtube' }
  ],
  contact: {
    address: "La Purisima Street, Zamboanga City, Philippines",
    phone: "+63 62 991 0871",
    email: "info@adzu.edu.ph",
    officeHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  quotes: [
    {
      id: 'disclaimer',
      quote: "This website is in no way affiliated with Ateneo de Zamboanga University in any shape or capacity.",
      author: ": )",
      source: "hehe"
    }
  ],
  legal: [
    { id: 'privacy', title: 'Privacy Policy', url: '#', icon: 'Shield' },
    { id: 'terms', title: 'Terms of Service', url: '#', icon: 'FileText' },
    { id: 'accessibility', title: 'Accessibility', url: '#', icon: 'Accessibility' }
  ]
}; 