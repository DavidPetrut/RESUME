import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import simona2 from "../assets/img/simona2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarToggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false);

    if (navbarToggleRef.current) {
      navbarToggleRef.current.click();
    }
  };

  return (
    <Router>
      <Navbar
        expand="md"
        className={`${scrolled || menuOpen ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand className="logoContainer" href="/">
            <img src={simona2} className="logo_resume" alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleMenu}
            ref={navbarToggleRef} 
          >
            {menuOpen ? (
              <FontAwesomeIcon className="x_burgerMenu" icon={faTimes} size="1x" /> // X icon when menu is open
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={menuOpen ? "show" : ""}
          >
            <Nav className="ms-auto burgerMenuNavigationLinks">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/david-petrut/"
                  target="_blank"
                  onClick={() => onUpdateActiveLink("connect")}
                >
                  <img src={navIcon1} alt="" className="linkedInIcon"/>
                </a>
                <a
                  href="https://github.com/DavidPetrut"
                  target="_blank"
                  onClick={() => onUpdateActiveLink("connect")}
                  className="gitLink"
                >
                  <FontAwesomeIcon
                    className="gitIcon"
                    icon={faGithub}
                    size="1x"
                  />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd" onClick={() => onUpdateActiveLink("connect")}>
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
