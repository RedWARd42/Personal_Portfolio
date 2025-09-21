import '@picocss/pico/css/pico.min.css'
import './App.css'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

interface Project {
  title: string,
  description: string,
  stack: string[];
  image: string;
  link: string;
}

interface Experience {
  role:string,
  time:string,
  company:string,
  location:string,
  points: string[];
}

//fill in the following info
const firstName = "Ryan";
const lastName = "Edward";

const githubLink = "https://github.com/redward42";
const linkedInLink = "https://www.linkedin.com/in/ryan-edward";
const email = "ryan.j.edward.office@gmail.com";

const typedWords = ["Developer", "IT Techician", "CS Student"];

//enter experienceInfo based on date
//to add more copy and paste below and fill in information
//to remove experience delete from opening bracket to closing bracket
/*
  {
    role:"Role",
    time:"00/00/00 - 00/00/00",
    company:"Company",
    location:"City, State",
    points:[
      "point 1",
      "point 2",
      "point 3"
    ]
  }
*/
const experienceInfo: Experience[] = [
  {
    role:"Software Developer",
    time:"9/17/25 - Present",
    company:"AIS @ UTD",
    location:"Richardson, Texas",
    points:[
      "Creating a food analysis snapshot app using React Native, Python, TensorFlow, OpenCV, HuggingFace",
      "Using computer vision to detect 100+ foods within a snap of a photo",
      "Using Hugging Face Model to give AI Insights of food prices across multiple Resturants"
    ]
  },
    
  {
    role:"IT Intern",
    time:"7/21/25 - Present",
    company:"Texas Health Dallas",
    location:"Dallas, TX",
    points:[
      "Completed 8+ tickets daily, decreasing queue size by 20%, saving 5+ hours ",
      "imaged 3+ rennovation projects, adding new workspaces with technology, increasing workflow by 25%",
      "Created active server dashboard across 7 sites, using javascript, html, css, and window bash commands"
    ]
  }
]

//Fill in the programming languages you know
const programmingLanguages = [
  "Javascript",
  "Typescript",
  "Python",
  "Java",
  "C++",
  "C"
]


//fill in the tools frameworks you know
const toolsAndFrameworks = [
  "React",
  "Git",
  "Tailwind CSS",
  "Node",
  "Flask",
  "Supabase"
]

//fill this in with project data
//to add a project, copy and paste template below, then fill in information
//to add more to your stack, add another string literal of the language
/*
  {
    title: "Project Name",
    stack: ["Language 1", "language 2", "language 3"],
    description: "Description of Project"
  }
*/
const projects: Project[] = [
  {
    title: "AI Flashcards",
    stack: ["Typescript", "React", "Gemini API"],
    description: "Automatic Flashcards using AI",
    image: "AIFlashcards.png",
    link:"https://github.com/RedWARd42/flashcard-app"
  },

  {
    title: "myCheckUp",
    stack: ["Javascript", "React", "Gemini API"],
    description: "Medical Chatbot for Remote Patients",
    image: "/myCheckUp.png",
    link:"https://devpost.com/software/mycheckup"
  },

  {
  
    title: "Data-diet",
    stack: ["Typescript", "React", "Spoonacular API"],
    description: "Food Nutrition Dashboard",
    image: "Data-diet.png",
    link:"https://github.com/RedWARd42/DataDiet"
  },

  {
    title: "LiftOff",
    stack: ["Typescript", "React", "Supabase"],
    description: "Social Media Web App for Fitness",
    image: "LiftOff.png",
    link:"https://github.com/RedWARd42/LiftOffApp"
  }
]

//avatar was made using pic crew with link below
//https://picrew.me/en/image_maker/2737745
//crop image to edge of character, and add the image to public folder with the name "Avatar.png"

function App() {

  return (
    <>
      <Navbar firstName={firstName} lastName={lastName}/>
      <Home name={firstName} typedWords={typedWords}/>
      <About experiences={experienceInfo} programmingLanguages={programmingLanguages} toolsAndFrameworks={toolsAndFrameworks}/>
      <Projects projects={projects}/>
      <Contact github={githubLink} linkedIn={linkedInLink} email={email}/>
      <Footer firstName={firstName} lastName={lastName} github={githubLink} linkedIn={linkedInLink} email={email}/>
    </>
  )
}

export default App
