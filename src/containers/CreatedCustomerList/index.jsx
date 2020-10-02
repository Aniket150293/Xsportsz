import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Form,Table,Modal } from "reactstrap";
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
    getRegisteredUserList({"userid": localStorage.getItem("userid")},localStorage.getItem("token"));
  },[])

  React.useEffect(() => {
    if(RegisteredUserList)if(RegisteredUserList.status==200){
      if(history.location.pathname=="/customer-list")
        setdata1(RegisteredUserList.data.filter(item => item.role == "user"))
      else if(history.location.pathname=="/bank-admin-list")
        setdata1(RegisteredUserList.data.filter(item => item.role == "bank_admin"))
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
        <div className="container-fluid py-5 ">
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
            <Form className="shadow card">
                <div className="card-header">List Of Users</div>
                <div className="card-body">
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>User Id</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Address</th>
                      <th>PAN Card No</th>
                      <th>Adhar Card No</th>
                      <th>Applied On</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    { data1 ? data1.map
                      (item => {
                          return(<tr>
                            <td>{item.id}</td>
                            <td>{item.first_name} {item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.address}</td>
                            <td>{item.pan_number}</td>
                            <td>{item.adhar_number}</td>
                            <th>Applied On</th>
                            <td>
                              {item.is_active=='1' ?
                              <IoMdLock size="20px" color="red" title="Block User" onClick={() => block(item.id)} /> :
                              <IoIosCheckmarkCircle size="20px" color="green" title="Verify User" onClick={() => verify(item.id)} />
                              }
                            </td>
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
