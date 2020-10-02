import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Form,Table } from "reactstrap";
import { getMasterBankList } from '../../actions'
import { CSVLink } from "react-csv";

export default function CreatedCustomerList({getMasterBankList,masterBankList }) {

  const [data1, setdata1] = useState();
  React.useEffect(() => {
    if(masterBankList)
    if(masterBankList.status==200)
      setdata1(masterBankList.data)
  }, [masterBankList])

  React.useEffect(() => {getMasterBankList({"userid": localStorage.getItem("userid")},localStorage.getItem("token"))}, [])

    return (
        <div className="container-fluid py-5 ">
            <Form className="card shadow">
                <div className="card-header">List Of Users</div>
                <div className="card-body">
                <Table responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Bank Id</th>
                      <th>Applied_by</th>
                      <th>Bank</th>
                      <th>Email</th>
                      <th>Phone_number</th>
                      <th>Alternate_phone_number</th>
                      <th>Location</th>
                      <th>Accounts_starts_with</th>
                      <th>Ifsc</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip_code</th>
                      <th>Created_at</th>
                      <th>Modified_at</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data1 ? data1.map
                    (item => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.bank_registration_applied_by}</td>
                        <td>{item.bank}</td>
                        <td>{item.email}</td>
                        <td>{item.phone_number}</td>
                        <td>{item.alternate_phone_number}</td>
                        <td>{item.location}</td>
                        <td>{item.accounts_starts_with}</td>
                        <td>{item.ifsc}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>{item.zip_code}</td>
                        <td>{item.created_at}</td>
                        <td>{item.modified_at}</td>

                      </tr>
                    )):
                    <tr>
                    </tr>}
                  </tbody>
                </Table>
                </div>
                <div className="card-footer text-center">
                      <CSVLink
                      data={data1 ? data1 : ''}
                      filename={"Bank-List"+new Date().getTime()+".csv"}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Download Registered Bank List
                    </CSVLink>
                </div>

            </Form>
        </div>
    );
};

const mapDispatchToProps =  {
  getMasterBankList:getMasterBankList
}

const mapStateToProps = (state) => ({
  masterBankList: state.masterBankList
})

CreatedCustomerList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatedCustomerList);
