import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  ); 
};

const ServiceItem = ({ item }) => (
  <Col lg="6" md="4" sm="6" className="mb-5">
    <div className="service__item">
      <span className="mb-3 ">

<center>
      <h6>{item.title}</h6></center>  
            <center>
        <i class={item.icon} /></center>
      </span>
      <p className="section__description" style={{fontSize:'17px',textAlign:"center"}}>{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;
