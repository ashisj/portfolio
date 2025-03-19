import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const FONT_SIZES = {
  SMALL: 'text-sm',
  MEDIUM: 'text-base',
  LARGE: 'text-lg',
  EXTRA_LARGE: 'text-xl',
};

export const LANGUAGES = {
  ENGLISH: 'en',
  HINDI: 'hi',
  // Add more languages as needed
};

export const DEFAULT_FONT_SIZE = FONT_SIZES.MEDIUM;
export const DEFAULT_LANGUAGE = LANGUAGES.ENGLISH;
export const DEFAULT_THEME = 'dark';

export const HERO_CONTENT: string = `I am a passionate Senior Software Engineer with over 6 years of expertise in crafting advanced user interfaces. Proficient in responsive UI design, I have a strong foundation in frontend frameworks and technologies. My goal is to leverage my skills in creating seamless user experiences and drive innovation in web development.`;

export const ABOUT_TEXT: string = `I am a dedicated Senior Software Engineer with a focus on frontend development. With over 6 years of professional experience, I have honed my skills in creating advanced, responsive user interfaces. My expertise spans across various frontend frameworks and technologies, allowing me to craft seamless user experiences. I am particularly skilled in microfront-end architecture, performance optimization, and full-stack development. My journey in software engineering is driven by a passion for innovation and a commitment to delivering high-quality solutions that enhance user interaction and drive business growth.`;

interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: "June 2022 - Present",
    role: "Senior Software Engineer",
    company: "BIZONGO, Bangalore",
    description: `Led implementation of microfront-end architecture, improved app performance, and spearheaded Flutter-based mobile app development. Implemented Google OAuth, reCaptcha, and Firebase Cloud Messaging.`,
    technologies: ["Javascript", "React", "Redux", "HTML", "CSS", "Antd", "Webpack5", "Microfrontend", "AWS", "Flutter"],
  },
  {
    year: "October 2020 - June 2022",
    role: "Senior Software Engineer",
    company: "SYMPHONY RETAIL AI, Remote",
    description: `Designed and developed end-to-end solutions using Vue.js and Spring. Contributed to and maintained internal libraries, and mentored offshore team in Vue.js implementation.`,
    technologies: ["Java", "Spring", "JavaScript", "Vue", "Oracle", "ProC", "PL/SQL", "Azure", "Docker"],
  },
  {
    year: "September 2019 - October 2020",
    role: "Software Consultant",
    company: "iPromoteU, Remote",
    description: `Designed responsive web applications using React and SASS. Streamlined development process by creating mock APIs and integrating with REST APIs.`,
    technologies: ["JavaScript", "React", "Redux", "MySQL", "Bootstrap", "SASS", "AWS"],
  },
  {
    year: "September 2018 - August 2019",
    role: "Software Engineer",
    company: "Mindfire Solutions, Bhubaneswar",
    description: `Developed a full-stack finance report generation application. Worked with various technologies to create comprehensive solutions.`,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Google Chart", "CKEditor", "Node", "Vue", "ColdFusion"],
  },
];

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "AD GENERATIVE TOOL",
    image: project1,
    description:
      "Developed an AI-powered tool for generating ad campaigns and logo designs, reducing ad creation time by 70% and increasing campaign effectiveness by 40%.",
    technologies: ["Canvas", "React", "OpenAI", "DALL·E"],
  },
  {
    title: "NEXT BIZONGO PLATFORM",
    image: project2,
    description:
      "Architected and implemented the core structure for a new e-commerce platform, utilizing microfront-end architecture to improve scalability and reduce time-to-market by 50%.",
    technologies: ["React", "Webpack5", "Microfrontend", "AWS"],
  },
  {
    title: "SYMPHONY RETAIL AI SOLUTIONS",
    image: project3,
    description:
      "Designed and developed end-to-end solutions using Vue.js and Spring, improving system efficiency by 35%.",
    technologies: ["Vue.js", "Spring", "Oracle", "Azure"],
  },
  {
    title: "iPromoteU Web Applications",
    image: project4,
    description:
      "Designed responsive web applications using React and SASS, improving cross-platform compatibility by 60%.",
    technologies: ["React", "Redux", "SASS", "RESTful APIs"],
  },
];

interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export const CONTACT: Contact = {
  address: "Bangalore, India",
  phoneNo: "+91-9861616677",
  email: "ashis.jena96@gmail.com",
};
