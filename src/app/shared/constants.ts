export const HEADER_CONTENT = {
  HEADER_ARIA_LABEL: 'Website Header',
  ANNOUNCEMENTS: [
    '📢 Admissions Open for 2026-27 Session — Apply Now!',
    '🎨 Play-based learning with fun activities and holistic development',
    '📚 Stress-free and non-formal education for early childhood learning',
    '🎉 Celebrating cultural festivals and activity-based learning every month',
    '🥗 Healthy weekly diet plan for students',
  ],
  BRAND: {
    NAME: 'Little Buds Garden Play School',
    TAGLINE: 'A Unique Philosophy of Balance Schooling',
    LOGO_ALT: 'Little Buds Garden Play School Logo',
    HOME_ARIA_LABEL: 'Navigate to Little Buds Garden Play School homepage',
    ARIA_LABEL: 'Main navigation',
  },
  LINKS: [
    { LABEL: 'Home', PATH: '/', ARIA_LABEL: 'Navigate to Home page', },
    { LABEL: 'About', PATH: '/about', ARIA_LABEL: 'Navigate to About page', },
    { LABEL: 'Academics', PATH: '/academics', ARIA_LABEL: 'Navigate to Academics page', },
    { LABEL: 'Faculty', PATH: '/faculty', ARIA_LABEL: 'Navigate to Faculty page', },
    { LABEL: 'Gallery', PATH: '/gallery', ARIA_LABEL: 'Navigate to Gallery page', },
    { LABEL: 'Events', PATH: '/events', ARIA_LABEL: 'Navigate to Events page', },
    { LABEL: 'Notices', PATH: '/notices', ARIA_LABEL: 'Navigate to Notices page', },
    { LABEL: 'Contact', PATH: '/contact', ARIA_LABEL: 'Navigate to Contact page', },
  ],
  APPLY_BUTTON: {
    LABEL: 'Apply Now',
    PATH: '/admissions',
    ARIA_LABEL: 'Navigate to Admissions application page',
  },
  MOBILE_MENU: {
    ARIA_LABEL: 'Toggle navigation menu',
    MENU_ARIA_LABEL: 'Mobile navigation menu',
  }

} as const;

export const NOTICES_CONTENT = {
  SEO: {
    TITLE: 'Notices',
    DESCRIPTION: 'Latest notices and announcements from Little Buds Garden Play School.',
    PATH: '/notices',
  },
  BANNER: {
    TITLE: 'Notices',
    SUBTITLE: 'Important announcements and updates',
    AREA_LABEL: 'School Notices'
  },
  CATEGORIES: ['All', 'Academic', 'Sports', 'Meeting', 'General', 'Admission', 'Achievement', 'Transport',],
  EMPTY_STATE: { ICON: '📋', TITLE: 'No notices found', DESCRIPTION: 'Try adjusting your search or filter criteria.', },
  LATEST_NOTICES: {
    AREA_LABEL: 'Latest Notices',
    SEARCHPLACEHOLDER: 'Search notices...'
  },
  LATESTNOTICE_LIST: [
    {
      id: 1,
      title: 'Annual Sports Day Registration Open',
      date: '2026-05-10',
      category: 'Sports',
      content: 'Registration for the Annual Sports Day 2026 is now open. Students from all grades can participate in various track and field events. Last date for registration is May 25, 2026.',
      important: true,
    },
    {
      id: 2,
      title: 'Summer Vacation Schedule 2026',
      date: '2026-05-08',
      category: 'Academic',
      content: 'Summer vacation will commence from June 1, 2026 and school will reopen on July 10, 2026. All pending assignments should be submitted before May 28.',
      important: true,
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting - Grade 9 & 10',
      date: '2026-05-05',
      category: 'Meeting',
      content: 'A parent-teacher meeting for grades 9 and 10 is scheduled for May 18, 2026 from 9:00 AM to 1:00 PM. Parents are requested to attend without fail.',
      important: false,
    },
    {
      id: 4,
      title: 'Science Exhibition 2026',
      date: '2026-05-03',
      category: 'Academic',
      content: 'The annual Science Exhibition will be held on May 22, 2026. Students are encouraged to prepare innovative projects. Registration deadline is May 15.',
      important: false,
    },
    {
      id: 5,
      title: 'New Library Books Arrival',
      date: '2026-04-28',
      category: 'General',
      content: 'Over 500 new books across various genres have been added to our school library. Students can now borrow from the new collection starting May 5.',
      important: false,
    },
    {
      id: 6,
      title: 'Admission Open for 2026-27 Session',
      date: '2026-04-25',
      category: 'Admission',
      content: 'Admissions for the academic session 2026-27 are now open for all grades. Visit the admissions office or apply online through our website.',
      important: true,
    },
    {
      id: 7,
      title: 'Inter-School Debate Competition Results',
      date: '2026-04-20',
      category: 'Achievement',
      content: 'Our students secured first and third positions in the Inter-School Debate Competition held at City Convention Center. Congratulations to all participants!',
      important: false,
    },
    {
      id: 8,
      title: 'Bus Route Changes - Effective May 2026',
      date: '2026-04-18',
      category: 'Transport',
      content: 'Some bus routes will be modified effective May 1, 2026. Please check the updated route map available at the school office or on the parent portal.',
      important: false,
    },
  ],
};

