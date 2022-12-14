import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import img from '../../assets/all-images/slider-img/inscription.png';
import "../../styles/booking-form.css"
import axios from 'axios';
import CommonSection from "./CommonSection";
import { Form, FormGroup ,Container,Col,Row,Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const BookingForm = () => {
  const { slug } = useParams();
  const title=window.localStorage.getItem('title');
  
  const [isvalid, setisvalid] = useState(true);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [name, setname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [numtel, setnumtel] = useState();

  const submitHandler = async(event)=> { 
     event.preventDefault();
    if (name && lastname && email && numtel) {
      const date=new Date().toDateString();
      try {
         await axios.post(`https://imntservice.herokuapp.com/api/formations/inscription/${slug}`, {
        name,lastname,email,numtel,date
      },{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
   setisvalid(true);
    toggle();


  } catch(error) {
    console.log(error);
  }
  } else {
    setisvalid(false);
    toggle();
  }


  
  };
  return (<>
  <CommonSection title="Inscription" />
  <div >
  <Container >
  <Row>
  <Col lg="6" md="6" sm="12">  
             <img src={img} className="inscription" />
      
    </Col>
    <Col lg="6" md="6" sm="12" className="form-inscription" >
              <div className="booking-info mt-5">
               <center><h2>{title}</h2></center> 
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form me-4 mb-4">
        <input type="text" placeholder="Nom" onChange={(e) => setname(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Pr??nom"onChange={(e) => setlastname(e.target.value)} />
      </FormGroup>

      <FormGroup className="booking__form  me-4 mb-4">
        <input type="email" placeholder="E-mail" onChange={(e) => setemail(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form  ms-1 mb-4">
        <input type="text" placeholder="T??l" onChange={(e) => setnumtel(e.target.value)}/>
      </FormGroup>
                
              <div className="booking-info mt-5" style={{marginBottom:"50px"}}>
                <center><button className=" w-50 car__item-btn car__btn-rent" style={{color:"white"}}>
            s'inscrire
          </button></center>
              </div>
           
    </Form>
    </div>
    </Col>
</Row>
    </Container>
    <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Reserervation</ModalHeader>
          <ModalBody>{isvalid ? <> <h2>Bonjour {lastname} {name}</h2>
            Nous avons bien re??u votre inscription et nous vous remercions de l???int??r??t que vous portez ?? notre service.
            Un membre de notre ??quipe entrera en contact avec vous dans les plus brefs d??lais
          </>
            :
            <>Les corrdonn??es que vous avez saisi(e) n???est pas complet.S'il vous pla??t ,essayez de les compl??ter avant de confirmer votre Reserervation</>}

          </ModalBody>
          <ModalFooter>
          {isvalid ?
            <Button color="secondary" onClick={()=>{toggle();window.location.reload(true)}}>
              Fermer
            </Button>:<Button color="secondary" onClick={()=>{toggle();}}>
              Fermer
            </Button>}
          </ModalFooter>
        </Modal>
    
    </div></>
  );
};

export default BookingForm;
