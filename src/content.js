// src/content.js

const content = {
  name: "Gautam Parmar",
  role: "Software Engineer",
  location: "Paderborn, Germany",
  email: "gautamparmar201@gmail.com",
  phone: "+49 17657617231",
  profileImage: "/logos/photo.jpeg", // <--- NEW: put your photo in public/profile.jpg
  links: {
    linkedin: "https://www.linkedin.com/in/gautam-parmar-78857b12a",
    github: "https://github.com/gautam9199"
  },

  summary: `
Technically sound and learning-enthusiastic software engineer with experience delivering robust and reliable solutions for real customers. I’ve worked across backend, frontend and DevOps, from design and implementation to deployment, configuration and client interaction. My main experience is with Java/Spring, REST APIs, and modern web frontends, with a strong focus on maintainability and good developer experience.
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
      period: "Oct 2022 – Present",
      logo: "/logos/lira.png", // put the logo file here
      milestones: [
        "Design and evolve multi-tenant, microservice-based web systems for European customers.",
        "Improve performance, reliability and observability of ERP modules in production.",
        "Define service boundaries and tenant isolation for secure and maintainable architecture.",
        "Drive CI/CD pipeline improvements for safer, faster releases."
      ],
      techStack: ["java", "spring", "microservices", "postgres", "docker", "git"]
    },
    {
      company: "Macrosoft Creations",
      role: "Software Engineer (Angular)",
      location: "GIFT City, Gandhinagar, India",
      period: "Oct 2020 – Mar 2021",
      logo: "/logos/macrosoft-logo.png",
      milestones: [
        "Built interactive dashboards with charts, tables and workflow visualisations using Angular and Ant Design.",
        "Implemented testing, logging and bug-fixing for long-term support and great UX.",
        "Worked closely with stakeholders to convert business requirements into detailed technical solutions."
      ],
      techStack: ["angular", "js", "html5", "css3", "git"]
    },
    {
      company: "SteepGraph Systems Pvt. Ltd.",
      role: "Software Engineer",
      location: "Pune, India",
      period: "Mar 2019 – Aug 2020",
      logo: "/logos/steepgraph-logo (1).png",
      milestones: [
        "Created robust solutions for multiple PLM projects using REST services, Java, Spring, Spring Boot and C# .NET.",
        "Worked with PLM tools such as Dassault 3DEXPERIENCE, Enovia and ARAS.",
        "Contributed both as a developer and part of the DevOps team for deployment and configuration.",
        "Shared knowledge with teammates and worked using Agile/Scrum for smooth project delivery."
      ],
      techStack: ["java", "spring", "oracle", "mysql", "git"]
    }
    
  ],

  education: [
    {
      degree: "M.Sc. Computer Science",
      school: "Paderborn University",
      location: "Paderborn, Germany",
      period: "Oct 2021 – Dec 2024",
      logo: "/logos/upb-logo.svg"
    },
    {
      degree: "B.E. Computer Engineering",
      school: "Marwadi University",
      location: "Gujarat, India",
      period: "2014 – 2018",
      logo: "/logos/marwadi.png"
    }
  ],

  achievements: [
    "Certification of Gujarat Smart City Hackathon – built a Uniform Inventory Management System in a 48-hour coding challenge.",
    "Youth Excellence Program (2018) – six-month residential program (BAPS) on selfless humanitarian service, ethics, soft skills and leadership."
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