export const CONTACT_CONTENT = {
  SEO: {
    TITLE: 'Contact Us',
    DESCRIPTION: 'Get in touch with Little Buds Garden Play School. Find our location, contact details, and inquiry form.',
    PATH: '/contact',
  },
  BANNER: {
    TITLE: 'Contact Us',
    SUBTITLE: 'We are here to help and answer any question you might have',
    AREA_LABEL: 'Contact School'
  },
  CONTACTS: {
    AREA_LABEL: 'Contact Info',
    INFO_CARDS: [
      {
        icon: '📍',
        title: 'Our Location',
        details: ['Ward No. 15', 'Supaul, Bihar, India'],
        actionText: 'View on Google Maps',
        link: 'https://maps.google.com',
      },
      {
        icon: '📞',
        title: 'Phone & Email',
        details: ['+91 7979886019', 'singhpratibha76@gmail.com'],
        actionText: 'Call Now',
        link: 'tel:+917979886019',
      },
      {
        icon: '⏰',
        title: 'School Hours',
        details: ['Apr - Oct: 8:00 AM - 12:30 PM', 'Nov - Mar: 9:00 AM - 1:30 PM', 'Sunday: Closed',],
        actionText: 'Admission Inquiry',
        link: '/admissions',
      },
    ],
  },
  FORM: {
    TITLE: 'Send us a Message',
    SUBTITLE: 'Inquiry Form',
    DESC: 'Fill out the form below and our team will get back to you within 24 hours.',
    AREA_LABEL: 'Inquiry Form',
    NAME_LABEL: 'Full Name *',
    EMAIL_LABEL: 'Email Address *',
    SUBJECT_LABEL: 'Subject *',
    MESSAGE_LABEL: 'Message *',
    NAME_PLACEHOLDER: 'Enter your full name',
    EMAIL_PLACEHOLDER: 'Enter your email address',
    SUBJECT_PLACEHOLDER: 'Enter subject',
    MESSAGE_PLACEHOLDER: 'Write your message here...',
    BUTTON_TEXT: 'Send Message',
  },
  MAP: {
    IFRAME_TITLE: 'Campus Location Map',
    MAP_URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.447545674067!2d85.3741!3d26.1209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzE1LjIiTiA4NcKwMjInMjYuOCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin',
  },
  EMERGENCY: {
    TITLE: 'School Contacts',
    SECURITY_LABEL: 'Admission Office',
    SECURITY_NUMBER: '+91 7979886019',
    MEDICAL_LABEL: 'Email',
    MEDICAL_NUMBER: 'singhpratibha76@gmail.com',
  },

} as const;

export const EVENTS_CONTENT = {
  SEO: {
    TITLE: 'School Events',
    DESCRIPTION: 'Stay updated with upcoming and past events, workshops, and celebrations at Little Buds Garden Play School.',
    PATH: '/events',
  },
  BANNER: {
    TITLE: 'Events & Happenings',
    SUBTITLE: 'Join us in celebrating milestones and learning beyond the classroom',
    AREA_LABEL: 'School Events'
  },
  FEATURED: {
    FEATURED_LABEL: '⭐ Featured Event',
    AREA_LABEL: 'Featured Event',
    TITLE: 'All Events',
    SUBTITLE: 'Calendar',
    DESC: 'Browse our upcoming and recent events',
  },
  EVENTS: {
    TITLE: 'Event Calendar',
    SUBTITLE: 'Upcoming & Past',
    DESC: 'A vibrant campus life filled with academic competitions, sports meets, and cultural festivals.',
    AREA_LABEL: 'Event List',
    EVENTS_LIST: [
      {
        id: 1,
        title: 'Annual Sports Day 2026',
        date: '2026-06-15',
        time: '8:00 AM - 4:00 PM',
        location: 'School Sports Ground',
        description: 'Join us for a day of athletic excellence! Our Annual Sports Day features track and field events, team sports, and fun activities for students of all grades. Parents and families are warmly invited to cheer on our young athletes.',
        category: 'Sports',
        featured: true,
      },
      {
        id: 2,
        title: 'Science Exhibition & Innovation Fair',
        date: '2026-05-22',
        time: '10:00 AM - 3:00 PM',
        location: 'School Auditorium & Science Labs',
        description: 'Students showcase their innovative science projects and experiments. Featuring live demonstrations, poster presentations, and interactive displays covering physics, chemistry, biology, and environmental science.',
        category: 'Academic',
        featured: true,
      },
      {
        id: 3,
        title: 'Cultural Fest - Harmony 2026',
        date: '2026-07-20',
        time: '5:00 PM - 9:00 PM',
        location: 'School Amphitheatre',
        description: 'Our annual cultural festival featuring music, dance, drama, and art performances by students. Experience the diverse talents of our school community in an evening of celebration and creativity.',
        category: 'Cultural',
        featured: false,
      },
      {
        id: 4,
        title: 'Career Counseling Workshop',
        date: '2026-06-05',
        time: '9:00 AM - 12:00 PM',
        location: 'Conference Hall',
        description: 'Expert career counselors will guide students of grades 9-12 on career pathways, entrance exam preparation, and college selection. Parents are welcome to attend.',
        category: 'Workshop',
        featured: false,
      },
      {
        id: 5,
        title: 'Independence Day Celebration',
        date: '2026-08-15',
        time: '8:00 AM - 11:00 AM',
        location: 'School Main Ground',
        description: 'Join us for the Independence Day celebrations featuring flag hoisting, patriotic performances, and cultural programs. All students, parents, and staff are invited.',
        category: 'National',
        featured: false,
      },
      {
        id: 6,
        title: 'Art & Craft Exhibition',
        date: '2026-06-28',
        time: '10:00 AM - 4:00 PM',
        location: 'Art Gallery Wing',
        description: 'A stunning display of student artwork including paintings, sculptures, crafts, and digital art. The exhibition celebrates the creative spirit of our students across all grades.',
        category: 'Cultural',
        featured: false,
      },
    ],
  }
} as const;

