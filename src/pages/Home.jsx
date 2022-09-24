import React from "react";
import { useState,useEffect } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import axios from "axios";
import CarItem from "../components/UI/FormationItem";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "CAP: Agent D'Entrepôt", "BTP: Formalités Douanières", "BTS: Logistique de Distribution" ];
  const period = 2000;
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  } 
   useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text,delta])


  const[carData,setCarData]=useState([]);
  useEffect(() => {
   const fetchData = async () => {
     
       
     try {
       const result = await axios.get(`https://imntservice.herokuapp.com/api/formations/getall`);
       setCarData(result.data) 
     } catch(err) {
       console.log("Error!");
     }
     
   }
   fetchData();
 
 },[])
  return (
    <Helmet title="Acceuil">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4" >
                <div className="find__cars-left">
                <h1 style={{color:"#E80000"}}>{`Learn`} <span className="tagline"><span className="txt-rotate" dataPeriod="1" 
                data-rotate='[ "Agent D Entrepôt", "Formalités Douanières", "Logistique de Distribution"  ]'><h2 className="wrap">{text}</h2></span></span></h1>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Notre</h6>
              <h2 className="section__title">Pédagogie</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== formations offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Démarrer</h6>
              <h2 className="section__title">Votre Parcours</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item._id} />
            ))}
          </Row>
        </Container>
      </section>  
      
      
          {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Nos clients disent</h6>
              <h2 className="section__title">Témoignages</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
  {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explorez nos blogs</h6>
              <h2 className="section__title">Derniers blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>   
         {/* =========== become a driver section ============ }*/}
      <BecomeDriverSection />
    </Helmet>
  );
};

export default Home;


/**

      */