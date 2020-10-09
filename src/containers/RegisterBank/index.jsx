import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { registerBankByAdmin,getSports,getSpetialization,submitRegisteredUser } from '../../actions'
import { useHistory } from "react-router";
import {
  Input,
  Container,
  Row,Col,
  Button,Modal,Card,CardBody,CardTitle
} from "reactstrap";
import { Form } from "react-bootstrap";


export default function Register({registerBankByAdmin,registeredBankDetailsByAdmin,getSports,getSportsSucsses,getSpetializationSucsses,getSpetialization,submitRegisteredUser,submitRegisteredUserSucsses}) {

  const [sport, setSport] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [spetialization, setSpetialization] = useState("");
  // const [location, setLocation] = useState("");

  var validateMsgValid=(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>)
  var validateMsgInvalid=(<Form.Control.Feedback type="invalid">Please provide a valid Input.</Form.Control.Feedback>)

  useEffect(() => {
    getSports({"userid":localStorage.getItem("userid")},localStorage.getItem("token"))
    submitRegisteredUser({"userid":localStorage.getItem("userid")},localStorage.getItem("token"))
  },[]);

  const [data1, setdata1] = useState();
  
  React.useEffect(() => {
      if(getSportsSucsses)if(getSportsSucsses.status==200){
          setdata1(getSportsSucsses.data)
        }
  }, [getSportsSucsses])

  const [data2, setdata2] = useState();
  
  React.useEffect(() => {
      if(getSpetializationSucsses)if(getSpetializationSucsses.status==200){
          setdata2(getSpetializationSucsses.data)
        }
  }, [getSpetializationSucsses])

  function handleSubmit(e) {
    e.preventDefault();
    if(e.currentTarget.checkValidity()){
    var data = {
        "userid":localStorage.getItem('userid'),
        "sport":sport,
        "years":years,
        "months":months,
        "spetialization":spetialization,
        // "location":location,
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
        NotificationModel("bg-success","User Added Sucssesfully")
        setSport("");
        setYears("");
        setMonths("");
        setSpetialization("");
        // setLocation("");
      }else{
        NotificationModel("bg-danger","Bank Not Added")
      }
      setIsSubmit(false)
    }
  }, [registeredBankDetailsByAdmin])


    return (
        <div className="py-5 " style={{"background-color":"#333333"}}>
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

            <Container className="mt-5">
            <Row>
                <Col lg="6">
                  <Card className="bg-danger shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-white text-uppercase text-muted mb-0"
                          >
                             Users Details
                          </CardTitle>
                          <hr/>
                          <span className="mt-3 text-white font-weight-bold mb-0">
                          {submitRegisteredUserSucsses ? 'Username : '+submitRegisteredUserSucsses.data.rows[0].first_name : ''}
                          {submitRegisteredUserSucsses ? ' '+submitRegisteredUserSucsses.data.rows[0].middle_name : ''}
                          {submitRegisteredUserSucsses ? ' '+submitRegisteredUserSucsses.data.rows[0].last_name : ''}<br/>
                          {submitRegisteredUserSucsses ? 'Email : '+submitRegisteredUserSucsses.data.rows[0].email : ''}<br/>
                          {submitRegisteredUserSucsses ? 'Mobile : '+submitRegisteredUserSucsses.data.rows[0].mobile : ''}<br/>
                          </span>
                        </div>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-white text-nowrap">Since last month</span>
                      </p> */}
                    </CardBody>
                  </Card>
                  </Col>
                  <Col lg="6">
<div class="bg-secondary shadow card">
<div className="card-body">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Sports Details
                </small>
              </div>

                <Form noValidate validated={isSubmit} onSubmit={handleSubmit}>
                <Row>
                <Form.Group as={Col} lg="12" sm="12">
                    <Input required value={sport} className="form-control-alternative" type="select" placeholder="Select Sport" onChange={e => {setSport(e.target.value);getSpetialization({"sport_id":e.target.value,"userid":localStorage.getItem("userid")},localStorage.getItem("token"))}}>
                    <option value=''>Select Sport</option>
                        {data1 ? data1.map((item) => 
                          (<option value={item.id}>{item.name}</option>)
                          ): 'Not Available'}
                          </Input>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} lg="6" sm="6">
                    <Input required value={years} className="form-control-alternative" type="text" placeholder="Enter Age Years" onChange={e => setYears(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>

                <Form.Group as={Col} lg="6" sm="6">
                        <Input required value={months} className="form-control-alternative" type="text" placeholder="Enter Age Months" onChange={e => setMonths(e.target.value)}/>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} lg="12" sm="12">
                        <Input required value={spetialization} className="form-control-alternative" type="select" placeholder="Select Spetialization" onChange={e => setSpetialization(e.target.value)}>
                        <option value=''>Select Spetialization</option>
                        {data2 ? data2.map((item) => 
                          (<option value={item.id}>{item.name}</option>)
                          ): 'Not Available'}
                          </Input>
                  {validateMsgValid}
                  {validateMsgInvalid}
                </Form.Group>
                </Row>

              <br></br>

                <Button color="danger" type="submit" className="">
                    Register Sport
                </Button>
            </Form>
        </div>
</div>
                  </Col>
                
              </Row>

        </Container>
    </div>
    );
};

const mapDispatchToProps =  {
    registerBankByAdmin : registerBankByAdmin,
    getSports : getSports,
    getSpetialization : getSpetialization,
    submitRegisteredUser :submitRegisteredUser
}

const mapStateToProps = (state) => ({
  registeredBankDetailsByAdmin:state.registeredBankDetailsByAdmin,
  getSportsSucsses:state.getSportsSucsses,
  getSpetializationSucsses:state.getSpetializationSucsses,
  submitRegisteredUserSucsses : state.registeredUserDetails
})

Register = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);
