import React from 'react';
import { Button } from './Button';
import { CardCatalogue, CardTitle, CardContent } from './card';
import { Users, Scale, Heart, Zap } from 'lucide-react';
import type { Organization } from '../../types/organization';

interface OrganizationCardProps {
  organization: Organization;
  onLearnMore?: (orgId: string) => void;
  onTagClick?: (tag: string) => void;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ 
  organization, 
  onLearnMore, 
  onTagClick 
}) => {
  const handleLearnMore = () => {
    // Redirect to the organization's Facebook page if available
    if (organization.socialLinks?.facebook) {
      window.open(organization.socialLinks.facebook, '_blank');
    } else {
      // Fallback to the original callback if no social link is available
      onLearnMore?.(organization.id);
    }
  };

  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-full h-full text-primary-blue" />;
      case 'Scale':
        return <Scale className="w-full h-full text-primary-blue" />;
      case 'Heart':
        return <Heart className="w-full h-full text-primary-blue" />;
      case 'Zap':
        return <Zap className="w-full h-full text-primary-blue" />;
      default:
        return null;
    }
  };

  return (
    <CardCatalogue className="p-2 hover:shadow-lg transition-shadow duration-300"> 
      <div className="bg-text-light h-[200px] sm:h-[222px] w-full rounded-[10px] flex justify-center items-center"> 
        <div className="rounded-[100px] bg-white h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] overflow-hidden flex items-center justify-center"> 
          {organization.iconName ? (
            getIconComponent(organization.iconName)
          ) : (
            <img 
              src={organization.logoUrl} 
              className="w-full h-full object-cover" 
              alt={`${organization.name} logo`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/landingPage/AboutUs.jpg'; // Fallback image
              }}
            />
          )}
        </div>
      </div>
 
      <CardTitle className="text-[10px]"> 
        <h1 className="font-heading italic text-sm sm:text-base"> {organization.name} </h1>
      </CardTitle>

      <CardContent className="gap-4"> 
        <p className="text-xs sm:text-[13px] text-center leading-relaxed"> 
          {organization.description}
        </p> 
        
        <div className="flex flex-wrap gap-2 justify-center">
          {organization.tags.map((tag, index) => (
            <Button 
              key={index}
              variant="tag" 
              size="sm"
              onClick={() => onTagClick?.(tag)}
              className="cursor-pointer"
            > 
              #{tag} 
            </Button>
          ))}
        </div>
        
        <Button 
          variant="outlineBlack" 
          size="default"
          onClick={handleLearnMore}
          className="w-full"
        > 
          Learn more 
        </Button>
      </CardContent>
    </CardCatalogue>
  );
};

export default OrganizationCard; 