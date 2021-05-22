import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Container, Row, Col } from "react-bootstrap"
import Title from "../Title/Title"
import AboutImg from "../Image/AboutImg"
import PortfolioContext from "../../context/context"

const About = () => {
  const { about } = useContext(PortfolioContext)
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <section id="about">
      <Container>
        <Title style={{ "text-align": "center" }} title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade>
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    `My name is Roseline Marie Prisca. I am a front-end developer who comes out of Madagascar. I grew up in Brickaville which is a district in the Est region of Madagascar. `}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    `I am not really a sporty woman but I don't mind exercising from time to time.`}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "I have learnt and coded with html, css, react for 2 years and more. I long to work with new people anywhere in the world. Also, I have an ambition to build a meaningful thing for this world. My knowledge about coding is limited but I am exiceted to learn new thing if it is necesary"}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
