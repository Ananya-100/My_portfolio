import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Digital Alchemist transforming raw data into golden insights I have delved into the world of machine learning, applying my skills to develop projects that solve real-world problems. My diverse skill set and eagerness to learn new technologies drive me to tackle challenging projects and continuously improve my expertise`;

export const ABOUT_TEXT = `Hello! I am a final-year B.Tech student with a passion for technology and innovation. Proficient in Java, Python, and SQL, I thrive on building robust and scalable software solutions. My journey in web development has allowed me to create dynamic and interactive applications using HTML, CSS, JavaScript, and ReactJS.

Beyond web development, I have delved into the world of machine learning, applying my skills to develop projects that solve real-world problems. My diverse skill set and eagerness to learn new technologies drive me to tackle challenging projects and continuously improve my expertise.`;

export const educationData = [
  {
    year: "2021-PRESENT",
    title: "BTech in Computer Science",
    institution: "Academy of Technology",
    description: " CGPA: 8.69/10.0",
  },
  {
    year: "2020-2021",
    title: "ISC(12th)",
    institution: "Marias Day School",
    description: "Top 10% of the class, 97.25% ."
  },
  {
    year: "2018-2019",
    title: "ICSE(10th)",
    institution: "Marias Day School",
    description: "Top 10% of the class, 91% ."
  },
]

export const PROJECTS = [
  {
    title: "Stock price prediction",
    image: project3,
    description:
      "A ml-based project use to predict the stock price based on opening and closing value",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit learn", "keras", "streamlit"],
  },
  {
    title: "Smart Attendence System",
    image: project2,
    description:
      "A real time face recognisation system use to monitor the attendence of the students",
    technologies: ["Python", "Opencv", "Tkinter", "Pillow", "MySQL"],
  },
  {
    title: "Travel Wesite",
    image: project4,
    description:
      "A responsive travel website using ReactJS",
    technologies: ["HTML", "CSS", "ReactJs"],
  },
  {
    title: "Weather-App",
    image: project1,
    description:
      "A fully functional weather app using python",
    technologies: ["Python","API"],
  },
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
