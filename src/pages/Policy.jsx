import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/about.css";

const Policy = () => {
  return (
    <Helmet title="Politique de confidentialité">
      <CommonSection title="Politique de confidentialité" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">  
              <h2 className="section__title">
                Politique de confidentialité
                </h2>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">


                <p className="section__description">
                IMNT accorde une grande importance à la protection de votre vie privée. C’est la raison pour laquelle nous avons adopté des principes communs au sein de notre Politique de Confidentialité.
IMNT, Sociétés par Actions Simplifiées immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 480 626 787, dont le siège social est situé au 38 rue des Mathurins à Paris 8e, est responsable du traitement de vos données personnelles. Le présent document (la présente page) a pour objet de vous informer de la manière dont nous utilisons et protégeons vos données personnelles, ainsi que des raisons pour lesquelles nous traitons ces données.
             </p>

                <p className="section__description">
                Il s’applique uniformément à toutes les prestations apportées par la société IMNT, étant précisé que des informations complémentaires pourront vous être communiquées si nécessaire dans le cas d’une commande particulière.
                </p>

              </div>
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
          <Col lg="6" md="6" sm="12">  
              <h2 className="section__title" style={{fontSize:"23px"}}>
              I. Pendant combien de temps conservons-nous vos données personnelles ?
                </h2>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">


                <p className="section__description">
                Nous conservons vos données personnelles pour la plus longue des durées nécessaires au respect des dispositions légales et réglementaires applicables ou une autre durée compte tenu des contraintes opérationnelles. S’agissant des clients, la majorité des informations sont conservées pendant la durée de la relation contractuelle et pendant 10 ans après la fin de la relation contractuelle.
S’agissant des prospects, les informations sont conservées 3 ans à compter de leur collecte ou de notre dernier contact avec vous.   </p>
              </div>
            </Col>
          </Row>
          <Row style={{marginTop:"20px"}}>
          <Col lg="6" md="6" sm="12">  
              <h2 className="section__title" style={{fontSize:"23px"}}>
              II. Comment nous contacter ?
                </h2>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <p className="section__description">
                Si vous avez des questions concernant l’utilisation de vos données personnelles visée par le présent document, vous pouvez retrouver les démarches possibles sur la page « Traitement de vos données personnelles », ou nous contacter par email à l’adresse :  imnt.formation@gmail.com.  </p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Policy;
