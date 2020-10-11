import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  callback,
 
} from "../../actions";
import { useHistory } from "react-router";
import {
  Input,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Form } from "react-bootstrap";

export default function Callback({
    callback,
    paymentParams
}) {
  const [sport, setSport] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [spetialization, setSpetialization] = useState("");
  // const [location, setLocation] = useState("");

  var validateMsgValid = (
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  );
  var validateMsgInvalid = (
    <Form.Control.Feedback type="invalid">
      Please provide a valid Input.
    </Form.Control.Feedback>
  );

  useEffect(() => {
      console.log('!!!!!!!!!!!!!!!!!!11');
      console.log('Callback')
    callback(
        { userid: localStorage.getItem("userid") },
        localStorage.getItem("token")
      );

  }, []);

  

 

  function handleSubmit(e) {
    e.preventDefault();
    // var txn_url = "https://securegw-stage.paytm.in/order/process";
    payment(
        { userid: localStorage.getItem("userid") },
        localStorage.getItem("token")
      );
  }

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  
  function isObj(val) {
    return typeof val === 'object'
  }
  
  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }
  
  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)
 
  
    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })
  
    return form
  }
  
function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

  useEffect(() => {
    if(paymentStatus){
        console.log('!!!!!!!!!!111');
        console.log(paymentStatus)
    }
}, [paymentStatus]);

  const [isSubmit, setIsSubmit] = useState();
  const [Class, SetClass] = useState();
  const [Msg, SetMsg] = useState();
  const [Notification, SetNotification] = useState(false);
  const NotificationClose = () => SetNotification(false);
  const NotificationShow = () => SetNotification(true);
  function NotificationModel(Class, Msg) {
    SetClass(Class);
    SetMsg(Msg);
    NotificationShow();
    setTimeout(function () {
      NotificationClose();
    }, 5000);
  }

  React.useEffect(() => {
   
  }, []);

  return (
    <div className="py-5 " style={{ "background-color": "#333333" }}>
      
        <div className="modal-header">
          <div className="mt-1 modal-title heading">{Msg}</div>
          <button
            type="button"
            onClick={handleSubmit}
          >
            Pay
          </button>
        </div>
    </div>
  );
}

const mapDispatchToProps = {
    callback: callback
};

const mapStateToProps = (state) => ({
    paymentStatus: state.paymentStatus
});

Callback = connect(mapStateToProps, mapDispatchToProps)(Callback);
