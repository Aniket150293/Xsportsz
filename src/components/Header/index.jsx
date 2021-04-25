import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../../actions";
import "./header.css";
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
  TabContent,
  TabPane,
} from "reactstrap";

export default function Header({ logout }) {
  var history = useHistory();
  function logoutCall(event) {
    event.preventDefault();
    logout();
    localStorage.clear();
    history.push("/");
  }

  var image = require("../../assets/img/logo1.jpg");

  let tabFirst, tabSecond, logoutBtn, userSettings;
  console.log("!!!!!!!!!!11");
  console.log(localStorage.getItem("role"));
  const [activeTab, setActiveTab] = useState("1");
  if (localStorage.getItem("role") === "super_user") {
    tabFirst = (
      <Nav
        className={activeTab == "1" ? "active" : ""}
        navbar
        onClick={() => setActiveTab("1")}
      >
        <UncontrolledDropdown nav>
          <DropdownToggle nav to="/player-list" tag={Link}>
            <i className="ni ni-collection d-lg-none mr-1" />
            <span className="font-weight-bold nav-link-inner--text text-danger">
              Player List
            </span>
          </DropdownToggle>
        </UncontrolledDropdown>
      </Nav>
    );
  } else if (localStorage.getItem("role") === "user") {
    tabFirst = (
      <Nav
        className={activeTab == "1" ? "active" : ""}
        navbar
        onClick={() => setActiveTab("1")}
      >
        <UncontrolledDropdown nav>
          <DropdownToggle nav to="/register-sport" tag={Link}>
            <i className="ni ni-collection d-lg-none mr-1" />
            <span className="font-weight-bold nav-link-inner--text text-danger">
              Register Sport
            </span>
          </DropdownToggle>
        </UncontrolledDropdown>
      </Nav>
    );
    tabSecond = (
      <Nav
        className={activeTab == "2" ? "active" : ""}
        navbar
        onClick={() => setActiveTab("2")}
      >
        <UncontrolledDropdown nav>
          <DropdownToggle nav to="/my-registered-sports" tag={Link}>
            <i className="ni ni-collection d-lg-none mr-1" />
            <span className="font-weight-bold nav-link-inner--text text-danger">
              My Registered Sport
            </span>
          </DropdownToggle>
        </UncontrolledDropdown>
      </Nav>
    );
  }
  if (localStorage.getItem("role") != null) {
    logoutBtn = (
      <Nav className="align-items-lg-center ml-lg-auto" navbar>
        <UncontrolledDropdown nav>
          <DropdownToggle className="p-0 m-0" nav>
            <i className="ni ni-collection ml-lg-auto d-lg-none mr-1" />
            <span
              className="font-weight-bold nav-link-inner--text"
              style={{ color: "blue" }}
            >
              {localStorage.getItem("firstname")} &nbsp;{" "}
              {localStorage.getItem("lastname")}&nbsp;
            </span>
            <Button className="btn btn-danger" onClick={logoutCall}>
              Logout
            </Button>
          </DropdownToggle>
        </UncontrolledDropdown>
      </Nav>
    );
    userSettings = (
      <Nav className="navbar-nav-hover align-items-lg-center" navbar>
        <UncontrolledDropdown nav>
          <DropdownToggle nav>
            <i className="ni ni-collection d-lg-none mr-1 " />
            <span className="font-weight-bold nav-link-inner--text fontColor">
              User Settings
            </span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              to={"/register/" + localStorage.getItem("userid")}
              tag={Link}
              className={activeTab == "3" ? "active fontColor" : "fontColor"}
              onClick={() => setActiveTab("3")}
            >
              Edit Profile
            </DropdownItem>
            <DropdownItem
              to="/changePassword"
              tag={Link}
              className={activeTab == "4" ? "active fontColor" : "fontColor"}
              onClick={() => setActiveTab("4")}
            >
              Change Password
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  }

  return (
    <div>
      <header>
        {/* <Nav
          tabs
          className="shadow navbar-main fixed-top navbar-expand-lg navbar-dark headroom "
          expand="lg"
          style={{
            "border-radius": "100px",
            margin: "4px 25px",
            padding: "0px 10px",
            "background-color": "white",
            "min-height": "80px",
          }}
        >
          {tabBar}
        </Nav> */}
        {/* <TabContent activeTab={activeTab}>
          <TabPane tabId="1">Tab 1 Content</TabPane>
          <TabPane tabId="2">Tab 2 Content</TabPane>
        </TabContent> */}
        <Navbar
          className="shadow navbar-main fixed-top navbar-expand-lg navbar-dark headroom "
          expand="lg"
          style={{
            "border-radius": "100px",
            margin: "4px 25px",
            padding: "0px 10px",
            "background-color": "white",
            "min-height": "80px",
          }}
        >
          {
            <img
              src={image}
              className={
                localStorage.getItem("role") != null
                  ? "logoClass d-block float-right"
                  : "logoMiddle"
              }
              alt="Responsive image"
              width="60"
              height="60"
            />
          }
          {localStorage.getItem("role") != null ? (
            <Container>
              <NavbarBrand className="mr-lg-5">
                <span className="font-weight-bold text-white"></span>
              </NavbarBrand>

              <button
                className=" navClass navbar-toggler  btn-danger bg-danger"
                id="navbar_global"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse toggler="#navbar_global" navbar>
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <span className="font-weight-bold">XSportsz</span>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler " id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                {tabFirst}
                {tabSecond}
                {userSettings}
                {logoutBtn}
              </UncontrolledCollapse>
            </Container>
          ) : (
            ""
          )}
        </Navbar>
      </header>
    </div>
  );
}

const mapDispatchToProps = {
  logout: logout,
};

const mapStateToProps = (state) => ({});

Header = connect(mapStateToProps, mapDispatchToProps)(Header);