export const HOME_CONTENT = {
  SEO: {
    TITLE: 'Home',
    DESCRIPTION: 'Little Buds Garden Play School - Play-based preschool focused on holistic child development, creativity, culture, and stress-free education in Supaul.',
    KEYWORDS: 'play school, preschool, supaul school, kindergarten, nursery school, child development, play based learning',
    PATH: '/',
  },
  SCHEMA: {
    NAME: 'Little Buds Garden Play School',
    URL: 'https://littlebudsgardenplayschool.in',
    PHONE: '+917979886019',
    STREET: 'Ward No. 15',
    CITY: 'Supaul',
    POSTAL_CODE: '',
    COUNTRY: 'IN',
    FOUNDED: '1995',
  },
  HERO: {
    AREA_LABEL: 'Hero',
    BG_IMAGE: 'assets/image/1.webp',
    BADGE: '🏫 Admissions Open for 2026-27',
    TITLE_START: 'Fun Learning for Bright Little Minds',
    DESCRIPTION: 'A play-based preschool in Supaul focused on holistic child development through creativity, culture, activities, and stress-free learning.',
    ACTION_BTN: {
      APPLY: 'Apply for Admission',
      EXPLORE: 'Explore Our School',
      routerLinka: '/admissions',
      routerLinke: '/about',
    },
  },
  QUICK_LINKS: {
    LINK: [
      { icon: '📋', label: 'Admissions', path: '/admissions' },
      { icon: '📚', label: 'Academics', path: '/academics' },
      { icon: '📅', label: 'Events', path: '/events' },
      { icon: '📞', label: 'Contact Us', path: '/contact' },
    ],
    AREA_LABEL: 'Quick links',
  },
  ABOUT: {
    BADGE: 'About Us',
    AREA_LABEL: 'School introduction',
    TITLE_START: 'A Caring Preschool for Early Childhood Development',
    DESC_1: 'Little Buds Garden Play School provides a joyful and activity-based learning environment where children learn through play, creativity, storytelling, games, rhymes, and interactive activities.',
    DESC_2: 'We focus on the mental, physical, emotional, spiritual, cognitive, and social development of every child while promoting Indian culture, ethics, confidence, and discipline in a stress-free environment.',
    FEATURES: ['Play-Way Learning', 'Holistic Development', 'Activity-Based Education', 'Stress-Free Environment',],
    IMAGE: 'assets/image/2.webp',
    IMAGE_ALT: 'Students learning in a modern classroom',
    YEARS: '30+',
    STATS_LABEL: 'Years of Excellence',
    LEARN_MORE: 'Learn More About Us',
  },
  STATS: {
    STAT: [
      { value: 30, label: 'Years of Excellence' },
      { value: 100, label: 'Activity-Based Sessions' },
      { value: 15, label: 'Cultural Celebrations' },
      { value: 3, label: 'Years Admission Age' },
    ],
    AREA_LABEL: 'Statistics',
  },
  PRINCIPAL: {
    BADGE: "Principal's Desk",
    TITLE_START: 'A Message from Our Principal',
    QUOTE: 'Children learn best when they are happy, confident, and engaged in fun-filled activities.',
    DESC_1: 'At Little Buds Garden Play School, we believe every child deserves a nurturing environment filled with love, care, creativity, and joyful learning experiences.',
    DESC_2: 'Our goal is to build a strong educational foundation through play-based methods, cultural learning, and overall personality development.',
    NAME: 'Pratibha Singh',
    ROLE: 'Founder & Educator',
    IMAGE: 'assets/image/faculty.webp',
    AREA_LABEL: `Principal's message`,
  },
  ACHIEVEMENTS: {
    SUBTITLE: 'Pride',
    TITLE: 'Our Achievements',
    DESC: 'Celebrating the milestones that make us proud',
    AREA_LABEL: 'Achievements',
    ACHIEVEMENT_LIST: [
      {
        icon: '🎨',
        title: 'Play-Based Learning',
        description: 'Interactive learning through storytelling, rhymes, games, puzzles, and creative activities.',
      },
      {
        icon: '🌱',
        title: 'Holistic Development',
        description: 'Focus on emotional, mental, physical, spiritual, and social growth of children.',
      },
      {
        icon: '🎭',
        title: 'Cultural Education',
        description: 'Celebrating Indian festivals and teaching cultural values with ethics and discipline.',
      },
      {
        icon: '📚',
        title: 'Stress-Free Education',
        description: 'Non-formal and child-friendly education system designed for happy learning.',
      },
      {
        icon: '🧩',
        title: 'Creative Activities',
        description: 'Activities including clay modeling, paper folding, fancy dress, painting, and puzzles.',
      },
      {
        icon: '🥗',
        title: 'Healthy Food Habits',
        description: 'Weekly diet plans encouraging healthy eating and avoiding fast food habits.',
      },
    ],
  },
  NOTICES: {
    SUBTITLE: 'Updates',
    TITLE: 'Latest Notices',
    DESC: 'Stay informed with the latest announcements',
    AREA_LABEL: 'Latest notices',
    NOTICE_LIST: NOTICES_CONTENT.LATESTNOTICE_LIST.slice(0, 3)
  },
  EVENTS: {
    TITLE: 'Upcoming Events',
    SUBTITLE: 'Calendar',
    DESC: 'Join us in our exciting upcoming events',
    AREA_LABEL: 'Upcoming events',
    EVENT_LIST: EVENTS_CONTENT.EVENTS.EVENTS_LIST.slice(0, 4)
  },
  TESTIMONIALS: {
    TITLE: 'What Parents & Alumni Say',
    SUBTITLE: 'Testimonials',
    DESC: 'Hear from our school community',
    TESTIMONIALS_LIST: [
      {
        id: 1,
        name: 'Parent Review',
        role: 'Parent of Nursery Student',
        quote: 'The school provides a loving and caring environment where children learn happily through games and activities.',
        photo: 'assets/image/profile.webp',
        rating: 5,
      },
      {
        id: 2,
        name: 'Parent Review',
        role: 'Parent of KG Student',
        quote: 'We appreciate the focus on discipline, creativity, and cultural values along with quality preschool education.',
        photo: 'assets/image/profile.webp',
        rating: 5,
      },
      {
        id: 3,
        name: 'Parent Review',
        role: 'Parent of Play Group Student',
        quote: 'Our child enjoys storytelling, rhymes, painting, and play-way learning every day at school.',
        photo: 'assets/image/profile.webp',
        rating: 5,
      },
    ],
  },

  CTA: {
    TITLE: 'Start Your Child’s Learning Journey Today',
    DESC: 'Admissions are open for children aged 3 years and above at Little Buds Garden Play School, Supaul.',
    AREA_LABEL: 'Call to action',
    ACTION_BTN: { Apply: 'Apply Now', Contact: 'Contact Us', Applyl: '/admissions', Contactl: '/contact', },
  },
} as const;

