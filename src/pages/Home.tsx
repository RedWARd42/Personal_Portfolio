import { ReactTyped } from "react-typed"

interface HomeProps {
    name: string;
    typedWords: string[];
}

function Home({ name, typedWords }: HomeProps) {
    return (
        <header className="landing" id="home">
                <div className="intro">
        
                        <div className="greetings"><h2>Hey there</h2><span className="wave">👋</span></div>
                        <h1>I'm {name}</h1>
                
                    <div className="intro">
                        <h2>I am a <ReactTyped 
                                strings={typedWords}
                                typeSpeed={125}
                                loop
                                backSpeed={75}
                                cursorChar="_"
                                showCursor={true}
                                backDelay={1000}
                            /></h2>
                    </div>
                    <a href="#contact"><button>Contact me!</button></a>
                </div>
                <div>
                <img  src="/Headshot.png"/>
                </div>
        </header>
        
    )
}

export default Home