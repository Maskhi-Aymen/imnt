import { useState, useEffect} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Container, Table ,Tooltip,Button ,Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import 'animate.css';
import axios from 'axios';
import CommonSection from "./CommonSection";
import Helmet from "../Helmet/Helmet";

export default function TableBlog() {
  const userId=JSON.parse(localStorage.getItem("userInfo"))._id;

  const [isvalid, setisvalid] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle2 = () => setModal(!modal);

  const[blogData,setBlogData]=useState([]);
  const navigate= useNavigate();
  useEffect(() => {
   
   if(!localStorage.getItem("userInfo")) {
     navigate('/');
       }
     if(localStorage.getItem("userInfo")) {
     if(!JSON.parse(localStorage.getItem("userInfo")).admin){
       navigate('/');
     }}
 },[navigate]) 

  useEffect(() => {
    const fetchData = async () => {  
      try {
        const result = await axios.get(`https://imntservice.herokuapp.com/api/blog/getall`);
        setBlogData(result.data)

      } catch(err) {
        console.log("Error!");
      }
      
    }
    fetchData();

  },[])

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`https://imntservice.herokuapp.com/api/blog/${userId}/${id}`, {
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
  return (
    <Helmet title="Administration">
      <section className="banner" id="home">
        <CommonSection title="Administration Blogs" />
        <Container>
          <center><div className="mb-5">
        <Link to={`/admin/newblog`} style={{ fontSize: "24px", textDecoration: "none", color: "#E80000", marginLeft: "10px" }}>
           <i class="ri-add-line"></i>Ajouter une Blog
        </Link></div></center>
          <Table responsive><thead>
            <tr>
              <th>
                Titre
              </th>
              <th>
               Auteur
              </th>
              <th>
                Date
              </th>
              <th>
                Heure
              </th>
              <th>
                Action
              </th>
            </tr>
          </thead><tbody>
              {blogData.filter((val) => {
                return val._id;
              }).map((item) => (
                <>   <tr>
                  <th scope="row">
                    {item.title}
                  </th>
                  <td>
                    {item.author}
                  </td>
                  <td>
                    {item.date}
                  </td>
                  <td>
                    {item.time}
                  </td>
                  <td>
                    {item.date}
                  </td>
                  <td>
                  <Link to={`/admin/blog/${item._id}`} style={{ fontSize: "24px", textDecoration: "none", color: "#E80000",marginLeft:"10px" }}id='modify'>
                      <i class="ri-edit-box-line" ></i>
                    </Link>
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
