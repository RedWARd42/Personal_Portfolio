import Card from "../components/Card"

interface Project {
  title: string,
  description: string,
  stack: string[],
  image: string,
  link: string;
}

interface ProjectProps {
    projects: Project[]
}

function Projects({ projects }:ProjectProps) {
    return (
        <div id="projects" className="projects">
            <h1>Projects</h1>
            <h5>Click for more info</h5>
            <div className="projects-section">
                {projects.map((project, index) => (
                    <Card image={project.image} name={project.title} stack={project.stack} desc={project.description} key={index} link={project.link}/>
                ))}
            </div>
        </div>
    )
}

export default Projects