export const ABOUT_CONTENT = {
  SEO: {
    TITLE: 'About Us',
    DESCRIPTION: 'Learn about Little Buds Garden Play School, a play-based preschool in Supaul focused on holistic child development and stress-free education.',
    KEYWORDS: 'play school supaul, preschool, nursery school, holistic education, play-way learning',
    PATH: '/about',
  },
  BANNER: {
    TITLE: 'About Us',
    SUBTITLE: 'Discover our legacy of educational excellence spanning three decades',
    AREA_LABEL: 'About page header'
  },
  STORY: {
    BADGE: 'Our Story',
    AREA_LABEL: 'School history',
    TITLE_START: 'A Unique Philosophy of Balance Schooling',
    DESC_1: 'Little Buds Garden Play School is a preschool in Supaul dedicated to creating a joyful, safe, and activity-based learning environment for children.',
    DESC_2: 'We believe children learn best when they are happy and engaged through storytelling, rhymes, games, discussions, puzzles, painting, and creative classroom activities.',
    DESC_3: 'Our school promotes holistic child development through play-way learning methods, cultural values, creativity, confidence building, and stress-free education.',
    IMAGE: 'assets/image/3.webp',
    IMAGE_ALT: 'Little Buds Garden Play School campus aerial view',
  },
  PURPOSE: {
    TITLE: 'Vision & Mission',
    SUBTITLE: 'Our Purpose',
    DESC: 'Guiding principles that drive everything we do',
    AREA_LABEL: 'Vision and mission',
    VISION: {
      TITLE: 'Our Vision',
      DESC: 'To nurture confident, creative, disciplined, and happy children through balanced and activity-based education.',
    },
    MISSION: {
      TITLE: 'Our Mission',
      DESC: 'To provide a loving and caring environment where children develop mentally, physically, emotionally, spiritually, cognitively, and socially.',
    },
  },
  OUR_CAMPUS: {
    TITLE: 'Our Campus',
    SUBTITLE: 'Infrastructure',
    DESC: 'A world-class campus designed to inspire learning',
    AREA_LABEL: 'Campus overview',
    FACILITIES: [
      {
        icon: '📚',
        title: 'Reading & Storytelling',
        description: 'Interactive storytelling, reading activities, and rhymes for communication development.',
      },
      {
        icon: '🎨',
        title: 'Creative Activities',
        description: 'Painting, paper folding, clay modeling, and pasting activities for creativity enhancement.',
      },
      {
        icon: '🧩',
        title: 'Puzzle & Block Games',
        description: 'Jigsaw puzzles and building blocks for logical thinking and problem-solving skills.',
      },
      {
        icon: '🎭',
        title: 'Fancy Dress & Role Play',
        description: 'Make-believe games and fancy dress activities to build confidence and imagination.',
      },
      {
        icon: '🎶',
        title: 'Rhymes & Discussions',
        description: 'Fun group discussions and rhyme sessions for social and language development.',
      },
      {
        icon: '❤️',
        title: 'Love & Care Environment',
        description: 'Safe, caring, and child-friendly atmosphere focused on happy learning.',
      },
    ],
  },
  VALUES: {
    TITLE: 'Values We Live By',
    SUBTITLE: 'Core Values',
    DESC: 'The pillars that define our school culture',
    AREA_LABEL: 'School values',
    VALUES_LIST: [
      {
        icon: '😊',
        title: 'Happy Learning',
        description: 'Children learn best through happiness, play, and engagement.',
      },
      {
        icon: '🤝',
        title: 'Care & Respect',
        description: 'We create a nurturing environment filled with love and care.',
      },
      {
        icon: '🎨',
        title: 'Creativity',
        description: 'Encouraging imagination and creativity through activities and play.',
      },
      {
        icon: '🇮🇳',
        title: 'Cultural Values',
        description: 'Teaching Indian culture, ethics, discipline, and social values.',
      },
    ],
  },

} as const;

