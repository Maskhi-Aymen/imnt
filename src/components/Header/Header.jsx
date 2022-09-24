import React, { useRef, useState,useEffect } from "react";
import logo from "../../assets/all-images/logo.png";
import {Container, Col, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import { Link, NavLink} from "react-router-dom";
import "../../styles/header.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const navLinks = [
  {
    path: "/home",
    display: "Acceuil",
  },
  {
    path: "/about",
    display: "Services",
  },
  {
    path: "/formation",
    display: "Formations",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contacter",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const [admin, setadmin] = useState(false);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    toast.success('You have successfully logged out!');
    window.location.reload(true);
}

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  useEffect(() => {
    if(localStorage.getItem("userInfo")) {
      if(JSON.parse(localStorage.getItem("userInfo")).admin){
      setadmin(true)}
    }
  }, [])
  return (
    <header className="header">

      {/* ========== main navigation =========== */}

      <div className="main__navbar" style={{ }}>
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
              <span >
              {userInfo ? (<><span style={{color:'#E2001A',marginLeft:"140px",fontSize:"22px"}}>{userInfo?.username}</span>
                    <button onClick={logoutHandler} style={{color:'#E2001A',marginLeft:"130px",fontSize:"12px",backgroundColor:"transparent",border:"transparent"}}><i class="ri-arrow-left-circle-line"></i></button>
               </> ) : (<>
                  <Link to="/login" className="social-icon" style={{ fontSize: "20px",marginLeft:"300px" }} id="butt">
                    <i class="ri-user-line" ></i>
                  </Link></>)}</span>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                <Col lg="4" md="3" sm="6">
                  <div className="logo">
                    <h1>
                      <Link to="/home" className=" d-flex align-items-center gap-2">
                        <img src={logo} alt='Logo' style={{ width: '250px' }} />
                      </Link>
                    </h1>
                  </div>
                </Col>
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" }}
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
                {(admin) ? (<>


                  <UncontrolledDropdown nav inNavbar style={{listStyleType:"none"}} >
                    <DropdownToggle nav caret className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" ,color:"#E80000"}}>
                      Administration
                    </DropdownToggle>
                    <DropdownMenu right >
                      <DropdownItem id="dropitem"> <NavLink to="/admin/formation"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" }} key="6">Formations</NavLink></DropdownItem>
                     <DropdownItem id="dropitem"><NavLink to="/admin/blog"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    style={{ fontSize: "17px", fontFamily: "Montserrat" }} key="6">Blogs</NavLink></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown></>) : (<></>)}
              </div>
            </div>

            <div className="nav__right">
              <Col lg="6" md="6" sm="6">
                <div className="header__top__right d-flex align-items-center justify-content-end gap-3" >
                <span style={{color:'#E2001A'}}>{userInfo?<i className=" ri-user-line"></i>:<></>}{userInfo?.username}</span>
                {userInfo ? (
                    <button onClick={logoutHandler} style={{color:'#E2001A',fontSize:"22px",backgroundColor:"transparent",border:"transparent"}}><i class="ri-arrow-left-circle-line"></i></button>
                ) : (<>
                  <Link to="/login" className="social-icon" style={{ fontSize: "20px" }} id="butt">
                    <i class="ri-user-line" ></i>
                  </Link></>)}
                </div>
              </Col>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
