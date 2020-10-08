import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { submitBankDetailsByUser,getRegisteredUsersBankList,getMasterBankList } from '../../actions'
import { Form } from "react-bootstrap";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Input,
    Modal,
    Table,UncontrolledAlert
  } from "reactstrap";


export default function CustomerRegisteredBank({submitBankDetailsByUser,SubmittedBankDetailsByUser,getRegisteredUsersBankList,UserBankList,masterBankList,getMasterBankList}) {

    const [accountNo, setAccountNo] = useState("");
    const [confirmAccountNo, setConfirmAccountNo] = useState("");
    const [bank, setBank] = useState("");

    var validateMsgValid=(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>)
    var validateMsgInvalid=(<Form.Control.Feedback type="invalid">Please provide a valid Input.</Form.Control.Feedback>)

    const [show1, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      getRegisteredUsersBankList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"));
      getMasterBankList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"))
    },[])

    const [data1, setdata1] = useState();
    const [data2, setdata2] = useState();
    React.useEffect(() => {
        if(masterBankList)if(masterBankList.status==200)
            setdata1(masterBankList.data)
    }, [masterBankList])
    React.useEffect(() => {
        if(UserBankList)if(UserBankList.status==200)
            setdata2(UserBankList.data)
    }, [UserBankList])


    useEffect(() => {
        if(SubmittedBankDetailsByUser)if(isSubmit){
          if(SubmittedBankDetailsByUser.status==200) {
            handleClose();
            getRegisteredUsersBankList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"))
            NotificationModel("success","Account Added Sucssesfully")
        }else{
            handleClose();
            NotificationModel("danger","Account Not Added")
        }setIsSubmit(false)
      }
    },[SubmittedBankDetailsByUser])


    function handleSubmit(e){
      e.preventDefault();
      if(e.currentTarget.checkValidity()){
        var data = {
            "userId":localStorage.getItem("userid"),
            "accountNo":accountNo,
            "confirmAccountNo" : confirmAccountNo,
            "bank" : bank
        }
        submitBankDetailsByUser(data,localStorage.getItem("token"))
      }
      setIsSubmit(true)
    }

  const [isSubmit, setIsSubmit] = useState();
  const [Notification, setNotification] = useState();
  function NotificationModel(Class,Msg) {
    setNotification(
        <UncontrolledAlert color={Class} fade={true}>
          <span className="alert-inner--text ml-1">
            <strong className="heading">{Class}!</strong> {Msg}
          </span>
        </UncontrolledAlert>
    )
    setTimeout(function() {
      setNotification();
  }, 5000);
  }


    return (
        <div className="container-fluid py-5">
        <div className="py-3 text-center">{Notification}</div>
            <div className="card shadow">
            <div className="card-header">Bank Account Details</div>
            <div className="card-body">
                <label>Based on PAN number,no one have rights to fetch bank details of person.Only Income Tax department have access to this thing. </label>
                <a href="https://www.google.com/search?rlz=1C1CHBD_enIN784IN784&sxsrf=ALeKk005EO4sysd4w8AGIXvH1XvN6u9kjA:1586356972507&q=fetch+bank+account+based+on+pan+numer&nfpr=1&sa=X&ved=2ahUKEwin8tSeiNnoAhVH6nMBHZeZAGgQvgUoAXoECA0QKA&biw=1396&bih=686">Link For Reference</a>
                <label>We require your bank account detils to be added manually</label>

                <div className="card-header">
                List Of Bank Details Added&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color="primary" className="btn btn-primary align-right" onClick={handleShow}>
                    Add Bank Details
                </Button>
                </div>
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Bank</th>
                      <th>Account No</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2 ? data2.map
                    (item => (

                      <tr>
                        <td>{item.id}</td>
                        <td>{item.bank}</td>
                        <td>{item.account_no}</td>
                        <td>{item.is_active == 1 ? 'Active' : 'Deactive'}</td>
                        <td></td>
                      </tr>
                    )):
                    <tr>
                    </tr>}
                  </tbody>
                </Table>
            </div>
            </div>

            <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={show1}
              toggle={handleClose}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white">
                    Add Bank Account Details
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form noValidate validated={isSubmit} onSubmit={handleSubmit}>
                      <Form.Group>
                          <Input className="form-control-alternative" required
                            placeholder="Bank Account Numer"
                            type="text"
                            // onFocus={e => this.setState({ emailFocused: true })}
                            // onBlur={e => this.setState({ emailFocused: false })}
                            onChange={e => setAccountNo(e.target.value)}
                          />
                                          {validateMsgValid}
                  {validateMsgInvalid}

                      </Form.Group>
                      <Form.Group>
                          <Input className="form-control-alternative" required
                            placeholder="Confirm Bank Account Numer"
                            type="text"
                            autoComplete="off"
                            // onFocus={e => this.setState({ passwordFocused: true }) }
                            // onBlur={e => this.setState({ passwordFocused: false })}
                            onChange={e => setConfirmAccountNo(e.target.value)}
                          />
                                          {validateMsgValid}
                  {validateMsgInvalid}

                      </Form.Group>
                      <Form.Group >
                            <Input className="form-control-alternative" required type="select" onChange={e => setBank(e.target.value)} >
                            <option value="">Select Bank</option>
                            {data1 ? data1.map(item => ( <option value={item.id}>{item.bank}</option>)):''}
                            </Input>
                                          {validateMsgValid}
                  {validateMsgInvalid}

                      </Form.Group>
                      {/* <div className="custom-control custom-control-alternative custom-checkbox">
                        <input className="form-control-alternative"
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div> */}
                      <div className="text-center">
                        <Button className="my-4" color="primary" type="Submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
        </div>
    );
};

const mapDispatchToProps =  {
    submitBankDetailsByUser : submitBankDetailsByUser,
    getRegisteredUsersBankList:getRegisteredUsersBankList,
    getMasterBankList:getMasterBankList
}

const mapStateToProps = (state) => ({
   LoginDetails: state.loginDetails,
   SubmittedBankDetailsByUser:state.submittedBankDetailsByUser,
   UserBankList:state.userBankList,
   masterBankList:state.masterBankList,
})

CustomerRegisteredBank = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomerRegisteredBank);
