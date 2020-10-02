import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { checkLoginDetails } from '../../actions'
import {
  Button,
  CardImg,
  Card,
  CardHeader,
  CardBody,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import { Form } from "react-bootstrap";

import { useHistory } from "react-router";

export default function Login({checkLoginDetails,LoginDetails}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg ,setMsg] = useState('');

    const [isSubmit, setIsSubmit] = useState();

  var history = useHistory();
    var validateMsgValid=(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>)
  var validateMsgInvalid=(<Form.Control.Feedback type="invalid">Please provide a valid Input.</Form.Control.Feedback>)

  useEffect(() => {
     if(LoginDetails) {
        if(LoginDetails.valid_user){
            localStorage.setItem("token", LoginDetails.token)
            localStorage.setItem("firstname", LoginDetails.data.first_name)
            localStorage.setItem("lastname", LoginDetails.data.last_name)
            localStorage.setItem("lastlogin", LoginDetails.data.last_login)
            localStorage.setItem("role", LoginDetails.data.role)
            localStorage.setItem("userid", LoginDetails.data.id)
           
            if(LoginDetails.data.role === 'super_user'){
                history.push("/customer-list");
            }else if(LoginDetails.data.role === 'user'){
                history.push("/customer-registered-bank-list");
            }else if(LoginDetails.data.role === 'bank_admin'){
                history.push("/customer-list");
            }
        }else{
            setMsg('Incorrect Credentials');
        }
    }
  },[LoginDetails]);



  function handleSubmit(e) {
        e.preventDefault();
        setIsSubmit(true)
    if(e.currentTarget.checkValidity()){
    checkLoginDetails(
        {
            "username": email,
            "password": password
         });
       }
   }


    return (
        <main>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-shaped pb-150">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <Card className="bg-secondary shadow border-0 floating">
                        <CardHeader className="bg-white">
                          <div className="text-muted text-center">
                            <h2>Sign in with</h2>
                          </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                          <Form noValidate validated={isSubmit} onSubmit={handleSubmit} role="form">
                            <Form.Group className="mb-3">
                                    <i className="ni ni-email-83" />
                                <Input className="form-control-alternative" required  
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} 
                                    placeholder="Email"
                                    type="email" 
                                />
                                                {validateMsgValid}
                  {validateMsgInvalid}
                              
                            </Form.Group>
                            <Form.Group>
                                    <i className="ni ni-lock-circle-open" />
                                <Input className="form-control-alternative" required
                                    placeholder="Password"
                                    type="password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                                {validateMsgValid}
                  {validateMsgInvalid}
                              
                            </Form.Group>
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id=" customCheckLogin"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor=" customCheckLogin"
                              >
                                <span>Remember me</span>
                              </label>
                              <label>
                                    <span>{msg}</span>
                              </label>
                            </div>
                            <div className="text-center">
                              <Button
                                className="my-4"
                                color="primary"
                                type="submit"
                                
                              >
                                Sign in
                              </Button>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                      <Row className="mt-3">
                        <Col xs="6">
                          <a
                            className="text-light"
                            href="/#/forgot-password"
                            
                          >
                            <small>Forgot password?</small>
                          </a>
                        </Col>
                        <Col className="text-right" xs="6">
                          <a
                            className="text-light"
                            href="/#/register"
                          >
                            <small>Create new account</small>
                          </a>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="6 py-lg-5">
                      <h1 className="display-3 text-white">
                        Online Multibanking System
                        <span>Multiple Accounts On One Website</span>
                      </h1>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section className="section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("../../assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Awesome features</h3><hr/>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-0">
                                The Multi Banking System Interface is targeted to the future banking solution
                                for the users who is having multiple bank accounts in multiple banks. 
                            </h5>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-0">
                                This interface integrates all existing banks and provides business solutions
                                for both retail and corporate. 
                            </h5>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                            <h5 className="mb-0">
                                This system acts as a standard interface between the clients and all the banks,
                                By using this portal any client who maintain accounts in various banks
                                can directly log on to Multi Banking System Interface and make any kind of transactions.
                            </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("../../assets/img/theme/img-2-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h3 className="display-3 font-weight-bold text-white">
                        OBJECTIVES OF SYSTEM
                      </h3>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <hr/>
                    <h5>
                        The objective of this proposal is to provide the overview of blockchain technology
                        with its benefits emphasizing on the applications of the technology in the Indian Banking Sector.
                    </h5>
                    <hr/>
                    <h5>
                        The proposal gives the insight of various challenges and global perspective of blockchain technology
                        in Banking Industry.
                    </h5>
                    <hr/>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section">
            <Container>
              <Row className="justify-content-center text-center mb-md">
                <Col lg="8">
                  <h2 className="display-3">Our Partners</h2>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/1.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/2.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/3.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/4.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/5.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/6.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/7.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/8.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/9.png")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/10.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/11.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="2" md="4">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../../assets/img/partners/12.jpg")}
                      style={{ width: "200px" }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section bg-gradient-default pb-300">
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section id="contact" className="section pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4>Want to contact us?</h4>
                      <Form.Group>
                              <i className="ni ni-user-run" />
                          <Input className="form-control-alternative"
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                                          {validateMsgValid}
                  {validateMsgInvalid}
                        
                      </Form.Group>
                      <Form.Group>
                              <i className="ni ni-email-83" />
                          <Input className="form-control-alternative"
                            placeholder="Email address"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                          />
                                          {validateMsgValid}
                  {validateMsgInvalid}
                        
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </Form.Group>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
    );
};

const mapDispatchToProps =  {
    checkLoginDetails : checkLoginDetails,
}

const mapStateToProps = (state) => ({
    LoginDetails: state.loginDetails,
})

Login = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

