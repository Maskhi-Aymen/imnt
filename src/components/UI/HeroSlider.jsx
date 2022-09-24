import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import 'animate.css';
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  return (

    <div className="slider__item slider__item-01 mt0">
      <Container className="bg2" >
        <div className="slider__content" >
        <h1 className="text-light" > &nbsp;</h1>
          <button className="btn reserve__btn mt-4 bottomright" >
            <Link to="/formation">Commencer </Link>
          </button>
        </div>
      </Container>
    </div>

  );
};

export default HeroSlider;
/*
<div className="sliderhero">
              <h1 className="text-light mb-4" >Chez l'Institut Méditerranéen des Nouvelles Technologies</h1>
              <h5 className="text-light mb-3">Avec ou Sans bac, préparez votre avenir dès maintenant !</h5>
            <button className="btn reserve__btn mt-4">
              <Link to="/formation">commencer maintenant</Link>
            </button>
*/