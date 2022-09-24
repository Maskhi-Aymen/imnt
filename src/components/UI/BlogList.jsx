import React from "react";
import { Col } from "reactstrap";
import { useState,useEffect } from "react";
import axios from "axios";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";

const BlogList = () => {
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
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item._id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time,_id } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="blog_img" className="blog_img"/>
        <div className="blog__info p-3">
          <div style={{height:"40px"}}>
          <Link to={`/blogs/${_id}`} className="blog__title">
            {title} 
          </Link></div>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${_id}`} className="read__more">
          Lire la suite
          </Link>

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i class="ri-user-line"></i> {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-calendar-line"></i> {date}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i class="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
