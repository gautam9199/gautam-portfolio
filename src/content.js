// src/content.js

// Profile photo
import profileImg from "./assets/logos/photo.jpeg";

// Company logos
import liraLogo from "./assets/logos/lira.png";
import macrosoftLogo from "./assets/logos/macrosoft-logo.png";
import steepgraphLogo from "./assets/logos/steepgraph-logo_1.png";

// University logos
import paderbornLogo from "./assets/logos/upb-logo.svg";
import marwadiLogo from "./assets/logos/marwadi.png";

const content = {
  name: "Gautam Parmar",
  role: "Software Engineer",
  location: "Paderborn, Germany",
  email: "gautamparmar201@gmail.com",
  phone: "+49 17657617231",
  profileImage: profileImg,
  links: {
    linkedin: "https://www.linkedin.com/in/gautam-parmar-78857b12a",
    github: "https://github.com/gautam9199"
  },

  summary: `
Work mainly with Java, Spring Boot and Angular to build and maintain business and ERP systems, usually in a microservice setting.
Take features from data model and database changes through to REST APIs and frontend components, including testing and review.
Improve existing code by reducing response size, tuning queries and using patterns like DTOs, AOP and optimistic locking where they fit.
Review code from other developers and give feedback on correctness, performance and structure.
Hold an M.Sc. in Computer Science from Paderborn University with a thesis on Jimple to JVM bytecode transformation using SootUp and ASM, plus coursework in machine learning for software engineering.
`,


  skills: [
    {
      category: "Backend & APIs",
      technologies: [
        { name: "Java", icon: "java" },
        { name: "Spring Boot", icon: "spring" },
        { name: "Spring MVC", icon: "spring" },
        { name: "REST APIs", icon: "api" },
        { name: "Microservices", icon: "microservices" }
      ]
    },
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "react" },
        { name: "Angular", icon: "angular" },
        { name: "JavaScript", icon: "js" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" }
      ]
    },
    {
      category: "Databases",
      technologies: [
        { name: "PostgreSQL", icon: "postgres" },
        { name: "MySQL", icon: "mysql" },
        { name: "Oracle", icon: "oracle" }
      ]
    },
    {
      category: "DevOps & Tools",
      technologies: [
        { name: "Git", icon: "git" },
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
        { name: "CI/CD", icon: "cicd" },
        { name: "JIRA", icon: "jira" }
      ]
    },
    {
      category: "Other",
      technologies: [
        { name: "Python", icon: "python" },
        { name: "Agile / Scrum", icon: "agile" },
        { name: "PLM (3DEXPERIENCE / Enovia / ARAS)", icon: "plm" }
      ]
    }
  ],

  experience: [
    {
      company: "LIRA Service GmbH",
      role: "Software Engineer",
      location: "Paderborn, Germany",
      period: "Oct 2022 – Present (student developer → full-time from Apr 2025)",
      logo: liraLogo,
      milestones: [
        "Work on an in-house ERP system built with Spring Boot microservices and a multi-module Angular frontend.",
        "Implement features end-to-end: database schema, entities/DTOs, services, JPA/Hibernate, REST APIs, and matching Angular modules and components.",
        "Review code from other team members with focus on correctness, performance and consistent design.",
        "Reduced load time for list views by about 70% by introducing lightweight DTOs and cutting down data returned per request.",
        "Implemented iText-based PDF templating for dynamic documents such as invoices, offers, orders, dispatch papers, controlling reports and cashflow.",
        "Added AOP-based filtering at the Hibernate layer to support multi-company data separation by company ID.",
        "Introduced soft delete and optimistic locking to keep historical data while avoiding conflicting updates."
      ],
      techStack: [
        "java",
        "spring",
        "microservices",
        "postgres",
        "docker",
        "git",
        "angular",
        "js",
        "html5",
        "css3"
      ]
    },
    {
      company: "Macrosoft Creations",
      role: "Software Developer (Angular / Node.js)",
      location: "GIFT City, Gandhinagar, India",
      period: "Oct 2020 – Mar 2021",
      logo: macrosoftLogo,
      milestones: [
        "Worked on a web application stack with Angular on the frontend and Node.js on the backend.",
        "Built and updated Angular components, routing and services to work with REST APIs.",
        "Added or adapted Node.js endpoints to support frontend requirements and API contracts."
      ],
      techStack: ["angular", "js", "html5", "css3", "git"]
    },
    {
      company: "SteepGraph Systems Pvt. Ltd.",
      role: "Trainee Engineer → Software Engineer",
      location: "Pune, India",
      period: "Mar 2019 – Aug 2020 (about 1.5 years)",
      logo: steepgraphLogo,
      milestones: [
        "Started as trainee and moved to software engineer after two months.",
        "Worked in the PLM domain, building REST APIs and integration logic with PLM frameworks such as Dassault 3DEXPERIENCE dashboards and Aras.",
        "Used Java, Java OOP concepts, JavaScript and Angular to extend and integrate PLM solutions.",
        "This role formed the base of my experience with Java, REST and frontend integration."
      ],
      techStack: ["java", "spring", "oracle", "mysql", "git"]
    }
  ],

  education: [
    {
      degree: "M.Sc. Computer Science",
      school: "Paderborn University",
      location: "Paderborn, Germany",
      period: "Dec 2021 – Present",
      logo: paderbornLogo
    },
    {
      degree: "B.E. Computer Engineering",
      school: "Marwadi University",
      location: "Gujarat, India",
      period: "2014 – 2018",
      logo: marwadiLogo
    }
  ],

  achievements: [
    "Completed a master’s thesis in the SSE department on a Jimple to JVM bytecode transformer using SootUp and ASM with a final grade of 2.7.",
    "Reduced load times of key ERP list views at LIRA by about 70% through DTO and query changes.",
    "Moved from trainee engineer to software engineer at SteepGraph within the first months.",
    "Took over regular code review responsibilities at LIRA for parts of the ERP codebase."
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "German", level: "Elementary (A1.1)" },
    { name: "Hindi", level: "Native / Bilingual" },
    { name: "Gujarati", level: "Native / Bilingual" }
  ],

  interests: ["Playing volleyball", "Volunteering & social work"]
};

export default content;
