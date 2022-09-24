import React, { useEffect ,useState} from "react";
import { Container, Row, Col, Form, FormGroup,Button,Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams(); 
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  const [comment,setComment]= useState("");

 
  const submitHandler = async (e) => {
    e.preventDefault();
    if(comment)
    { 
    let formDataA= new FormData();
    formDataA.append("user",userInfo.username);
    formDataA.append("date",new Date().toDateString());
    formDataA.append("comment",comment);
    try {
      const  data  = await axios.post(`https://imntservice.herokuapp.com/api/blog/comment/${slug}`, 
      {user:userInfo.username,
        date:new Date().toDateString(),
        comment:comment}, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
      toggle();

    } catch (error) {
      toggle();
    }}
    else{
      toggle()}
}


const [blog,setBlog] = useState([])
const[titleblog,setTitle]= useState("");
const [author,setAuthor]= useState("");
const [imgUrl,setImgUrl]= useState();
const [date,setDate]= useState("");
const [time,setTime]= useState("");
const [description,setDescp]= useState("");
const [quote,setQuote]= useState("");
const [comments,setComments]= useState([]);
 
useEffect(() => {
  

  const fetchData = async () => {
    
      
    try {
      const result = await axios.get(`https://imntservice.herokuapp.com/api/blog/${slug}`);
      setBlog(result.data);
      setImgUrl(result.data.imgUrl);
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

const[blogData,setBlogData]=useState([]);
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

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={titleblog}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={imgUrl} alt="" className="w-100" />
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

                <p className="section__description">{description}</p>
                <p className="section__description">{quote}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">Commentaires</h4>
                {comments.map((item) => (
                <div className="single__comment d-flex gap-3">
                  <i class="ri-user-fill"></i>
                  <div className="comment__content">
                    <h6 className=" fw-bold">{item.c_user}</h6>
                    <p className="section__description mb-0" style={{fontSize:"12px"}}>{item.c_date}</p>
                    <p className="section__description">{item.c_comment}
                    </p>
                  </div>
                </div> ))}

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Laisser un commentaire</h4>
                  {!userInfo ? (<> <p className="section__description">
                  Vous devez vous connecter pour commenter une publication
                  </p></>):<></>}

                  <Form>
                    {userInfo ? (<>          
                    <FormGroup>
                      <textarea
                      onChange={(e)=>setComment(e.target.value)}
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="commentaire..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3" onClick={(e)=>submitHandler(e)}>
                    Publier un commentaire
                    </button>
                    </>
                    
                ) : (<><button className="btn comment__btn mt-3" >
                      <Link to="/login" className=" d-flex align-items-center gap-1" style={{color:'white',textDecoration:'none'}}>
                  <i class="ri-login-circle-line"></i> Connecter
                </Link></button></>
                )}
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Articles récents</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item._id}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modifier la formation</ModalHeader>
          <ModalBody><> <h2>Succés</h2>
          La Commentaire a été publiée avec succès
          </>
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

export default BlogDetails;
