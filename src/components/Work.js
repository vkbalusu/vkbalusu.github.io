import React from "react";
import { SiOracle } from "react-icons/si";
import SAClogo from "../assets/images/work/saclogo.jpeg";
import Oraclelogo from "../assets/images/work/oracle.png";
import Coupanglogo from "../assets/images/work/coupang.svg";
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
                  src={Coupanglogo}
                  alt={"Coupang"}
                  height={30}
                  style={{ borderRadius: "5px", paddingTop: "10px" }}
                />
              </div>
              <section className="col col-sm col-md role">
                <b> Software Developer Intern</b>
                <br />
                <div className="org">
                  <i>Coupang</i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                        Currently building a full stack web application for
                        calculating seller fee for Coupang's ROD business.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="col-2 col-sm-2 col-md-2">
                June, 2022 - Present
              </section>
            </div>
          </Fade>
          <Fade bottom>
            <div className="row p-2 m-2">
              <div className="col-1 sectionImage">
                <img
                  src={Oraclelogo}
                  alt={"Oracle"}
                  height={40}
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <section className="col col-sm col-md role">
                <b> Applications Engineer</b>
                <br />
                <div className="org">
                  <i>Oracle Corporation</i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                        Developed a multi-threaded Java microservice to migrate
                        data across cloud instances bringing down the lead time
                        involved in product releases.
                      </li>
                      <li>
                        Improved the productivity of team three times by
                        developing an automated testing tool using Selenium,
                        TestNG, Docker and Jenkins.
                      </li>
                      <li>
                        Devised a key enhancement (low level design and
                        development) to track user activity and navigation in an
                        existing highly complex Java web application.
                      </li>
                    </ul>
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
                <a
                  href={
                    "https://www.linkedin.com/company/students-affairs-council-nit-calicut/"
                  }
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <img
                    src={SAClogo}
                    alt={"SAC"}
                    height={40}
                    style={{ borderRadius: "5px" }}
                  />
                </a>
              </div>
              <section className="col col-sm col-md role">
                <b> Councillor</b>
                <br />
                <div className="org">
                  <i>Students Affairs Council, NIT Calicut</i>
                  <br /> <br />
                  <div className="work">
                    <ul>
                      <li>
                        Worked for substantial changes in constitution and audit
                        procedure of college's annual fests.
                      </li>
                      <li>
                        Handled department level activities like alumni talks,
                        farewells etc.
                      </li>
                      <li>
                        Initiated coding sessions to help juniors expunge
                        apprehension about campus placements.
                      </li>
                    </ul>
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
