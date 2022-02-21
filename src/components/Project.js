import React from "react";


const Project = (props) => {
    const {
        title,
        description,
        technologies,
    } = props.data;
    
    return (
        <div className="row p-2 m-2">
            <div className="col col-sm col-md">
                <br />
                <b className="projectTitle">{title}</b>
                <br />
                {technologies.map((tech) => (
                    <span
                        href="#"
                        key={tech}
                        className="badge badge-light projectBadges p-2"
                    >
                        {tech}
                    </span>
                ))}
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;
