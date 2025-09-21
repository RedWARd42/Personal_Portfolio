
import Role from "../components/Role"

interface Experience {
  role:string,
  time:string,
  company:string,
  location:string,
  points:string[];
}

interface AboutProps {
    experiences: Experience[],
    programmingLanguages: string[];
    toolsAndFrameworks: string[];
}

function About({ experiences, programmingLanguages, toolsAndFrameworks}: AboutProps) {
    return(
        <div id="about" className="about">
            <h1>About</h1>
            <div className="about-section">
                <div className="experience">
                    <h2>Experience</h2>
                    <div className="overflow-auto">
                        {
                            experiences.map((experience, index) => (
                                <Role 
                                key={index}
                                role={experience.role} 
                                location={experience.location} 
                                time={experience.time} 
                                points={experience.points} 
                                company={experience.company}/>
                            ))
                        }
                    </div>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <div className="skills-section">
                        <div className="skills-col">
                            <h4>Languages</h4>
                            <ul>{
                                programmingLanguages.map((language, index) => (
                                    <li key={index}>{language}</li>
                                ))
                            }</ul>
                        </div>
                        <div className="skills-col">
                            <h4>Tools/Frameworks</h4>
                            <ul>{
                                toolsAndFrameworks.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))
                            }</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About