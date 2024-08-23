import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Link, useHistory } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const toRotate = [
    "Junior Developer",
    "Computer Science Graduate",
    "Full-stack Applications Developer",
  ];
  const period = 2000;
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/aboutMe");
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    // Function to check screen size and set isMobile state
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // Initial check on component mount
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="bannerTitle">
                    {`About me:  `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Junior Developer",
                      "Computer Science Graduate",
                      "Full-stack Applications Developer",]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  {isMobile ? (
                    // Shortened summary for mobile view
                    <p>
                      I’m passionate about technology, with a strong foundation
                      in Computer Science, ready to bring innovative solutions
                      and growth to your team.
                    </p>
                  ) : (
                    // Full introduction for larger screens
                    <p>
                      My name is David Petrut!
                      <br />
                      I`m passionate about technology and committed to
                      continuous learning. Recent Computer Science graduate with
                      practical experience. I enjoy mentoring and learning new
                      technologies, aiming to bring innovative solutions and a
                      growth mindset spirit to your team.
                    </p>
                  )}

                  <div className="connectBannerButtons">
                    <button onClick={() => console.log("connect")}>
                      <a
                        className="whatsapp_link"
                        href="https://wa.me/+447305583508"
                        // href="https://wa.link/1md3pu"
                        target="_blank"
                      >
                        Let’s Connect <ArrowRightCircle size={25} />
                      </a>
                    </button>
                    <button
                      className="whatsapp_link"
                      onClick={handleButtonClick}
                    >
                      Read More <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  id="parentImageBanner"
                >
                  <img
                    className="imageBanner"
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHm3qA8ONp3EA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718792682086?e=1729728000&v=beta&t=peg6XqBOrfl2gOBpN6QbTOBFLqb2F1Dx_XngRI0UgKs"
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
