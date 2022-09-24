import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Form, FormGroup, Card } from "reactstrap";
import Helmet from '../Helmet/Helmet';
import { Container, Row, Col ,Input,Button ,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../styles/login.css";
 
const Register = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfrimPassword] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            toast.error('Passwords doesn`t match!');
            return;
        }

        try {

          const { data } =  await axios.post("https://imntservice.herokuapp.com/api/users/register", {
              username,
              email,
              password,
          },{
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "
            }
          });
          if(data.message==="error"){
            toggle()
          }
          else{
          toast.success('Registration Successfull!');
          navigate('/login');}


      } catch(error) {
        console.log(error);
        toast.error('Error, Try again!');
      }
    }

    useEffect(() => {
      if(localStorage.getItem("userInfo")) {
        localStorage.getItem("userInfo");
        navigate('/');
      }
    })

  return (
    <Helmet title="Inscription">
    <Container className="d-flex min-vh-100"  id='login__section'>
    <Row className="m-auto align-self-center">
      <Col lg="15" className="mb-5 text-center">
        <Card style={{borderRadius:"25px"}}>
          <Form className="form" onSubmit={submitHandler}>
            <h3 className='form-title'>Registre</h3>
            <FormGroup className="contact__form">
              <div><label htmlFor="username">Nom et Prénom</label></div>
              <Input type="text" onChange={(e) => setUsername(e.target.value)} className='input' id='username' required />
            </FormGroup>
            <FormGroup className="contact__form">
              <div><label htmlFor="Email">E-mail</label></div>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} className='input' id='Email' required />
            </FormGroup>
            <FormGroup className="contact__form">
              <div><label htmlFor="password">Mot de passe</label></div>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} className='input' id='password' required />
            </FormGroup>
            <FormGroup className="contact__form">
              <div><label htmlFor="rpassword">Retaper Mot de passe</label></div>
              <Input type="password" onChange={(e) => setConfrimPassword(e.target.value)} className='input' id='rpassword' required />
            </FormGroup>
            <FormGroup className="contact__form">
            <button className=" btn comment__btn mt-3" style={{ color: 'white' }}>Registre</button>
            </FormGroup>
            <FormGroup className="contact__form">
              <p>Vous avez un compte? <a href="/login" className='form-link' style={{textDecoration:"none",color:"#E2001A" }}>Se connecter</a></p>
            </FormGroup>
          </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier la formation</ModalHeader>
          <ModalBody>
            Les données que vous avez saisi(e) n’est pas complet ! essayez de change le Nom ou le E-mail !
          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle()}}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
    </Helmet>
  )
}

export default Register