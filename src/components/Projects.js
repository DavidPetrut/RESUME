import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import craiova from "../assets/img/craiova.png";
import movieFlex from "../assets/img/movieFlex.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import explore_brasov from "../assets/img/explore_brasov.png";
import cricket from "../assets/img/cricket3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { VscBook } from "react-icons/vsc";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: explore_brasov,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: movieFlex,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: craiova,
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: cricket,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />
                  <p>
                    These are some of my projects that I`ve done.
                    <br />
                    All projects bellow are compatible for all screen sizes.
                    <br />
                    To access a project, simple hover and click the images
                    bellow
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Websites</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Resume/CV</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((projects2, index) => {
                            return <ProjectCard key={index} {...projects2} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          This is my written RESUME/CV that you can access it as
                          a PDF file, by clicking the little book icon
                          <a
                            href="https://drive.google.com/file/d/1FdrReLUGESuuw3WjtiOlUMpcW5DnlqMf/view"
                            target="_blank"
                          >
                            <VscBook className="social-icon cv" />
                          </a>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
