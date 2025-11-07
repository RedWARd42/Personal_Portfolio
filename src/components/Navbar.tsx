interface NavProps {
    firstName: string;
    lastName: string;
}

function Navbar ({ firstName, lastName }: NavProps) {

    return (
        <nav>
            <ul>
                <li><strong>{firstName} {lastName}</strong></li>
            </ul>
            <ul>
                <li><a href="#" className="contrast">Home</a></li>
                <li><a href="#about" className="contrast">About</a></li>
                <li><a href="#projects" className="contrast">Projects</a></li>
                <li><a href="#footer" className="contrast">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;