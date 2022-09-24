import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link} from "react-router-dom";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <p className="pubfind">
        Nous formons la prochaine génération tech aux technologies les plus récentes et aux métiers du futur pour les préparer au monde professionnel et renforcer leur employabilité.
        </p>
      </div> 
    </Form>
  );
};

export default FindCarForm;
