import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/formation-item.css";
import 'animate.css';
const CarItem = (props) => {
  const { imgUrl, title, time, formateur, participant, duration, lieu ,_id} = props.item;

  return (

    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="image_formation" className="formation_item_img" />
        </div>
        <div className="car__item-content mt-4">
          <div style={{ height: "90px" }}>
            <h4 className="section__title text-center">{title}</h4>
          </div>
          <h6 className="rent__price text-center mt-">
            {participant}<span> <i class="ri-nurse-fill"></i></span>
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-calendar-todo-fill"></i> {duration}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {lieu}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent" onClick={()=>{window.localStorage.setItem('title',title)}}>
            <Link to={`/inscription/${_id}`}>s'inscrire</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/formation/${_id}`}>Détails</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