export const ACADEMICS_CONTENT = {
  SEO: {
    TITLE: 'Academics',
    DESCRIPTION: 'Explore our CBSE curriculum, departments, and academic programs at Little Buds Garden Play School.',
    PATH: '/academics',
  },
  BANNER: {
    TITLE: 'Academics',
    SUBTITLE: 'Comprehensive curriculum designed for holistic development',
    AREA_LABEL: 'Academics'
  },
  CURRICULUM: {
    BADGE: 'Curriculum',
    AREA_LABEL: 'School Curriculum',
    TITLE_START: 'CBSE',
    TITLE_ACCENT: 'Curriculum',
    DESC_1: 'Our school follows the CBSE curriculum enriched with international best practices. We integrate STEAM education, experiential learning, and skill-based assessments to create a comprehensive educational experience.',
    DESC_2: 'From foundational literacy in primary years to advanced subject specialization in senior secondary, our academic programs are designed to nurture critical thinking, creativity, and a lifelong love for learning.',
    TAGS: ['CBSE Affiliated', 'STEAM Education', 'Project-Based Learning', 'Digital Classrooms',],
    IMAGE: 'assets/image/1.webp',
    IMAGE_ALT: 'Students studying in classroom',
  },
  DEPARTMENTS: {
    TITLE: 'Our Departments',
    SUBTITLE: 'Academic Wings',
    DESC: 'Specialized departments led by expert educators',
    AREA_LABEL: 'Our Departments',
    DEPARTMENTS_LIST: [
      {
        icon: '🔬',
        name: 'Science',
        description: 'Physics, Chemistry, Biology with advanced lab facilities.',
      },
      {
        icon: '📐',
        name: 'Mathematics',
        description: 'Strong mathematical foundation with problem-solving focus.',
      },
      {
        icon: '📖',
        name: 'Languages',
        description: 'English, Hindi, and third language options with literature focus.',
      },
      {
        icon: '🌍',
        name: 'Social Studies',
        description: 'History, Geography, Civics, and Economics for global awareness.',
      },
      {
        icon: '💻',
        name: 'Computer Science',
        description: 'Coding, AI, robotics, and digital literacy programs.',
      },
      {
        icon: '🎨',
        name: 'Arts & Humanities',
        description: 'Visual arts, music, drama, and creative expression.',
      },
    ],
  },
  PROGRAMS: {
    TITLE: 'Academic Programs',
    SUBTITLE: 'Programs',
    DESC: 'Structured programs across all levels',
    AREA_LABEL: 'Academic Programs',
    PROGRAMS_LIST: [
      {
        title: 'Primary School',
        grades: 'Nursery - Grade 5',
        color: '#3b82f6',
        description: 'Foundation years focused on building literacy, numeracy, and curiosity.',
        features: ['Activity-based learning', 'Phonics & reading program', 'Environmental awareness', 'Value education',],
      },
      {
        title: 'Middle School',
        grades: 'Grade 6 - Grade 8',
        color: '#d4a843',
        description: 'Transitional years developing analytical thinking and subject depth.',
        features: ['Subject specialization', 'Lab-based science', 'Research projects', 'Leadership programs',],
      },
      {
        title: 'Senior Secondary',
        grades: 'Grade 9 - Grade 12',
        color: '#1e3a8a',
        description: 'Advanced academics with board exam preparation and career guidance.',
        features: ['CBSE board preparation', 'Stream selection (Sci/Com/Arts)', 'Career counseling', 'Competitive exam coaching',],
      },
    ],
  },
  METHODS: {
    TITLE: 'Teaching Methodology',
    SUBTITLE: 'Methodology',
    DESC: 'Our innovative approach to education',
    AREA_LABEL: 'Methodology',
    METHODS_LIST: [
      {
        icon: '🎯',
        title: 'Experiential',
        description: 'Hands-on activities and real-world applications',
      },
      {
        icon: '🤝',
        title: 'Collaborative',
        description: 'Group projects and peer-to-peer learning',
      },
      {
        icon: '💡',
        title: 'Inquiry-Based',
        description: 'Student-driven questions and exploration',
      },
      {
        icon: '📊',
        title: 'Data-Driven',
        description: 'Continuous assessment and personalized feedback',
      },
    ],
  },
} as const;

