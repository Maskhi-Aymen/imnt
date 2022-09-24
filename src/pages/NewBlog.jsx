import React, { useEffect,useState } from "react";
import { Container, Row, Col, Form, Input ,Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Helmet from "../components/Helmet/Helmet";
import "../styles/blog-details.css";

const NewBlog = () => {
  const userId=JSON.parse(localStorage.getItem("userInfo"))._id;

  const [isvalid, setisvalid] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const[titleblog,setTitle]= useState("");
  const [author,setAuthor]= useState("");
  const [date,setDate]= useState("");
  const [time,setTime]= useState("");
  const [description,setDescp]= useState("");
  const [quote,setQuote]= useState("");
  const[imgUrl,setImg]= useState();


  const navigate= useNavigate();
  useEffect(() => {
   
   if(!localStorage.getItem("userInfo")) {
     navigate('/');
       }
     if(localStorage.getItem("userInfo")) {
     if(!JSON.parse(localStorage.getItem("userInfo")).admin){
       navigate('/');
     }}
 },[navigate]) 
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if(titleblog && author &&time && date &&imgUrl &&quote  && description)
    {
    setisvalid(true)  
    let formData= new FormData();
    formData.append("img",imgUrl);
    formData.append("imgUrl","https://imntservice.herokuapp.com/uploads/"+imgUrl.name);
    formData.append("title",titleblog);
    formData.append("date",date);
    formData.append("author",author);
    formData.append("quote",quote);
    formData.append("time",time);
    formData.append("description",description);
    try {

      const  data  = await axios.post(`https://imntservice.herokuapp.com/api/blog/add/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "
        }
      }) ;
      toggle();

    } catch (error) {
      setisvalid(false);
      toggle();
    }}
    else{
      setisvalid(false);
      toggle()}
}
  const imgHandler =  (e) => {
    setImg(e.target.files[0])
  }

  return (
    <Helmet title="Blog">
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
              <i class="ri-image-add-line" style={{fontSize:"255px",color:"#E2001A",marginLeft:"100px"}}></i>
              <Input type="file" onChange={(e)=>imgHandler(e)} accept ="image/*"  id="file"/>
                <h2 className="section__title mt-4"><Input placeholder="titre" onChange={(e)=>setTitle(e.target.value)}/></h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line"></i> <Input placeholder="auteur" onChange={(e)=>setAuthor(e.target.value)} />
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> <Input placeholder="date" onChange={(e)=>setDate(e.target.value)} />
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> <Input placeholder="horaire" onChange={(e)=>setTime(e.target.value)} />
                  </span>
                </div>

                <p className="section__description"><Input placeholder="description" onChange={(e)=>setDescp(e.target.value)}type='textarea' Row={45}/></p>
                <p className="section__description"><Input placeholder="quote" onChange={(e)=>setQuote(e.target.value)}type='textarea' Row={45}/></p>
              </div>

              <div className="comment__list mt-5">                         
               <div className="leave__comment-form mt-5">

                  <Form>
                  <button  onClick={(e)=>submitHandler(e) }  className=" w-50 car__item-btn car__btn-rent" style={{color:'white'}}>
            enregistrer
          </button>
                
                  </Form>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Créer une formation</ModalHeader>
          <ModalBody>{isvalid ? <> <h2>Succés</h2>
          La Blog a été enregistrée avec succès
          </>
            :
            <>Les données que vous avez saisi(e) n’est pas complet.S'il vous plaît, essayez de les compléter !</>}

          </ModalBody>
          <ModalFooter>
          {isvalid ? <Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle();window.location.reload(true)}}>
              Fermer
            </Button>:<Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle()}}>
              Fermer
            </Button>}
          </ModalFooter>
        </Modal>
    </Helmet>
  );
};

export default NewBlog;
