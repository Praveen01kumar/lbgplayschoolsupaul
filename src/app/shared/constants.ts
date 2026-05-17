export const HEADER_CONTENT = {
  HEADER_ARIA_LABEL: 'Website Header',
  ANNOUNCEMENTS: [
    '📢 Admissions Open for 2026-27 Session — Apply Now!',
    '🏆 Our students secured top positions in National Science Olympiad!',
    '📅 Annual Sports Day on June 15, 2026 — Register Today!',
    '📚 New Library Wing inaugurated with 10,000+ books',
    'School announcements ticker',
  ],
  BRAND: {
    NAME: 'Little Buds Garden',
    TAGLINE: 'Play School',
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
        details: ['123 Education Lane, Knowledge Park', 'Muzaffarpur, Bihar, India',],
        actionText: 'View on Google Maps',
        link: 'https://maps.google.com',
      },
      {
        icon: '📞',
        title: 'Phone & Email',
        details: ['+91 98765 43210', '+91 7979886019', 'singhpratibha76@gmail.com',],
        actionText: 'Call Now',
        link: 'tel:+919876543210',
      },
      {
        icon: '⏰',
        title: 'Office Hours',
        details: ['Mon - Fri: 8:00 AM - 4:00 PM', 'Sat: 8:00 AM - 1:00 PM', 'Sun: Closed',],
        actionText: 'Book Appointment',
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
    TITLE: 'Emergency Contacts',
    SECURITY_LABEL: 'Security Desk',
    SECURITY_NUMBER: '+91 98765 43211',
    MEDICAL_LABEL: 'Medical Room',
    MEDICAL_NUMBER: '+91 98765 43212',
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
    DESCRIPTION: 'Little Buds Garden Play School - A premier institution committed to academic excellence, holistic development, and nurturing future leaders since 1995.',
    KEYWORDS: 'school, education, academy, CBSE, admissions, international school',
    PATH: '/',
  },
  SCHEMA: {
    NAME: 'Little Buds Garden Play School',
    URL: 'https://littlebudsgardenplayschool.in',
    PHONE: '+919876543210',
    STREET: '123 Education Lane, Knowledge Park',
    CITY: 'City',
    POSTAL_CODE: '110001',
    COUNTRY: 'IN',
    FOUNDED: '1995',
  },
  HERO: {
    AREA_LABEL: 'Hero',
    BG_IMAGE: 'assets/image/1.webp',
    BADGE: '🏫 Admissions Open for 2026-27',
    TITLE_START: 'Nurturing Minds, Shaping Futures',
    DESCRIPTION: 'At Little Buds Garden Play School, we cultivate academic excellence, creativity, and character to prepare students for the challenges of tomorrow.',
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
    TITLE_START: '30 Years of Academic Excellence',
    DESC_1: 'Since 1995, Little Buds Garden Play School has been a beacon of quality education. We believe in nurturing the whole child — mind, body, and spirit — through innovative teaching methods, state-of-the-art facilities, and a caring community.',
    DESC_2: 'Our CBSE-affiliated curriculum, combined with a strong emphasis on extracurricular activities, ensures that every student develops the skills, knowledge, and values needed to thrive in a rapidly changing world.',
    FEATURES: ['CBSE Affiliated', 'Smart Classrooms', '15 Acre Campus', '100% Results',],
    IMAGE: 'assets/image/2.webp',
    IMAGE_ALT: 'Students learning in a modern classroom',
    YEARS: '30+',
    STATS_LABEL: 'Years of Excellence',
    LEARN_MORE: 'Learn More About Us',
  },
  STATS: {
    STAT: [
      { value: 2500, label: 'Students Enrolled' },
      { value: 150, label: 'Expert Teachers' },
      { value: 30, label: 'Years of Excellence' },
      { value: 200, label: 'Awards Won' },
    ],
    AREA_LABEL: 'Statistics',
  },
  PRINCIPAL: {
    BADGE: "Principal's Desk",
    TITLE_START: 'A Message from Our Principal',
    QUOTE: 'Education is not merely about filling minds with information — it is about igniting the spark of curiosity, building character, and empowering young people to create a better world.',
    DESC_1: 'Welcome to Little Buds Garden Play School. With over 25 years of experience in education, I am committed to ensuring that every child who walks through our doors receives the best possible education in a nurturing environment.',
    DESC_2: 'Our dedicated faculty, modern infrastructure, and innovative curriculum work together to provide a learning experience that prepares students not just for exams, but for life.',
    NAME: 'Dr. Ananya Sharma',
    ROLE: 'Principal, GIA',
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
        icon: '🏆',
        title: '100% Board Results',
        description: 'Consistently achieving 100% pass rate in CBSE board examinations for the past 10 years.',
      },
      {
        icon: '🥇',
        title: 'National Science Olympiad',
        description: 'Our students secured top 10 positions in the National Science Olympiad three years running.',
      },
      {
        icon: '⚽',
        title: 'State Sports Champions',
        description: 'Winners of the State-Level Inter-School Sports Championship in cricket, basketball, and athletics.',
      },
      {
        icon: '🎨',
        title: 'INTACH Heritage Award',
        description: 'Recognized by INTACH for outstanding contributions to heritage awareness and conservation education.',
      },
      {
        icon: '💻',
        title: 'Digital Innovation Award',
        description: 'Awarded for pioneering STEAM education and robotics curriculum in the region.',
      },
      {
        icon: '🌱',
        title: 'Green School Certification',
        description: 'Certified as an eco-friendly campus with sustainable practices and environmental education programs.',
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
        name: 'Arun & Meena Kapoor',
        role: 'Parents of Aryan, Grade 10',
        quote: "Little Buds Garden Play School has been a second home for our son. The teachers are incredibly dedicated, and the school's focus on holistic development is truly commendable. We've seen Aryan grow not just academically but as a confident young individual.",
        photo: 'assets/image/profile.webp',
        rating: 5,
      },
      {
        id: 2,
        name: 'Shalini Verma',
        role: 'Parent of Ananya, Grade 7',
        quote: "The supportive environment at Little Buds Garden Play School is exceptional. My daughter has flourished here, discovering her passion for science and arts. The school's extracurricular programs are diverse and enriching.",
        photo: 'assets/image/profile.webp',
        rating: 5,
      },
      {
        id: 3,
        name: 'Rahul Gupta',
        role: 'Alumni, Class of 2020',
        quote: 'My years at Little Buds Garden Play School shaped who I am today. The values instilled in me, the critical thinking skills developed, and the friendships made have all been instrumental in my success at university and beyond.',
        photo: 'assets/image/profile.webp',
        rating: 5,
      },
    ],
  },

  CTA: {
    TITLE: 'Ready to Join Our Family?',
    DESC: 'Give your child the gift of quality education. Admissions are now open for the 2026-27 academic session.',
    AREA_LABEL: 'Call to action',
    ACTION_BTN: { Apply: 'Apply Now', Contact: 'Contact Us', Applyl: '/admissions', Contactl: '/contact', },
  },
} as const;