export const ADMISSIONS_CONTENT = {
  SEO: {
    TITLE: 'Admissions',
    DESCRIPTION: 'Apply for admission to Little Buds Garden Play School.',
    PATH: '/admissions',
  },
  BANNER: {
    TITLE: 'Admissions',
    SUBTITLE: 'Begin your journey with Little Buds Garden Play School',
    AREA_LABEL: 'School Admissions'
  },
  PROCESS: {
    TITLE: 'Admission Process',
    SUBTITLE: 'How to Apply',
    DESC: 'Simple steps to join our school family',
    AREA_LABEL: 'Admissions Process',
    STEPS: [
      {
        number: 1,
        title: 'Online Registration',
        description: 'Fill out the application form and submit documents.',
      },
      {
        number: 2,
        title: 'Entrance Assessment',
        description: 'Age-appropriate assessment for academic readiness.',
      },
      {
        number: 3,
        title: 'Parent Interaction',
        description: 'Meet with our team to discuss needs and offerings.',
      },
      {
        number: 4,
        title: 'Confirmation',
        description: 'Receive admission offer and complete enrollment.',
      },
    ],
  },
  ELIGIBILITY: {
    TITLE: 'Eligibility Criteria',
    SUBTITLE: 'Requirements',
    AREA_LABEL: 'Admission Eligibility',
    ELIGIBILITY_TABLE: [
      { grade: 'Play Group', age: '3+ years', assessment: 'Informal Interaction' },
      { grade: 'Nursery', age: '3+ years', assessment: 'Informal Interaction' },
      { grade: 'KG', age: '4+ years', assessment: 'Informal Interaction' },
    ],
  },
  PROSPECTUS: {
    TITLE: 'Download Our Prospectus',
    DESC: 'Get detailed information about our curriculum, facilities, and fee structure.',
    BUTTON_TEXT: 'Download Prospectus (PDF)',
    AREA_LABEL: 'Prospectus',
  },
  FAQS: {
    TITLE: 'Frequently Asked Questions',
    SUBTITLE: 'FAQs',
    AREA_LABEL: 'Frequently Asked Questions',
    FAQ_LIST: [
      {
        id: 1,
        question: 'What is the minimum age for admission?',
        answer: 'Admission is available for children aged 3 years and above.',
        category: 'Eligibility',
      },
      {
        id: 2,
        question: 'What documents are required for admission?',
        answer: 'Required documents include birth certificate, two passport-size photographs of the child, Aadhaar card and one passport-size photograph of both parents.',
        category: 'Documents',
      },
      {
        id: 3,
        question: 'What are the school timings?',
        answer: 'From April to October: 8:00 AM – 12:30 PM. From November to March: 9:00 AM – 1:30 PM.',
        category: 'Timings',
      },
      {
        id: 4,
        question: 'What teaching method does the school follow?',
        answer: 'The school follows play-way and activity-based learning methods focused on holistic child development.',
        category: 'Academic',
      },
      {
        id: 5,
        question: 'What activities are available for children?',
        answer: 'Children participate in storytelling, rhymes, painting, clay modeling, puzzles, fancy dress, games, and cultural celebrations.',
        category: 'Activities',
      },
    ],
  },
  INQUIRY: {
    HEADER: {
      TITLE: 'Admission Inquiry',
      SUBTITLE: 'Get in Touch',
      AREA_LABEL: 'Admission Inquiry',
    },
    FORM: {
      PARENT_NAME_LABEL: 'Parent Name *',
      STUDENT_NAME_LABEL: 'Student Name *',
      EMAIL_LABEL: 'Email *',
      PHONE_LABEL: 'Phone *',
      GRADE_LABEL: 'Grade Applying For',
      MESSAGE_LABEL: 'Message',
      PARENT_NAME_PLACEHOLDER: 'Enter parent name',
      STUDENT_NAME_PLACEHOLDER: 'Enter student name',
      EMAIL_PLACEHOLDER: 'Enter email address',
      PHONE_PLACEHOLDER: 'Enter phone number',
      MESSAGE_PLACEHOLDER: 'Write your message here...',
      GRADE_PLACEHOLDER: 'Select Grade',
      NURSERY: 'Nursery',
      KG: 'KG',
      SUBMIT_BUTTON: 'Submit Inquiry',
    },
  },
  
  FEES: {
  AREA_LABEL: 'Fee Structure Section',
  TITLE: 'Fee Structure',
  SUBTITLE: 'Transparent and affordable fee plans designed to provide quality education and holistic development.',
  FOOTER_TEXT_1:'* Fee structure is subject to revision as per school policy.',
  FOOTER_TEXT_2:'Transport & activity charges may apply separately.',
  FEE_TABLE: [
    { class: 'Nursery', admissionFee: '₹8,000', monthlyFee: '₹2,500', annualCharges: '₹5,000' },
    { class: 'LKG', admissionFee: '₹8,000', monthlyFee: '₹2,700', annualCharges: '₹5,000' },
    { class: 'UKG', admissionFee: '₹8,000', monthlyFee: '₹2,900', annualCharges: '₹5,500' },
    { class: 'Class I - III', admissionFee: '₹10,000', monthlyFee: '₹3,200', annualCharges: '₹6,000' },
    { class: 'Class IV - VI', admissionFee: '₹12,000', monthlyFee: '₹3,800', annualCharges: '₹7,500' },
    { class: 'Class VII - X', admissionFee: '₹15,000', monthlyFee: '₹4,500', annualCharges: '₹9,000' }
  ]
},
} as const;

