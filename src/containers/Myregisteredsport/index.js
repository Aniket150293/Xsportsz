import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Table, Modal, Row, Input } from "reactstrap";
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
    <div>
      <Form className="shadow card mt-5">
        <div className="card-body">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>SR NO</th>
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
                        <td color="red">{item.name}</td>
                        <td color="red">{item.name}</td>
                        <td color="red">{item.name}</td>
                        <td color="red">{item.name}</td>
                      </tr>
                    );
                  })
                : "notfound"}
            </tbody>
          </Table>
        </div>
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
