import React, { useEffect ,useState} from "react";
import offre from '../assets/all-images/offer.png';
import axios from 'axios';
import {Button, Container, Row, Col ,Input,Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import TableRegistration from "../components/UI/TableRegistration";
import { useParams,useNavigate } from "react-router-dom";
import 'animate.css';

const FormationDetails = () => {
  const { slug } = useParams();
  const [isvalid, setisvalid] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [singleCarItem,setSingle] = useState([]);

  const[type,setType]= useState(singleCarItem.type);
  const[title,setTitle]= useState(singleCarItem.title);
  const [participant,setPart]= useState(singleCarItem.participant);
  const[imgUrl,setImg]= useState();
  const [price,setPrice]= useState(singleCarItem.price);
  const [formateur,setFormateur]= useState(singleCarItem.formateur);
  const [lieu,setLieu]= useState(singleCarItem.lieu);
  const [duration,setDuration]= useState(singleCarItem.duration);
  const [time,setTime]= useState(singleCarItem.time);
  const [description,setDescp]= useState(singleCarItem.description);
  const [inscription,setInscr]= useState(singleCarItem.inscription);

  const userId=JSON.parse(localStorage.getItem("userInfo"))._id;

  const submitHandler = async (e) => {
    e.preventDefault();
    if(title && type &&participant && time && price &&formateur && lieu && duration && description)
    {
    let formData= new FormData();
    setisvalid(true)
    formData.append("img",imgUrl);
    if(imgUrl){formData.append("imgUrl","https://imntservice.herokuapp.com//uploads/"+imgUrl.name);}
    else{formData.append("imgUrl",singleCarItem.imgUrl)}
    formData.append("title",title);
    formData.append("type",type);
    formData.append("participant",participant);
    formData.append("price",price);
    formData.append("formateur",formateur);
    formData.append("lieu",lieu);
    formData.append("duration",duration);
    formData.append("time",time);
    formData.append("description",description);
    
    try {
      const { data } = await axios.put(`https://imntservice.herokuapp.com//api/formations/formation/${userId}/${singleCarItem._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "
        }
      });
      toggle()

    } catch (error) {
      toggle();}}
      else {
 
        setisvalid(false);
        toggle();
      

    }
}
const imgHandler =  (e) => {
  setImg(e.target.files[0])
}

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
useEffect(() => {
  

  const fetchData = async () => {
          
    try {
      const result = await axios.get(`https://imntservice.herokuapp.com//api/formations/${slug}`);
      setSingle(result.data)
      setDuration(result.data.duration);
      setTitle(result.data.title);
      setTime(result.data.time);
      setDescp(result.data.description);
      setPart(result.data.participant);
      setFormateur(result.data.formateur);
      setLieu(result.data.lieu);
      setPrice(result.data.price);
      setType(result.data.type);
      setInscr(result.data.inscription);
      
    } catch(err) {
      console.log("Error!");
    }
  }
  fetchData();
  window.scrollTo(0,0);
},[slug])

  return (
    <Helmet title={singleCarItem.title}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
              <Input type="file" onChange={(e)=>imgHandler(e)} accept ="image/*"  id="file"/>
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">Titre :<Input defaultValue={title} onChange={(e)=>setTitle(e.target.value)} /> </h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Animée par:<Input defaultValue={formateur} onChange={(e)=>setFormateur(e.target.value)}/> 
                  </h6>

                  <span className=" d-flex align-items-center gap-2"><i class="ri-nurse-fill"></i>
                  <Input defaultValue={participant} onChange={(e)=>setPart(e.target.value)} /> participants
                  </span>
                </div>

                <p className="section__description">Description :
                <Input defaultValue={description} onChange={(e)=>setDescp(e.target.value)} type='textarea' Row={45}/> 
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                   lieu:<Input defaultValue={lieu} onChange={(e)=>setLieu(e.target.value)} />
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                  temp: <Input defaultValue={time} onChange={(e)=>setTime(e.target.value)} /> 
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                      class="ri-calendar-todo-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                  durée:  <Input defaultValue={duration} onChange={(e)=>setDuration(e.target.value)} />
                 
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                  <i
                      class="ri-book-mark-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    Chapitres+Exercices
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-projector-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                     Projets
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">lien d'inscrire!</h5>
                <button  onClick={(e)=>submitHandler(e) }  className=" w-50 car__item-btn car__btn-rent">
            enregistrer
          </button>
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <img src={offre} alt="offre special" style={{width:"140px"}} class="animate__animated animate__heartBeat animate__infinite"/>
                <h5 className="mb-4 fw-bold ">Prix :<Input defaultValue={price} onChange={(e)=>setPrice(e.target.value)} />  Dt/Mois</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
        <TableRegistration inscription={inscription} />
  
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier la formation</ModalHeader>
          <ModalBody>{isvalid ? <> <h2>Succés</h2>
          La formation a été modifiée avec succès
          </>
            :
            <>Les données que vous avez saisi(e) n’est pas complet.S'il vous plaît, essayez de les compléter !</>}

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

export default FormationDetails;
