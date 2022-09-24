import React, { useEffect ,useState} from "react";
import { useNavigate} from "react-router-dom";
import offre from '../assets/all-images/offer.png';
import axios from 'axios';
import { Container,Button, Row, Col ,Input,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import 'animate.css';

const NewFormation= () => {

  const userId=JSON.parse(localStorage.getItem("userInfo"))._id;

  const [isvalid, setisvalid] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const[type,setType]= useState("continue");
  const[title,setTitle]= useState("");
  const [participant,setPart]= useState("");
  const[imgUrl,setImg]= useState();
  const [price,setPrice]= useState("");
  const [formateur,setFormateur]= useState("");
  const [lieu,setLieu]= useState("");
  const [duration,setDuration]= useState("");
  const [time,setTime]= useState("");
  const [description,setDescp]= useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if(title && type &&participant && time &&imgUrl && price &&formateur && lieu && duration && description)
    {
    setisvalid(true)  
    let formData= new FormData();
    formData.append("img",imgUrl);
    formData.append("imgUrl","https://imntservice.herokuapp.com/uploads/"+imgUrl.name);
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

      const  data  = await axios.post(`https://imntservice.herokuapp.com/api/formations/add/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "
        }
      });toggle();

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
   
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Nouvelle Formation">
      <section>
        <Container>
          <Row>
            <Col lg="6">
            <i class="ri-image-add-line" style={{fontSize:"255px",color:"#E2001A",marginLeft:"100px"}}></i>
              <Input type="file" onChange={(e)=>imgHandler(e)} accept ="image/*"  id="file"/>
            </Col>

            <Col lg="6">
              <div className="car__info">
              <UncontrolledDropdown nav inNavbar style={{listStyleType:"none"}} >
                    <DropdownToggle nav caret className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" ,color:"#E80000"}}>
                      {type}
                    </DropdownToggle>
                    <DropdownMenu right >
                      <DropdownItem id="dropitem"> <h2 onClick={()=>setType("continue")}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" }} key="6">Continue</h2></DropdownItem>
                     <DropdownItem id="dropitem"><h2 onClick={()=>setType("diplomante")}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" }} key="6">Diplomante</h2></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>



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
                <button  onClick={(e)=>submitHandler(e) }  className=" w-50 car__item-btn car__btn-rent" style={{color:'white'}}>
            enregistrer
          </button>
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <img src={offre} style={{width:"140px"}} alt="offre special" class="animate__animated animate__heartBeat animate__infinite"/>
                <h5 className="mb-4 fw-bold ">Prix :<Input defaultValue={price} onChange={(e)=>setPrice(e.target.value)} />  Dt/Mois</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Créer une formation</ModalHeader>
          <ModalBody>{isvalid ? <> <h2>Succés</h2>
          La formation a été enregistrée avec succès
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

export default NewFormation;
