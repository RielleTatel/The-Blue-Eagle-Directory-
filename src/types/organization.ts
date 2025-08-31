export interface OrganizationStats {
  totalOrgs: number;
  activeMembers: number;
  yearsOfHistory: number;
}

export const organizationStats: OrganizationStats = {
  totalOrgs: 57,
  activeMembers: 500, 
  yearsOfHistory: 15, 
};

export interface Organization {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  iconName?: string;
  category: string;
  tags: string[];
  establishedYear?: number;
  memberCount?: number;
  contactEmail?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    website?: string;
  };
}

export interface OrganizationCategory {
  id: string;
  name: string;
  displayName: string;
  description: string;
}

export const organizationCategories: OrganizationCategory[] = [
  { id: 'all', name: 'all', displayName: 'All Organizations', description: 'View all student organizations' },
  { id: 'student-government', name: 'student-government', displayName: 'Student Government', description: 'Elected leadership and student representation' },
  { id: 'academic', name: 'academic', displayName: 'Academic Organizations', description: 'Subject-specific clubs and research groups' },
  { id: 'culture-arts', name: 'culture-arts', displayName: 'Culture, Arts, and Multimedia', description: 'Creative expression and cultural activities' },
  { id: 'socio-civic', name: 'socio-civic', displayName: 'Socio-civic and Political', description: 'Community service and social advocacy' },
  { id: 'environmental', name: 'environmental', displayName: 'Environmental', description: 'Environmental awareness and sustainability' },
  { id: 'faith-formation', name: 'faith-formation', displayName: 'Faith and Formation', description: 'Spiritual growth and religious activities' },
  { id: 'sports-recreation', name: 'sports-recreation', displayName: 'Sports and Recreation', description: 'Athletics and recreational activities' },
  { id: 'business', name: 'business', displayName: 'Business Organizations', description: 'Entrepreneurship and professional development' },
  { id: 'public-communications', name: 'public-communications', displayName: 'Public and Communications', description: 'Media, journalism, and communication' }
];