export const ABOUT_CONTENT = {
  SEO: {
    TITLE: 'About Us',
    DESCRIPTION: "Learn about Little Buds Garden Play School's rich history, vision, mission, world-class campus, and values since 1995.",
    KEYWORDS: 'about school, history, vision, mission, campus, facilities',
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
    TITLE_START: 'A Legacy Since 1995',
    DESC_1: 'Little Buds Garden Play School was founded in 1995 by a group of visionary educators who believed that quality education should be accessible to all. What started as a small school with just 50 students and 5 teachers has now grown into a premier institution with over 2,500 students and 150 dedicated faculty members.',
    DESC_2: 'Over three decades, we have continuously evolved our teaching methods, expanded our facilities, and embraced technology while staying true to our core values of integrity, excellence, and compassion.',
    DESC_3: 'Today, Little Buds Garden Play School stands as a testament to what can be achieved when passion meets purpose — producing generations of confident, capable, and caring individuals who make a positive impact on the world.',
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
      DESC: 'To be a globally recognized institution that nurtures innovative thinkers, compassionate leaders, and responsible citizens who are prepared to shape a sustainable and equitable future.',
    },
    MISSION: {
      TITLE: 'Our Mission',
      DESC: 'To provide a holistic, inclusive, and stimulating learning environment that empowers students with knowledge, skills, and values to excel academically, grow personally, and contribute meaningfully to society.',
    },
  },
  OUR_CAMPUS: {
    TITLE: 'Our Campus',
    SUBTITLE: 'Infrastructure',
    DESC: 'A world-class campus designed to inspire learning',
    AREA_LABEL: 'Campus overview',
    FACILITIES: [
      {
        icon: '🏫',
        title: 'Smart Classrooms',
        description: 'Air-conditioned classrooms equipped with interactive whiteboards, projectors, and digital learning tools.',
      },
      {
        icon: '🔬',
        title: 'Science Laboratories',
        description: 'Fully equipped Physics, Chemistry, and Biology labs for hands-on learning and experimentation.',
      },
      {
        icon: '💻',
        title: 'Computer Labs',
        description: 'State-of-the-art computer labs with high-speed internet and latest software for digital literacy.',
      },
      {
        icon: '📚',
        title: 'Library',
        description: 'A well-stocked library with over 15,000 books, digital resources, and a dedicated reading zone.',
      },
      {
        icon: '🏊',
        title: 'Swimming Pool',
        description:
          'Olympic-size swimming pool with trained instructors for swimming lessons and competitive training.',
      },
      {
        icon: '⚽',
        title: 'Sports Complex',
        description: 'Multi-sport complex with cricket ground, basketball court, football field, and indoor games.',
      },
      {
        icon: '🎭',
        title: 'Auditorium',
        description: '800-seat auditorium with professional sound and lighting for events and performances.',
      },
      {
        icon: '🎨',
        title: 'Art & Music Studio',
        description: 'Dedicated studios for visual arts, music, and performing arts with professional equipment.',
      },
      {
        icon: '🚌',
        title: 'Transport',
        description: 'GPS-enabled bus fleet covering major routes with trained drivers and attendants.',
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
        icon: '⭐',
        title: 'Excellence',
        description: 'Striving for the highest standards in everything we do',
      },
      {
        icon: '🤝',
        title: 'Integrity',
        description: 'Acting with honesty, fairness, and ethical responsibility',
      },
      {
        icon: '💡',
        title: 'Innovation',
        description: 'Embracing creativity and forward-thinking approaches',
      },
      {
        icon: '❤️',
        title: 'Compassion',
        description: 'Fostering empathy, kindness, and respect for all',
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
      { grade: 'Nursery', age: '3+ years', assessment: 'Informal Interaction' },
      { grade: 'KG', age: '4+ years', assessment: 'Informal Interaction' },
      { grade: 'Grade 1', age: '6+ years', assessment: 'Written + Interaction' },
      { grade: 'Grade 2-5', age: 'Age appropriate', assessment: 'Written (English, Math)', },
      { grade: 'Grade 6-8', age: 'Age appropriate', assessment: 'Written (English, Math, Science)', },
      { grade: 'Grade 9-12', age: 'Age appropriate', assessment: 'Written + Interview', },
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
        question: 'What is the admission process?',
        answer: 'The admission process involves submitting an application form, followed by an entrance assessment, parent interaction, and final selection. You can apply online through our website or visit the admissions office for offline registration.',
        category: 'Process',
      },
      {
        id: 2,
        question: 'What are the age criteria for admission?',
        answer: 'For Nursery, the child should be 3+ years old as of March 31 of the admission year. For Grade 1, the child should be 6+ years. Age criteria for other grades follow the standard academic norms set by the education board.',
        category: 'Eligibility',
      },
      {
        id: 3,
        question: 'What documents are required for admission?',
        answer: 'Required documents include: Birth certificate, Previous school transfer certificate, Report card of the last two years, Passport-size photographs (4), Aadhar card copy of the student and parents, Address proof, and Medical fitness certificate.',
        category: 'Documents',
      },
      {
        id: 4,
        question: 'Is there an entrance test?',
        answer: "Yes, an age-appropriate entrance assessment is conducted for all grades. For Nursery and KG, it's an informal interaction. For Grade 1 onwards, a written test in English and Mathematics is conducted along with a personal interview.",
        category: 'Process',
      },
      {
        id: 5,
        question: 'What is the fee structure?',
        answer: 'Fee structure varies by grade level. Please contact the admissions office or download our prospectus for detailed fee information. We offer sibling discounts and merit-based scholarships for eligible students.',
        category: 'Fees',
      },
      {
        id: 6,
        question: 'Do you offer transportation?',
        answer: 'Yes, we provide GPS-enabled bus transportation covering major routes across the city. Each bus is equipped with a first-aid kit, CCTV cameras, and is accompanied by a bus attendant for student safety.',
        category: 'Facilities',
      },
      {
        id: 7,
        question: 'What curriculum does the school follow?',
        answer: 'Little Buds Garden Play School follows the CBSE (Central Board of Secondary Education) curriculum with an integrated approach that includes international best practices, STEAM education, and skill-based learning.',
        category: 'Academic',
      },
      {
        id: 8,
        question: 'Are there scholarships available?',
        answer: 'Yes, we offer merit-based scholarships for students who excel academically or in sports and extracurricular activities. Need-based financial aid is also available. Please contact the admissions office for details.',
        category: 'Fees',
      },
      {
        id: 9,
        question: 'What extracurricular activities are offered?',
        answer: 'We offer a wide range of activities including sports (cricket, football, basketball, swimming), arts (music, dance, drama, visual arts), clubs (robotics, debate, environment, literary), and special programs (yoga, martial arts, coding).',
        category: 'Facilities',
      },
      {
        id: 10,
        question: 'How can I schedule a campus visit?',
        answer: 'Campus visits can be scheduled by calling our admissions office at +91 98765 43210 or by filling out the inquiry form on our website. Guided tours are conducted every Saturday between 10:00 AM and 1:00 PM.',
        category: 'Process',
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
      photo:'assets/image/faculty.webp',
      bio: 'A visionary leader with over 25 years of experience in educational administration and curriculum development.',
    },
    {
      id: 2,
      name: 'Mr. Rajesh Kumar',
      designation: 'Vice Principal',
      department: 'Administration',
      qualification: 'M.A. English, B.Ed.',
      experience: '20 years',
      photo:'assets/image/faculty.webp',
      bio: 'Dedicated to fostering academic excellence and maintaining the highest standards of educational practice.',
    },
    {
      id: 3,
      name: 'Ms. Priya Patel',
      designation: 'Head of Science',
      department: 'Science',
      qualification: 'M.Sc. Physics, B.Ed.',
      experience: '15 years',
      photo:'assets/image/faculty.webp',
      bio: 'Passionate about making science accessible and exciting for all students through innovative teaching methods.',
    },
    {
      id: 4,
      name: 'Mr. David Wilson',
      designation: 'Head of Mathematics',
      department: 'Mathematics',
      qualification: 'M.Sc. Mathematics, M.Phil.',
      experience: '18 years',
      photo:'assets/image/faculty.webp',
      bio: 'Expert in developing problem-solving skills and mathematical thinking among students.',
    },
    {
      id: 5,
      name: 'Ms. Sarah Johnson',
      designation: 'Head of English',
      department: 'English',
      qualification: 'M.A. English Literature, CELTA',
      experience: '12 years',
      photo:'assets/image/faculty.webp',
      bio: 'Committed to nurturing a love for language and literature through creative and communicative teaching approaches.',
    },
    {
      id: 6,
      name: 'Mr. Arjun Mehta',
      designation: 'Head of Computer Science',
      department: 'Computer Science',
      qualification: 'M.Tech. Computer Science, B.Ed.',
      experience: '10 years',
      photo:'assets/image/faculty.webp',
      bio: 'Pioneering digital education and coding curriculum to prepare students for the technology-driven future.',
    },
    {
      id: 7,
      name: 'Ms. Kavita Rao',
      designation: 'Head of Social Studies',
      department: 'Social Studies',
      qualification: 'M.A. History, B.Ed.',
      experience: '14 years',
      photo:'assets/image/faculty.webp',
      bio: 'Inspiring global citizenship and critical thinking through engaging social studies programs.',
    },
    {
      id: 8,
      name: 'Mr. Vikram Singh',
      designation: 'Head of Physical Education',
      department: 'Sports',
      qualification: 'M.P.Ed., National Level Athlete',
      experience: '16 years',
      photo:'assets/image/faculty.webp',
      bio: 'Dedicated to promoting sportsmanship, fitness, and holistic physical development among students.',
    },
    {
      id: 9,
      name: 'Ms. Meera Krishnan',
      designation: 'Head of Arts',
      department: 'Arts',
      qualification: 'M.F.A., Diploma in Fine Arts',
      experience: '11 years',
      photo:'assets/image/faculty.webp',
      bio: 'Nurturing creativity and artistic expression through diverse art forms and innovative pedagogy.',
    },
    {
      id: 10,
      name: 'Dr. Suresh Nair',
      designation: 'Head of Biology',
      department: 'Science',
      qualification: 'Ph.D. in Molecular Biology, B.Ed.',
      experience: '13 years',
      photo:'assets/image/faculty.webp',
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
    NAME: 'Little Buds Garden',
    TAGLINE: 'Play School',
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