import Header from "../components/layout/Header";
import Amdg from "/landingPage/Amdg.jpg"; 
import AboutUs from "/landingPage/AboutUs.jpg"; 
import BrushStroke from "../components/ui/BrushStroke";
import Awards from "/landingPage/Awards.jpg";
import { Button } from "../components/ui/Button";
import {Folder, Users, GraduationCap, Palette, Heart, BookOpen, Leaf, MessageSquare, Cross, Trophy, Building2, Calendar } from 'lucide-react';
import { organizationStats } from "../types/organization";
import { useNavigate } from "react-router-dom";

import {Card, CardTitle, CardDisplay} from "../components/ui/card";
import { useEffect } from "react";


const LandingPage = () => {
  const navigate = useNavigate();

  const handleViewDirectory = () => {
    navigate('/Organizations');
  };

  const debugging = () => {
    try {
        fetch('http://localhost:8000/api')
        .then(response => response.json())
        .then(data => console.log(data))
    } catch (err) {
        console.log('There has been an error', err)
    }
  } 

  useEffect(() => {
    debugging() 
  }, [])

  return ( 
    <div className="w-full min-h-screen bg-gradient-radial from-blue-50 via-white to-transparent font-body mb-10"> 
      <Header/> 
      <section className="min-h-[832px] flex items-center justify-center px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[50px] max-w-7xl w-full p-6 justify-center"> 
          {/* Description */} 
          <div className="w-full lg:w-[586.15px] h-auto lg:h-[381px] flex flex-col justify-center mb-8 lg:mb-40 order-2 lg:order-1">
              <div className="flex flex-col gap-4 lg:gap-y-8 relative"> 
                <h1 className="font-heading italic text-xl sm:text-2xl lg:text-[32px] leading-tight"> 
                  Explore Every Organization. Empower Your <span className="text-primary-blue"> Atenean Journey. </span> 
                </h1>
                <BrushStroke/>
                <p className="font-body text-sm sm:text-base lg:text-[20px] text-left leading-relaxed"> 
                  The Blue-Eagle-Directory is your guide to all accredited student organizations at 
                  Ateneo de Zamboanga University. Discover communities, causes, and leaders that 
                  inspire change—right here on campus. 
                </p>
              </div>
              {/* Button */}
              <div className="mt-6 lg:mt-10">
                <Button
                  variant="heading"
                  size="heading"
                  className="flex items-center gap-2 bg-primary-blue text-white rounded-xl px-8 py-3 font-bold italic text-lg shadow-md"
                  onClick={handleViewDirectory}
                >
                  <Folder className="w-6 h-6" />
                  <span> View directory </span>
                </Button> 
              </div>
          </div>
          {/* Hero Image */}
          <div className="w-full lg:w-[586.15px] h-[250px] sm:h-[300px] lg:h-[381px] rounded-[15px] order-1 lg:order-2"> 
            <img src={Amdg} alt="Logo" className="w-full h-full rounded-[15px] object-cover hover:text-primary-blue shadow-[0_0_4px_0_rgba(0,0,0,0.7)]" />
          </div>
        </div>
      </section>

      <section id="about-us" className="min-h-[832px] flex items-center justify-center p-3">
        <div className="isolate gradient-lightBlue w-full min-h-[832px] px-4"> 

          <div className="h-[220px] mt-3 rounded-[10px] relative"> 
            <img src={Awards} alt="Placeholder" className="w-full h-full object-cover rounded-[10px] opacity-100" />
            {/* Overlay content positioned inside the image */}
            <div className="absolute inset-0 flex flex-col justify-start items-start px-5">
              <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg">
                The Heart of Student Life at ADZU
              </h1>
              <Button variant="heading" size="heading" className="!w-[250px]">
                <span className="italic font-semibold text-[24px] text-primary-blue"> About us </span>
              </Button>
            </div>
          </div> 
          
          <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[450px] justify-center mt-1"> 
              <div className="w-full lg:w-[1000px] h-full flex items-start justify-start mt-0 flex flex-col px-6">
                <h1 className="bold italic font-heading text-xl sm:text-2xl lg:text-[2rem] text-primary-blue text-center leading-tight"> More than just names on a list, our student organizations are living 
                  communities of purpose, passion, and people. </h1>
                <div className="w-full h-[200px] sm:h-[250px] lg:h-[280px] rounded-[4px] mt-6 border-1 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"> 
                  <img src={AboutUs} alt="Placeholder" className="w-full h-full object-cover rounded-[4px]" />
                </div> 
              </div> 
              <div className="w-full h-full flex flex-col">
                <p className="!text-base sm:!text-lg lg:!text-[20px] font-body mb-4 drop-shadow-lg leading-relaxed text-center lg:text-right italic px-5 mt-5 lg:mr-10 leading-snug" > At Ateneo de Zamboanga University, <span className=" bold text-primary-blue font-bold"> student organizations are not just extracurricular—they are essential spaces of growth, leadership, and formation. </span> Rooted in the Ignatian spirit of cura personalis (care for the whole person), 
                  every organization serves as a home where students are formed not just as professionals, but as men and women for others. <br/> <br/>
                Whether you're advocating for social change, celebrating culture and creativity, deepening your faith, or excelling in academics and athletics—there's a space for your passion, your purpose, and your people. </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-11 justify-center items-center mt-10"> 
                  <Card className="flex flex-col items-center justify-center text-center gap-1 w-full max-w-[200px] sm:w-auto"> 
                      <div className="flex justify-center"> 
                        <Users className="w-[48px] h-[48px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3]" /> 
                      </div>
                      <CardTitle className="w-30"> 
                        <h1 className="!text-lg sm:!text-[20px] italic"> {organizationStats.totalOrgs} </h1> 
                        <h1 className="!text-xs sm:!text-[14px] text-text-gray"> Total Organizations </h1> 
                      </CardTitle> 
                  </Card> 
                  <Card className="flex flex-col items-center justify-center text-center gap-1 w-full max-w-[200px] sm:w-auto"> 
                      <div className="flex justify-center"> 
                        <Heart className="w-[48px] h-[48px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3]" /> 
                      </div>
                      <CardTitle className="w-30"> 
                        <h1 className="!text-lg sm:!text-[20px] italic"> {organizationStats.activeMembers}+ </h1> 
                        <h1 className="!text-xs sm:!text-[14px] text-text-gray"> Active Students </h1> 
                      </CardTitle> 
                  </Card> 
                  <Card className="flex flex-col items-center justify-center text-center gap-1 w-full max-w-[200px] sm:w-auto"> 
                    <div className="flex justify-center"> 
                        <Calendar className="w-[48px] h-[48px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3]" /> 
                      </div>
                      <CardTitle className="w-30"> 
                        <h1 className="!text-lg sm:!text-[20px] italic"> {organizationStats.yearsOfHistory}+ </h1> 
                        <h1 className="!text-xs sm:!text-[14px] text-text-gray"> Years of History </h1> 
                      </CardTitle> 
                  </Card> 
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="categories" className="min-h-[1738px] w-full flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6 py-8">
          <Button
            variant="heading"
            size="heading"
            className="flex items-center gap-2 bg-primary-blue text-white rounded-xl px-8 py-3 font-bold italic text-lg shadow-md"
          >
            <Folder className="w-6 h-6" />
            <span> Explore by Category</span>
          </Button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold italic text-center leading-tight px-4">
            Discover student organizations based on your <br />
            <span className="text-primary-blue italic font-bold">interests and advocacies.</span>
          </h1>
          <p className="text-center text-base sm:text-lg text-black max-w-2xl px-4">
            Whether you're passionate about service, creativity, leadership, or spirituality—there's a place for you here.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 gradient-lightBlue min-h-[1424px] m-6 rounded-[10px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-blue text-center mb-12 m-[20px]">Classifications</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-17 justify-items-center">
            {/* Card 1 */}
            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <Users className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Student Government </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Representing student voices and interests through elected leadership positions. Advocating for student rights, organizing campus events, and fostering community engagement across all academic levels.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <GraduationCap className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Academic Organizations </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Enhancing academic excellence through subject-specific clubs, research groups, and professional development opportunities. Connecting students with similar academic interests and career aspirations.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <Palette className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Culture, Arts, and Multimedia </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Celebrating creativity through visual arts, performing arts, cultural heritage, and digital media. Fostering artistic expression, cultural awareness, and multimedia innovation across campus.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <Heart className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Socio civic and political cluster </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Promoting social responsibility, community service, and civic engagement. Addressing social issues, advocating for change, and building partnerships with local communities and organizations.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <BookOpen className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Academic cluster </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Supporting academic growth through study groups, tutoring programs, and research initiatives. Creating collaborative learning environments and promoting intellectual development across disciplines.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <Leaf className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Environmental cluster </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Championing environmental awareness, sustainability practices, and conservation efforts. Organizing green initiatives, waste reduction programs, and environmental education campaigns.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <MessageSquare className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Public and Communications cluster </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Developing communication skills, media literacy, and public relations expertise. Managing campus publications, broadcasting, and digital communication platforms for student voices.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <Cross className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Faith and formation cluster </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Nurturing spiritual growth, religious education, and moral formation. Providing opportunities for prayer, worship, retreats, and faith-based community service activities.
              </p>
            </CardDisplay>

            <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
              {/* Gray placeholder square */}
              <div className="flex flex-start mt-4">
                <Trophy className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
              </div>
              
              {/* Title - left aligned */}
              <h2 className="text-lg font-bold text-black my-4 text-left"> Sports and recreation cluster </h2>
              
              {/* Content - left aligned */}
              <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                Promoting physical fitness, sportsmanship, and recreational activities. Organizing athletic competitions, fitness programs, and outdoor adventure experiences for student wellness.
              </p>
            </CardDisplay>

            <div className="col-span-full flex justify-center"> 
              <CardDisplay className="hover:shadow-lg transition-shadow duration-300"> 
                {/* Gray placeholder square */}
                <div className="flex flex-start mt-4">
                  <Building2 className="w-[55px] h-[50px] text-primary-blue rounded-[10px] p-3 bg-text-light stroke-[3] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" /> 
                </div>
                
                {/* Title - left aligned */}
                <h2 className="text-lg font-bold text-black my-4 text-left"> Business organization </h2>
                
                {/* Content - left aligned */}
                <p className="text-sm text-gray-700 text-left leading-relaxed"> 
                  Developing entrepreneurial skills, business acumen, and professional networking opportunities. Connecting students with industry leaders, startup initiatives, and career development resources.
                </p>
              </CardDisplay>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 
