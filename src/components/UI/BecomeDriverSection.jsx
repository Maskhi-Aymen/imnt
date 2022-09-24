import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import img1 from '../../assets/all-images/galerie-img/imnt1.jpg';
import img4 from '../../assets/all-images/galerie-img/imnt4.jpg';
import img2 from '../../assets/all-images/galerie-img/imnt2.jpg';
import img5 from '../../assets/all-images/galerie-img/imnt5.jpg';
import img6 from '../../assets/all-images/galerie-img/imnt6.jpg';
import img7 from '../../assets/all-images/galerie-img/imnt7.jpg';
import img8 from '../../assets/all-images/galerie-img/imnt8.jpg';
import img9 from '../../assets/all-images/galerie-img/imnt9.jpg';
import img10 from '../../assets/all-images/galerie-img/imnt10.jpg';
import img11 from '../../assets/all-images/galerie-img/imnt11.jpg';


const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      < Container>
        <Row> <h2 className="section__title text-center mb-5">Notre Galerie</h2>
        <div class="grid-container">           
             
          <div class="grid-item">
            <img src={img1} alt="galerie" />
          </div>
          <div class="grid-item">
          <img src={img2} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img5} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img6} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img10} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img8} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img9} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img7} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img11} alt="galerie"  />
          </div>
          <div class="grid-item">
          <img src={img4} alt="galerie"  />
          </div>
         </div>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
