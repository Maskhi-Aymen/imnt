import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import schoolImg from "../assets/all-images/about2.jpg";
import aboutImg from "../assets/all-images/about1.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="Services">
      <CommonSection title="Nos Services" />
      <AboutSection aboutClass="aboutPage" />
<div className="about__page">
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={aboutImg} alt="about_img" className="aboutimg" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title" style={{ fontSize: "53px" }}>
                  LE DÉVELOPPEMENT DURABLE
                </h2>

                <p className="section__description" style={{ fontSize:"17px"}}>
                  Les formations évoluent et se perfectionnent, en
                  particulier en matière de réglementation et de
                  performance énergétique. 3 grands enjeux :
                  <ul>
                    <li style={{fontWeight:"bold" , fontSize:"16px"}}>Gestion durable des ressources de la planète</li>
                    <li style={{fontWeight:"bold", fontSize:"16px"}}>Gestion des déchets favorable au développement durable</li>
                    <li style={{fontWeight:"bold", fontSize:"16px"}}>Gestion des risques en matière de santé environnementale et de qualité de vie</li>
                  </ul> 
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
      className="about__section"
      style={ { marginTop: "80px"}}
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title" style={{fontSize:"2rem"}}>L’APPRENTISSAGE DE LA RÉUSSITE</h2>
              <p className="section__description">
                <ul>
                  <li style={{ fontSize:"17px"}}>L’apprentissage permanent, le progrès continu </li>
                  <li style={{ fontSize:"17px"}}>Relever ensemble les nouveaux défis économiques, règlementaires, technologiques, écologiques, humains, etc</li>
                  <li style={{ fontSize:"17px"}}>L’enrichissement mutuel, le cercle vertueux </li>
                  <li style={{ fontSize:"17px"}}>Être au service des entreprises et à leur écoute pour améliorer les solutions proposées, être toujours plus pertinents et plus réactifs</li>
                  <li style={{ fontSize:"17px"}}>L’expertise et la réussite durables</li>
                  <li style={{ fontSize:"17px"}}>Culture de l’adaptation permanente / approche / outils / méthodes , arrêtés</li>
                </ul>
                 </p>

             
                 <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Besoin d’aide?</h6>
                    <h4>+216 55157264</h4>
                  </div>
                </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img" >
              <img src={schoolImg} alt="about_img" className="about-img" />
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Nos membres</h6>
              <h2 className="section__title">Experts</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
</div>

    </Helmet>
  );
};

export default About;
