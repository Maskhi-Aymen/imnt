import React, { useEffect ,useState} from "react";
import { Container, Row, Col, Form, FormGroup, Input,Button,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaRegUser } from "react-icons/fa";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { useNavigate } from "react-router-dom";
import "../styles/blog-details.css";

const BlogAdmin = () => {
  const userId=JSON.parse(localStorage.getItem("userInfo"))._id;
const { slug } = useParams();
const [blog,setBlog] = useState([])
  
  const [isvalid, setisvalid] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const[titleblog,setTitle]= useState("");
  const [author,setAuthor]= useState("");
  const [date,setDate]= useState("");
  const [time,setTime]= useState("");
  const [description,setDescp]= useState("");
  const [quote,setQuote]= useState("");
  const [comments,setComments]= useState([]);


  const deleteHandler = async (id) => {
    try {
      const data  = await axios.delete(`http://localhost:5000/api/blog/comment/${userId}/${slug}/${id}`,{
        headers: { 
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
      setisvalid(true);
      toggle();
    } catch (error) {
      console.log(error);

    }
  }

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

  
  const submitHandler = async (e) => {
    e.preventDefault();
    if(titleblog && author &&time && date  &&quote  && description)
    {
    setisvalid(true)  
    let formData= new FormData();
    formData.append("title",titleblog);
    formData.append("date",date);
    formData.append("author",author);
    formData.append("quote",quote);
    formData.append("time",time);
    formData.append("description",description);
    try {

      const  data  = await axios.put(`http://localhost:5000/api/blog/${userId}/${slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": "Bearer "
        }
      }) ;
      toggle();

    } catch (error) {
      setisvalid(false);
      toggle();
    }}
    else{
      setisvalid(false);
      toggle()}
}




 
useEffect(() => {
  

  const fetchData = async () => {
    
      
    try {
      const result = await axios.get(`http://localhost:5000/api/blog/${slug}`);
      setBlog(result.data)
      setDate(result.data.date);
      setTitle(result.data.title);
      setTime(result.data.time);
      setDescp(result.data.description);
      setAuthor(result.data.author);
      setQuote(result.data.quote);
      setComments(result.data.comments);
      

      
    } catch(err) {
      console.log("Error!");
    }
    
  }
  fetchData();
  window.scrollTo(0,0);
},[])

  return (
    <Helmet title={titleblog}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{titleblog}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line"></i> {author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {time}
                  </span>
                </div>

                <p className="section__description"><Input defaultValue={description} onChange={(e)=>setDescp(e.target.value)} type='textarea' Row={45}/></p>
                <p className="section__description"><Input defaultValue={quote} onChange={(e)=>setQuote(e.target.value)} type='textarea' Row={45}/></p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">Commentaires</h4>
                {comments?.map((item) => (
                <div className="single__comment d-flex gap-3">
                  <i class="ri-user-fill"></i>
                  <div className="comment__content">
                    <h6 className=" fw-bold">{item.c_user}</h6>
                    <p className="section__description mb-0">{item.c_date}</p>
                    <p className="section__description">{item.c_comment}
                    </p>
                  </div><i onClick={()=>deleteHandler(item._id) } class="ri-eraser-line"  style={{ fontSize: "20px", textDecoration: "none", color: "#E80000",marginLeft:"10px" }}id='delete' ></i>
                </div> ))}

                              {/* =============== comment form ============ */}
               <div className="leave__comment-form mt-5">

                  <Form>
                  <button  onClick={(e)=>submitHandler(e) }  className=" w-50 car__item-btn car__btn-rent">
            enregistrer
          </button>
                
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier le Blog</ModalHeader>
          <ModalBody>{isvalid ? <> <h2>Succés</h2>
          La Blog a été modifiée avec succès
          </>
            :
            <>Les données que vous avez saisi(e) n’est pas complet.S'il vous plaît, essayez de les compléter !</>}

          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor:'#E2001A'}} onClick={()=>{toggle();window.location.reload(true)}}>
              Fermer
            </Button>
          </ModalFooter>
        </Modal>
    </Helmet>
  );
};

export default BlogAdmin;
