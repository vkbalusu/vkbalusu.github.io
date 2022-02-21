import React, { useState, useEffect } from "react";
import { Icon, Transition } from "semantic-ui-react";
import Social from "./Social";


const Footer = (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisible((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    let year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm-12 col-md-12 goToTopContainer">
                    <Transition
                        visible={visible}
                        animation="scale"
                        duration={500}
                    >
                        <span style={{ color: "white", cursor: "pointer" }}>
                            <Icon
                                name="angle double up"
                                size="big"
                                onClick={() => props.scrollToTop()}
                            />
                        </span>
                    </Transition>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 container footerContainer">
                    <div className="footerContent">
                        Copyright{" "}
                        <span role="img" aria-label="Copyright">
                            ©️
                        </span>{" "}
                        {year} Vamsi Krishna Balusu | Credits to
                        <span>
                            <a href="https://github.com/tarunluthra123/tarunluthra123.github.io/" target="_blank" rel="noopener noreferrer">
                                &nbsp;project
                            </a>
                        </span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 footerContainer" >
                    <Social size={30} />
                </div>

                {/* <div className="col-sm-12 col-md-4 goToTopContainer m-2">
                    <Transition
                        visible={visible}
                        animation="scale"
                        duration={500}
                    >
                        <span style={{ color: "white", cursor: "pointer" }}>
                            <Icon
                                name="angle double up"
                                size="big"
                                onClick={() => props.scrollToTop()}
                            />
                        </span>
                    </Transition>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;
