
export type User = {
  id: string;
  name: string;
  role: string;
  location: string;
  skills: string[];
  experience: number;
  avatar: string;
  bio: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  posted: string;
  logo: string;
  tags: string[];
  description: string;
};

export type Training = {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  description: string;
  tags: string[];
};

export type Mentor = {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  avatar: string;
  bio: string;
};

export const featuredUsers: User[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Frontend Developer",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    experience: 3,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    bio: "Self-taught developer with 3 years of experience building web applications",
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "UX Designer",
    location: "New York, NY",
    skills: ["Figma", "UI Design", "User Research"],
    experience: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    bio: "Passionate about creating intuitive user experiences that delight users",
  },
  {
    id: "3",
    name: "Michael Kim",
    role: "Data Scientist",
    location: "Austin, TX",
    skills: ["Python", "Machine Learning", "Data Visualization"],
    experience: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    bio: "Turning complex data into actionable insights through analytics and ML",
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "Backend Developer",
    location: "Seattle, WA",
    skills: ["Node.js", "MongoDB", "AWS"],
    experience: 2,
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=150&auto=format&fit=crop",
    bio: "Software engineer with expertise in building robust APIs and microservices",
  }
];

export const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=150&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Remote"],
    description: "Join our team to build modern web applications with cutting-edge technologies",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "New York, NY",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop",
    tags: ["Figma", "UI Design", "User Testing"],
    description: "Create beautiful and functional user interfaces for our digital products",
  },
  {
    id: "3",
    title: "Data Analyst",
    company: "DataDrive",
    location: "Chicago, IL",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    posted: "1 week ago",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=150&auto=format&fit=crop",
    tags: ["SQL", "Excel", "Tableau"],
    description: "Analyze data to provide insights and drive business decisions",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Remote",
    salary: "$100,000 - $140,000",
    type: "Contract",
    posted: "Just now",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=150&auto=format&fit=crop",
    tags: ["Docker", "Kubernetes", "AWS"],
    description: "Manage and optimize our cloud infrastructure and deployment pipelines",
  },
  {
    id: "5",
    title: "Product Manager",
    company: "InnovateTech",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    posted: "5 days ago",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=150&auto=format&fit=crop",
    tags: ["Product Strategy", "Agile", "User Research"],
    description: "Lead the development and launch of innovative tech products",
  },
  {
    id: "6",
    title: "Marketing Specialist",
    company: "GrowthBoost",
    location: "Los Angeles, CA",
    salary: "$65,000 - $85,000",
    type: "Part-time",
    posted: "3 days ago",
    logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=150&auto=format&fit=crop",
    tags: ["Digital Marketing", "SEO", "Content Creation"],
    description: "Create and execute marketing strategies to drive customer acquisition",
  },
];

export const trainings: Training[] = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    provider: "CodeAcademy Pro",
    duration: "12 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=300&auto=format&fit=crop",
    description: "Comprehensive course covering HTML, CSS, JavaScript, and modern frameworks",
    tags: ["Web Development", "Frontend", "JavaScript"]
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    provider: "DataCamp",
    duration: "8 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?q=80&w=300&auto=format&fit=crop",
    description: "Learn data analysis, visualization, and machine learning basics with Python",
    tags: ["Data Science", "Python", "Machine Learning"]
  },
  {
    id: "3",
    title: "UX Design Principles",
    provider: "Interaction Design Foundation",
    duration: "6 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=300&auto=format&fit=crop",
    description: "Master the fundamentals of user experience design and usability testing",
    tags: ["UX Design", "UI", "User Research"]
  },
  {
    id: "4",
    title: "Cloud Computing Certification",
    provider: "AWS Training",
    duration: "4 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop",
    description: "Prepare for AWS certification with hands-on cloud infrastructure training",
    tags: ["Cloud", "AWS", "DevOps"]
  }
];

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Jennifer Wilson",
    title: "Senior Software Engineer",
    company: "Google",
    expertise: ["Algorithm Design", "System Architecture", "Career Development"],
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop",
    bio: "15+ years of experience in software development with a focus on helping early career developers grow"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Product Design Director",
    company: "Airbnb",
    expertise: ["UX Strategy", "Design Systems", "Portfolio Reviews"],
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=150&auto=format&fit=crop",
    bio: "Passionate about mentoring designers and helping them craft compelling portfolios"
  },
  {
    id: "3",
    name: "Sarah Chen",
    title: "Data Science Manager",
    company: "Netflix",
    expertise: ["Machine Learning", "Analytics", "Technical Interviews"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    bio: "Helping data professionals navigate the job market and prepare for technical interviews"
  }
];
