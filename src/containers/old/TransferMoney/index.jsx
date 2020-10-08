import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { submitTransferMoneyDetails ,getAccounts,searchAccount} from '../../actions'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  Col,Modal
} from "reactstrap";
import { useHistory } from "react-router";

import { Form,InputGroup } from "react-bootstrap";

export default function TransferMoney({submitTransferMoneyDetails,submitTransferMoneyDetails_SUCCESS,getAccounts,getAccountsSucsses,searchAccount,searchAccountSucsses}) { 
  
  const [from, setFrom] = useState("");
  const [balence, setBalence] = useState("");
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  const [mode, setmode] = useState("");
  const [touserid,setToUserId]=useState("")
  const [frombankid,setFromBankId]=useState("")
  const [tobankid,setToBankId]=useState("")

  var validateMsgValid,validateMsgInvalid;
  var history = useHistory();

  useEffect(() => {
    getAccounts({"userid":localStorage.getItem("userid")},localStorage.getItem("token"))
      validateMsgValid=(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>)
      validateMsgInvalid=(<Form.Control.Feedback type="invalid">Please provide a valid Input.</Form.Control.Feedback>)

  },[]);


  const [data2, setdata2] = useState();
  
  React.useEffect(() => {
      if(getAccountsSucsses)if(getAccountsSucsses.status==200){
          setdata2(getAccountsSucsses.data)
        }
  }, [getAccountsSucsses])

  React.useEffect(() => {
      if(searchAccountSucsses)if(searchAccountSucsses.status==200){
              setToUserId(searchAccountSucsses.data[0].user_id)
              setToBankId(searchAccountSucsses.data[0].bank_id)
      }
  }, [searchAccountSucsses])


  function search(e){
    searchAccount({"accno":e.target.value},localStorage.getItem("token"))
    setTo(e.target.value)
  }

  function validate(){
    return searchAccountSucsses ? searchAccountSucsses.status==200 : false
  }

  function handleFromBankDetails(e) {
    let objectOfFromData = getAccountsSucsses.data.find(item => item.account_no === e.target.value);
    setFrom(objectOfFromData.account_no);
    setFromBankId(objectOfFromData.bank_id)
    setBalence(objectOfFromData.available_balance)
  }

  function handleToBankDetails(e) {
    let objectOfToData = getAccountsSucsses.data.find(item => item.account_no === e.target.value);
    setTo(objectOfToData.account_no);
    setToUserId(objectOfToData.user_id)
    setToBankId(objectOfToData.bank_id)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(e.currentTarget.checkValidity()){

    var data={
            "mode": mode,
            "from": from,
            "to": to,
            "amount":amount,
            "userid": localStorage.getItem("userid"),
            "touserid":touserid,
            "frombankid":frombankid,
            "tobankid":tobankid
        }
    submitTransferMoneyDetails(data,localStorage.getItem("token"))
    }
    setIsSubmit(true)
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
    if(submitTransferMoneyDetails_SUCCESS)if(isSubmit){
      if(submitTransferMoneyDetails_SUCCESS.status==200){
        NotificationModel("bg-success","Money Transfer Sucssesfully")
        setFrom("");
        setBalence("");
        setAmount("");
        setTo("");
        setmode("");
        setToUserId("")
        setFromBankId("")
        setToBankId("")
        getAccounts({"userid":localStorage.getItem("userid")},localStorage.getItem("token"))
      }else{
        NotificationModel("bg-danger","Money Not Transfer")
      }setIsSubmit(false)
    }
  }, [submitTransferMoneyDetails_SUCCESS])

    return (
        <div className="container py-5">
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
          <div className="row">
            <Col lg="12">
              <Card className="bg-secondary shadow border-0">
                <CardHeader>
                    Transfer Fund To My Accounts
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <Form noValidate validated={isSubmit} onSubmit={handleSubmit} role="form">
                    <Form.Group className="mb-3">
                      <InputGroup>
                        <Input required className="form-control-alternative" 
                            onChange={ (e) => handleFromBankDetails(e)} 
                            placeholder="From"
                            type="select"
                            value={from}
                        >
                        <option value=''>From</option>
                        {data2 ? data2.map((item) => 
                          (<option value={item.account_no}>{item.account_no}</option>)
                          ): 'Not Available'}
                        </Input>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">{balence ? "Balance : "+balence : ""}</InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                  {validateMsgValid}
                  {validateMsgInvalid}
                      
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Input required className="form-control-alternative" 
                            placeholder="Amount To Be Transfred"
                            type="text"
                            value={amount}
                            onChange={e=> setAmount(e.target.value)}
                        />
                                        {validateMsgValid}
                  {validateMsgInvalid}
                      
                    </Form.Group>
                    <Form.Group>

            { history.location.pathname=="/transfer-money" ?
                  (
                        <Input required className="form-control-alternative" 
                            onChange={ (e) => handleToBankDetails(e)} 
                            placeholder="To"
                            type="select"
                            value={to}
                        >
                        <option value=''>To</option>
                        {data2 ? data2.map(item => (
                            <option value={item.account_no}>{item.account_no}</option>
                        )): 'Not Available'}
                        </Input>
                  ) : '' 
            }
        
            { history.location.pathname=="/transfer-money-all" ?
                  (
                            <Input required className="form-control-alternative" 
                                onChange={search} 
                                placeholder="To"
                                type="text"
                                value={to}
                            >  
                            </Input>
                  ) : ''
            }
                                        {validateMsgValid}
                  {validateMsgInvalid}
                      
                    </Form.Group>
                    <Form.Group>
                        <Input required className="form-control-alternative" 
                            onChange={e => setmode(e.target.value)} 
                            placeholder="Mode"
                            type="select"
                            value={mode}
                        >
                          <option value="">Mode</option>
                          <option value="1">IMPS</option>
                          <option value="2">NEFT</option>
                          <option value="3">RTGS</option>
                        </Input>
                                        {validateMsgValid}
                  {validateMsgInvalid}
                      
                    </Form.Group>
                    <div className="text-center">
                      <Button className="my-4" color="primary" disabled={history.location.pathname=="/transfer-money-all" ? !validate() : false} type="submit">
                        Transfer
                      </Button>
                    </div>
                    <div className="py-3 text-center">{Notification}</div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </div>
        </div>
    );
};

const mapDispatchToProps =  {
  submitTransferMoneyDetails : submitTransferMoneyDetails,
  getAccounts:getAccounts,
  searchAccount:searchAccount
}

const mapStateToProps = (state) => ({
  getAccountsSucsses:state.getAccountsSucsses,
  submitTransferMoneyDetails_SUCCESS:state.submitTransferMoneyDetails_SUCCESS,
    searchAccountSucsses:state.searchAccountSucsses
})

TransferMoney = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransferMoney);
