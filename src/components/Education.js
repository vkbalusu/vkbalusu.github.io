import React from "react";
import UCILogo from "../assets/images/education/ucilogo.png";
import NITCLogo from "../assets/images/education/nitclogo.png";
import "../assets/css/education.css";
import Fade from "react-reveal/Fade";

const Education = (props) => {
    return (
        <React.Fragment>
            <div className="educationSection">
                <div className="container sectionTitleContainer">
                    <b className="sectionTitle">Education</b>
                </div>
                <div className="container">
                    <Fade bottom>
                        <div className="row p-2 m-2">
                            <div className="col-1 sectionImage">
                                <a href={"https://uci.edu/"} target={"_blank"} rel="noopener noreferrer">
                                    <img
                                        src={UCILogo}
                                        alt={"UC Irvine"}
                                        height={40}
                                    />
                                </a>
                            </div>
                            <section className="col school">
                                <b> University of California, Irvine</b>
                                <br />
                                <div className="major">
                                    <i>
                                        Master of Computer Science
                                    </i>
                                    <br /> <br />
                                    <b>Course work:</b> Operaing Systems, Parallel and Distributed Computing, Data Structures,  Artificial Intelligence
                                    <br /><br />
                                    <a href="https://drive.google.com/file/d/1zdngN4RfVtU6mjThxQEyuNISpfx5FMdc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        See transcripts
                                    </a>
                                </div>
                            </section>
                            <section className="col-2">
                                December, 2022
                            </section>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className="row p-2 m-2">
                            <div className="col-1 sectionImage">
                                <a
                                    href="http://www.nitc.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={NITCLogo}
                                        alt={"NIT Calicut"}
                                        height={40}
                                    />
                                </a>
                            </div>
                            <section className="col school">
                                <b>National Institute of Technology, Calicut</b>
                                <br />
                                <div className="major">
                                    <i>Bachelor of Technology, Communication Engineering</i>
                                    <br /> <br />
                                    <b>Course work:</b> Data Structures and Algorithms, Computer Architecture, Computer Networks, Introduction to Programming, Logic Design, Graph theory, Cryptography
                                    <br /><br />
                                    <a href="https://drive.google.com/file/d/1oHY_o2b96733uWSphG3Jtm9073oK26or/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        See transcripts
                                    </a>
                                </div>
                            </section>
                            <section className="col-2">
                                April, 2019
                            </section>
                        </div>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Education;
