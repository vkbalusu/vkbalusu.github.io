import React from "react";
import SkillsBox from "./SkillsBox";
import skills_list from "../assets/data/skills_list.json";
import Fade from "react-reveal/Fade";

const SkillsShowcase = (props) => {
    return (
        <div className="container-fluid skillsContainer">
            <div className="container">
                <div className={"container sectionTitleContainer"}>
                    <b className="sectionTitle">Tools & Softwares</b>
                </div>
                <div className="container" align="center">
                    <div className="row">
                        {Object.entries(skills_list).map(
                            ([heading, listItems]) => (
                                <div className="col p-2" key={heading}>
                                    <Fade bottom>
                                        <SkillsBox
                                            listItems={listItems}
                                        />
                                    </Fade>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsShowcase;
