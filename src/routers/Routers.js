import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/FormationListing";
import CarDetails from "../pages/FormationDetails";
import Blog from "../pages/Blog";
import NewFormation from '../pages/NewFormation';
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import TableFormation from "../components/UI/TableFormation";
import FormationAdmin from "../pages/FormationAdmin";
import TableBlog from "../components/UI/TableBlog";
import Policy from "../pages/Policy";
import BlogAdmin from "../pages/BlogAdmin";
import NewBlog from '../pages/NewBlog';
import BookingForm from "../components/UI/BookingForm";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/formation" element={<CarListing />} />
      <Route path="/formation/:slug" element={<CarDetails />} />
      <Route path="/inscription/:slug" element={<BookingForm />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/formation" element={<TableFormation />} />
      <Route path="/admin/newformation" element={<NewFormation/>} />
      <Route path="/admin/newblog" element={<NewBlog/>} />
      <Route path="/admin/formation/:slug" element={<FormationAdmin />} />
      <Route path="/admin/blog" element={<TableBlog />} />
      <Route path="/admin/blog/:slug" element={<BlogAdmin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
