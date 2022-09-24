import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import 'animate.css';
import aboutImg from "../../assets/all-images/logo.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Bienvenu à</h4>
              <h2 className="section__title" style={{fontSize:"3rem"}}>Institut Méditerranéen Des Nouvelles Technologies</h2>
              <p className="section__description">
                <h5>
              Des programmes faits sur mesure </h5>
              Choisissez la formule qui vous convient et rejoignez-nous<span style={{color:"black",fontWeight:"bold" }}> dès maintenant !</span>
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2" style={{fontWeight:"Bold" ,fontSize:"20px",color:"#0c0101"}}>
                  <i class="ri-checkbox-circle-line"></i> Excellence pédagogique 
                </p>

                <p className="section__description d-flex align-items-center gap-2" style={{fontWeight:"Bold" ,fontSize:"20px",color:"#0c0101"}}>
                  <i class="ri-checkbox-circle-line"></i> Satisfaction Client
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2" style={{fontWeight:"Bold" ,fontSize:"20px",color:"#0c0101"}} >
                  <i class="ri-checkbox-circle-line"></i> Nouveaux Cursus &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                </p>

                <p className="section__description d-flex align-items-center gap-2" style={{fontWeight:"Bold" ,fontSize:"20px",color:"#0c0101"}}>
                  <i class="ri-checkbox-circle-line"></i> Personnalisation des parcours
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img" style={{marginTop:"100px"}}><div class="animate__animated animate__pulse animate__infinite">
              <img src={aboutImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
