import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import offre from '../assets/all-images/offer.png';
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import 'animate.css';

const CarDetails = () => {
  const { slug } = useParams();
  const[id,setId]= useState("");
  const[title,setTitle]= useState("");
  const [participant,setPart]= useState("");
  const[imgUrl,setImg]= useState();
  const [price,setPrice]= useState("");
  const [formateur,setFormateur]= useState("");
  const [lieu,setLieu]= useState("");
  const [duration,setDuration]= useState("");
  const [time,setTime]= useState("");
  const [description,setDescp]= useState("");

  useEffect(() => {
  

    const fetchData = async () => {
            
      try {
        const result = await axios.get(`https://imntservice.herokuapp.com//api/formations/${slug}`);
        setDuration(result.data.duration);
        setTitle(result.data.title);
        setId(result.data._id)
        setImg(result.data.imgUrl)
        setTime(result.data.time);
        setDescp(result.data.description);
        setPart(result.data.participant);
        setFormateur(result.data.formateur);
        setLieu(result.data.lieu);
        setPrice(result.data.price);
        
      } catch(err) {
        console.log("Error!");
      }
    }
    fetchData();
    window.scrollTo(0,0);
  },[slug])



  return (
    <Helmet title={title}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{title}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    Animée par: {formateur} 
                  </h6>

                  <span className=" d-flex align-items-center gap-2"><i class="ri-nurse-fill"></i>
                    {participant} participants
                  </span>
                </div>

                <p className="section__description">
                  {description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description" style={{fontFamily:"Poppins",fontWeight:"bold",fontSize:"15px" }}>
                  <i class="ri-map-pin-line" style={{ color: "#707173"}}></i>{" "}
                    {lieu}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description" style={{fontFamily:"Poppins",fontWeight:"bold",fontSize:"15px" }}>
                    <i
                      class="ri-timer-line"
                      style={{ color: "#707173"}}
                    ></i>{" "}
                    {time}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description" style={{fontFamily:"Poppins",fontWeight:"bold",fontSize:"15px" }}>
                  <i
                      class="ri-calendar-todo-fill"
                      style={{ color: "#707173"}}
                    ></i>{" "}
                    {duration}
                 
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description" style={{fontFamily:"Poppins",fontWeight:"bold",fontSize:"15px" }}>
                  <i
                      class="ri-book-mark-line"
                      style={{ color: "#707173"}}
                    ></i>{" "}
                    Chapitres+Exercices
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description" style={{fontFamily:"Poppins",fontWeight:"bold",fontSize:"15px" }}>
                    <i
                      class="ri-projector-2-line"
                      style={{ color: "#707173"}}
                    ></i>{" "}
                    Des Projets
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold mt-7" style={{fontSize:'36px',fontFamily:"Poppins"}}>Inscrire Maintenant!</h5>
                <button className=" w-50 car__item-btn car__btn-rent" onClick={()=>{window.localStorage.setItem('title',title)}}>
            <Link to={`/inscription/`+id}>s'inscrire</Link>
          </button>
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <img src={offre} style={{width:"140px"}} class="animate__animated animate__heartBeat animate__infinite"/>
                <h5 className="mb-4 fw-bold ">Seulment pour {price} Dt/Mois</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
