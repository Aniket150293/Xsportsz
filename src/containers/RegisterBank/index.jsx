import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { registerBankByAdmin } from '../../actions'
import { useHistory } from "react-router";
import {
  Input,
  Container,
  Row,Col,
  Button,Modal
} from "reactstrap";
import { Form } from "react-bootstrap";


export default function Register({registerBankByAdmin,registeredBankDetailsByAdmin}) {

  const [bankName, setBankName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [alternatePhoneNo, setAlternatePhoneNo] = useState("");
  const [location, setLocation] = useState("");
  const [accountStartWith, setAccountStartWith] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  var validateMsgValid=(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>)
  var validateMsgInvalid=(<Form.Control.Feedback type="invalid">Please provide a valid Input.</Form.Control.Feedback>)

  function handleSubmit(e) {
    e.preventDefault();
    if(e.currentTarget.checkValidity()){
    var data = {
        "userid":localStorage.getItem('userid'),
        "bankName":bankName,
        "email":email,
        "phoneNo":phoneNo,
        "alternatePhoneNo":alternatePhoneNo,
        "location":location,
        "accountStartWith":accountStartWith,
        "ifsc":ifsc,
        "city":city,
        "state":state,
        "zip":zip
    }
    registerBankByAdmin(data,localStorage.getItem("token"))
    }
    setIsSubmit(true);
  }
    const [isSubmit, setIsSubmit] = useState();
    const [Class, SetClass] = useState();
    const [Msg, SetMsg] = useState();
    const [Notification, SetNotification] = useState(false);
    const NotificationClose = () => SetNotification(false);
    const NotificationShow = () => SetNotification(true);
    function NotificationModel(Class,Msg) {
        SetClass(Class)
        SetMsg(Msg)
        NotificationShow();
        setTimeout(function() {
            NotificationClose();
        }, 5000);
    }

    React.useEffect(() => {
    if(registeredBankDetailsByAdmin)if(isSubmit){
      if(registeredBankDetailsByAdmin.status==200){
        NotificationModel("bg-success","Bank Added Sucssesfully")
        setBankName("");
        setEmail("");
        setPhoneNo("");
        setAlternatePhoneNo("");
        setLocation("");
        setAccountStartWith ("");
        setIfsc("");
        setAddress("");
        setCity("");
        setState("");
        setZip("");
      }else{
        NotificationModel("bg-danger","Bank Not Added")
      }
      setIsSubmit(false)
    }
  }, [registeredBankDetailsByAdmin])


    return (
        <div className="py-5 ">
                <Modal
              className="modal-dialog modal-danger"
              contentClassName={Class}
              isOpen={Notification}
              toggle={NotificationClose}
            >
              <div className="modal-header">
                <div className="mt-1 modal-title heading">
                  {Msg}
                </div>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={NotificationClose}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
            </Modal>
            <Container className="bg-secondary shadow card">
            <div className="card-body">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Bank Information
                </small>
              </div>

                <Form noValidate validated={isSubmit} onSubmit={handleSubmit}>
                <Row>
                <Form.Group as={Col} lg="6" sm="6">
                    <Input required value={bankName} className="form-control-alternative" type="text" placeholder="Enter Bank Name" onChange={e => setBankName(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                <Form.Group as={Col} lg="6" sm="6">
                    <Input required value={email} className="form-control-alternative" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} lg="6" sm="6">
                        <Input required value={phoneNo} className="form-control-alternative" type="text" placeholder="Phone No" onChange={e => setPhoneNo(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>

                <Form.Group as={Col} lg="6" sm="6">
                        <Input required value={alternatePhoneNo} className="form-control-alternative" type="text" placeholder="Alternate Phone No" onChange={e => setAlternatePhoneNo(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>

              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Bank Location Information
                </small>
              </div>

                <Row>
                <Form.Group as={Col} lg="4" sm="6">
                    <Input required value={location} className="form-control-alternative" type="textarea" placeholder="Enter Location" onChange={e => setLocation(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>

                <Form.Group as={Col} lg="4" sm="6">
                    <Input required value={accountStartWith} className="form-control-alternative" type="text" placeholder="Enter Account Starts Number" onChange={e => setAccountStartWith(e.target.value)} />
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>

                <Form.Group as={Col} lg="4" sm="6">
                    <Input required value={ifsc} className="form-control-alternative" type="text" placeholder="IFSC Code" onChange={e => setIfsc(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} lg="4" sm="6">
                    <Input required value={city} className="form-control-alternative" type="text" placeholder="City" onChange={e => setCity(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>

                <Form.Group as={Col} lg="4" sm="6">
                    <Input required value={state} className="form-control-alternative" type="select" onChange={e => setState(e.target.value)}>
                        <option value="">State</option>
                        <option value="1">Maharashtra</option>
                    </Input>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>

                <Form.Group as={Col} lg="4" sm="6">
                    <Input required value={zip} className="form-control-alternative" type="text" placeholder="Zip Code" onChange={e => setZip(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>
                <br></br>

                <Button color="primary" type="submit" className="">
                    Register Bank
                </Button>
            </Form>
        </div>
        </Container>
    </div>
    );
};

const mapDispatchToProps =  {
    registerBankByAdmin : registerBankByAdmin,
}

const mapStateToProps = (state) => ({
  registeredBankDetailsByAdmin:state.registeredBankDetailsByAdmin
})

Register = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
