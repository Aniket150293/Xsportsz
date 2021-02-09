import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Table, Modal, Row, Input, ButtonToolbar } from "reactstrap";
import { getMysport } from "../../actions/index";

export default function Myregisteredsport({ getMysport, getMysportSuccess }) {
  // const data = [
  //   {
  //     id: 1,
  //     name: "a",
  //     age: 22,
  //   },
  //   {
  //     id: 2,
  //     name: "b",
  //     age: 44,
  //   },
  // ];

  const [data, setData] = useState([]);
  React.useEffect(() => {
    if (getMysportSuccess) {
      console.log("!!!!!!!!!!!!11");
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
              <th>sport Name</th>
              <th>specilization</th>
              <th>date</th>
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
                    </tr>
                  );
                })
              : "notfound"}
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