export const sampleOrganizations: Organization[] = [
  // Student Government
  {
    id: '1',
    name: 'El Consejo Atenista',
    description: 'The official college student government of ADZU, El Consejo Atenista exemplifies Ignatian leadership, student representation, and participatory democracy, serving as the unified voice and service body for all college students.',
    logoUrl: '/OrgLogos/El Consejo Atenista.jpg',
    category: 'student-government',
    tags: ['Leadership', 'Representation', 'Service'],
    contactEmail: 'elconsejo@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzueca' }
  },

  // Academic Organizations
  {
    id: '2',
    name: 'Accountancy Academic Organization',
    description: 'The official academic organization for BS Accountancy students, fostering excellence, camaraderie, and professional growth in the field of accountancy.',
    logoUrl: '/OrgLogos/AAO.jpg',
    category: 'academic',
    tags: ['Accountancy', 'Academics', 'Professional'],
    contactEmail: 'aao@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/AAOArdentTigers' }
  },
  {
    id: '3',
    name: 'Education Academic Organization',
    description: 'The official academic organization for education students, supporting future educators through academic initiatives, leadership, and community engagement.',
    logoUrl: '/OrgLogos/EAO.jpg',
    category: 'academic',
    tags: ['Education', 'Teaching', 'Academics'],
    contactEmail: 'eao@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzueao' }
  },
  {
    id: '4',
    name: 'Management Academic Organization',
    description: 'The official academic organization for management students, empowering future business leaders through networking, seminars, and leadership opportunities.',
    logoUrl: '/OrgLogos/MAO.jpg',
    category: 'academic',
    tags: ['Management', 'Business', 'Leadership'],
    contactEmail: 'mao@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/AdZUMAOLIONS' }
  },
  {
    id: '5',
    name: 'Science, Information Technology, and Engineering Academic Organization',
    description: 'The official academic organization for Science, IT, and Engineering students, promoting innovation, collaboration, and academic excellence in STEM fields.',
    logoUrl: '/OrgLogos/SITEAO.jpg',
    category: 'academic',
    tags: ['STEM', 'Science', 'Engineering'],
    contactEmail: 'siteao@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzusiteao' }
  },
  {
    id: '6',
    name: 'Nursing Academic Organization',
    description: 'The official academic organization for nursing students, dedicated to professional development, academic support, and service in the field of nursing.',
    logoUrl: '/OrgLogos/NAO.jpg',
    category: 'academic',
    tags: ['Nursing', 'Health', 'Academics'],
    contactEmail: 'nao@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/NsgAngels' }
  },
  {
    id: '7',
    name: 'Liberal Arts Academic Organization',
    description: 'The official academic organization for liberal arts students, fostering critical thinking, creativity, and holistic development in the liberal arts.',
    logoUrl: '/OrgLogos/LAAO.jpg',
    category: 'academic',
    tags: ['Liberal Arts', 'Humanities', 'Academics'],
    contactEmail: 'laao@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzulaao' }
  },

  // Culture, Arts, and Multimedia
  {
    id: '8',
    name: 'Ateneo Blue Vigors',
    description: 'The official dance organization of ADZU, Blue Vigors showcases talent and school spirit through dynamic performances and dance competitions.',
    logoUrl: '/OrgLogos/ABV.jpg',
    category: 'culture-arts',
    tags: ['Dance', 'Performance', 'Culture'],
    contactEmail: 'bluevigors@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/ateneobluevigor' }
  },
  {
    id: '9',
    name: 'Ateneo Music Club',
    description: 'Connecting music enthusiasts to collaborate, share ideas, and enhance their skills through performances, workshops, and community events.',
    logoUrl: '/OrgLogos/Ateneo Music Club.jpg',
    category: 'culture-arts',
    tags: ['Music', 'Arts', 'Performance'],
    contactEmail: 'musicclub@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61552065752807' }
  },
  {
    id: '10',
    name: 'Ateneo Eagle Pep Squad',
    description: 'The official cheerleading team of ADZU, inspiring school spirit and pride through energetic performances and athletic excellence.',
    logoUrl: '/OrgLogos/Ateneo Eagle Pep Squad.jpg',
    category: 'culture-arts',
    tags: ['Cheerleading', 'Spirit', 'Performance'],
    contactEmail: 'pepsquad@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61563191549045' }
  },
  {
    id: '11',
    name: 'Teatro Ateneo de Zamboanga',
    description: 'A student organization focused on theater and performance arts, nurturing creativity and cultural appreciation through stage productions.',
    logoUrl: '/OrgLogos/Teatro Ateneo de Zamboanga.jpg',
    category: 'culture-arts',
    tags: ['Theater', 'Arts', 'Performance'],
    contactEmail: 'teatro@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/AdZUTeatro' }
  },
  {
    id: '12',
    name: 'Ateneo Art Company',
    description: 'ArtCo-AdZU is a student-led organization promoting artistic expression, cultural awareness, and creative development through workshops, exhibits, and events.',
    logoUrl: '/OrgLogos/ArtCo.jpg',
    category: 'culture-arts',
    tags: ['Art', 'Culture', 'Creativity'],
    contactEmail: 'artco@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61576945077566' }
  },
  {
    id: '13',
    name: 'Imaje',
    description: 'A creative sub-organization under SITEAO, representing BSNMCA students and bringing imagination to life through visual storytelling and digital media.',
    logoUrl: '/OrgLogos/IMAJE - Ateneo de Zamboanga Animators Guild.jpg',
    category: 'culture-arts',
    tags: ['Animation', 'Media', 'Creativity'],
    contactEmail: 'imaje@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61577791775990' }
  },

  // Socio Civic and Political Cluster
  {
    id: '14',
    name: 'SADAQAH',
    description: 'SADAQAH provides service for actual development and quick action for hope, focusing on literacy, health, and wellness initiatives for communities in need.',
    logoUrl: '/OrgLogos/SADAQAH.jpg',
    category: 'socio-civic',
    tags: ['Charity', 'Service', 'Community'],
    contactEmail: 'sadaqah@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/sadaqahadzu' }
  },
  {
    id: '15',
    name: 'El Fluente PH',
    description: 'El Fluente PH empowers youth to engage in activities that create positive societal change, amplifying young voices and fostering leadership.',
    logoUrl: '/OrgLogos/El Fluente.jpg',
    category: 'socio-civic',
    tags: ['Youth', 'Empowerment', 'Leadership'],
    contactEmail: 'elfluente@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/elfuenteph/photos' }
  },
  {
    id: '16',
    name: 'AdZU Red Cross Council',
    description: 'The ADZU College Red Cross Youth Council promotes volunteerism, humanitarian values, and social service, making a positive impact in the community.',
    logoUrl: '/OrgLogos/Red Cross Youth Council.jpg',
    category: 'socio-civic',
    tags: ['Red Cross', 'Volunteerism', 'Humanitarian'],
    contactEmail: 'redcross@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=100095575895897' }
  },
  {
    id: '17',
    name: 'Laz Bellezas',
    description: 'Laz Bellezas advocates for gender equality and women’s empowerment, raising awareness and promoting inclusive policies through education and advocacy.',
    logoUrl: '/OrgLogos/Laz Bellezas.jpg',
    category: 'socio-civic',
    tags: ['Gender', 'Advocacy', 'Empowerment'],
    contactEmail: 'lazbellezas@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61563798703713' }
  },
  {
    id: '18',
    name: 'La Liga Historia Zamboangueña',
    description: 'LLHZ-AdZU is a history-driven society bringing Zamboanga’s stories to life through research and dialogue, inspiring pride and meaningful change.',
    logoUrl: '/OrgLogos/La liga.jpg',
    category: 'socio-civic',
    tags: ['History', 'Culture', 'Research'],
    contactEmail: 'llhz@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61576886223702' }
  },
  {
    id: '19',
    name: 'Students Taking Action for New Directions',
    description: 'A student-built service organization with a mission that extends beyond campus, fostering leadership and positive change in the community.',
    logoUrl: '/OrgLogos/Stand.jpg',
    category: 'socio-civic',
    tags: ['Service', 'Leadership', 'Community'],
    contactEmail: 'stand@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61578816240635' }
  },
  {
    id: '20',
    name: 'Indigenous Peoples’ Alliance for Development in Zamboanga - IPAdZ',
    description: 'IPAdZ champions the welfare, culture, and development of indigenous peoples, advocating for their rights and promoting cultural pride.',
    logoUrl: '/OrgLogos/Indigenous Peoples’ Alliance for Development in Zamboanga - IPAdZ.jpg',
    category: 'socio-civic',
    tags: ['Indigenous', 'Advocacy', 'Culture'],
    contactEmail: 'ipadz@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61578016242276' }
  },
  {
    id: '21',
    name: 'Solidarity of Leaders',
    description: 'A student organization dedicated to uniting leaders across the university to foster collaboration, advocacy, and positive change.',
    iconName: 'Users',
    category: 'socio-civic',
    tags: ['Leadership', 'Solidarity', 'Advocacy'],
    contactEmail: 'solidarity@adzu.edu.ph',
    socialLinks: { facebook: '' }
  },
  {
    id: '22',
    name: 'Legal Management Society',
    description: 'The official organization for legal management students, supporting academic growth and professional development in the field of law.',
    iconName: 'Scale',
    category: 'academic',
    tags: ['Law', 'Legal', 'Management'],
    contactEmail: 'legal@adzu.edu.ph',
    socialLinks: { facebook: '' }
  },
  {
    id: '23',
    name: 'Junior Institute of Electronics Engineers of the Philippines- ADZU Chapter',
    description: 'The official academic organization for electronics engineering students, fostering technical excellence and professional growth.',
    logoUrl: '/OrgLogos/Junior Institute of Electronics Engineers of the Philippines- ADZU Chapter.jpg',
    category: 'academic',
    tags: ['Electronics', 'Engineering', 'Technology'],
    contactEmail: 'jieep@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/JIECEPADZUChapter' }
  },
  {
    id: '24',
    name: 'Samahang Pilosopiya ng Ateneo',
    description: 'The official co-curricular organization for BA Philosophy majors, fostering philosophical inquiry and academic excellence.',
    logoUrl: '/OrgLogos/Samahang Pilosopiya ng Ateneo.jpg',
    category: 'academic',
    tags: ['Philosophy', 'Academics', 'Critical Thinking'],
    contactEmail: 'spa@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/ateneo.spa' }
  },
  {
    id: '25',
    name: 'Junior Philippine Institute of Accountants',
    description: 'JPIA-AdZU is the local organization for accounting students, affiliated with the National Federation of Junior Philippine Institute of Accountants.',
    logoUrl: '/OrgLogos/Junior Philippine Institute of Accountants.jpg',
    category: 'academic',
    tags: ['Accounting', 'Professional', 'Leadership'],
    contactEmail: 'jpia@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/JPIA.AdZULocalChapter' }
  },
  {
    id: '26',
    name: 'Information Security Students Organization',
    description: 'ISSO envisions a safe digital environment for all, leading in cybersecurity awareness and resilience within ADZU and the broader community.',
    logoUrl: '/OrgLogos/Information Security Students Organization.jpg',
    category: 'academic',
    tags: ['Cybersecurity', 'Technology', 'Awareness'],
    contactEmail: 'isso@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/issoadzu0/photos' }
  },
  {
    id: '27',
    name: 'FabriCreate',
    description: 'FabriCreate empowers students to develop digital fabrication skills through hands-on workshops, seminars, and collaborative projects in innovation and design.',
    logoUrl: '/OrgLogos/FabriCreate.jpg',
    category: 'academic',
    tags: ['Fabrication', 'Design', 'Innovation'],
    contactEmail: 'fabricreate@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61551490432721&sk=photos' }
  },
  {
    id: '28',
    name: 'International Studies Organization',
    description: 'The home organization for BA International Studies students, fostering global awareness and international relations at ADZU.',
    logoUrl: '/OrgLogos/International Studies Organization.jpg',
    category: 'academic',
    tags: ['International', 'Studies', 'Global'],
    contactEmail: 'iso@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/intsisoa' }
  },
  {
    id: '29',
    name: 'Junior Institute for Marketing Association - Ateneo de Zamboanga University',
    description: 'JMA-AdZU empowers future marketers to excel in local and international markets, enhancing innovation and strategic thinking for a better world.',
    logoUrl: '/OrgLogos/Junior Institute for Marketing Association - Ateneo de Zamboanga University.jpg',
    category: 'academic',
    tags: ['Marketing', 'Business', 'Innovation'],
    contactEmail: 'jma@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61578253216803' }
  },
  {
    id: '30',
    name: 'Biomedical Engineering Network of Integrated Clinical Sciences',
    description: 'BIONICS is the home organization for BS Biomedical Engineering students, advancing biomedical technology and clinical innovation at ADZU.',
    logoUrl: '/OrgLogos/​​ Biomedical Engineering Network of Integrated Clinical Sciences.jpg',
    category: 'academic',
    tags: ['Biomedical', 'Engineering', 'Innovation'],
    contactEmail: 'bionics@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/AdZUBIONICS' }
  },
  {
    id: '31',
    name: 'Association of BSE Centennial Scholars',
    description: 'Promoting, protecting, and preserving the rights and interests of BSE Centennial Scholars, fostering excellence, spirituality, and citizenship.',
    logoUrl: '/OrgLogos/Association of BSE Centennial Scholars.jpg',
    category: 'academic',
    tags: ['Scholars', 'Education', 'Excellence'],
    contactEmail: 'abcs@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/abcs.adzu/photos' }
  },
  {
    id: '32',
    name: 'Ateneo Informatics Computing Guild',
    description: 'AICG is the official org for IT, CS, and NMCA students, fostering community, academic growth, and innovation in computing and digital arts.',
    logoUrl: '/OrgLogos/Ateneo Informatics Computing Guild.jpg',
    category: 'academic',
    tags: ['Computing', 'IT', 'Digital Arts'],
    contactEmail: 'aicg@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61572308169719' }
  },
  {
    id: '33',
    name: 'ADZU Ignatian Civil Engineering Students Organization',
    description: 'The official org for civil engineering students, nurturing development, academic excellence, and Ignatian values in the profession.',
    logoUrl: '/OrgLogos/ADZU Ignatian Civil Engineering Students Organization.jpg',
    category: 'academic',
    tags: ['Civil Engineering', 'Academics', 'Values'],
    contactEmail: 'iceso@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzuices' }
  },
  {
    id: '34',
    name: 'Ateneo Biological Society',
    description: 'ABS is a vibrant community of biology students, nurturing knowledge, passion, and interconnectedness in the natural sciences at ADZU.',
    logoUrl: '/OrgLogos/Ateneo Biological Society.jpg',
    category: 'academic',
    tags: ['Biology', 'Science', 'Community'],
    contactEmail: 'abs@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/AteneoBioSociety' }
  },
  {
    id: '35',
    name: 'Society of Ateneo Scholars',
    description: 'The official organization for ADZU scholars, fostering academic excellence, leadership, and service among its members.',
    logoUrl: '/OrgLogos/Society of Ateneo Scholars.jpg',
    category: 'academic',
    tags: ['Scholars', 'Excellence', 'Leadership'],
    contactEmail: 'scholars@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/SocietyOfAteneoScholars' }
  },

  // Environmental Cluster
  {
    id: '36',
    name: 'The Ecowatch Organization - Ateneo de Zamboanga University',
    description: 'A passionate community promoting environmental awareness and conservation, inspiring sustainability and Ignatian values for future generations.',
    logoUrl: '/OrgLogos/EcoWatch.jpg',
    category: 'environmental',
    tags: ['Environment', 'Sustainability', 'Awareness'],
    contactEmail: 'ecowatch@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/ecowatchadzu' }
  },
  {
    id: '37',
    name: 'Safepaws',
    description: 'SAFEPAWS is a student-led animal welfare organization committed to protecting and caring for animals, making a difference in the community.',
    logoUrl: '/OrgLogos/Safepaws.jpg',
    category: 'environmental',
    tags: ['Animal Welfare', 'Care', 'Community'],
    contactEmail: 'safepaws@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61563775959610' }
  },
  // Environmental Cluster
  {
    id: '38',
    name: 'Ateneo Debate Union',
    description: 'The official debate varsity of ADZU since 1997, fostering critical thinking, public speaking, and competitive excellence in national and international debate arenas.',
    logoUrl: '/OrgLogos/Ateneo Debate Union.jpg',
    category: 'public-communications',
    tags: ['Debate', 'Varsity', 'Public Speaking'],
    contactEmail: 'ateneodebateunion@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/ateneodebateunion' }
  },
  {
    id: '39',
    name: 'The Beacon Publications',
    description: 'The BEACON Publications is the official student publication of ADZU-HEU, empowering student voices through responsible journalism, creative writing, and campus media.',
    logoUrl: '/OrgLogos/The Beacon Publications.jpg',
    category: 'public-communications',
    tags: ['Publication', 'Journalism', 'Media'],
    contactEmail: 'beacon@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/BeaconOfficial' }
  },
  // Faith and Formation Cluster
  {
    id: '40',
    name: 'CFC Youth For Christ - ADZU Campus Based',
    description: 'A vibrant faith community for students, CFC-YFC ADZU Campus Based inspires youth to live Christ-centered lives through fellowship, service, and spiritual formation.',
    logoUrl: '/OrgLogos/CFC Youth For Christ - ADZU Campus Based.jpg',
    category: 'faith-formation',
    tags: ['Faith', 'Community', 'Youth'],
    contactEmail: 'yfcadzu@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61550069305588' }
  },
  {
    id: '41',
    name: 'Every Nation Campus',
    description: 'A student-led movement empowering young leaders for LIFE—Leadership, Integrity, Faith, and Excellence—through mentorship, discipleship, and campus engagement.',
    logoUrl: '/OrgLogos/Every Nation Campus.jpg',
    category: 'faith-formation',
    tags: ['Leadership', 'Faith', 'Integrity', 'Excellence'],
    contactEmail: 'encadzu@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61578812772584' }
  },
  {
    id: '42',
    name: 'Society of the Knights of Ignatius - ADZU College',
    description: 'SKI is the official organization of altar servers at ADZU, dedicated to service at the altar, spiritual growth, and fostering Ignatian values among its members.',
    logoUrl: '/OrgLogos/Society of the Knights of Ignatius - ADZU College.jpg',
    category: 'faith-formation',
    tags: ['Altar Servers', 'Service', 'Faith'],
    contactEmail: 'skiadzu@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=100085256014063' }
  },
  {
    id: '43',
    name: 'Psalm AdZU',
    description: 'Psalm AdZU is a student music ministry that enriches campus worship and spiritual life through music, praise, and service in liturgical celebrations.',
    logoUrl: '/OrgLogos/Psalm AdZU .jpg',
    category: 'faith-formation',
    tags: ['Music', 'Faith', 'Worship'],
    contactEmail: 'psalmadzu@adzu.edu.ph',
    socialLinks: { facebook: '' }
  },
  {
    id: '44',
    name: 'Muslim Students Association - Ateneo de Zamboanga University',
    description: 'MSA-AdZU is the only recognized Muslim youth org at ADZU, fostering faith, unity, and leadership among Muslim students, and promoting harmony and understanding on campus.',
    logoUrl: '/OrgLogos/Muslim Students Association - Ateneo de Zamboanga University.jpg',
    category: 'faith-formation',
    tags: ['Muslim', 'Faith', 'Community'],
    contactEmail: 'msa@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/msaadzu' }
  },
  {
    id: '45',
    name: 'Christian Life Community - Ateneo de Zamboanga University',
    description: 'CLC is a Christian organization rooted in Ignatian spirituality, building community, deepening faith, and serving others through prayer, worship, and apostolic action.',
    logoUrl: '/OrgLogos/Christian Life Community - Ateneo de Zamboanga University.jpg',
    category: 'faith-formation',
    tags: ['Christian', 'Spirituality', 'Community'],
    contactEmail: 'clc@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61551053695948&sk=photos' }
  },
  {
    id: '46',
    name: 'ALECS AdZU',
    description: 'ALECS AdZU is a faith-based student community dedicated to spiritual growth, fellowship, and service within the ADZU campus.',
    iconName: 'Heart',
    category: 'faith-formation',
    tags: ['Faith', 'Community'],
    contactEmail: 'alecsadzu@adzu.edu.ph',
    socialLinks: { facebook: '' }
  },
  {
    id: '47',
    name: 'Ateneo Catechetical Instruction League ADZU',
    description: 'ACIL is committed to catechetical instruction and faith formation, empowering students to teach and share Catholic values in the community.',
    logoUrl: '/OrgLogos/Ateneo Catechetical Instruction League ADZU.jpg',
    category: 'faith-formation',
    tags: ['Catechism', 'Faith', 'Teaching'],
    contactEmail: 'acil@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzuacil' }
  },
  {
    id: '48',
    name: 'Ateneo Liturgical Society',
    description: 'The Ateneo Liturgical Society supports campus liturgical celebrations, fostering faith and service through active participation in the Church’s liturgical life.',
    logoUrl: '/OrgLogos/Ateneo Liturgical Society.jpg',
    category: 'faith-formation',
    tags: ['Liturgical', 'Faith', 'Service'],
    contactEmail: 'liturgical@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61578927987749' }
  },
  // Sports and Recreation Cluster
  {
    id: '49',
    name: 'Judo',
    description: 'Judo is the official martial arts and sports organization at ADZU, promoting discipline, fitness, and camaraderie through the practice of judo.',
    iconName: 'Zap',
    category: 'sports-recreation',
    tags: ['Judo', 'Sports', 'Martial Arts'],
    contactEmail: 'judo@adzu.edu.ph',
    socialLinks: { facebook: '' }
  },
  // Business Organization
  {
    id: '50',
    name: 'Developing Entrepreneur Ateneo League',
    description: 'DEAL is a student organization dedicated to nurturing entrepreneurial spirit, leadership, and business innovation among ADZU students.',
    logoUrl: '/OrgLogos/Developing Entrepreneur Ateneo League.jpg',
    category: 'business',
    tags: ['Entrepreneurship', 'Business', 'Leadership'],
    contactEmail: 'deal@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/profile.php?id=61578954787546' }
  },
  // Sociocivic and Political Cluster
  {
    id: '51',
    name: 'Youth Alliance for Human Rights Ateneo - YAHRA',
    description: 'YAHRA champions the welfare of the Filipino people, advocating for human rights, social justice, and youth empowerment within and beyond the ADZU community.',
    logoUrl: '/OrgLogos/Youth Alliance for Human Rights Ateneo - YAHRA.jpg',
    category: 'socio-civic',
    tags: ['Human Rights', 'Advocacy', 'Youth'],
    contactEmail: 'yahra@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/yahrateneo' }
  },
  {
    id: '52',
    name: 'USAD Ateneo de Zamboanga',
    description: 'USAD is the premier social-democratic, student-led political party at ADZU, fostering leadership, advocacy, and student representation since 2014.',
    logoUrl: '/OrgLogos/USAD Ateneo de Zamboanga.jpg',
    category: 'socio-civic',
    tags: ['Political', 'Leadership', 'Advocacy'],
    contactEmail: 'usad@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/USADAdZU' }
  },
  {
    id: '53',
    name: 'Junior Jaycees Chamber - AdZU',
    description: 'Junior Jaycees Chamber - AdZU is an affiliate of PJJCI and JCIP, developing youth leadership, service, and Ignatian values for the betterment of society.',
    logoUrl: '/OrgLogos/Junior Jaycees Chamber - AdZU.jpg',
    category: 'socio-civic',
    tags: ['Leadership', 'Service', 'Youth'],
    contactEmail: 'jaycees@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/jjcateneo' }
  },
  {
    id: '54',
    name: 'Foundation of Ateneo Student Tutors',
    description: 'FAST is a collective of talented students dedicated to sharing their skills and knowledge, supporting academic growth and personal development in the ADZU community.',
    logoUrl: '/OrgLogos/Foundation of Ateneo Student Tutors.jpg',
    category: 'socio-civic',
    tags: ['Tutoring', 'Service', 'Education'],
    contactEmail: 'fast@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/FASTAdZU' }
  },
  {
    id: '55',
    name: "Ateneo Peers' Circle",
    description: "Peers’ Circle – ADZU is the official student peer group of the College Guidance and Counseling Office, providing support, guidance, and a sense of belonging to students.",
    logoUrl: "/OrgLogos/Ateneo Peers' Circle.jpg",
    category: 'socio-civic',
    tags: ['Peer Support', 'Guidance', 'Community'],
    contactEmail: 'peerscircle@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/adzupeerscircle' }
  },
  {
    id: '56',
    name: 'Students\' Initiative for Nationalist Approach in Governance - ADZU',
    description: 'SINAG is the sole Nationalist-Democratic political party in ADZU, advancing student politics and promoting genuine progress and social change in Philippine society.',
    logoUrl: '/OrgLogos/SINAG.jpg',
    category: 'socio-civic',
    tags: ['Nationalism', 'Politics', 'Advocacy'],
    contactEmail: 'sinag@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/SINAGAdZU' }
  },
  // Academic Cluster
  {
    id: '57',
    name: 'Google Developer Groups On Campus Blue Eagle',
    description: 'GDG On Campus Blue Eagle is the official Google Developer student community at ADZU, empowering students to innovate, collaborate, and grow in technology and development.',
    logoUrl: '/OrgLogos/Google Developer Groups On Campus Blue Eagle.jpg',
    category: 'academic',
    tags: ['Technology', 'Google', 'Development'],
    contactEmail: 'gdgblueeagle@adzu.edu.ph',
    socialLinks: { facebook: 'https://www.facebook.com/gdgocblueeagle' }
  }
]; 