import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getRegisteredUserList,getMasterBankList } from '../../actions'
import { Card,CardBody,CardTitle,Col } from "reactstrap";
import { CSVLink } from "react-csv";


export default function Report({getRegisteredUserList,DownloadedRegisteredCustomerList,getMasterBankList,masterBankList}) {

  var [userlist, setUserlist] = useState([]);
  var [adminlist, setAdminlist] = useState([]);

  useEffect(() => {
    getRegisteredUserList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"))
    getMasterBankList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"))
  },[]);

  const [data1, setdata1] = useState();
  React.useEffect(() => {
    if(masterBankList)
    if(masterBankList.status==200)
      setdata1(masterBankList.data)
  }, [masterBankList])

  useEffect(()=>{
        if(DownloadedRegisteredCustomerList)
        if(DownloadedRegisteredCustomerList.status == 200){
          var userlist1 = [],adminlist1 = [];
          DownloadedRegisteredCustomerList.data.map((a)=>{
            if (a.role== "user"){
              userlist1.push(a)
            }
            else if(a.role== "bank_admin"){
              adminlist1.push(a)
            }
          })
          setUserlist(userlist=userlist1)
          setAdminlist(adminlist=adminlist1)
        }

  },[DownloadedRegisteredCustomerList])

    return (
        <div className="container py-5 h-100vh">
            <div className="row">
              <Col lg="4" sm="4">
                <Card className="shadow">
                    <CardBody className = "cardBody">
                        <CardTitle>Customer List</CardTitle>
                    <CSVLink
                      data={userlist ? userlist:''}
                      filename={"Customer-List"+new Date().getTime()+".csv"}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Download
                    </CSVLink>

                    </CardBody>
                </Card>
              </Col>
              <Col lg="4" sm="4">
                <Card className="shadow">
                    <CardBody className = "cardBody">
                        <CardTitle>Bank List</CardTitle>
                    <CSVLink
                      data={data1 ? data1 : ''}
                      filename={"Bank-List"+new Date().getTime()+".csv"}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Download
                    </CSVLink>
                    </CardBody>
                </Card>
              </Col>
              <Col lg="4" sm="4">
                <Card  className="shadow">
                    {/* <CardImg variant="top" src="../../src/Public/images/4.jpg" /> */}
                    <CardBody className = "cardBody">
                        <CardTitle>Bank Admins List</CardTitle>
                    <CSVLink
                      data={adminlist ? adminlist :''}
                      filename={"Bank-Admins-List"+new Date().getTime()+".csv"}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Download
                    </CSVLink>
                    </CardBody>
                </Card>
              </Col>
            </div>
        </div>
    );
};

const mapDispatchToProps =  {
    getRegisteredUserList : getRegisteredUserList,
    getMasterBankList : getMasterBankList,
  }

  const mapStateToProps = (state) => ({
    DownloadedRegisteredCustomerList: state.registeredUserList,
    masterBankList: state.masterBankList,
  })


  Report = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Report);
