import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Globe,
  Youtube,
  ExternalLink,
  Home,
  Users,
  Info,
  GraduationCap,
  Building2,
  Palette,
  Heart,
  Leaf,
  Cross,
  Trophy,
  MessageSquare,
  BookOpen,
  FileText,
  Calendar,
  CalendarDays,
  HelpCircle,
  Shield,
  Accessibility
} from 'lucide-react';
import type { FooterData, FooterLink } from '../../types/footer';
import { defaultFooterData } from '../../types/footer';

interface FooterProps {
  data?: FooterData;
  className?: string;
  variant?: 'default' | 'minimal';
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<any>> = {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Globe,
  Youtube,
  ExternalLink,
  Home,
  Users,
  Info,
  GraduationCap,
  Building2,
  Palette,
  Heart,
  Leaf,
  Cross,
  Trophy,
  MessageSquare,
  BookOpen,
  FileText,
  Calendar,
  CalendarDays,
  HelpCircle,
  Shield,
  Accessibility
};

const Footer: React.FC<FooterProps> = ({ 
  data = defaultFooterData, 
  className = '', 
  variant = 'default' 
}) => {
  const renderIcon = (iconName: string, className: string = "w-4 h-4") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  const renderLink = (link: FooterLink) => {
    if (link.external) {
      return (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary-blue transition-colors duration-200 py-1"
        >
          {link.icon && renderIcon(link.icon, "w-4 h-4")}
          <span>{link.title}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      );
    }

    return (
      <Link
        key={link.id}
        to={link.url}
        className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary-blue transition-colors duration-200 py-1"
      >
        {link.icon && renderIcon(link.icon, "w-4 h-4")}
        <span>{link.title}</span>
      </Link>
    );
  };

  // Function to render inspirational quotes
  const renderQuotes = () => {
    if (!data.quotes || data.quotes.length === 0) return null;
    
    // Get a random quote or cycle through them
    const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
    
    return (
      <div className="text-center">
        <blockquote className="text-sm text-gray-300 italic mb-2">
          "{randomQuote.quote}"
        </blockquote>
        <cite className="text-xs text-gray-400"> 
          {<span className="ml-1">({randomQuote.source})</span>}
        </cite>
      </div>
    );
  };

  if (variant === 'minimal') {
    return (
      <footer className={`bg-gray-900 text-white py-8 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          {renderQuotes()}
        </div>
      </footer>
    );
  }

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* ADZU Branding Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={data.logo.src} 
                alt={data.logo.alt}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-heading italic text-lg text-primary-blue">ADZU</h3>
                <p className="text-xs text-gray-400">Blue-Eagle-Directory</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {data.mission}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="italic">"Men and Women for Others"</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="font-heading italic text-lg text-primary-blue mb-4">Quick Links</h3>
            <div className="space-y-2">
              {data.quickLinks.map(renderLink)}
            </div>
          </div>

          {/* Organization Categories Section */}
          <div className="lg:col-span-1">
            <h3 className="font-heading italic text-lg text-primary-blue mb-4">Categories</h3>
            <div className="space-y-2">
              {data.organizationCategories.slice(0, 6).map(renderLink)}
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="lg:col-span-1">
            <h3 className="font-heading italic text-lg text-primary-blue mb-4">Contact & Social</h3>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-blue mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{data.contact.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section - Mobile Only */}
        <div className="mt-8 lg:hidden">
          <h3 className="font-heading italic text-lg text-primary-blue mb-4">Resources</h3>
          <div className="grid grid-cols-2 gap-4">
            {data.resources.map(renderLink)}
          </div>
        </div>
      </div>

      {/* Bottom Section - Inspirational Quotes & Legal */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Inspirational Quote */}
            <div className="text-center md:text-left flex-1">
              {renderQuotes()}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {data.legal.map(renderLink)}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 