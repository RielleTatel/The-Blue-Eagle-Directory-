import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import SelectOrgs from "../components/ui/SelectOrgs";
import { Button } from "../components/ui/Button"; 
import OrganizationCard from "../components/ui/OrganizationCard";
import { Folder } from 'lucide-react'; 
import type { Organization } from "../types/organization";
import { sampleOrganizations } from "../types/organization";

const OrganizationsPage = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [filteredOrgs, setFilteredOrgs] = useState<Organization[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate loading organizations data
  useEffect(() => {
    const loadOrganizations = async () => {
      setLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setOrganizations(sampleOrganizations);
      setFilteredOrgs(sampleOrganizations);
      setLoading(false);
    };

    loadOrganizations();
  }, []);

  // Filter organizations based on selected category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredOrgs(organizations);
    } else {
      const filtered = organizations.filter(org => org.category === selectedCategory);
      setFilteredOrgs(filtered);
    }
  }, [selectedCategory, organizations]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLearnMore = (orgId: string) => {
    // TODO: Implement organization detail modal or navigation
    console.log('Learn more clicked for organization:', orgId);
  };

  const handleTagClick = (tag: string) => {
    // TODO: Implement tag-based filtering
    console.log('Tag clicked:', tag);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center"> 
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col justify-center text-center">
          <h1 className="font-heading italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"> 
            Explore. Engage. <span className="text-primary-blue"> Empower. </span>
          </h1>
          <p className="mx-auto max-w-4xl leading-relaxed text-base sm:text-lg mt-4 px-4"> 
            The Blue-Eagle-Directory is your official guide to all accredited 
            student organizations at Ateneo de Zamboanga University. 
            Discover communities, causes, and leaders that 
            inspire change—right here on campus. 
          </p>
        </div> 
        
        <div className="bg-white w-full max-w-7xl mx-auto mb-9 rounded-[10px] flex flex-col items-center justify-start pt-10 px-4 sm:px-6 lg:px-8">
          <Button
            variant="heading" 
            size="heading"
            className="w-full sm:w-[280px] bg-primary-blue text-white"
          > 
            <Folder className="w-6 h-6 sm:w-8 sm:h-8" /> 
            Organizations 
          </Button> 
  
          <div className="w-full flex justify-center mt-6 mb-8">
            <SelectOrgs 
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-blue"></div>
              <span className="ml-3 text-gray-600">Loading organizations...</span>
            </div>
          ) : (
            <>
              {filteredOrgs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No organizations found in this category.</p>
                  <Button 
                    variant="outlineBlack" 
                    size="default"
                    onClick={() => setSelectedCategory('all')}
                    className="mt-4"
                  >
                    View All Organizations
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 rounded-[10px] justify-items-center w-full pb-10"> 
                  {filteredOrgs.map((organization) => (
                    <OrganizationCard
                      key={organization.id}
                      organization={organization}
                      onLearnMore={handleLearnMore}
                      onTagClick={handleTagClick}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizationsPage; 