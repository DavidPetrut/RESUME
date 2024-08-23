import React, { useState } from "react";
import { Container, Row, Col, Image, Tabs, Tab, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import profileImg from "../assets/img/craiova.png";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import simona2 from "../assets/img/simona2.svg";
import movieFlex from "../assets/img/movieFlex.png";
import brasov from "../assets/img/brasov.png";
import cricket from "../assets/img/cricket.png";
import degree from "../assets/img/degree.jpeg";
import "../About.css";
import { Footer } from "./Footer";
import { Contact } from "./Contact"; // Assuming you have a Contact component

export function AboutMe() {
  const [showMore, setShowMore] = useState({});
  const [activeTab, setActiveTab] = useState("chapter1");

  const toggleReadMore = (tab) => {
    setShowMore((prevState) => ({
      ...prevState,
      [tab]: !prevState[tab],
    }));
  };

  const renderTabContent = (title, text, tabKey) => {
    const isLongText = text.split(" ").length > 40;
    const previewText = text.split(" ").slice(0, 40).join(" ");
    const fullText = text;

    return (
      <div className="tab-content">
        <h2 className="tab-title">{title}</h2>
        <p className="tab-text">
          {showMore[tabKey] || !isLongText ? fullText : `${previewText}...`}
        </p>
        {isLongText && (
          <p className="read-more" onClick={() => toggleReadMore(tabKey)}>
            {showMore[tabKey] ? "Show less" : "Read more"}
          </p>
        )}
        <Button variant="primary" className="find-out-more-btn">
          {tabKey === "chapter1" ||
          tabKey === "chapter2" ||
          tabKey === "chapter3"
            ? "Let's Connect"
            : tabKey === "chapter4"
            ? "See Degree"
            : tabKey === "chapter5"
            ? "My Github"
            : "Let's Connect"}{" "}
          <ArrowRightCircle size={25} className="ms-2" />
        </Button>
      </div>
    );
  };

  const renderImageCarousel = (images) => {
    return (
      <div className="image-carousel d-block d-md-none">
        {images.map((image, index) => (
          <img src={image} alt={`Profile Image ${index + 1}`} key={index} />
        ))}
      </div>
    );
  };

  return (
    <section className="about-me" id="about-me">
      <Container fluid className="mainContainer">
        <Row className="header-row">
          {/* Logo */}
          <Col xs={6} className="text-left logoAboutContainer">
            <Link to="/">
              <img src={simona2} className="logoAbout" alt="Logo" />
            </Link>
          </Col>

          {/* Back to Portfolio Button */}
          <Col xs={6} className="text-right">
            <Link to="/" className="back-to-portfolio-btn">
              <span className="d-none d-md-inline">Back To My Portfolio</span>
              <span className="d-inline d-md-none">Back Home</span>
            </Link>
          </Col>
        </Row>

        <Row className="text-center justify-content-center mb-5">
          <Col xs={12} md={8} lg={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <h1 className="about-me-name">David Petrut</h1>
                  <Image
                    src="https://avatars.githubusercontent.com/u/68144365?v=4"
                    roundedCircle
                    fluid
                    className="profile-img mb-4"
                    alt="Profile"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        {/* Normal view (desktop/tablet) */}
        <Row className="justify-content-center d-none d-md-flex">
          <Col xs={12} md={10} lg={10}>
            <Tabs defaultActiveKey="chapter1" className="about-me-tabs" justify>
              <Tab eventKey="chapter1" title="Who I Am">
                {renderTabContent(
                  "Who I Am",
                  "I`m passionate about technology and committed to continuous learning. Recent Computer Science graduate with practical experience in full-stack development, both freelance and through an internship. I've built individual projects that increased client sales and also worked in collaborations. I enjoy mentoring and learning new technologies, aiming to bring innovative solutions and a growth mindset spirit to your team. I am always excited to take on new challenges in tech and help others on their learning journeys.",
                  "chapter1"
                )}
              </Tab>
              <Tab eventKey="chapter2" title="My Skills">
                <Row className="tab-row">
                  <Col className="tab-column">
                    <h3>Technical Skills</h3>
                    <ul>
                      <li>
                        Programming Languages: Javascript, Python, Java, C#, and
                        .NET (basic).
                      </li>
                      <li>
                        Frontend Frameworks: React, Angular, TypeScript,
                        WordPress.
                      </li>
                      <li>Web Technologies: HTML5, CSS, RestAPI.</li>
                      <li>
                        Backend: NodeJS, Java, Python, basic understanding of C#
                        and .NET.
                      </li>
                      <li>
                        Design: CSS3, SCSS, Tailwind, Bootstrap, Elementor Pro,
                        Figma.
                      </li>
                      <li>Database: SQL, MongoDB.</li>
                      <li>
                        Other Skills: Git, GitHub, Great Understanding of Agile
                        Scrum, Testing, AI & ML integration, Microsoft Office
                        Specialist, CompTIA Cloud cyber-security.
                      </li>
                    </ul>
                  </Col>
                  <Col className="tab-column">
                    <h3>Soft Skills</h3>
                    <ul>
                      <li>Continuous learning</li>
                      <li>Customer Orientation</li>
                      <li>Mentorship and Collaboration</li>
                      <li>Creativity and Stress Management</li>
                      <li>Cultural Awareness</li>
                      <li>Work Ethic</li>
                      <li>Proactive learning and Self-discipline</li>
                      <li>Effective communication and Attention to Detail</li>
                      <li>Logical Thinking and Growth Mindset</li>
                      <li>Time management and Analytical Skills</li>
                      <li>Critical thinking, and Adaptability.</li>
                    </ul>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="chapter3" title="My Hobbies">
                <Row className="tab-row">
                  <Col className="tab-column">
                    {renderTabContent(
                      "My Hobbies",
                      " JavaScript Teacher: Ran 6-month mentoring classes with tens of people in-person and online, teaching non-technical people Beginner to Advanced JavaScript fundamentals. As a result, individuals, confident in the skills I taught them, have started full-time tech careers after acquiring these skills through my mentoring. I also enjoy attending tech Meetups and Social Clubs and I also love to play guitar. I love to meet up with people and connect with individuals who are interested in cutting-edge technology or other emerging technologies that are related to what I do and have the same career interests.",
                      "chapter3"
                    )}
                  </Col>
                  <Col className="tab-column">
                    <Image src={movieFlex} fluid alt="Hobbies" />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="chapter4" title="Education">
                <Row className="tab-row">
                  <Col className="tab-column">
                    {renderTabContent(
                      "Education",
                      "University of East London, Bachelor's degree in Computer Science, 2020-2024. Graduated with First Class Honors (1:1). The program combined theoretical knowledge and practical skills, covering topics such as software development, AI, database systems, and network security. I gained project management, teamwork, and communication skills through hands-on learning.",
                      "chapter4"
                    )}
                  </Col>
                  <Col className="tab-column">
                    <Image src={degree} fluid alt="Education" />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="chapter5" title="Experience">
                <Row className="tab-row">
                  <Col className="tab-column">
                    <h3>Freelance WordPress Developer - Self-Employed</h3>
                    <p>Oct 2023 - Present</p>
                    <ul>
                      <li>
                        Create WordPress sites, increasing client sales by 30%
                        through responsive and user-friendly website designs,
                        resulting in higher engagement and conversions.
                      </li>
                      <li>
                        Ensured work-winning activities such as boosting website
                        traffic to at least 100 visitors in the first month
                        through effective SEO strategies, with over 10% of
                        visitors converting to buying client services.
                      </li>
                      <li>
                        Guided clients through all stages of website
                        development, ensuring satisfaction by considering
                        financial and marketing needs, maintaining clear
                        communication, and regularly updating features.
                      </li>
                    </ul>
                  </Col>
                  <Col className="tab-column">
                    <h3>Full-stack Web Developer Internship - M.I.T Romania</h3>
                    <p>May 2023 - October 2023</p>
                    <ul>
                      <li>
                        Gained hands-on experience and deepened my understanding
                        of algorithms, data structures, Angular framework, and
                        Node.js/Express by observing and learning from senior
                        developers on large-scale projects.
                      </li>
                      <li>
                        Collaborated closely with senior developers on client
                        projects, helping them to develop scalable, flexible,
                        and reusable components.
                      </li>
                      <li>
                        Learned how to write clean code and how to work with
                        version control (Git, Github).
                      </li>
                    </ul>
                    <h3>Head Chef / Manager – Soderberg, London</h3>
                    <p>July 2020 - April 2023</p>
                    <ul>
                      <li>
                        As the Head Chef, I managed everything about the kitchen
                        of this Swedish luxury bakery/restaurant in London,
                        successfully led a team of 8, innovated a seasonal menu
                        inspired by Nordic cuisine, and nearly doubled customer
                        numbers through consistently high-quality service.
                      </li>
                      <li>Led culinary operations and managed a team of 8.</li>
                      <li>
                        Nearly doubled customer numbers through high-quality
                        service.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="chapter6" title="Contact">
                <Contact />{" "}
                {/* Assuming Contact component handles contact form */}
              </Tab>
            </Tabs>
          </Col>
        </Row>

        {/* Mobile view */}
        <div className="d-block d-md-none">
          {/* Carousel for Tabs */}
          <div className="tabs-carousel">
            <div
              className={`tab-item ${activeTab === "chapter1" ? "active" : ""}`}
              onClick={() => setActiveTab("chapter1")}
            >
              Who I Am
            </div>
            <div
              className={`tab-item ${activeTab === "chapter2" ? "active" : ""}`}
              onClick={() => setActiveTab("chapter2")}
            >
              My Skills
            </div>
            <div
              className={`tab-item ${activeTab === "chapter3" ? "active" : ""}`}
              onClick={() => setActiveTab("chapter3")}
            >
              My Hobbies
            </div>
            <div
              className={`tab-item ${activeTab === "chapter4" ? "active" : ""}`}
              onClick={() => setActiveTab("chapter4")}
            >
              Education
            </div>
            <div
              className={`tab-item ${activeTab === "chapter5" ? "active" : ""}`}
              onClick={() => setActiveTab("chapter5")}
            >
              Experience
            </div>
            <div
              className={`tab-item ${activeTab === "chapter6" ? "active" : ""}`}
              onClick={() => setActiveTab("chapter6")}
            >
              Contact
            </div>
          </div>
          {/* Arrow container for tabs */}
          <div className="arrow-container">
            <div className="arrow-left">&#8249;</div>
            <div className="arrow-right">&#8250;</div>
          </div>
          {/* Dynamic Content based on active tab */}
          {activeTab === "chapter1" &&
            renderTabContent(
              "Who I Am",
              "I`m passionate about technology and committed to continuous learning. Recent Computer Science graduate with practical experience in full-stack development, both freelance and through an internship. I've built individual projects that increased client sales and also worked in collaborations. I enjoy mentoring and learning new technologies, aiming to bring innovative solutions and a growth mindset spirit to your team. I am always excited to take on new challenges in tech and help others on their learning journeys.",
              "chapter1"
            )}
          {activeTab === "chapter2" && (
            <div className="tab-content">
              <h2 className="tab-title">My Skills</h2>

              {/* Technical Skills Section */}
              <div className="skills-section mb-4">
                <h3>Technical</h3>
                <ul className="skills-list">
                  <li>
                    Programming Languages: JavaScript, Python, Java, C#, and
                    .NET (basic).
                  </li>
                  <li>
                    Frontend Frameworks: React, Angular, TypeScript, WordPress.
                  </li>
                  <li>Web Technologies: HTML5, CSS, RestAPI.</li>
                  <li>
                    Backend: NodeJS, Java, Python, basic understanding of C# and
                    .NET.
                  </li>
                  <li>
                    Design: CSS3, SCSS, Tailwind, Bootstrap, Elementor Pro,
                    Figma.
                  </li>
                  <li>Database: SQL, MongoDB.</li>
                  <li>
                    Other Skills: Git, GitHub, Agile Scrum, Testing, AI & ML
                    integration, Microsoft Office Specialist, CompTIA Cloud
                    Cyber-Security.
                  </li>
                </ul>
              </div>
              <hr />
              {/* Soft Skills Section */}
              <div className="skills-section">
                <h3>Soft Skills</h3>
                <ul className="skills-list">
                  <li>Continuous learning and adaptability</li>
                  <li>Customer Orientation</li>
                  <li>Mentorship and Collaboration</li>
                  <li>Creativity and Stress Management</li>
                  <li>Cultural Awareness</li>
                  <li>Work Ethic</li>
                  <li>Proactive learning and Self-discipline</li>
                  <li>Effective communication and Attention to Detail</li>
                  <li>Logical Thinking and Growth Mindset</li>
                  <li>Time management and Analytical Skills</li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === "chapter3" &&
            renderTabContent(
              "My Hobbies",
              " JavaScript Teacher: Ran 6-month mentoring classes with tens of people in-person and online, teaching non-technical people Beginner to Advanced JavaScript fundamentals. As a result, individuals, confident in the skills I taught them, have started full-time tech careers after acquiring these skills through my mentoring. I also enjoy attending tech Meetups and Social Clubs and I also love to play guitar. I love to meet up with people and connect with individuals who are interested in cutting-edge technology or other emerging technologies that are related to what I do and have the same career interests.",
              "chapter3"
            )}
          {activeTab === "chapter4" && (
            <div className="tab-content">
              <h2 className="tab-title">Education</h2>

              <div className="education-section">
                {/* University Name and Degree */}
                <h3 className="education-heading">University of East London</h3>
                <h4 className="degree-heading">Computer Science</h4>
                <h4 className="degree-heading">Bachelor's degree</h4>
                <p className="education-date">Aug 2020 - May 2024</p>
                <p className="education-grade">Grade: First (1:1)</p>

                <hr></hr>
                {/* Description of the Program */}
                <p className="education-description">
                  During my time at the University of East London, I earned a
                  Bachelor's degree in Computer Science. The program combined
                  theoretical knowledge and practical skills across several key
                  areas. I studied modules in software development, web
                  technologies, artificial intelligence, database systems, and
                  computer networks. These courses taught me how to develop and
                  manage software, create web and mobile applications, and
                  understand complex data systems.
                </p>

                <p className="education-description">
                  I also gained valuable professional skills, such as project
                  management, teamwork, and effective communication. The program
                  emphasized hands-on learning through group projects,
                  presentations, and individual assignments, preparing me to
                  tackle real-world tech challenges confidently and efficiently.
                </p>

                <hr></hr>
                <p className="education-activities">
                  Activities and societies: BCs, Student Union
                </p>

                {/* Skills Section */}
                <h4 className="skills-heading">Skills Acquired:</h4>
                <div className="skills-grid">
                  <span className="skill-item">Full-Stack Development</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Data Structures Algorithms</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Presentations</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Algorithms</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Problem Solving</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Maths for Computing</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">
                    Computer and Network Security
                  </span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Computing Science</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">
                    Decentralized Applications (DApps)
                  </span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Mental Wealth</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Requirements Engineering</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">
                    Data Communication and Networks
                  </span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Database Systems</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Analytical Skills</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Leadership</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">System Architecture</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Machine Learning</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Advanced Programming</span>
                  <span className="skill-separator">|</span>
                  <span className="skill-item">Computer Engineering</span>
                </div>
              </div>
            </div>
          )}
          {activeTab === "chapter5" && (
            <div className="tab-content">
              <h2 className="tab-title">Experience</h2>

              <div className="experience-section">
                {/* Freelance WordPress Developer */}
                <h3 className="experience-heading">
                  Freelance WordPress Developer
                </h3>
                <h4 className="position-heading">Self-Employed</h4>
                <p className="experience-date">Oct 2023 - Present</p>
                <ul className="experience-list">
                  <li>
                    Create WordPress sites, increasing client sales by 30%
                    through responsive and user-friendly website designs.
                  </li>
                  <li>
                    Boosted website traffic to at least 100 visitors in the
                    first month through effective SEO strategies, with over 10%
                    converting to client services.
                  </li>
                  <li>
                    Guided clients through all stages of website development,
                    ensuring satisfaction and clear communication.
                  </li>
                </ul>

                <hr></hr>

                {/* Full-stack Web Developer Internship */}
                <h3 className="experience-heading">
                  Full-stack Web Developer Internship
                </h3>
                <h4 className="position-heading">M.I.T Romania</h4>
                <p className="experience-date">May 2023 - Oct 2023</p>
                <ul className="experience-list">
                  <li>
                    Gained hands-on experience in algorithms, data structures,
                    Angular, and Node.js/Express by working closely with senior
                    developers.
                  </li>
                  <li>
                    Collaborated on client projects, developing scalable and
                    reusable components.
                  </li>
                  <li>
                    Learned how to write clean code and use version control
                    systems like Git and GitHub.
                  </li>
                </ul>

                <hr></hr>

                {/* Head Chef */}
                <h3 className="experience-heading">Head Chef</h3>
                <h4 className="position-heading">Soderberg</h4>
                <p className="experience-date">Apr 2020 - May 2022</p>
                <ul className="experience-list">
                  <li>
                    Led and managed culinary operations, ensuring high standards
                    of food quality and presentation.
                  </li>
                  <li>
                    Maintained kitchen equipment and facilities, initiating
                    regular maintenance and repairs.
                  </li>
                  <li>
                    Conducted kitchen inspections and hygiene audits, ensuring
                    compliance with food safety standards.
                  </li>
                </ul>

                <hr></hr>
              </div>
            </div>
          )}
          {activeTab === "chapter6" && <Contact />}{" "}
          {/* Assuming Contact component handles contact form */}
          {/* Image Carousel based on active tab */}
          {activeTab === "chapter1" &&
            renderImageCarousel([profileImg, brasov, cricket])}
          {activeTab === "chapter2" &&
            renderImageCarousel([profileImg, brasov, cricket])}
          {activeTab === "chapter3" &&
            renderImageCarousel([profileImg, brasov, cricket])}
          {activeTab === "chapter4" &&
            renderImageCarousel([profileImg, brasov, cricket])}
          {activeTab === "chapter5" &&
            renderImageCarousel([profileImg, brasov, cricket])}
          {activeTab === "chapter6" &&
            renderImageCarousel([profileImg, brasov, cricket])}
          {/* Arrow container for images */}
          <div className="arrow-container">
            <div className="arrow-left">&#8249;</div>
            <div className="arrow-right">&#8250;</div>
          </div>
        </div>
      </Container>
      <Footer />
    </section>
  );
}
