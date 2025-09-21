
type RoleProps = {
  role: string;
  location: string;
  time: string;
  points: string[];
  company: string;
};

function Role({ role, location, time, points, company }: RoleProps) {
    return (
        <div className="role">
            <div>
                <div className="cv-row">
                    <h3>{role}</h3>
                    <h4>{time}</h4>
                </div>
                <div className="cv-row">
                    <h4>{company}</h4>
                    <h4>{location}</h4>
                </div>
                <ul>
                    {points.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Role