import React,{ useState } from "react";
import { Container, Table, Button ,Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import 'animate.css';
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function TableRegistration({inscription}) {
  const userId=JSON.parse(localStorage.getItem("userInfo"))._id;
  const { slug } = useParams();
 const [isvalid, setisvalid] = useState(false);
 const [modal, setModal] = useState(false);
 const toggle2 = () => setModal(!modal);
  
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`https://imntservice.herokuapp.com/api/formations/inscription/${userId}/${slug}/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
      setisvalid(true);
      toggle2();

    } catch (error) {
      console.log(error);

    }
  }
  const ValidHandler = async (id) => {
    try {
      const { data } = await axios.put(`https://imntservice.herokuapp.com/api/formations/inscription/${userId}/${slug}/${id}`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
      window.location.reload(true)

    } catch (error) {
      console.log(error);

    }
  }

const lien="https://imntservice.herokuapp.com/api/formations/excel/"+userId+"/"+slug

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (<>
      <section className="banner" id="home">
        <Container>
         <center><a href={lien}> <Button >Télécharger version Excel</Button></a></center>
         <center> <h2>Liste pré-inscription</h2></center>
          <Table responsive><thead>
            <tr>
            <th>
                Nom
              </th>
              <th>
                Prénom
              </th>
              <th>
                Date d'inscrit
              </th>
              <th>
                Num Tél
              </th>
              <th>
                E-mail
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead><tbody>
              {inscription?.filter((val) => {
                return !val.f_valid;
              }).map((item) => (
                <>   <tr>
                  <th scope="row" key={item._id}>
                    {item.f_name}
                  </th>
                  <td>
                    {item.f_lastname}
                  </td>
                  <td>
                    {item.f_date}
                  </td>
                  <td>
                    {item.f_tel}
                  </td>
                  <td>
                    {item.f_email}
                  </td>
                  <td>
                  <button onClick={(e) => ValidHandler(item._id)} style={{ fontSize: "24px", border: 'transparent', backgroundColor: "transparent", color: "#E80000", marginLeft: "10px" }} id='delete'>
                  <i class="ri-checkbox-line"></i>
                    </button>
                    <button onClick={(e) => deleteHandler(item._id)} style={{ fontSize: "24px", border: 'transparent', backgroundColor: "transparent", color: "#E80000", marginLeft: "10px" }} id='delete'>
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
      <section className="banner" id="home">
        <Container>
        <center> <h2>Liste d'inscription Validée</h2></center>
          <Table responsive><thead>
            <tr>
            <th>
                Nom
              </th>
              <th>
                Prénom
              </th>
              <th>
                Date d'inscrit
              </th>
              <th>
                Num Tél
              </th>
              <th>
                E-mail
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead><tbody>
              {inscription?.filter((val) => {
                return val.f_valid;
              }).map((item) => (
                <>   <tr>
                  <th scope="row" key={item._id}>
                    {item.f_name}
                  </th>
                  <td>
                    {item.f_lastname}
                  </td>
                  <td>
                    {item.f_date}
                  </td>
                  <td>
                    {item.f_tel}
                  </td>
                  <td>
                    {item.f_email}
                  </td>
                  <td>
                    <button onClick={(e) => deleteHandler(item._id)} style={{ fontSize: "24px", border: 'transparent', backgroundColor: "transparent", color: "#E80000", marginLeft: "10px" }} id='delete'>
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
          L'inscription a été supprimée avec succès
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
</>
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