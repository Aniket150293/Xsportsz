import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Table, Modal, Row, Input, ButtonToolbar } from "reactstrap";
import { getMysport } from "../../actions/index";
import MyDocument from "../../components/PDFCreation";
import { PDFViewer } from "@react-pdf/renderer";

export default function Myregisteredsport({ getMysport, getMysportSuccess }) {
  const [data, setData] = useState([]);
  React.useEffect(() => {
    if (getMysportSuccess) {
      if (getMysportSuccess.status == 200) {
        console.log(getMysportSuccess);
        setData(getMysportSuccess.data);
      }
    }
  }, [getMysportSuccess]);

  React.useEffect(() => {
    getMysport(
      { userid: localStorage.getItem("userid") },
      localStorage.getItem("token")
    );
  }, []);

  let pdfData = {
    name:
      localStorage.getItem("firstname") +
      " " +
      localStorage.getItem("lastname"),
    mobile: localStorage.getItem("mobile"),
    email: localStorage.getItem("email"),
  };

  return (
    <div
      className="container-fluid py-5 "
      style={{ "background-color": "#333333" }}
    >
      <Form className="shadow card mt-5">
        {/* <div className="card-body" > */}
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Sport Name</th>
              <th>Specilization</th>
              <th>Registration Date</th>
              <th>Receipt Details</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.sname}</td>
                      <td>{item.cddate}</td>
                      <td>
                        <PDFViewer>
                          <MyDocument pdfData={pdfData} itemData={item} />
                        </PDFViewer>
                      </td>
                    </tr>
                  );
                })
              : "No Data Found"}
          </tbody>
        </Table>
        {/* </div> */}
      </Form>
    </div>
  );
}

const mapDispatchToProps = {
  getMysport: getMysport,
};

const mapStateToProps = (state) => ({
  getMysportSuccess: state.getMysportSuccess,
});

Myregisteredsport = connect(
  mapStateToProps,
  mapDispatchToProps
)(Myregisteredsport);
