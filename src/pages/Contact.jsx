import React from "react";
import { useEffect,useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input,Button,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import axios from "axios";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/imnt.formation",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#", 
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {

  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [content,setcontent]= useState("");

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const submitHandler = (e) => {
    e.preventDefault();
    if(name && content && content)
    { 
    try {

      const  data  = axios.post(`https://imntservice.herokuapp.com//api/users/contact`, {
        name:name,email:email,content:content
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      }) 
      toggle();
    } catch (error) {
    }}
    
}

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Contactez-nous</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Nom et Prénom" type="text"  onChange={(e)=>setName(e.target.value)} />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="E-mail" type="email" onChange={(e)=>setEmail(e.target.value)}  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    onChange={(e)=>setcontent(e.target.value)} 
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn"onClick={submitHandler} type="submit">
                  Soumettre
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold"> Nos Coordonnées</h6>
                <p className="section__description mb-0">
                09 rue d’Angleterre Tunis 1001
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+216 55 157 264</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">imnt.formation@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Suivez-nous</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier la formation</ModalHeader>
          <ModalBody><> <h2>Contact</h2>
          Nous avons bien reçu votre Email et nous vous remercions de l’intérêt que vous portez à notre service.
          </>
          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle();window.location.reload(true)}}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
    </Helmet>
  );
};

export default Contact;
