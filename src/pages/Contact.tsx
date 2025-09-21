import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

interface ContactProps {
    github: string,
    linkedIn: string,
    email: string;
}

function Contact({ github, linkedIn, email}: ContactProps) {
    return(
        <div id="contact" className="contact">
            <h1>Contact</h1>
            <div className="contact-section">
                <a href={`mailto:${email}`} target="_blank"><button><BiLogoGmail/>Email</button></a>
                <a href={linkedIn} target="_blank"><button><BiLogoLinkedin/>LinkedIn</button></a>
                <a href={github} target="_blank"><button><BiLogoGithub/>Github</button></a>
            </div>
        </div>
    )
}

export default Contact