import React from "react";
import { SiOracle } from "react-icons/si"
import SAClogo from "../assets/images/work/saclogo.jpeg"
import Oraclelogo from "../assets/images/work/oracle.png"
import "../assets/css/work.css";
import Fade from "react-reveal/Fade";

const Work = (props) => {
    return (
        <React.Fragment>
            <div className="container-fluid workSection">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Work</b>
                </div>
                <div className="container">
                    <Fade bottom>
                        <div className="row p-2 m-2">
                            <div className="col-1 sectionImage">
                                <img
                                    src={Oraclelogo}
                                    alt={"Oracle"}
                                    height={40}
                                    style={{borderRadius:"5px"}}
                                />
                            </div>
                            <section className="col col-sm col-md role">
                                <b> Applications Engineer</b>
                                <br />
                                <div className="org">
                                    <i>
                                        Oracle Corporation
                                    </i>
                                    <br /> <br />
                                    <div className="work">
                                        • Developed a framework to migrate component (Item) and assembly (BOM) data using REST and SOAP web services.
                                        <br />
                                        • Implemented a mechanism to validate components (Items) against rules defined by business users.
                                        <br />
                                        • Devised a key enhancement to track user navigations in Fleet Manager, a Change Management tool.
                                        <br />
                                        • Instituted re-design of a web application from monolith to microservices and Oracle redwood UI by leveraging OCI services.
                                    </div>
                                </div>
                            </section>
                            <section className="col-2 col-sm-2 col-md-2">
                                June, 2019 - September, 2021
                            </section>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="row p-2 m-2">
                            <div className="col-1 sectionImage">
                                <a href={"https://www.linkedin.com/company/students-affairs-council-nit-calicut/"} target={"_blank"} rel="noopener noreferrer">
                                    <img
                                        src={SAClogo}
                                        alt={"SAC"}
                                        height={40}
                                        style={{borderRadius:"5px"}}
                                    />
                                </a>
                            </div>
                            <section className="col col-sm col-md role">
                                <b> Councillor</b>
                                <br />
                                <div className="org">
                                    <i>
                                        Students Affairs Council, NIT Calicut
                                    </i>
                                    <br /> <br />
                                    <div className="work">
                                        • Worked for substantial changes in constitution and audit procedure of college's annual fests.
                                        <br />
                                        • Handled department level activities like alumni talks, farewells etc.
                                        <br />
                                        • Initiated coding sessions to help juniors expunge apprehension about campus placements.
                                    </div>
                                </div>
                            </section>
                            <section className="col-2 col-sm-2 col-md-2">
                                June, 2018 - April, 2019
                            </section>
                        </div>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Work;
