import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {logout} from "../../actions";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Header({logout}) {

  var history = useHistory();
  function logout1(event) {
    event.preventDefault();
    logout();
    localStorage.clear();
    history.push("/")
  }

  let tabBar,tabBar1,tabBar2,tabBar3,logoutBtn,userSettings,contactUS,aboutUS;
  if(localStorage.getItem("role") === 'super_user')  {
    tabBar= (
                
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="font-weight-bold nav-link-inner--text">Customer List</span>
                    </DropdownToggle>      
                    <DropdownMenu>
                      <DropdownItem to="/customer-list" tag={Link}>
                        Customer List
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav> 
                )  

      // tabBar2= (
      //           <Nav className="navbar-nav-hover align-items-lg-center" navbar>
      //             <UncontrolledDropdown nav>
      //               <DropdownToggle nav>
      //                 <i className="ni ni-collection d-lg-none mr-1" />
      //                 <span className="font-weight-bold nav-link-inner--text">Bank Admin</span>
      //               </DropdownToggle>      
      //               <DropdownMenu>
      //                 <DropdownItem to="/bank-admin-list" tag={Link}>
      //                   Bank Admin List
      //                 </DropdownItem>
      //                 <DropdownItem to="/register-bank-admin" tag={Link}>
      //                   Register Bank Admin
      //                 </DropdownItem>
      //               </DropdownMenu>
      //             </UncontrolledDropdown>
      //           </Nav>   
      //           )
        // tabBar3= ( 
        //         <Nav className="navbar-nav-hover align-items-lg-center" navbar>
        //           <UncontrolledDropdown nav>
        //             <DropdownToggle nav>
        //               <i className="ni ni-collection d-lg-none mr-1" />
        //               <span className="font-weight-bold nav-link-inner--text">Reports</span>
        //             </DropdownToggle>      
        //             <DropdownMenu>
        //               <DropdownItem to="/report" tag={Link}>
        //                 Reports
        //               </DropdownItem>
        //             </DropdownMenu>
        //           </UncontrolledDropdown>
        //         </Nav>  
        //         ) 
         
  }else if (localStorage.getItem("role") === 'user'){
    // tabBar1= (  
    //   <Nav className="navbar-nav-hover align-items-lg-center" navbar>
    //     <UncontrolledDropdown nav>
    //       <DropdownToggle nav>
    //         <i className="ni ni-collection d-lg-none mr-1" />
    //         <span className="font-weight-bold nav-link-inner--text">Bank</span>
    //       </DropdownToggle>      
    //       <DropdownMenu>
    //         <DropdownItem to="/bank-list" tag={Link}>
    //           Bank List
    //         </DropdownItem>
    //         <DropdownItem to="/register-bank" tag={Link}>
    //           Register Bank
    //         </DropdownItem>
    //       </DropdownMenu>
    //     </UncontrolledDropdown>
    //   </Nav> 
    //   )
    // tabBar= (
    //             <Nav className="navbar-nav-hover align-items-lg-center" navbar>
    //               <UncontrolledDropdown nav>
    //                 <DropdownToggle nav>
    //                   <i className="ni ni-collection d-lg-none mr-1" />
    //                   <span className="font-weight-bold nav-link-inner--text">My Accounts List</span>
    //                 </DropdownToggle>
    //                 <DropdownMenu>
    //                   <DropdownItem to="/customer-registered-bank-list" tag={Link}>
    //                     My Accounts List
    //                   </DropdownItem>
    //                 </DropdownMenu>
    //               </UncontrolledDropdown>
    //             </Nav>                         
    //           )
    // tabBar1= (  
    //             <Nav className="navbar-nav-hover align-items-lg-center" navbar>
    //               <UncontrolledDropdown nav>
    //                 <DropdownToggle nav>
    //                   <i className="ni ni-collection d-lg-none mr-1" />
    //                   <span className="font-weight-bold nav-link-inner--text">Transfer Fund</span>
    //                 </DropdownToggle>      
    //                 <DropdownMenu>
    //                 <DropdownItem to="/transfer-money" tag={Link}>
    //                     Transfer Fund To My Accounts
    //                   </DropdownItem>
    //                   <DropdownItem to="/transfer-money-all" tag={Link}>
    //                     Transfer Fund To Other User Accounts
    //                   </DropdownItem>
    //                 </DropdownMenu>
    //               </UncontrolledDropdown>
    //             </Nav> 
    //             )

  }
  // else if (localStorage.getItem("role") === 'bank_admin'){
  //   tabBar= (    
  //     <Nav className="navbar-nav-hover align-items-lg-center" navbar>
  //       <UncontrolledDropdown nav>
  //         <DropdownToggle nav>
  //           <i className="ni ni-collection d-lg-none mr-1" />
  //           <span className="font-weight-bold nav-link-inner--text">Customer List</span>
  //         </DropdownToggle>      
  //         <DropdownMenu>
  //           <DropdownItem to="/customer-list" tag={Link}>
  //             Customer List
  //           </DropdownItem>
  //         </DropdownMenu>
  //       </UncontrolledDropdown>
  //     </Nav> 
  //     )  
  // }

if (localStorage.getItem("role") != null){
  logoutBtn=(
    <Nav className="align-items-lg-center ml-lg-auto" navbar>
    <NavItem className="d-none d-lg-block ml-lg-4">
      <span className="mb-0 text-white  font-weight-bold">{localStorage.getItem("firstname")} &nbsp; {localStorage.getItem("lastname")}&nbsp;</span>&nbsp;
      <Button
        className="btn btn-warning"
        onClick={logout1}
      >
          Logout
      </Button>
    </NavItem>
  </Nav>
  )
  userSettings= (
    <Nav className="navbar-nav-hover align-items-lg-center" navbar>
      <UncontrolledDropdown nav>
        <DropdownToggle nav>
          <i className="ni ni-collection d-lg-none mr-1" />
          <span className="font-weight-bold nav-link-inner--text">User Settings</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem to={"/register/"+localStorage.getItem('userid')} tag={Link}>
            Edit Profile
          </DropdownItem>
          <DropdownItem to="/changePassword" tag={Link}>
          Change Password
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>                         
  )
}else{
  contactUS=(
  <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
  <UncontrolledDropdown nav>
    <DropdownToggle nav>
      <i className="ni ni-collection d-lg-none mr-1" />
      <span className="font-weight-bold nav-link-inner--text">Contact Us</span>
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem to={"/#contact"} tag={Link}>
        Contact Us
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  </Nav> 
  )
  aboutUS=(
    <Nav className="navbar-nav-hover align-items-lg-center" navbar>
    <UncontrolledDropdown nav>
      <DropdownToggle nav>
        <i className="ni ni-collection d-lg-none mr-1" />
        <span className="font-weight-bold nav-link-inner--text">About Us</span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem to={"/#about"} tag={Link}>
          About Us
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    </Nav> 
    )
}


    return (
        <div>
        <header>
          <Navbar
            className="shadow navbar-main fixed-top navbar-expand-lg navbar-dark headroom"
            expand="lg"
            style={{"border-radius": "100px","margin": "10px 50px","padding": "0px","background-color":"#E92929"}}
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                {/* <img
                  alt="..."
                  src={require("../../assets/img/logo.jpg")}
                /> */}
                <span className="font-weight-bold">Xsportsz</span>
              </NavbarBrand>
              <button className="navbar-toggler"  id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("../../assets/img/logo.jpg")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                      {tabBar}
                      {tabBar1}
                      {tabBar2}
                      {tabBar3}
                      {userSettings}
                      {contactUS}
                      {aboutUS}
                      {logoutBtn}


              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
        </div>
    );
};

const mapDispatchToProps =  {
  logout:logout
}

const mapStateToProps = (state) => ({

})

Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
