import resume from "./assets/Anurima_resume.pdf"
import image from "./assets/Photo.jpeg"
import dermai from "./assets/DermAI.png"
import mockint from "./assets/Mockterview.png"
import learnova from "./assets/learnova.png"
export const profile = {
  name: "Anurima Sarkar",
  role: "Full Stack Web Developer",
  subrole: "B.Tech CSE (IoT)",
  tagline:
    "Building fast,responsive & production ready web applications using MERN stack, training models using Machine Learning & exploring AI integrations.",
  about:
    "I am a B.Tech CSE (IoT) student passionate about Full Stack Web Development, Artificial Intelligence, and Machine Learning. I enjoy designing and developing responsive, user-centric web applications using modern frontend and backend technologies, while building a strong understanding of APIs, databases, and application development. Alongside full stack development, I am actively exploring AI/ML, including data preprocessing, model training, evaluation, and integrating trained models into real-world applications. I am particularly interested in combining web technologies with AI to build practical and intelligent solutions. Through hands-on projects, Data Structures & Algorithms, and continuous learning, I aim to strengthen my problem-solving skills and develop scalable applications that address real-world challenges.",
  email: "anutri2k05@gmail.com",
  location: "Kolkata, West Bengal, India",
  github: "https://github.com/Anurima2206",
  linkedin: "https://www.linkedin.com/in/anurima-sarkar-bb7682337/",
  resumeUrl: resume,
  photoUrl: image,
};

export const techStack = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "C"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React.js", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Machine Learning",
    items: ["NumPy", "Pandas", "Scikit-learn", "Data Preprocessing", "Feature Engineering", "Model Training", "Model Evaluation"],
  },
];

export const projects = [
  {
    id: "Mockterview",
    title: "Mockterview",
    subtitle: "AI Mock Interview Platform",
    description:
      "An AI-powered mock interview platform that simulates real interview scenarios, evaluates responses, and gives instant, actionable feedback to help candidates prepare with confidence.",
    features: [
      "JWT authentication with secure image upload and user session management",
      "AI-generated interview questions tailored to role & experience",
      "Real-time answer evaluation with feedback scoring",
      "Speech-to-text response capture",
      "Progress tracking across multiple mock sessions",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Tailwind CSS"],
    image: mockint,
    liveUrl: "https://ai-mock-interview-rouge-iota.vercel.app/",
    githubUrl: "https://github.com/Anurima2206/AI-Mock-Interview.git",
    featured: true,
  },
  {
    id: "dermai",
    title: "DermAI",
    subtitle: "Skin Disease Detection Platform",
    description:
      "A web application that uses a trained Deep Learning model to analyze skin images and assist users in identifying potential skin conditions, paired with a clean, accessible interface.",
      features: [
  "JWT authentication with secure image upload and user session management",
  "RESTful backend APIs integrated with an AI prediction service",
  "Integrated a deep learning model for AI-based skin disease classification (~85% prediction accuracy)",
  "Downloadable PDF reports with prediction history management",
],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Python", "TensorFlow"],
    image: dermai,
    liveUrl: "https://skin-disease-prediction-website.vercel.app/",
    githubUrl: "https://github.com/Anurima2206/DermAI-Skin-Disease-Prediction-Website.git",
    featured: true,
  },
  {
    id: "dropout",
    title: "Learnova",
    subtitle: "Student Dropout Prediction Website",
    description:
      "A student-focused platform designed to identify students at risk of dropping out using academic and engagement data, supported by an early intervention dashboard for timely monitoring and counseling.",
      features: [
  "Machine learning models using Logistic Regression and Random Forest to predict student dropout from 35 input features (~78% accuracy)",
    "Early intervention dashboard for monitoring attendance, scores, fees, and identifying at-risk students",
    "Automated rule-based thresholds and timely alerts to support proactive intervention",
    "Counseling support and student engagement features with data anonymization for privacy",
],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy","Next.js"],
    image: learnova,
    liveUrl: "https://sih-sih-co98.vercel.app/",
    githubUrl: "https://github.com/byteforge101/sih.git",
    featured: true,
  },
];

export const skillHighlights = [
  "Responsive Web Design",
  "Dataset training by machine learning",
  "REST API Integration",
  "Authentication (JWT)",
  "MongoDB CRUD Operations",
  "AI Model Integration",
  "Git Version Control",
  "API Key Integration",
];

export const education = [
  {
    degree: "B.Tech in Computer Science (IoT)",
    institute: "Techno Main Salt Lake",
    period: "2023-2027",
  },
  {
    degree: "AISSCE",
    institute: "South Point High School",
    period: "2023",
  },
  {
    degree: "AISSE",
    institute: "South Point High School",
    period: "2021",
  },
];

export const achievements = [
  " Awarded with Silver Medal and Certificate of Merit for 2nd Highest YGPA in Department",
  " Selected among the Top 40 teams in the Smart India Hackathon (SIH) Internal Hackathon from over 500 participating teams. ",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