export const FACULTY_CONTENT = {
  SEO: {
    TITLE: 'Our Faculty',
    DESCRIPTION: 'Meet the dedicated educators and administrative staff at Little Buds Garden Play School.',
    PATH: '/faculty',
  },
  BANNER: {
    TITLE: 'Our Educators',
    AREA_LABEL: 'Faculty',
    SUBTITLE: 'Passionate mentors dedicated to nurturing the next generation of leaders',
  },
  STATS: {
    AREA_LABEL: 'Statistics',
    STAT_LIST: [
      { label: 'Qualified Teachers', value: '50+' },
      { label: 'Avg. Experience', value: '12 Yrs' },
      { label: 'Student-Teacher Ratio', value: '20:1' },
      { label: 'Master Degrees', value: '85%' },
    ]
  },
  HEADER: {
    TITLE: 'Faculty Members',
    SUBTITLE: 'Meet Our Team',
    DESC: 'Our staff consists of highly qualified professionals with years of experience in the CBSE curriculum and holistic development.',
    AREA_LABEL: 'Faculty list'
  },
  DEPARTMENTS: ['All', 'Leadership', 'Science', 'Mathematics', 'Humanities', 'Languages', 'Physical Education', 'Arts',],
  FACULTY_LIST: [
    {
      id: 1,
      name: 'Dr. Ananya Sharma',
      designation: 'Principal',
      department: 'Administration',
      qualification: 'Ph.D. in Education, M.Ed., B.Ed.',
      experience: '25 years',
      photo: 'assets/image/faculty.webp',
      bio: 'A visionary leader with over 25 years of experience in educational administration and curriculum development.',
    },
    {
      id: 2,
      name: 'Mr. Rajesh Kumar',
      designation: 'Vice Principal',
      department: 'Administration',
      qualification: 'M.A. English, B.Ed.',
      experience: '20 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Dedicated to fostering academic excellence and maintaining the highest standards of educational practice.',
    },
    {
      id: 3,
      name: 'Ms. Priya Patel',
      designation: 'Head of Science',
      department: 'Science',
      qualification: 'M.Sc. Physics, B.Ed.',
      experience: '15 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Passionate about making science accessible and exciting for all students through innovative teaching methods.',
    },
    {
      id: 4,
      name: 'Mr. David Wilson',
      designation: 'Head of Mathematics',
      department: 'Mathematics',
      qualification: 'M.Sc. Mathematics, M.Phil.',
      experience: '18 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Expert in developing problem-solving skills and mathematical thinking among students.',
    },
    {
      id: 5,
      name: 'Ms. Sarah Johnson',
      designation: 'Head of English',
      department: 'English',
      qualification: 'M.A. English Literature, CELTA',
      experience: '12 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Committed to nurturing a love for language and literature through creative and communicative teaching approaches.',
    },
    {
      id: 6,
      name: 'Mr. Arjun Mehta',
      designation: 'Head of Computer Science',
      department: 'Computer Science',
      qualification: 'M.Tech. Computer Science, B.Ed.',
      experience: '10 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Pioneering digital education and coding curriculum to prepare students for the technology-driven future.',
    },
    {
      id: 7,
      name: 'Ms. Kavita Rao',
      designation: 'Head of Social Studies',
      department: 'Social Studies',
      qualification: 'M.A. History, B.Ed.',
      experience: '14 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Inspiring global citizenship and critical thinking through engaging social studies programs.',
    },
    {
      id: 8,
      name: 'Mr. Vikram Singh',
      designation: 'Head of Physical Education',
      department: 'Sports',
      qualification: 'M.P.Ed., National Level Athlete',
      experience: '16 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Dedicated to promoting sportsmanship, fitness, and holistic physical development among students.',
    },
    {
      id: 9,
      name: 'Ms. Meera Krishnan',
      designation: 'Head of Arts',
      department: 'Arts',
      qualification: 'M.F.A., Diploma in Fine Arts',
      experience: '11 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Nurturing creativity and artistic expression through diverse art forms and innovative pedagogy.',
    },
    {
      id: 10,
      name: 'Dr. Suresh Nair',
      designation: 'Head of Biology',
      department: 'Science',
      qualification: 'Ph.D. in Molecular Biology, B.Ed.',
      experience: '13 years',
      photo: 'assets/image/faculty.webp',
      bio: 'Bringing cutting-edge biological research into the classroom to inspire the next generation of scientists.',
    },
  ],
  RECRUITMENT: {
    TITLE: 'Want to join our academic team?',
    DESC: 'We are always looking for passionate educators who want to make a difference in the lives of students.',
    BTN: 'Send Your Resume'
  }
} as const;

