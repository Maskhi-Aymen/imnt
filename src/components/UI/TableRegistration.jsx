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
      const { data } = await axios.delete(`http://localhost:5000/api/formations/inscription/${userId}/${slug}/${id}`,{
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


  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (<>
      <section className="banner" id="home">
        <Container>
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
              {inscription?.map((item) => (
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