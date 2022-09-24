import React,{ useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Container, Table, Tooltip, Button ,Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import 'animate.css';
import axios from 'axios';
import CommonSection from "./CommonSection";
import Helmet from "../Helmet/Helmet";

export default function TableFormation() {
 const[carData,setCarData]=useState([]);
 const userId=JSON.parse(localStorage.getItem("userInfo"))._id;

 const [isvalid, setisvalid] = useState(false);
 const [modal, setModal] = useState(false);
 const toggle2 = () => setModal(!modal);

 const navigate= useNavigate();
 useEffect(() => {
  
  if(!localStorage.getItem("userInfo")) {
    navigate('/');
      }
    if(localStorage.getItem("userInfo")) {
    if(!JSON.parse(localStorage.getItem("userInfo")).admin){
      navigate('/');
    }}
},[]) 
 
 
 useEffect(() => {
    const fetchData = async () => {
      
        
      try {
        const result = await axios.get(`https://imntservice.herokuapp.com//api/formations/getall`);
        setCarData(result.data)

      } catch(err) {
        console.log("Error!");
      }
      
    }
    fetchData();

    
  

  },[navigate])

  const deleteHandler = async (id) => {


    try {
      const { data } = await axios.delete(`https://imntservice.herokuapp.com//api/formations/formation/${userId}/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "
        }
      });
      setisvalid(true);
      toggle2();

    } catch (error) {
      console.log(error);

    }
  }


  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Helmet title="Administration">
      <section className="banner" id="home">
        <CommonSection title="Administration Formation" />
      
        <Container>
           
           <Link to={`/admin/newformation`} style={{ fontSize: "20px", textDecoration: "none", color: "#E80000", marginLeft: "10px" }}>
           <i class="ri-add-line"></i>Ajouter une formation
        </Link>
          <Table responsive><thead>
            <tr>
            <th>
                Title
              </th>
              <th>
                Type
              </th>
              <th>
                Durée
              </th>
              <th>
                Prix
              </th>
              <th>
                Formateur
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead><tbody>
              {carData.filter((val) => {
                return val.type;
              }).map((item,key) => (
                <>   <tr>
                  <th scope="row" key={key}>
                    {item.title}
                  </th>
                  <td>
                    {item.type}
                  </td>
                  <td>
                    {item.duration}
                  </td>
                  <td>
                    {item.price}
                  </td>
                  <td>
                    {item.formateur}
                  </td>
                  <td>
                    <Link to={`/admin/formation/${item._id}`} style={{ fontSize: "20px", textDecoration: "none", color: "#E80000", marginLeft: "10px" }} id='modify'>
                      <i class="ri-edit-box-line" ></i>
                    </Link>
                    <button onClick={(e) => deleteHandler(item._id)} style={{ fontSize: "20px", border: 'transparent', backgroundColor: "transparent", color: "#E80000", marginLeft: "10px" }} id='delete'>
                      <i class="ri-eraser-line" ></i>
                    </button>
                  </td>
                </tr>
                </>
              ))}

            </tbody>
          </Table>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Modifier la formation</ModalHeader>
          <ModalBody>{isvalid ? <> <h2>Succés</h2>
          La formation a été supprimée avec succès
          </>
            :
            <>Les données que vous avez saisi(e) n’est pas complet.S'il vous plaît, essayez de les compléter !</>}

          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle2();window.location.reload(true)}}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>

    </Helmet>
  )
}


/*  if(!localStorage.getItem("userInfo")) {
      navigate('/login');
    }


    
      <Tooltip
        isOpen={tooltipOpen}
        target="modify"
        toggle={toggle}
      >
        modifier
      </Tooltip>
      <Tooltip
        isOpen={tooltipOpen}
        target="delete"
        toggle={toggle}
      >
        supprimer
      </Tooltip>

    */