// src/content.js
// Single source of truth for the site. Keep it in sync with the resume:
// every claim here must be something you can explain in an interview.

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
  headline: "Java / Spring Boot · E-Invoicing · ERP Systems",
  pitch:
    "I build enterprise ERP software in Java, Spring Boot and Angular, and I'm at my best turning complex business rules into clean, reusable designs. Right now I own an end-to-end e-invoicing solution for XRechnung and ZUGFeRD.",
  location: "Paderborn, Germany",
  email: "gautamparmar201@gmail.com",
  phone: "+49 17657617231",
  profileImage: profileImg,
  resumePdf: "Gautam_Parmar_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/gautam-parmar-78857b12a",
    github: "https://github.com/gautam9199"
  },

  facts: [
    { label: "Experience", value: "4+ years professional" },
    { label: "Based in", value: "Paderborn · open to remote" },
    { label: "Work permit", value: "EU Blue Card, no sponsorship needed" },
    { label: "Education", value: "M.Sc. CS, degree expected spring 2027" }
  ],

  highlights: [
    { value: "~70%", label: "faster ERP list views on datasets with millions of records" },
    { value: ">90%", label: "line coverage maintained with JUnit and Mockito" },
    { value: "3", label: "e-invoice outputs from one pipeline: XRechnung UBL, XRechnung CII, ZUGFeRD" }
  ],

  projects: [
    {
      title: "E-invoicing pipeline for an ERP system",
      context: "LIRA Service GmbH · design and ownership · go-live Q4 2026",
      problem:
        "Germany's B2B e-invoicing mandate requires structured invoices that pass the official validation rules.",
      approach:
        "Two-stage pipeline: ERP data maps to a canonical in-house XML template, which is transformed into the target format and validated with the KoSIT validator and Schematron rules. Built as a reusable library with separate interface and contract modules.",
      result:
        "New formats plug in without touching the core; the same architecture is now being extended to Slovak e-invoicing. Also handles summary invoices across partial invoices that span VAT rate changes.",
      tags: ["Java 17", "Spring Boot", "EN 16931", "XRechnung", "ZUGFeRD", "Schematron"]
    },
    {
      title: "Faster list views on million-row datasets",
      context: "LIRA Service GmbH · performance",
      problem: "Key ERP list views were slow because each request returned far more data than the screen needed.",
      approach: "Introduced lightweight DTOs and reworked SQL queries and data structures to cut the data returned per request.",
      result: "List-view load times dropped by about 70%.",
      tags: ["Hibernate / JPA", "SQL", "PostgreSQL", "DTOs"]
    },
    {
      title: "Multi-company data isolation",
      context: "LIRA Service GmbH · data integrity",
      problem: "Several companies share one ERP instance, and concurrent edits must not overwrite each other.",
      approach: "AOP-based filtering at the Hibernate layer separates data by company ID; soft delete keeps history; optimistic locking prevents conflicting updates.",
      result: "Data stays separated by company and consistent under concurrent use.",
      tags: ["Spring AOP", "Hibernate filters", "Optimistic locking"]
    },
    {
      title: "Jimple-to-JVM bytecode transformer",
      context: "M.Sc. thesis · Paderborn University",
      problem: "Goal: turn programs in SootUp's Jimple intermediate representation back into runnable JVM bytecode.",
      approach: "Built a transformer from Jimple to JVM bytecode with ASM, inside a fork of the SootUp static-analysis framework.",
      result: "Evaluated for semantic correctness, textual equivalence and performance; code and results are public.",
      tags: ["Java", "SootUp", "ASM", "Static analysis"],
      link: { label: "Code", url: "https://github.com/gautam9199/SootUp/tree/develop/jimple.transformer" },
      secondaryLink: { label: "Evaluation", url: "https://github.com/gautam9199/MSThesis" }
    },
    {
      title: "Validating adaptive stream clustering",
      context: "M.Sc. seminar · Paderborn University",
      problem: "Does a published manipulation-detection framework for social-media streams hold up under concept drift?",
      approach: "Reproduced the textClust pipeline in Python with River and compared adaptive against fixed distance thresholds on several datasets, using interval-based NMI.",
      result: "A documented, reproducible benchmark of the paper's claims.",
      tags: ["Python", "River", "Stream clustering", "NLP"],
      link: { label: "Code", url: "https://github.com/gautam9199/adaptive-textclust-validation" }
    }
  ],

  experience: [
    {
      company: "LIRA Service GmbH",
      role: "Software Engineer",
      location: "Paderborn, Germany",
      period: "Oct 2022 – Present · full-time since Apr 2025",
      logo: liraLogo,
      milestones: [
        "Design and own the ERP's e-invoicing feature end to end (model → map → generate → send) for XRechnung and ZUGFeRD.",
        "Built the automated invoice transfer from the ERP to the Varial accounting system, including token-based authentication and transactional handling of each export.",
        "Cut list-view load times by about 70% on datasets with millions of records.",
        "Implemented multi-company data isolation with AOP-based Hibernate filtering, soft delete and optimistic locking.",
        "Built iText-based PDF templating for invoices, offers, orders, dispatch papers and reports.",
        "Contributed to a new stock-management product (Spring Boot, Eclipse SWT): depreciation logic and its automation, plus JasperReports reports.",
        "Maintain >90% line coverage and review teammates' code. Promoted from working student (20 h/week) to full-time in Apr 2025."
      ],
      stack: ["Java 17", "Spring Boot", "Hibernate / JPA", "Angular", "PostgreSQL", "MySQL", "Docker", "GitLab CI/CD"]
    },
    {
      company: "Macrosoft Creations",
      role: "Software Developer (Angular / Node.js)",
      location: "Gandhinagar, India",
      period: "Oct 2020 – Mar 2021",
      logo: macrosoftLogo,
      milestones: [
        "Built Angular components, routing and services against REST APIs; extended Node.js endpoints to match."
      ],
      stack: ["Angular", "Node.js", "JavaScript"]
    },
    {
      company: "SteepGraph Systems",
      role: "Software Engineer – PLM Integration",
      location: "Pune, India",
      period: "Mar 2019 – Aug 2020",
      logo: steepgraphLogo,
      milestones: [
        "Built REST APIs and integration logic for PLM platforms (Dassault 3DEXPERIENCE, Aras) in Java and JavaScript for enterprise clients.",
        "Promoted from trainee to software engineer within 3 months."
      ],
      stack: ["Java", "JavaScript", "Angular", "Oracle", "MySQL"]
    }
  ],

  skills: [
    { category: "Backend", items: ["Java (8/11/17)", "Spring Boot", "Spring MVC", "Hibernate / JPA", "REST APIs", "AOP"] },
    { category: "E-invoicing", items: ["EN 16931", "XRechnung (UBL, CII)", "ZUGFeRD", "KoSIT validator", "Schematron", "Varial integration"] },
    { category: "Frontend", items: ["Angular", "TypeScript", "JavaScript", "React (personal projects)", "Eclipse SWT"] },
    { category: "Data & reporting", items: ["PostgreSQL", "MySQL", "Oracle", "SQL performance tuning", "JasperReports", "iText"] },
    { category: "Quality & tooling", items: ["JUnit", "Mockito", "SonarQube", "Docker", "GitLab CI/CD", "Git", "Linux", "AI-assisted development (Claude)"] },
    { category: "Currently learning", items: ["Kubernetes", "Cloud deployment", "LLM application engineering"] }
  ],

  education: [
    {
      degree: "M.Sc. Computer Science",
      school: "Paderborn University",
      location: "Paderborn, Germany",
      period: "Dec 2021 – Present",
      note: "Thesis completed (Jimple-to-JVM bytecode transformer); 114 of 120 ECTS, final module in winter 2026/27, degree expected spring 2027. Part-time alongside work. DevOps lead in a 14-person project group.",
      logo: paderbornLogo
    },
    {
      degree: "B.E. Computer Engineering",
      school: "Marwadi University",
      location: "Gujarat, India",
      period: "2014 – 2018",
      note: "Focus: data structures, algorithms, databases, software engineering.",
      logo: marwadiLogo
    }
  ],

  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "German", level: "A1, learning toward B1" },
    { name: "Hindi", level: "Native" },
    { name: "Gujarati", level: "Native" }
  ],

  learning: {
    intro:
      "Java and ERP are my profession; machine learning and NLP are what I explore beyond it. These are things I learned and built during my M.Sc. at Paderborn University.",
    items: [
      {
        title: "Fine-tuning RoBERTa for software-architecture posts",
        context: "Data Science for Software Engineering · group project",
        text: "Built an NLP pipeline and fine-tuned a pre-trained RoBERTa model on the university's HPC cluster to classify about 10 million Stack Overflow posts as architecture-related or not, and then into evaluation, analysis and synthesis posts. Ran LDA topic modelling on the classified posts to see which topics each category covers. Studied transformer architecture and prompt engineering along the way.",
        tags: ["Python", "RoBERTa", "Transformers", "LDA", "NLP"]
      },
      {
        title: "More machine learning and NLP from my M.Sc.",
        context: "Seminar and courses",
        points: [
          {
            name: "Textual Data Streams and Social Media Analytics (seminar)",
            text: "Reproduced a two-phase textClust stream-clustering pipeline in Python with River and tested whether the paper's claims hold under concept drift.",
            link: { label: "Code", url: "https://github.com/gautam9199/adaptive-textclust-validation" }
          },
          {
            name: "Computational Argumentation",
            text: "Worked through a full NLP workflow on argumentative text: lexical analysis, data preparation, training, testing and evaluation, ending in stance analysis."
          },
          {
            name: "ML for Biometrics",
            text: "Studied the main modes of biometric authentication and how machine learning is applied in each of them."
          }
        ],
        tags: ["Python", "River", "Stream clustering", "Stance analysis", "Machine learning"]
      }
    ]
  },

  interests: ["Volleyball", "Volunteering & social work"]
};

export default content;