export const GALLERY_CONTENT = {
  SEO: {
    TITLE: 'Gallery',
    DESCRIPTION: 'Browse photos of campus, events, and activities at Little Buds Garden Play School.',
    PATH: '/gallery',
  },
  BANNER: {
    TITLE: 'Gallery',
    SUBTITLE: 'A glimpse into life at Little Buds Garden Play School',
    AREA_LABEL: 'Gallery'
  },
  HEADER: {
    TITLE: 'Photo Gallery',
    SUBTITLE: 'Memories',
    DESC: 'Capturing moments of learning, growth, and celebration',
    AREA_LABEL: 'Photo Gallery'
  },
  CATEGORIES: ['All', 'Academic', 'Sports', 'Cultural', 'Infrastructure', 'Events'],
  GALLERY_LIST: [
    {
      id: 1,
      title: 'Annual Sports Day 2025',
      category: 'Sports',
      image: 'assets/image/1.webp',
      thumbnail: 'assets/image/1.webp',
      description: 'Students competing in various track and field events during the Annual Sports Day.',
    },
    {
      id: 2,
      title: 'Science Exhibition',
      category: 'Academic',
      image: 'assets/image/2.webp',
      thumbnail: 'assets/image/2.webp',
      description: 'Students presenting their innovative science projects at the annual exhibition.',
    },
    {
      id: 3,
      title: 'Cultural Festival',
      category: 'Cultural',
      image: 'assets/image/3.webp',
      thumbnail: 'assets/image/3.webp',
      description: 'Vibrant cultural performances during the annual Harmony festival.',
    },
    {
      id: 4,
      title: 'Art Workshop',
      category: 'Cultural',
      image: 'assets/image/4.webp',
      thumbnail: 'assets/image/4.webp',
      description: 'Students engaged in creative art workshops exploring various mediums.',
    },
    {
      id: 5,
      title: 'Computer Lab',
      category: 'Infrastructure',
      image: 'assets/image/1.webp',
      thumbnail: 'assets/image/1.webp',
      description: 'State-of-the-art computer lab equipped with the latest technology.',
    },
    {
      id: 6,
      title: 'Library',
      category: 'Infrastructure',
      image: 'assets/image/2.webp',
      thumbnail: 'assets/image/2.webp',
      description: 'Our well-stocked library providing a peaceful reading environment.',
    },
    {
      id: 7,
      title: 'Graduation Ceremony',
      category: 'Events',
      image: 'assets/image/3.webp',
      thumbnail: 'assets/image/3.webp',
      description: 'Proud moments from the graduation ceremony of the Class of 2025.',
    },
    {
      id: 8,
      title: 'Classroom Learning',
      category: 'Academic',
      image: 'assets/image/4.webp',
      thumbnail: 'assets/image/4.webp',
      description: 'Interactive classroom sessions promoting collaborative learning.',
    },
    {
      id: 9,
      title: 'Playground',
      category: 'Infrastructure',
      image: 'assets/image/1.webp',
      thumbnail: 'assets/image/1.webp',
      description: 'Spacious playground for outdoor sports and physical activities.',
    },
    {
      id: 10,
      title: 'Music Room',
      category: 'Cultural',
      image: 'assets/image/2.webp',
      thumbnail: 'assets/image/2.webp',
      description: 'Students learning and performing in our well-equipped music room.',
    },
    {
      id: 11,
      title: 'Republic Day Celebration',
      category: 'Events',
      image: 'assets/image/3.webp',
      thumbnail: 'assets/image/3.webp',
      description: 'Patriotic celebrations and cultural performances on Republic Day.',
    },
    {
      id: 12,
      title: 'Sports Achievements',
      category: 'Sports',
      image: 'assets/image/4.webp',
      thumbnail: 'assets/image/4.webp',
      description: "Celebrating our students' outstanding achievements in inter-school sports.",
    },
  ],

} as const;

export const FOOTER_CONTENT = {
  BRAND: {
    NAME: 'Little Buds Garden Play School',
    TAGLINE: 'A Unique Philosophy of Balance Schooling',
    DESCRIPTION: 'A premier institution committed to academic excellence, holistic development, and nurturing future leaders since 1995.',
    LOGO_ALT: 'Little Buds Garden Play School Logo',
    AREA_LABEL: 'Website Footer'
  },

  SOCIAL: {
    SOCIAL_ARIA_LABEL: 'Social Media Links',
    FACEBOOK: 'Visit our Facebook page',
    TWITTER: 'Visit our Twitter page',
    INSTAGRAM: 'Visit our Instagram page',
    YOUTUBE: 'Visit our YouTube channel'
  },

  QUICK_LINKS: {
    TITLE: 'Quick Links',
    ABOUT: { LABEL: 'About Us', ROUTE: '/about', ARIA_LABEL: 'Navigate to About Us page', },
    ACADEMICS: { LABEL: 'Academics', ROUTE: '/academics', ARIA_LABEL: 'Navigate to Academics page', },
    ADMISSIONS: { LABEL: 'Admissions', ROUTE: '/admissions', ARIA_LABEL: 'Navigate to Admissions page', },
    FACULTY: { LABEL: 'Faculty', ROUTE: '/faculty', ARIA_LABEL: 'Navigate to Faculty page', },
    GALLERY: { LABEL: 'Gallery', ROUTE: '/gallery', ARIA_LABEL: 'Navigate to Gallery page', },
    EVENTS: { LABEL: 'Events', ROUTE: '/events', ARIA_LABEL: 'Navigate to Events page', },
    NOTICES: { LABEL: 'Notices', ROUTE: '/notices', ARIA_LABEL: 'Navigate to Notices page', },
  },

  CONTACT: {
    TITLE: 'Contact Us',
    ADDRESS: '123 Education Lane, Knowledge Park, City - 110001',
    PHONE_1: '+91 98765 43210',
    PHONE_2: '+91 11 2345 6789',
    EMAIL: 'info@greenfieldacademy.edu',
  },

  HOURS: {
    TITLE: 'School Hours',
    MONDAY_FRIDAY: 'Monday - Friday',
    MONDAY_FRIDAY_TIME: '8:00 AM - 3:00 PM',
    SATURDAY: 'Saturday',
    SATURDAY_TIME: '8:00 AM - 12:00 PM',
    SUNDAY: 'Sunday',
    SUNDAY_TIME: 'Closed',
    OFFICE_HOURS_TITLE: 'Office Hours',
    OFFICE_HOURS_TIME: 'Mon - Sat: 9:00 AM - 5:00 PM',
  },

  BOTTOM_BAR: {
    COPYRIGHT: 'Little Buds Garden Play School. All rights reserved.',
    PRIVACY_POLICY: 'Privacy Policy',
    TERMS: 'Terms of Use',
    SITEMAP: 'Sitemap',
  },
} as const;