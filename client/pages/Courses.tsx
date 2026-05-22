import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Search, 
  Users, 
  Briefcase, 
  Award, 
  GraduationCap, 
  Star, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Layers,
  FileText,
  HelpCircle,
  PhoneCall,
  Calendar,
  Sparkles
} from "lucide-react";

interface Course {
  featured: boolean;
  program: string;
  category: string;
  level: string;
  title: string;
  desc: string;
  duration: string;
  enrolled: string;
  modules: string;
  footer: string;
  price: string;
  originalPrice: string;
  rating: string;
  ratingCount: string;
  skills: string[];
  overview: string;
  curriculum: { title: string; topics: string[] }[];
  tools: string[];
  projects: string[];
  internshipDetails: string;
  certificateInfo: string;
  mentor: { name: string; role: string; bio: string; avatar: string };
  outcomes: string[];
  faqs: { q: string; a: string }[];
}

export default function CoursesPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });
  const [activeModalTab, setActiveModalTab] = useState("overview");

  const categories = [
    "All Programs", 
    "AI & Machine Learning", 
    "Full Stack Development", 
    "Data Analytics", 
    "Career Programs",
    "Internship Programs"
  ];

  const allCourses: Course[] = [
    {
      featured: true,
      program: "Internship Program",
      category: "AI & Machine Learning",
      level: "Beginner to Advanced",
      title: "AI with Python — Training + Internship",
      desc: "Master Artificial Intelligence and Machine Learning with Python. Covers Deep Learning, Computer Vision, NLP, and Generative AI with hands-on projects.",
      duration: "3–6 Months",
      enrolled: "1,240 students",
      modules: "13 Modules",
      footer: "Training + Internship",
      price: "₹24,999",
      originalPrice: "₹34,999",
      rating: "4.8",
      ratingCount: "124 reviews",
      skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "Generative AI", "NLP"],
      overview: "Develop production-grade machine learning models from scratch. This program takes you from core Python fundamentals to training, fine-tuning, and deploying generative models, computer vision neural nets, and natural language transformers.",
      curriculum: [
        { title: "Module 1: Advanced Python Foundations", topics: ["Data structures & OOP", "Numpy & Pandas for data manipulation", "VCS Git & GitHub flows"] },
        { title: "Module 2: Machine Learning Algorithms", topics: ["Regression & classification", "Support Vector Machines & Random Forests", "Hyperparameter tuning & validation"] },
        { title: "Module 3: Deep Learning & Computer Vision", topics: ["Artificial Neural Networks (ANN)", "Convolutional Neural Networks (CNN)", "Image classification & object detection"] },
        { title: "Module 4: Natural Language Processing & Transformers", topics: ["Text preprocessing & vectorization", "Recurrent Neural Networks (RNN)", "Large Language Models (LLMs) & prompt engineering"] },
        { title: "Module 5: Capstone Internship Assignment", topics: ["Deploying models to AWS/HuggingFace", "Collaborative project build with agile sprints", "Final mentor code review"] }
      ],
      tools: ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-Learn", "Git", "Google Colab", "AWS"],
      projects: [
        "Real-Time Smart Security Surveillance (Computer Vision)",
        "Automated Financial Document Parsing Bot (NLP)",
        "Customer Lifetime Value Predictor (ML Engine)"
      ],
      internshipDetails: "12-week virtual co-internship with certified industry partners. Work on live backend datasets under direct supervision of senior engineers. Includes weekly sprint stand-ups and pull request code reviews.",
      certificateInfo: "Officially co-branded VTU-listed completion certificate and NSDC partner stamp, accompanied by a verified internship experience letter detailing project contributions.",
      mentor: {
        name: "Dr. Aravind Sharma",
        role: "Ex-AI Scientist at Microsoft Research",
        bio: "Over 12 years of core ML experience. Dr. Sharma specializes in deep neural architecture search and generative NLP integrations.",
        avatar: "AS"
      },
      outcomes: [
        "Build a verified portfolio of 3 enterprise AI projects",
        "Qualify for Junior Data Scientist and ML Engineer vacancies",
        "Direct referral opportunity in partner firms"
      ],
      faqs: [
        { q: "Is prior coding experience required?", a: "While helpful, we start from scratch with Python programming basics, making it highly accessible for beginners." },
        { q: "Will I receive direct placement support?", a: "Yes, you get resume evaluation, customized mock interview loops, and direct access to internal recruiter portals." }
      ]
    },
    {
      featured: false,
      program: "Internship Program",
      category: "Data Analytics",
      level: "Beginner",
      title: "Data Analytics — Training + Internship",
      desc: "Become a job-ready Data Analyst with comprehensive training in Excel modeling, SQL databases, Power BI, Tableau, and data science basics.",
      duration: "3 Months",
      enrolled: "1,620 students",
      modules: "8 Modules",
      footer: "Training + Internship",
      price: "₹18,999",
      originalPrice: "₹24,999",
      rating: "4.7",
      ratingCount: "198 reviews",
      skills: ["Excel", "SQL", "Power BI", "Tableau", "Python for Analytics", "Statistics"],
      overview: "Harness the power of data to drive real-world business actions. This course teaches you to design efficient database structures, extract key trends using complex queries, and build visually stunning dashboards that tell a story.",
      curriculum: [
        { title: "Module 1: Professional Excel Spreadsheet Modeling", topics: ["Pivot tables & lookups", "Financial modeling foundations", "Dashboard mockups"] },
        { title: "Module 2: Structured Query Language (SQL)", topics: ["Joins & subqueries", "Window functions", "Database schema architecture"] },
        { title: "Module 3: Business Intelligence Dashboards", topics: ["Power BI DAX queries", "Tableau calculated fields", "Publishing reports for clients"] },
        { title: "Module 4: Python Data Wrangling", topics: ["Pandas DataFrames", "Data cleaning & handling null values", "Seaborn visualization patterns"] }
      ],
      tools: ["MS Excel", "PostgreSQL", "MySQL", "Power BI", "Tableau", "Jupyter", "Git"],
      projects: [
        "E-Commerce Retail Performance Interactive Dashboard",
        "Company Database Overhaul & Multi-Table Query Optimization",
        "Marketing Campaign Conversion Analysis Report"
      ],
      internshipDetails: "8-week internship focused on real-world retail and business operations datasets. Candidates assist in compiling weekly metrics and cleaning messy client-provided log tables.",
      certificateInfo: "Verified Data Analyst Certification from Atos Recruit LLP, validating your hands-on dashboard build skills.",
      mentor: {
        name: "Rohan Varma",
        role: "Lead Analytics Consultant at Accenture",
        bio: "Consulted on multiple Fortune-500 supply chain optimization projects. Expert in database optimization and client storytelling.",
        avatar: "RV"
      },
      outcomes: [
        "Create 3 industry-grade data dashboards",
        "Qualify for Business Intelligence (BI) Analyst, Data Coordinator, and Operations Analyst roles",
        "Gain 1-on-1 dashboard review sessions"
      ],
      faqs: [
        { q: "Which database system is used during classes?", a: "We primarily work with PostgreSQL and MySQL, teaching concepts that transfer seamlessly to Oracle or SQL Server." }
      ]
    },
    {
      featured: false,
      program: "Career Program",
      category: "Full Stack Development",
      level: "Intermediate",
      title: "Full Stack Development (MERN Stack)",
      desc: "Build highly responsive web applications with React, Node.js, Express, MongoDB, and modern DevOps tools. Includes placement assistance.",
      duration: "4 Months",
      enrolled: "980 students",
      modules: "10 Modules",
      footer: "Career Program",
      price: "₹29,999",
      originalPrice: "₹39,999",
      rating: "4.9",
      ratingCount: "245 reviews",
      skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "DevOps", "REST APIs"],
      overview: "Go from frontend basics to full system architecture. Master client-side states, RESTful API design, database structures, security protocols like JWT, and cloud hosting best practices.",
      curriculum: [
        { title: "Module 1: Advanced Frontend & Responsive Layouts", topics: ["HTML5, CSS3, CSS Grid", "Tailwind CSS architecture", "Asynchronous JavaScript (ES6+)"] },
        { title: "Module 2: Single Page Apps (SPA) with React", topics: ["React state, hooks & context", "Routing with React Router 6", "State management & caching"] },
        { title: "Module 3: Backend APIs with Node & Express", topics: ["Routing, middleware & request handling", "REST API architecture standards", "Error handling & validation"] },
        { title: "Module 4: Non-Relational Databases (MongoDB)", topics: ["Mongoose schemas", "Aggregations", "Performance optimizations"] },
        { title: "Module 5: Security, System Design & Hosting", topics: ["JWT & cookie-based auth", "Docker containerization", "Vite build pipeline & AWS deployment"] }
      ],
      tools: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "AWS", "Git", "Postman"],
      projects: [
        "Real-Time Workspace Collaboration App (WebSockets)",
        "Secure SaaS Checkout and Billing Platform",
        "Microservices-based E-Commerce Backend Engine"
      ],
      internshipDetails: "Optional 12-week co-development program on internal production toolsets. Write active PRs, resolve bugs, and work alongside full-time tech leads.",
      certificateInfo: "Professional Software Engineer Certificate with verifiable credential code, complete with code review transcripts.",
      mentor: {
        name: "Sarah Connor",
        role: "Lead Software Architect at Razorpay",
        bio: "Previously scaled consumer platforms handling over 10 million daily active transactions. Passionate about typescript and clean architecture.",
        avatar: "SC"
      },
      outcomes: [
        "Deploy a complex full stack web application to public clouds",
        "Understand system scalability, caching, and state management inside out",
        "Eligible for Full Stack Developer, Frontend Engineer, and Backend Engineer interviews"
      ],
      faqs: [
        { q: "Is placement assistance included?", a: "Yes, candidates receive active support via mock technical interviews, DSA practice guidelines, and direct resumes placement." }
      ]
    },
    {
      featured: false,
      program: "Career Program",
      category: "Career Programs",
      level: "Beginner",
      title: "Digital Marketing Essentials",
      desc: "Learn search engine optimization (SEO), pay-per-click advertising, social media strategies, and Google Analytics to grow online brands.",
      duration: "4 Weeks",
      enrolled: "450 students",
      modules: "4 Modules",
      footer: "Career Program",
      price: "₹4,999",
      originalPrice: "₹7,999",
      rating: "4.6",
      ratingCount: "88 reviews",
      skills: ["SEO", "SEM", "Google Analytics", "Social Media", "Email Campaigns"],
      overview: "Develop metrics-driven marketing campaigns. Master high-ROI organic search strategies, setup profitable paid ad loops, analyze user behavior data, and write emails that convert.",
      curriculum: [
        { title: "Module 1: Search Engine Optimization", topics: ["On-page optimization", "Keyword research matrices", "Technical crawl optimization"] },
        { title: "Module 2: Paid Channels & PPC Ads", topics: ["Google Ads search campaigns", "Meta Ads auction dynamics", "Conversion tracking configuration"] },
        { title: "Module 3: Metrics & Web Analytics", topics: ["Google Analytics 4 setup", "Attribution modeling", "UTM structure mapping"] }
      ],
      tools: ["Google Analytics 4", "Google Ads", "Meta Ads Manager", "Ahrefs", "Mailchimp"],
      projects: [
        "E-Commerce Store SEO Technical Crawl & Fix Audit",
        "Paid Search Ad Strategy & ROI Simulation Deck",
        "B2B Email Campaign Performance Optimization Report"
      ],
      internshipDetails: "Practical 2-week digital campaign deployment assignment with a micro-budget sponsored by Atos Recruit LLP to gain live analytics experience.",
      certificateInfo: "Digital Marketing Practitioner Certificate, verified on LinkedIn.",
      mentor: {
        name: "Anjali Mehta",
        role: "Director of Performance at Dentsu",
        bio: "Managed annual ad spends exceeding ₹5 Crores for FMCG and retail clients. Specialized in attribution models.",
        avatar: "AM"
      },
      outcomes: [
        "Run real PPC campaigns with clear conversion targets",
        "Earn job opportunities for SEO Analyst and Marketing Executive openings"
      ],
      faqs: [
        { q: "Will I run campaigns with real budgets?", a: "Yes, a sandbox budget is allocated to practice setting up live audience metrics." }
      ]
    },
    {
      featured: false,
      program: "Career Program",
      category: "Career Programs",
      level: "Beginner",
      title: "Cybersecurity Essentials",
      desc: "Understand foundational cybersecurity principles, threat models, network security protocols, and security audits.",
      duration: "6 Weeks",
      enrolled: "310 students",
      modules: "6 Modules",
      footer: "Career Program",
      price: "₹7,999",
      originalPrice: "₹11,999",
      rating: "4.7",
      ratingCount: "104 reviews",
      skills: ["Network Security", "Cryptography", "Penetration Testing", "Security Audits"],
      overview: "Protect enterprise networks and assess software assets for critical vulnerabilities. Get introduced to basic penetration testing frameworks, secure system design, and threat defense tactics.",
      curriculum: [
        { title: "Module 1: Network Defense Foundations", topics: ["TCP/IP security configurations", "Firewall rules & proxy filters", "Intrusion Detection Systems (IDS)"] },
        { title: "Module 2: Vulnerability Audits & PenTesting", topics: ["Port scanning & enumeration", "OWASP Top 10 vulnerabilities", "Reporting security flaws"] },
        { title: "Module 3: Cryptography & Access Control", topics: ["Symmetric vs asymmetric keys", "Hashing mechanisms", "Active Directory settings"] }
      ],
      tools: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Kali Linux"],
      projects: [
        "Network Traffic Analysis & Malware Indicator Hunting",
        "Corporate Web Portal Penetration Audit & Remediation Guide",
        "Local Secure Remote Connection System Config"
      ],
      internshipDetails: "Practical labs executing automated vulnerability analysis on sandboxed servers, complete with technical threat reports.",
      certificateInfo: "Cybersecurity Fundamentals Certificate verifying technical network review skills.",
      mentor: {
        name: "Vikram Sen",
        role: "Cyber Security Advisor at PwC",
        bio: "Assisted multiple government and banking networks in fortifying their perimeter controls. Certified CISSP.",
        avatar: "VS"
      },
      outcomes: [
        "Configure basic firewalls and perform security sweeps",
        "Position yourself for Junior Cybersecurity Analyst and Auditor roles"
      ],
      faqs: [
        { q: "Is coding required for penetration testing?", a: "Basic scripting knowledge is helpful, but we teach command-line operations from the absolute ground up." }
      ]
    },
    {
      featured: false,
      program: "Career Program",
      category: "Career Programs",
      level: "Beginner",
      title: "UI/UX Design Fundamentals",
      desc: "Learn user-centric design principles, customer research methods, wireframing, interactive prototyping, and Figma design patterns.",
      duration: "6 Weeks",
      enrolled: "620 students",
      modules: "6 Modules",
      footer: "Career Program",
      price: "₹6,999",
      originalPrice: "₹9,999",
      rating: "4.7",
      ratingCount: "112 reviews",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping", "Design Systems"],
      overview: "Design digital interfaces that are clean, intuitive, and conversion-focused. Learn core layout principles, accessibility standards, user testing paradigms, and advanced collaborative Figma techniques.",
      curriculum: [
        { title: "Module 1: User Research & Persona Creation", topics: ["User interviews", "Empathy mapping", "Information Architecture"] },
        { title: "Module 2: Low & High Fidelity Wireframes", topics: ["Grid systems & alignment", "Color theory & UI typography", "Figma auto-layout workflows"] },
        { title: "Module 3: Advanced Prototyping & Systems", topics: ["Component variables & variants", "Interactive animations", "Usability testing loops"] }
      ],
      tools: ["Figma", "FigJam", "Miro", "LottieFiles"],
      projects: [
        "E-Commerce Mobile Checkout Interface Redesign Portfolio",
        "Local Service Finder App Wireframes & Interactive Prototype",
        "Custom Corporate Multi-Theme Design System UI Kit"
      ],
      internshipDetails: "Practical Figma workflow assignments simulating agency projects, with periodic visual design reviews by senior product leads.",
      certificateInfo: "UI/UX Design Specialist Certificate with verifiable design project URLs.",
      mentor: {
        name: "Nisha Patel",
        role: "Senior Product Designer at Swiggy",
        bio: "Focused on optimizing transaction UX pathways for over 5 million food orders daily. Specialist in modular design systems.",
        avatar: "NP"
      },
      outcomes: [
        "Build a verified portfolio containing 2 comprehensive case studies",
        "Eligible for UI/UX Design Intern and Junior Product Designer roles"
      ],
      faqs: [
        { q: "Is graphic design experience needed?", a: "No, this program focuses on user research and interface logic, and does not require freehand drawing skills." }
      ]
    }
  ];

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCheckoutCourse(null);
      setFormData({ name: "", email: "", phone: "", notes: "" });
    }, 5000);
  };

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = 
      activeCategory === "All Programs" ||
      (activeCategory === "Career Programs" && course.program === "Career Program") ||
      (activeCategory === "Internship Programs" && course.program === "Internship Program") ||
      course.category === activeCategory;

    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-bg-base" style={{ fontFamily: "DM Sans" }}>
      {/* Mobile top bar */}
      <Navbar onHamburgerClick={() => setMobileNavOpen(true)} />

      {/* Fixed left sidebar */}
      <Sidebar
        mobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />

      {/* Main content area */}
      <div className="md:ml-[250px] flex flex-col min-h-screen">
        {/* Spacer for mobile top bar */}
        <div className="md:hidden h-14" />

        {/* ── 1. HERO SECTION ── */}
        <section className="bg-navy py-16 px-6 lg:px-12 text-white relative overflow-hidden">
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--accent-12) 0%, transparent 70%)",
              right: "-5%",
              bottom: "-10%",
            }}
          />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> High-Impact Training + Internships
                </div>
                <h1 className="font-fraunces text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Industry-ready programs built for <em className="text-accent italic">real careers</em>
                </h1>
                <p className="text-blue-200 text-sm lg:text-base max-w-2xl leading-relaxed mb-6">
                  Learn through practical mentor-led training, build a verified portfolio, and transition seamlessly into hiring partner companies with co-certified programs.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-md mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-blue-200/50">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search courses, skills (e.g. Python, React)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/10 border border-white/15 focus:border-accent text-white placeholder-blue-200/50 text-sm rounded-full pl-10 pr-4 py-3 outline-none transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-blue-200/50 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a href="#listing-grid" className="btn btn-amber py-2.5 px-6 text-xs">
                    <span>View All Programs</span>
                  </a>
                  <a href="#features-section" className="btn btn-outline-light py-2.5 px-6 text-xs border-white/20 text-white hover:border-accent">
                    <span>How it works</span>
                  </a>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl grid grid-cols-2 gap-4">
                <div className="text-center p-3 border-r border-b border-white/10">
                  <div className="text-2xl font-bold text-accent font-fraunces">10,000+</div>
                  <div className="text-[11px] text-blue-200 uppercase tracking-wider font-medium mt-1">Students Trained</div>
                </div>
                <div className="text-center p-3 border-b border-white/10">
                  <div className="text-2xl font-bold text-accent font-fraunces">100%</div>
                  <div className="text-[11px] text-blue-200 uppercase tracking-wider font-medium mt-1">Internship Help</div>
                </div>
                <div className="text-center p-3 border-r border-white/10">
                  <div className="text-2xl font-bold text-accent font-fraunces">45+</div>
                  <div className="text-[11px] text-blue-200 uppercase tracking-wider font-medium mt-1">Hiring Partners</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-2xl font-bold text-accent font-fraunces">6</div>
                  <div className="text-[11px] text-blue-200 uppercase tracking-wider font-medium mt-1">Curated Tracks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. FEATURED HIGHLIGHTS ── */}
        <section id="features-section" className="py-12 px-6 lg:px-12 bg-white border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4 p-4 border border-border rounded-xl hover:border-accent/40 transition-colors">
                <div className="p-3 bg-accent-lt rounded-lg text-accent h-fit">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm mb-1">Guaranteed Internships</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Gain co-certified experience logs working directly with registered agencies and corporate partners.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-border rounded-xl hover:border-accent/40 transition-colors">
                <div className="p-3 bg-accent-lt rounded-lg text-accent h-fit">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm mb-1">VTU & NSDC Certified</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Earn verified curriculum certifications aligned to national skill frameworks and recognized credentials.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-border rounded-xl hover:border-accent/40 transition-colors">
                <div className="p-3 bg-accent-lt rounded-lg text-accent h-fit">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-sm mb-1">Direct Mentor Support</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Weekly feedback calls, query desks on Slack, and direct code-review from active engineering leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. MAIN SECTION: FILTERS & GRID ── */}
        <section id="listing-grid" className="py-16 px-6 lg:px-12 bg-bg-base flex-grow">
          <div className="max-w-5xl mx-auto">
            
            {/* Filters Row */}
            <div className="flex flex-col gap-4 mb-10 pb-6 border-b border-border">
              <div className="flex justify-between items-center">
                <h2 className="font-fraunces text-2xl font-bold text-ink">
                  Available Programs {searchQuery && `for "${searchQuery}"`}
                </h2>
                <span className="text-xs text-muted font-medium bg-white px-3 py-1 border border-border rounded-full">
                  Showing {filteredCourses.length} results
                </span>
              </div>

              {/* Responsive Category Badges */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 border ${
                      activeCategory === category
                        ? "bg-accent border-accent text-white"
                        : "bg-white border-border text-muted hover:border-accent/50 hover:text-ink"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-between bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                      course.featured
                        ? "border-accent shadow-md shadow-accent/5 ring-1 ring-accent/10"
                        : "border-border hover:border-accent hover:shadow-sm"
                    }`}
                  >
                    {/* Upper content */}
                    <div>
                      {/* Image Placeholder */}
                      <div className="bg-navy/5 border-b border-border h-32 flex flex-col items-center justify-center relative px-4">
                        {course.featured && (
                          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                            Best Value
                          </span>
                        )}
                        <span className="absolute top-3 right-3 bg-navy text-white text-[9px] font-semibold px-2 py-0.5 rounded">
                          {course.level}
                        </span>
                        <BookOpen className="w-8 h-8 text-navy/20 mb-1" />
                        <span className="text-[10px] text-muted font-medium tracking-wider uppercase">
                          {course.program}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-1 mb-2">
                          <span className="flex items-center gap-0.5 text-xs text-accent font-bold">
                            <Star className="w-3.5 h-3.5 fill-current" /> {course.rating}
                          </span>
                          <span className="text-[11px] text-muted">({course.ratingCount})</span>
                        </div>

                        <h3 className="font-fraunces text-base font-bold text-ink leading-snug mb-2 hover:text-accent transition-colors">
                          {course.title}
                        </h3>

                        <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-4">
                          {course.desc}
                        </p>

                        {/* Skills tag list */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {course.skills.slice(0, 3).map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-medium bg-gray-50 border border-border text-muted px-2 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                          {course.skills.length > 3 && (
                            <span className="text-[10px] font-semibold text-accent bg-accent-lt px-1.5 py-0.5 rounded">
                              +{course.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Lower content */}
                    <div className="px-5 pb-5 border-t border-border/60 pt-4">
                      {/* Meta info */}
                      <div className="flex justify-between items-center text-[11px] text-muted mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 opacity-60" /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1 font-semibold text-ink">
                          {course.price}
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setActiveModalTab("overview");
                            setSelectedCourse(course);
                          }}
                          className="w-full text-center border border-border hover:border-accent text-navy hover:text-accent text-[11px] font-semibold py-2 px-3 rounded transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => setCheckoutCourse(course)}
                          className="w-full text-center bg-navy hover:bg-accent text-white text-[11px] font-semibold py-2 px-3 rounded transition-colors"
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white border border-dashed border-border rounded-xl">
                <BookOpen className="w-10 h-10 text-muted/30 mx-auto mb-2" />
                <p className="text-sm font-semibold text-ink">No programs match your filters.</p>
                <p className="text-xs text-muted mt-1">Try relaxing your search query or picking "All Programs".</p>
                <button
                  onClick={() => {
                    setActiveCategory("All Programs");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-semibold text-accent hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}

            {/* Future placeholders */}
            <div className="mt-16 border border-dashed border-border p-8 text-center bg-white rounded-xl">
              <p className="text-sm text-ink font-semibold">Looking for something else?</p>
              <p className="text-xs text-muted mt-1 max-w-md mx-auto">
                We design specialized programs based on corporate requirements. Send a request to our counselors to request customized corporate training cycles.
              </p>
              <a href="mailto:contactus@atosrecruitllp.in" className="inline-flex items-center gap-1 text-xs font-semibold text-accent mt-3 hover:underline">
                Contact Counselor Office <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. STUDENT TRUST SECTION ── */}
        <section className="py-16 px-6 lg:px-12 bg-white border-t border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-label">Success Outcomes</div>
              <h2 className="font-fraunces text-3xl font-bold text-ink">
                Verified reviews from <em className="text-accent italic">graduates</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-bg-base border border-border rounded-xl">
                <div className="flex gap-1 mb-3 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  "The AI with Python program completely changed how I look at datasets. The co-certified internship with Atos Recruit LLP gave me actual industry logs and code submissions on GitHub. I got placed as an associate data engineer at a tech firm within weeks of graduating."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">
                    KP
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-ink">Karan Patel</h5>
                    <p className="text-[10px] text-muted">Placed at Infosys · Data Engineering</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-bg-base border border-border rounded-xl">
                <div className="flex gap-1 mb-3 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  "Excellent structure for full-stack React developer roles. We built live projects, focused heavily on API designs, database management, and learned TypeScript early on. Sarah's mentor loops were brutal but helped me pass actual dev screening loops with ease."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xs">
                    RS
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-ink">Rhea Sen</h5>
                    <p className="text-[10px] text-muted">Frontend Dev at Razorpay Intern program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* ── 5. COURSE DETAIL MODAL ── */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[1500] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl border border-border overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="p-6 bg-navy text-white flex justify-between items-start border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-accent-lt/10 border border-accent/20 px-2.5 py-0.5 rounded">
                  {selectedCourse.program}
                </span>
                <h3 className="font-fraunces text-xl font-bold mt-2 pr-6">
                  {selectedCourse.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-blue-200">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedCourse.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {selectedCourse.enrolled}</span>
                  <span className="flex items-center gap-1 text-accent font-bold"><Star className="w-3.5 h-3.5 fill-current" /> {selectedCourse.rating} ({selectedCourse.ratingCount})</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs Bar */}
            <div className="flex border-b border-border bg-bg-base text-xs font-semibold text-muted">
              {[
                { id: "overview", label: "Overview", icon: BookOpen },
                { id: "curriculum", label: "Curriculum", icon: Layers },
                { id: "mentor", label: "Mentor & Outcome", icon: GraduationCap },
                { id: "certificate", label: "Internship & Certificate", icon: ShieldCheck }
              ].map(tab => {
                const Icon = tab.icon;
                const active = activeModalTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveModalTab(tab.id)}
                    className={`flex-1 py-3 px-4 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
                      active 
                        ? "border-accent text-accent bg-white font-bold" 
                        : "border-transparent hover:text-ink hover:bg-gray-100/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Scrollable Content Area */}
            <div className="p-6 overflow-y-auto flex-grow text-sm leading-relaxed text-muted">
              
              {/* TAB 1: OVERVIEW */}
              {activeModalTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-ink mb-2">Program Overview</h4>
                    <p>{selectedCourse.overview}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-ink mb-2">Tools & Technologies Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.tools.map((tool, idx) => (
                        <span key={idx} className="bg-bg-base border border-border px-3 py-1 rounded text-xs text-ink font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-ink mb-2">Projects Included</h4>
                    <ul className="space-y-2 list-none p-0">
                      {selectedCourse.projects.map((proj, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 2: CURRICULUM */}
              {activeModalTab === "curriculum" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-ink mb-2">Detailed Syllabus ({selectedCourse.modules})</h4>
                  <div className="border border-border rounded-lg overflow-hidden">
                    {selectedCourse.curriculum.map((module, idx) => (
                      <div key={idx} className="border-b border-border last:border-b-0 p-4">
                        <h5 className="font-bold text-ink mb-2 flex justify-between text-xs sm:text-sm">
                          <span>{module.title}</span>
                          <span className="text-accent text-[11px] font-normal uppercase">Active Session</span>
                        </h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-none p-0">
                          {module.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-center gap-1.5 text-xs">
                              <ChevronRight className="w-3 h-3 text-accent" /> {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: MENTOR & OUTCOME */}
              {activeModalTab === "mentor" && (
                <div className="space-y-6">
                  {/* Mentor Bio */}
                  <div className="p-4 bg-bg-base border border-border rounded-xl flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <div className="w-12 h-12 rounded-full bg-navy text-white text-base font-bold flex items-center justify-center flex-shrink-0">
                      {selectedCourse.mentor.avatar}
                    </div>
                    <div>
                      <h5 className="font-bold text-ink text-sm">{selectedCourse.mentor.name}</h5>
                      <p className="text-[10px] text-accent font-semibold">{selectedCourse.mentor.role}</p>
                      <p className="text-xs mt-2 leading-relaxed">{selectedCourse.mentor.bio}</p>
                    </div>
                  </div>

                  {/* Career Outcomes */}
                  <div>
                    <h4 className="font-bold text-ink mb-2">Program Career Outcomes</h4>
                    <ul className="space-y-2 list-none p-0">
                      {selectedCourse.outcomes.map((out, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 4: INTERNSHIP & CERTIFICATE */}
              {activeModalTab === "certificate" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-ink mb-2 flex items-center gap-1.5">
                      <Briefcase className="w-4.5 h-4.5 text-accent" /> Internship Details
                    </h4>
                    <p>{selectedCourse.internshipDetails}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-ink mb-2 flex items-center gap-1.5">
                      <Award className="w-4.5 h-4.5 text-accent" /> Certification Value
                    </h4>
                    <p>{selectedCourse.certificateInfo}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-ink mb-2 flex items-center gap-1.5">
                      <HelpCircle className="w-4.5 h-4.5 text-accent" /> FAQ Summary
                    </h4>
                    <div className="space-y-3">
                      {selectedCourse.faqs.map((faq, idx) => (
                        <div key={idx} className="border-l-2 border-accent pl-3">
                          <div className="font-bold text-ink text-xs mb-1">{faq.q}</div>
                          <div className="text-xs">{faq.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer (Action Panel) */}
            <div className="p-6 border-t border-border bg-bg-base flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <span className="text-[10px] text-muted block uppercase tracking-wider font-semibold">Special Price</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-ink">{selectedCourse.price}</span>
                  <span className="text-xs text-muted line-through">{selectedCourse.originalPrice}</span>
                </div>
              </div>
              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    setCheckoutCourse(selectedCourse);
                  }}
                  className="flex-1 sm:flex-none text-center bg-accent hover:bg-accent-dk text-white text-xs font-semibold py-2.5 px-6 rounded-full transition-colors"
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    window.location.href = "mailto:contactus@atosrecruitllp.in?subject=Course Inquiry: " + encodeURIComponent(selectedCourse.title);
                  }}
                  className="flex-1 sm:flex-none text-center border border-border hover:border-navy text-navy text-xs font-semibold py-2.5 px-5 rounded-full transition-colors"
                >
                  Contact Counselor
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── 6. CHECKOUT / ENROLLMENT FORM MODAL ── */}
      {checkoutCourse && (
        <div className="fixed inset-0 z-[1500] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-md rounded-2xl border border-border overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => {
                setCheckoutCourse(null);
                setCheckoutSuccess(false);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-bg text-muted hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {checkoutSuccess ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 bg-accent-lt text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-fraunces text-xl font-bold text-ink mb-2">Enrollment Requested</h3>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-ink">{formData.name}</span>. Our student counselors have received your registration details for <span className="font-semibold text-ink">{checkoutCourse.title}</span>.
                </p>
                <div className="border border-border p-4 bg-bg-base text-left rounded-lg text-xs space-y-2 mb-6">
                  <div className="flex justify-between"><span className="text-muted">Registered Phone:</span> <span className="font-bold text-ink">{formData.phone}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Registered Email:</span> <span className="font-bold text-ink">{formData.email}</span></div>
                  <div className="flex justify-between"><span className="text-muted font-semibold">Payment Action:</span> <span className="text-accent font-semibold">Awaiting payment verification</span></div>
                </div>
                <p className="text-[10px] text-muted">
                  We will call you on your registered phone within 2 hours to walk you through standard onboarding and EMI setups.
                </p>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="font-fraunces text-lg font-bold text-ink mb-1">Onboarding Registration</h3>
                <p className="text-xs text-muted mb-4">Please submit your details. Our coordination team will finalize billing approvals.</p>
                
                <div className="border border-border p-3 rounded-lg bg-bg-base text-xs mb-5 space-y-2">
                  <div className="flex justify-between"><span className="text-muted">Course Title:</span> <span className="font-bold text-ink truncate max-w-[200px]">{checkoutCourse.title}</span></div>
                  <div className="flex justify-between"><span className="text-muted">Total Price (Inc. Tax):</span> <span className="font-bold text-ink">{checkoutCourse.price}</span></div>
                  <div className="flex justify-between"><span className="text-muted">EMI Starts At:</span> <span className="font-semibold text-accent">₹2,499/mo</span></div>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-ink mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-border focus:border-accent text-ink placeholder-muted rounded p-2.5 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-border focus:border-accent text-ink placeholder-muted rounded p-2.5 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-border focus:border-accent text-ink placeholder-muted rounded p-2.5 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-ink mb-1">Custom Notes / Counselor Requests (Optional)</label>
                    <textarea
                      placeholder="Specify timing preferences, query clarifications here..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={2}
                      className="w-full bg-white border border-border focus:border-accent text-ink placeholder-muted rounded p-2.5 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full text-center bg-navy hover:bg-accent text-white text-xs font-bold py-3 px-4 rounded transition-colors"
                    >
                      Verify & Proceed to Onboarding
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = `tel:+918050961616`;
                      }}
                      className="w-full text-center border border-border hover:border-navy text-navy text-[11px] font-semibold py-2.5 px-4 rounded mt-2 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> Call Counselor Directly
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
