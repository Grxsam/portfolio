// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.jpeg";
import logo from "./assets/logo.jpeg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.webp";
import projectImage5 from "./assets/projects/project5.webp";
import projectImage6 from "./assets/projects/project6.webp";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Sam",
  tagline: "I am a passionate Web Developer",
  img: profile,
  about: `I’m a passionate developer with a deep love for EDM, always on the lookout for the next great
track to add to my playlist. Music fuels my creativity and keeps me motivated in my work. Outside
of coding, I’m a big fan of pizza—whether it’s classic pepperoni or a gourmet twist, I’m always
ready to indulge. Traveling is another passion of mine; exploring new places and cultures enriches
my perspective and inspires my creativity. With a zest for life and a diverse range of interests, I
embrace every opportunity to learn, grow, and enjoy the vibrant experiences that come my way.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/samarjeet-shinde-89547222a/",
  github: "https://github.com/Grxsam",
  twitter: "https://x.com/garrixfantasy",
  instagram: "https://www.instagram.com/sammm_2410/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Qspider Pune`,
    Location: "Pune",
    Type: "Internship",
    Duration: "Oct 2024 - Apr 2025",
  },
  {
    Position: "Internship",
    Company: `IGAP Technologies `,
    Location: "Kolhapur",
    Type: "Internship",
    Duration: "Dec 2023 - Jan 2024",
  },
  {
    Position: "Internship",
    Company: `SPACEBOUND WEB LABS PRIVATE LIMITED`,
    Location: "Remote",
    Type: "Internship",
    Duration: "Mar 2024 - Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor of Technology In Computer Science",
    Company: `Sanjay Ghodawat University`,
    Location: "Kolhapur",
    Type: "Full Time",
    Duration: "Oct 2021 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Plant Disease Detection",
    image: projectImage5,
    description: `This project leverages machine learning algorithms to accurately detect plant diseases,
aiding in the early diagnosis and management of crop health. Utilizing image processing
techniques, it identifies visible signs of infection on plant leaves, classifying diseases with high
precision.`,
    techstack: "Python, Machine Learning, OpenCV, TensorFlow",

  },
  {
    title: "Weather App",
    image: projectImage6,
    description: `This Weather App provides real-time weather updates, including temperature, humidity, wind speed,
and forecasts for multiple locations worldwide. With a clean and user-friendly interface, users can easily
search for any city or use their device’s location to get instant weather information.`,
    techstack: "HTML, CSS, JavaScript, OpenWeather API",

  },
  {
    title: "Brain Tumor Detection",
    image: projectImage4,
    description: `This project focuses on detecting brain tumors through advanced image processing and
machine learning techniques, enhancing early diagnosis and treatment planning. Using MRI scans
as input, the system analyzes brain images, identifying potential tumor regions with high accuracy.`,
    techstack: "Python, OpenCV, TensorFlow, Keras, Image Processing",

  },
  {
    title: "Portfolio Website",
    image: projectImage1,
    description: `This project showcases web development proficiency with a responsive portfolio featuring project galleries, interactive components, and a modern, clean design. Essential elements like client/project showcases are highlighted to emphasize layout and usability.`,
    techstack: "HTML,CSS, JavaScript, React, Node.js, MongoDB",

  },
  {
    title: "Metro (E-commerce footwear website)",
    image: projectImage2,
    description: `An e-commerce site demonstrating expertise in responsive design and interactive UI for a footwear store. The site includes engaging layouts and smooth navigation, enhancing user experience.`,
    techstack: " HTML, CSS, JavaScript, React",

  },
  {
    title: "Farmer’s Magic",
    image: projectImage3,
    description: `A marketplace connecting farmers to buyers, ensuring fair prices and market access. The user-friendly platform promotes sustainable agriculture and supports economic growth in rural communities.`,
    techstack: " HTML, CSS, JavaScript, React, XAMPP, PHP Fresher, MongoDB",

  }
 
];

// Enter your Contact Details here
export const contactDetails = {
  email: "samarjeetshinde85@gmail.com",
  phone: "+91 9130119864",
};
