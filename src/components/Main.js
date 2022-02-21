import React, { Component } from "react";
import { animateScroll as scroll, Element, Link } from "react-scroll";
import Education from "./Education";
import Work from "./Work";
import ProjectsList from "./ProjectsList";
import About from "./About";
import Footer from "./Footer";
import "../assets/css/main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.navLinks = React.createRef();
    this.projectRef = React.createRef();
    this.educationRef = React.createRef();
    this.workRef = React.createRef();
    this.contactRef = React.createRef();
    this.resumePdfRef = React.createRef();
    this.burgerRef = React.createRef();
    this.blogsRef = React.createRef();
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  toggleBurgerMenu = () => {
    if (window.innerWidth > 768) return;
    this.navLinks.current.classList.toggle("open");
    this.projectRef.current.classList.toggle("fade");
    this.educationRef.current.classList.toggle("fade");
    this.workRef.current.classList.toggle("fade");
    this.contactRef.current.classList.toggle("fade");
    this.resumePdfRef.current.classList.toggle("fade");
    this.blogsRef.current.classList.toggle("fade");
    this.burgerRef.current.classList.toggle("toggle");
  };

  render() {
    return (
      <React.Fragment>
        <nav className="row">
          <div className="col-md navBarName">
            <Link to="about" smooth={true} duration={500}>
              Vamsi Krishna
            </Link>
          </div>
          <ul className="col-md nav-links" ref={this.navLinks}>
            <li ref={this.educationRef}>
              <Link
                activeClass="active"
                className="navLinkItem"
                to="education"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.toggleBurgerMenu}
              >
                <span>Education</span>
              </Link>
            </li>
            <li ref={this.workRef}>
              <Link
                activeClass="active"
                className="navLinkItem"
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.toggleBurgerMenu}
              >
                <span>Work</span>
              </Link>
            </li>
            <li ref={this.projectRef}>
              <Link
                activeClass="active"
                className="navLinkItem"
                to="projectsList"
                spy={true}
                smooth={true}
                duration={500}
                onClick={this.toggleBurgerMenu}
              >
                <span>Projects{"  "}</span>
              </Link>
            </li>

            <li ref={this.resumePdfRef}>
              <a
                href={"https://drive.google.com/file/d/1Fzf7dfxWCC2ZQbROQUfiwVYMlKn5CBww/view?usp=sharing"}
                className="navLinkItem"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.toggleBurgerMenu}
              >
                Résumé PDF
              </a>
            </li>
          </ul>

          <div
            className="hamburger"
            onClick={this.toggleBurgerMenu}
            ref={this.burgerRef}
          >
            <div className="line line1" />
            <div className="line line2" />
            <div className="line line3" />
          </div>
        </nav>

        <div className="main">
          <Element name="about" className="element">
            <About />
          </Element>

          <Element name="education" className="element">
            <Education />
          </Element>

          <Element name="work" className="element">
            <Work />
          </Element>

          <Element name="projectsList" className="element">
            <ProjectsList />
          </Element>

          <Footer scrollToTop={this.scrollToTop} />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
