import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import simona2 from "../assets/img/simona2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={simona2} className="logo_resume" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/david-petrut/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/DavidPetrut"
                target="_blank"
                className="gitLink"
              >
                <FontAwesomeIcon
                  className="gitIcon"
                  icon={faGithub}
                  size="1x"
                />
                {/* <img src={navIcon3} alt="" /> */}
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
