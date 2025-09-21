interface InfoProps {
    name: string;
    stack: string[];
    desc: string;
    image: string;
    link: string;
}

function Card({name, stack, desc, image, link}: InfoProps) {

    return (
            <div className="card"> 
                <a href={link} target="_blank">
                <img src={image} />
                <div>
                    <h3>{name}</h3>
                    <div className="badges">
                        <small>{
                                stack.map(tool => (
                                <span className="badge">{tool} </span> 
                            ))}
                        </small>
                    </div>
                    <p>{desc}</p>
                </div>
                </a>
            </div>
    )
}

export default Card