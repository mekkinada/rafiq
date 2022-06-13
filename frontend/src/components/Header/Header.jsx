  

 import React, { Component } from 'react';
 import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';

import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav ,NavDropdown,Image,Form} from "react-bootstrap";
import SearchModal from "./SearchModal";
import { logout } from './../../actions/userActions';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Header.css'; 


const Header = () => {

    



    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    const   componentDidMount= () => {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("menu-shrink");
                elem.classList.add("fixed-top");
            } else {
                elem.classList.remove("menu-shrink");
                elem.classList.remove("fixed-top");
            }
        });
        window.scrollTo(0, 0);
        
    
    }

    const  closeNavbar= () => {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
  



    return (
        <React.Fragment>
            {/* Start Top Header */}
            <div className="top-header ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="address-bar">
                               
                                  <i class="fa fa-envelope text-success "/>     rafiq.e2c@gmail.com
                                  </div>

                                  <div className="address-bar">
                               
                                 <i class="fa fa-phone text-success " />     + 216 93 216 782 || + 216 93 231 763
        
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="social-icons">
                                <ul className="list-inline   ">
                   <li><a href="https://www.youtube.com/channel/UCcRvJvkKJlTd2x8JBjrUevw" rel="noopener noreferrer" target="_blank">
                     <i className="fab fab fa-youtube text-success  fa-fw" i/>  </a></li>


                   <li><a href="https://bit.ly/3wkuKCd" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook text-success  fa-fw "/></a></li>
                   

                   <li><a href="https://twitter.com/E2cRafiq" rel="noopener noreferrer" target="_blank"><i class="fab fa-twitter text-success fa-fw"/></a></li>

                   <li><a href="https://www.instagram.com/rafiq.ecole.2eme.chance/" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram text-success fa-fw"/></a></li>

                  <li><a href="https://www.tiktok.com/@rafiq.e2c" rel="noopener noreferrer" target="_blank"><i class="fab fa-tiktok  text-success fa-fw"/></a></li>

                                </ul>

                            </div>
                      <div className="header-search" variant="primary">
                        <SearchModal />
                         </div>
                         
                        </div>
                    </div>

                  
                </div>
                
            </div>
            {/* End Top Header */}

            <Navbar
                id="navbar"
                bg="light"
                expand="xxl" 
                className="navbar navbar-expand-md navbar-light  "
                collapseOnSelect={true}
            >
                     <LinkContainer to="/">
                
                <Navbar.Brand className="nav-cal" >
                    <Image width="80px"src="/logo-final.jpg" />
                </Navbar.Brand>


            </LinkContainer>
                <Container >
                   

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse 
                        id="navbarSupportedContent"
                    >
             
             <Nav class="navbar navbar-expand-sm bg-light navbar-light" >

                    <LinkContainer to="/">
                    <Nav.Link className="nav-cal">الصفحة الرئيسية</Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/etablissement">
                    <Nav.Link className="nav-cal">	مؤسستنا</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/services">
                    <Nav.Link className="nav-cal">خدماتنا</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/activities">
                    <Nav.Link className="nav-cal">أنشطتنا </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="registerstudent?redirect=student">
                     <Nav.Link className="nav-cal">التسجيل </Nav.Link>
                      </LinkContainer>
                    {
                        userInfo ? (
                            <NavDropdown    title={userInfo.name.toUpperCase() } >
                                {
                                    userInfo && userInfo.isAdmin && (
                                        <LinkContainer to='/admin/dashboard'>
                                            <NavDropdown.Item >لوحة القيادة</NavDropdown.Item>
                                        </LinkContainer>
                                    )
                                }
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item  >الملف الشخصي</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to='/login'>
                                    <NavDropdown.Item    onClick={logoutHandler}>تسجيل خروج</NavDropdown.Item>
                                </LinkContainer>

                            </NavDropdown>
                        ) : (

                     <div className="header-icon" variant="primary">
                    <LinkContainer to="/login" >
                    <BottomNavigationAction name="arrow-right"  
                                            icon=  {  < AccountCircleIcon />}  
                                            label="login"   
                                            title="special registration"   >
                    </BottomNavigationAction>
                    </LinkContainer>
                    </div>  
            

                            )
                    }
                    {
                        userInfo && userInfo.isAdmin && (
                            <NavDropdown  title="ADMIN">
                                <LinkContainer to='/admin/userlist'>
                                    <NavDropdown.Item >المستخدمون</NavDropdown.Item>
                                </LinkContainer>
                             
                            </NavDropdown>
                        )
                    }
                        </Nav>
                    </Navbar.Collapse>
                    




                </Container>
            </Navbar>
        </React.Fragment>
    );
  
}


export default Header;
