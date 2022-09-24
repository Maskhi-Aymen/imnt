import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <div style={{height:"140px"}}>
      <p className="section__description" >
Mon expérience à IMNT a été parfaite. C’est un parcours très enrichissant avec des instructeurs compétents. J’ai appris plein de nouvelles compétences en intelligence artificielle.
     </p></div>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Rania Fatnassi</h6>
            <p className="section__description">Etudiante en FullStack JS</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div style={{height:"140px"}}>
      <p className="section__description">
Avant de rejoindre IMNT, je travaillais dans une entreprise où je n’étais pas réellement épanoui, 
je voulais à tout prix chercher une autre opportunité même dans un domaine différent du mien.
   </p></div>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Farah Mahmoud</h6>
            <p className="section__description">Etudiante en Intelligence Artificielle</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div style={{height:"140px"}}>
      <p className="section__description">
Ma formation à IMNT s’est très bien passée.
 L’espace, l'équipe d’instructeurs ainsi que tout le cadre de travail nous prépare à rejoindre la vie professionnelle
        </p></div>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Marwen Abidi</h6>
            <p className="section__description">Développeur à Talan</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
 
 <div style={{height:"140px"}}>       <p className="section__description">
        Je suis ingénieure en informatique. J’ai décidé de rejoindre IMNT pour découvrir de nouveaux horizons. J’ai adoré mon expérience avec les instructeurs. Ils ont une méthode d’enseignement unique, très différente de la méthode classique
     </p></div>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
