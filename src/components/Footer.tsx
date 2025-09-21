import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

interface FooterProps {
    firstName: string,
    lastName: string;
    github: string;
    linkedIn: string,
    email: string
}

function Footer({firstName, lastName, github, linkedIn, email}: FooterProps) {
    return(
        <footer id="footer">
            <p>Developed by <strong>{firstName} {lastName}</strong></p>
            <p className="call-to-action"><strong>Connect with me!</strong></p>
            <div className="icons">
                <span>
                    <a href={`mailto:${email}`} target="_blank"><BiLogoGmail className="icon"/></a>
                </span>
                <span>
                    <a href={linkedIn} target="_blank"><BiLogoLinkedin className="icon"/></a>
                </span>
                <span>
                    <a href={github} target="_blank"><BiLogoGithub className="icon" /></a>
                </span>
            </div>
            <small>© 2025 {firstName} {lastName}. All Rights Reserved.</small>
        </footer>
    )
}

export default Footer