import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Digital Alchemist transforming raw data into golden insights`;

export const ABOUT_TEXT = `Hello! I am a final-year B.Tech student with a passion for technology and innovation. Proficient in Java, Python, and SQL, I thrive on building robust and scalable software solutions. My journey in web development has allowed me to create dynamic and interactive applications using HTML, CSS, JavaScript, and ReactJS.

Beyond web development, I have delved into the world of machine learning, applying my skills to develop projects that solve real-world problems. My diverse skill set and eagerness to learn new technologies drive me to tackle challenging projects and continuously improve my expertise.`;


export const PROJECTS = [
  {
    title: "Weather-App using [ython",
    image: project1,
    description:
      "A fully functional weather app using python",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
