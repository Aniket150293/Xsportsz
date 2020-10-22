import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Form,Table,Modal,Row,Input } from "reactstrap";
import { submitRegisteredUser,getRegisteredUserList } from '../../actions'
import { IoMdLock,IoIosCheckmarkCircle } from 'react-icons/io';
import { CSVLink } from "react-csv";
import { useHistory } from "react-router";

export default function CreatedCustomerList({submitRegisteredUser,registeredUserDetails,getRegisteredUserList,RegisteredUserList }) {

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

  var history = useHistory();
  const [data1, setdata1] = useState();

  useEffect(() => {
    getRegisteredUserList({"userid": localStorage.getItem("userid"),"months":""},localStorage.getItem("token"));
  },[])

  React.useEffect(() => {
    if(RegisteredUserList)if(RegisteredUserList.status==200){
      // if(history.location.pathname=="/customer-list")
      //   setdata1(RegisteredUserList.data.filter(item => item.role == "user"))
      // else if(history.location.pathname=="/bank-admin-list")
      //   setdata1(RegisteredUserList.data.filter(item => item.role == "bank_admin"))
      setdata1(RegisteredUserList.data)
    }
  }, [RegisteredUserList])


  React.useEffect(() => {
    if(registeredUserDetails)if(isSubmit){
      if(registeredUserDetails.status==200){
        NotificationModel("bg-success",registeredUserDetails.msg)
      }else{
        NotificationModel("bg-danger","Error: Not Updated")
      }setIsSubmit(false)
      getRegisteredUserList({"userid": localStorage.getItem("userid")},localStorage.getItem("token"));
    }
  }, [registeredUserDetails])

  function verify(id){
    setIsSubmit(true)
    submitRegisteredUser({"verify":true,"userid": id},localStorage.getItem("token"))
  }

  function block(id){
    setIsSubmit(true)
    submitRegisteredUser({"block":true,"userid": id},localStorage.getItem("token"))
  }

    return (
        <div className="container-fluid py-5 " style={{"background-color":"#333333"}}>
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
            <Form className="shadow card mt-5">
                <div className="card-header">
                  <Row className="align-items-center">
                  <div className="col">
                    List of Players
                    </div>
                    <div className="col">

                    <Input
                        className="form-control-alternative"
                        type="select"
                        onChange={(e) => {
                          getRegisteredUserList({
                            "userid": localStorage.getItem("userid"),
                            "months":e.target.value
                          },localStorage.getItem("token"));
                        }}
                      >
                        <option value="">Select Filter</option>
                        <option value="1">1 Month</option>
                        <option value="2">2 Month</option>
                        <option value="3">3 Month</option>
                        <option value="6">6 Month</option>
                        <option value="12">1 Year</option>
                      </Input>

                    </div>
                  </Row>
                </div>
                <div className="card-body">
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>User Id</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      {/* <th>Address</th> */}
                      <th>Age</th>
                      <th>Sport</th>
                      <th>Spetialization</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    { data1 ? data1.map
                      (item => {
                          return(<tr>
                            <td>{item.id}</td>
                            <td>{item.first_name} {item.middle_name} {item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            {/* <td>{item.address}</td> */}
                            <td>{item.years_age} Years {item.months_age} Months</td>
                            <td>{item.sport_id}</td>
                            <td>{item.specialization_id}</td>
                            {/* <td>{item.payment}</td> */}
                            <td>Rs. 250 /-</td>
                          </tr>)
                      }): <tr></tr>
                    }
                  </tbody>
                </Table>
                </div>
                <div className="card-footer text-center">
                      <CSVLink
                      data={data1 ? data1 : ''}
                      filename={"Customer-List"+new Date().getTime()+".csv"}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Download
                    </CSVLink>
                </div>

            </Form>
        </div>
    );
};

const mapDispatchToProps =  {
  getRegisteredUserList:getRegisteredUserList,
  submitRegisteredUser:submitRegisteredUser
}

const mapStateToProps = (state) => ({
  RegisteredUserList: state.registeredUserList,
  registeredUserDetails:state.registeredUserDetails
})

CreatedCustomerList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatedCustomerList);
