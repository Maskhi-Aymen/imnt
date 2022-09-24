import React from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/FormationItem";
import 'animate.css';
import { useState,useEffect } from "react";


const FormationListing = () => { 
   const[carData,setCarData]=useState([]);

   
 useEffect(() => {
  const fetchData = async () => {
    
      
    try {
      const result = await axios.get(`http://localhost:5000/api/formations/getall`);
      setCarData(result.data)
    } catch(err) {
      console.log("Error!");
    }
    
  }
  fetchData();

},[])
  return (
    <Helmet title="Formations">
      <CommonSection title="Nos Formations" />

      <section>
        <Container>
          <Row>
          <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Nos formations </h6>
              <h2 className="section__title">Continues</h2>
            </Col>

            {carData.filter((val) => {
              return val.type==="continue" ;
            }).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
          <Row>
          <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Nos formations </h6>
              <h2 className="section__title">Diplomantes Homologées</h2>
            </Col>

            {carData.filter((val) => {
              return val.type==="diplomante" ;
            }).map((item) => (
              <CarItem item={item} key={item._id} />
            ))}

          
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FormationListing;
