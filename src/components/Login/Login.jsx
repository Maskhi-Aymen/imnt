import axios from 'axios';
import "../../styles/login.css";
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, FormGroup, Card,Button ,Modal,Input, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import Helmet from '../Helmet/Helmet';

const Login = () => {

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();


    try {

      const { data } = await axios.post("https://imntservice.herokuapp.com/api/users/login", {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location.reload(true)

    } catch (error) {
      console.log(error);
      toggle();
      toast.error('Invalid password or username!');
    }
  }

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate('/');
    }
  },[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Connexion">
    <Container className="d-flex min-vh-100" id='login__section'>
      <Row className="m-auto align-self-center">
        <Col lg="15" className="mb-5 text-center">
          <Card style={{borderRadius:"25px"}}>
          <Form className="form" onSubmit={submitHandler} >
              <h3 className='form-title'>Connectez-vous</h3>
              <FormGroup className="contact__form" >
                <div><label htmlFor="username">E-mail</label></div>
                <Input type="text" onChange={(e) => setEmail(e.target.value)} className='input' id='username' required />
              </FormGroup>
              <FormGroup className="contact__form">
               <div><label htmlFor="password">Mot de passe</label></div> 
                <Input type="password" onChange={(e) => setPassword(e.target.value)} className='input' id='password' required />
              </FormGroup>
              <FormGroup className="contact__form">
                <button className=" btn comment__btn mt-3" style={{ color: 'white' }}>Connecter</button>
              </FormGroup>
              <FormGroup >
                <p>Vous n’avez pas de compte? <a href="/register" className='form-link' style={{textDecoration:"none",color:"#E2001A" }}>s’inscrire</a></p>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier la formation</ModalHeader>
          <ModalBody>
            Les données que vous avez saisi(e) n’est pas complet !
          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle();window.location.reload(true)}}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
    </Container>
    </Helmet>
  )
}

export default Login