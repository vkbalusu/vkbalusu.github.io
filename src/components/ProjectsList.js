import React from "react";
import data from "../assets/data/projects_list.json";
import Project from "./Project";
import Fade from "react-reveal/Fade";
import "../assets/css/projectslist.css";

const ProjectsList = (props) => {
    return (
        <React.Fragment>
            <div className="projectsListContainer">
                <br />
                <div className="container">
                    <div className="container sectionTitleContainer">
                        <b className="sectionTitle">Projects</b>
                    </div>
                    {Object.entries(data)
                        .map((entry) => (
                            <Fade bottom key={entry[1].title}>
                                <Project data={entry[1]} />
                            </Fade>
                        ))
                        .reverse()}
                </div>
                <p style={{ color: "transparent" }}>Invisible Text here</p>
            </div>
        </React.Fragment>
    );
};

export default ProjectsList;
