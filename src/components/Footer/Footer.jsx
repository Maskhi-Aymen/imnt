import React from "react";
import logo from "../../assets/all-images/imnt-blanc.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BiEnvelope,BiAlarm,BiMap,BiMobile } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import navIcon1 from "../../assets/all-images/nav-icon1.svg";
import navIcon2 from "../../assets/all-images/nav-icon2.svg";
import navIcon3 from "../../assets/all-images/nav-icon3.svg";
import { CDBBox } from 'cdbreact';

const quickLinks = [
  {
    path: "/about",
    display: "Nos Services",
  },

  {
    path: "/policy",
    display: "Mentions Légales",
  },

  {
    path: "/formation",
    display: "Nos formations",
  }, 
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contactez-nous",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
              <Link to="/home" className=" d-flex align-items-center gap-2">
                  <img src={logo} alt='Logo' style={{width:'270px'}} />
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content mt-3">
            Découvrez un secteur en forte croissance <br/>Nous formons les logisticiens de demain
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Acceuil</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

 
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Siège social</h5>
              <p className="office__info"><BiMap/>09 rue d’Angleterre Tunis 1001</p>
              <p className="office__info"><BiMobile/> +216 55 157 264</p>

              <p className="office__info"><BiEnvelope/> imnt.formation@gmail.com</p>

              <p className="office__info"><BiAlarm/> 7am - 9pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" style={{color:'white'}} />
                <span onClick={()=>{window.location.reload(true)}}>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
            <CDBBox display="flex" className="mt-4">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://www.facebook.com/imnt.formation"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
              </div>
            </CDBBox>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year} :: IMNT :: www.imnt.tn
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
