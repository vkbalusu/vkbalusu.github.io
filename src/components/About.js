import React, { useEffect, useRef } from "react";
import me from "../assets/images/about/profile.jpg";
import SkillsShowcase from "./SkillsShowcase";
import "../assets/css/about.css";
import { TimelineMax, gsap, CSSPlugin } from "gsap/all";
import Social from "./Social"

const About = (props) => {
    gsap.registerPlugin(CSSPlugin);
    const introductionPhotoRef = useRef();
    const introductionTextRef = useRef();
    const inlineNameHeadingRef = useRef();
    const upperNameHeadingRef = useRef();
    const tl = new TimelineMax();
    const iconSize = () => {
        if (window.innerWidth >= 768)
            return "40"
        else
            return "20"
    }

    useEffect(() => {
        tl.fromTo(
            introductionPhotoRef.current,
            1,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0 }
        )
            .fromTo(
                introductionTextRef.current,
                1,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0 },
                "-=1"
            )
            .fromTo(
                inlineNameHeadingRef.current,
                1,
                { y: "500%" },
                { y: "100%" },
                "-=0.7"
            )
            .fromTo(
                upperNameHeadingRef.current,
                1,
                { y: "500%" },
                { y: "100%" },
                "-=0.7"
            );
    });

    return (
        <React.Fragment>
            <div className="aboutContainer">
                <div align="center" className="upperNameHeading nameHeading">
                    <span ref={upperNameHeadingRef}>Hey, I'm Vamsi.</span>
                </div>
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-4" style={{ "margin": "auto" }}>
                        <img
                            src={me}
                            ref={introductionPhotoRef}
                            alt="Vamsi Krishna"
                            className="introductionPhoto"
                        />
                    </div>
                    <div className="col-md-7 col-sm-8 col">
                        <br />
                        <div className="inlineNameHeading nameHeading">
                            <span ref={inlineNameHeadingRef}>
                                Hey, I'm Vamsi.
                            </span>
                        </div>
                        <p
                            className="introductionText"
                            ref={introductionTextRef}
                        >
                            I am a graduate Computer Science student at UC Irvine. I am actively looking for full time SDE roles starting December, 2022.
                            I have 2 years of work experience as a backend software developer. I love to solve new challenges everyday.
                        </p>
                        <span>
                            <Social size={iconSize()}/>
                        </span>
                    </div>
                </div>
            </div>
            <SkillsShowcase />
        </React.Fragment>
    );
};

export default About;
