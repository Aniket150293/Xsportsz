import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { submitRegisteredUser,getMasterBankList } from '../../actions'
import {
  Input,
  Container,
  Row,
  Col,
  Button,
  Modal
} from "reactstrap";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from 'axios';


export default function Register({submitRegisteredUser,RegisteredUserDetails,getMasterBankList,masterBankList}) {

    const [profileRegisteredPerson, setProfileRegisteredPerson] = useState("");
    const [profile,setProfile] =useState("");
    const [image,setImage] =useState();
    const [viewimage,setViewImage] =useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [alternateMobileNo, setAlternateMobileNo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [pan, setPan] = useState("");
    const [adhar, setAdhar] = useState("");
    const [bankId, setBankId] = useState("");

    const [edit, setEdit] = useState(false);
    const [role, setRole] = useState("");

    var history = useHistory();
    var pass,banks;
    var validateMsgValid=(<Form.Control.Feedback>Looks good!</Form.Control.Feedback>)
    var validateMsgInvalid=(<Form.Control.Feedback type="invalid">Please provide a valid Input.</Form.Control.Feedback>)
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if(history.location.pathname=="/register-bank-admin"){
            getMasterBankList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"));
            setRole("bank_admin")
        }
        else if(history.location.pathname=="/register"){
            setRole("user")
        }
        else{
            setEdit(true)
            submitRegisteredUser({userid:localStorage.getItem('userid')},localStorage.getItem("token"))
        }
    },[])

    const [data1, setdata1] = useState();
    React.useEffect(() => {
      if(masterBankList)
      if(masterBankList.status==200){
        setdata1(masterBankList.data)
        }
    }, [masterBankList])

    
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

    function loadimage(e){
        setImage(e.target.files[0])
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = e => setViewImage(reader.result)
    }

    if(!edit){
        pass=(<Row>
            <Form.Group as={Col} lg="6" >
                <Input required value={password} className="form-control-alternative" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            {validateMsgValid}
            {validateMsgInvalid}    
            </Form.Group>
            <Form.Group as={Col} lg="6" >
                <Input required value={confirmPassword} className="form-control-alternative" type="password" placeholder="Password" onChange={e => setConfirmPassword(e.target.value)}/>
            {validateMsgValid}
            {validateMsgInvalid}    
            </Form.Group>
        </Row>)

        if(role=="bank_admin"){
            banks=(<Row>
                <Form.Group as={Col} lg="12">
                    <Input required value={bankId} className="form-control-alternative" type="select" onChange={e => setBankId(e.target.value)}>
                        <option value= "">Select Bank</option>
                        {data1 ? data1.map(item => (
                            <option value={item.id}>{item.bank}</option>
                        )): 'Not Available'}
                    
                    </Input>
                        {validateMsgValid}
                        {validateMsgInvalid}
                </Form.Group>
            </Row>)  
        }
    }

    useEffect(() => {
      if(RegisteredUserDetails)if(RegisteredUserDetails.status==200 ){
        setProfileRegisteredPerson(RegisteredUserDetails.data.rows[0].profile_created_by)
        setEmail(RegisteredUserDetails.data.rows[0].email)
        setProfile(RegisteredUserDetails.data.rows[0].profile)
        // setPassword(RegisteredUserDetails.data.rows[0].password)
        // setConfirmPassword(RegisteredUserDetails.data.rows[0].Password)
        setMobileNo(RegisteredUserDetails.data.rows[0].mobile)
        setAlternateMobileNo( RegisteredUserDetails.data.rows[0].alternate_mobile)
        setFirstName( RegisteredUserDetails.data.rows[0].first_name)
        setMiddleName(RegisteredUserDetails.data.rows[0].middle_name)
        setLastName(RegisteredUserDetails.data.rows[0].last_name)
        setAddress(RegisteredUserDetails.data.rows[0].address)
        setCity(RegisteredUserDetails.data.rows[0].city)
        setState(RegisteredUserDetails.data.rows[0].state)
        setZip(RegisteredUserDetails.data.rows[0].zip_code)
        setDate(RegisteredUserDetails.data.rows[0].date_of_birth)
        setMonth(RegisteredUserDetails.data.rows[0].month_of_birth)
        setYear(RegisteredUserDetails.data.rows[0].year_of_birth)
        setPan( RegisteredUserDetails.data.rows[0].pan_number)
        setAdhar(RegisteredUserDetails.data.rows[0].adhar_number)
        console.log(RegisteredUserDetails.data.rows[0].profile)
        }
    },[RegisteredUserDetails])


    function handleSubmit(e){
        e.preventDefault();
        setIsSubmit(true);
      
if(e.currentTarget.checkValidity()){
            // var data = {
        //     "profileRegisteredPerson" : profileRegisteredPerson,
        //     "profilename" :profile.name,
        //     "email":email,
        //     "password":password,
        //     "confirmPassword":confirmPassword,
        //     "mobileNo":mobileNo,
        //     "alternateMobileNo": alternateMobileNo,
        //     "firstName" : firstName,
        //     "middleName":middleName,
        //     "lastName":lastName,
        //     "address":address,
        //     "city":city,
        //     "state":state,
        //     "zip":zip,
        //     "date":date,
        //     "month":month,
        //     "year" :year,
        //     "pan" : pan,
        //     "adhar":adhar
        // }

        // submitRegisteredUser(data)

        const profiledata = new FormData() 
        
        if(image){
            profiledata.append('file', image)
            profiledata.append("profilename" ,image.name)
        }
        if(edit)
        {
            profiledata.append("update" ,true)
            profiledata.append("userid" ,localStorage.getItem('userid'))
            profiledata.append("profile" ,profile)
        }else{
            profiledata.append("role" , role )
        }

        if(role=="bank_admin")
        {
            profiledata.append("userid" ,localStorage.getItem('userid'))
            profiledata.append("bankId" , bankId)
        }
        profiledata.append("profileRegisteredPerson" , profileRegisteredPerson)
        profiledata.append("email",email)
        profiledata.append("password",password)
        profiledata.append("confirmPassword",confirmPassword)
        profiledata.append("mobileNo",mobileNo)
        profiledata.append("alternateMobileNo", alternateMobileNo)
        profiledata.append("firstName" , firstName)
        profiledata.append("middleName",middleName)
        profiledata.append("lastName",lastName)
        profiledata.append("address",address)
        profiledata.append("city",city)
        profiledata.append("state",state)
        profiledata.append("zip",zip)
        profiledata.append("date",date)
        profiledata.append("month",month)
        profiledata.append("year" ,year)
        profiledata.append("pan" , pan)
        profiledata.append("adhar",adhar)
        axios.post('http://localhost:3000/registereduserdetails/upload', profiledata, {
            method : 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization' : localStorage.getItem('token')
            }
        }).then(function (response) {
            console.log(response)
            if(response.data.status==200){
                NotificationModel("bg-success",response.data.msg)
                if(!edit){
                    setImage(null)
                    setViewImage(null)
                    setProfileRegisteredPerson("")
                    setEmail("")
                    setProfile("")
                    setPassword("")
                    setConfirmPassword("")
                    setMobileNo("")
                    setAlternateMobileNo("")
                    setFirstName("")
                    setMiddleName("")
                    setLastName("")
                    setAddress("")
                    setCity("")
                    setState("")
                    setZip("")
                    setDate("")
                    setMonth("")
                    setYear("")
                    setPan("")
                    setAdhar("")
                    setBankId("")
                }
            }else{

NotificationModel("bg-danger",response.data.msg)
            }setIsSubmit(false);
        })
        .catch(function (error) {
            console.log(error);
NotificationModel("bg-danger","Server Error")
        });
    }
}
    return (
        <div className="py-5 ">
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
            <Container className="bg-secondary shadow card">
            <div className="card-body">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Profile Account Information
                </small>
              </div>

                <Form noValidate validated={isSubmit} onSubmit={handleSubmit}>

            <Row>
                
                <Form.Group as={Col} lg="9" >
                <Row>
                
                    <Form.Group as={Col} lg="6" >
                    <Input required value={profileRegisteredPerson} className="form-control-alternative" type="select" onChange={e => setProfileRegisteredPerson(e.target.value)}>
                        <option value= "">Choose...</option> 
                        <option value="Myself">Myself</option>
                        <option value="Other">Other</option>
                    </Input>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>

                    <Form.Group as={Col} lg="6" >
                    <Input required value={email} className="form-control-alternative" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                </Row>

                {pass}
                {banks}

                <Row>
                
                    <Form.Group as={Col} lg="6" >
                        <Input required value={mobileNo} className="form-control-alternative" type="text" placeholder="Mobile No" onChange={e => setMobileNo(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>

                    <Form.Group as={Col} lg="6" >
                        <Input required value={alternateMobileNo} className="form-control-alternative" type="text" placeholder="Alternate Mobile No" onChange={e => setAlternateMobileNo(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                
                {validateMsgValid}
                {validateMsgInvalid}</Row>
                </Form.Group>

                <Form.Group as={Col} lg="3">
                      <div className="row justify-content-center card-profile-image">
                          <img
                            alt={profile}
                            height="150px"
                            width="150px"
                            className="rounded-circle"
                            src={viewimage ? viewimage : (profile ? "http://localhost:3000/uploads/"+profile+".jpg" : require("./../../assets/img/avatar.png"))}
                          />
                          
                        <div className="custom-file">
                            <Input name="image" className="custom-file-input" type="file" onChange={loadimage}/>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                          </div>

                {validateMsgValid}
                {validateMsgInvalid}      </div>
                </Form.Group>
                
            </Row>


             

               <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  Personal Information
                </small>
              </div>
                
                <Row>
                
                    <Form.Group as={Col} lg="4" >
                    <Input required value={firstName} className="form-control-alternative" type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>

                    <Form.Group as={Col} lg="4" >
                    <Input required value={middleName} className="form-control-alternative" type="text" placeholder="Middle Name" onChange={e => setMiddleName(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>

                    <Form.Group as={Col} lg="4" >
                    <Input required value={lastName} className="form-control-alternative" type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                
                </Row>
                <Row>
                <Form.Group as={Col} lg="12" >
                    <Input required value={address} className="form-control-alternative" type="text" placeholder="Address" onChange={e => setAddress(e.target.value)}/>
            {validateMsgValid}
            {validateMsgInvalid}    
            </Form.Group>
            </Row>
                <Row>
                
                    <Form.Group as={Col} lg="4" >
                    <Input required value={city} className="form-control-alternative" type="text" placeholder="City" onChange={e => setCity(e.target.value)}>City</Input>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>

                    <Form.Group as={Col} lg="4" >
                    <Input required value={state} className="form-control-alternative" type="select" onChange={e => setState(e.target.value)}>
                        <option value="">Choose...</option>
                        <option value="1">Maharashtra</option>
                    </Input>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>

                    <Form.Group as={Col} lg="4" >
                    <Input required value={zip} className="form-control-alternative" type="text" placeholder="Zip" onChange={e => setZip(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                
                </Row>

                <Row>
                    <Form.Group as={Col} lg="4" >
                        <Input required value={date} className="form-control-alternative" type="select" onChange={e => setDate(e.target.value)}>
                            <option value="">Date</option>
                            <option value="1">1</option>
                            <option value="7">7</option>
                            <option value="14">14</option>
                            <option value="28">28</option>
                        </Input>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                    <Form.Group as={Col} lg="4" >
                    <Input required value={month} className="form-control-alternative" type="select" onChange={e => setMonth(e.target.value)}>
                        <option value="">Month</option>
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="12">12</option>
                    </Input>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                    <Form.Group as={Col} lg="4" >
                    <Input required value={year} className="form-control-alternative" type="select" onChange={e => setYear(e.target.value)}>
                        <option value="">Year</option>
                        <option value="1980">1980</option>
                        <option value="1990">1990</option>
                        <option value="1995">1995</option>
                    </Input>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                
                </Row>

                <Row>
                
                    <Form.Group as={Col} lg="6" >
                    <Input required value={pan} className="form-control-alternative" type="text" placeholder="Enter PAN No" onChange={e => setPan(e.target.value)}/>
                {validateMsgValid}
                {validateMsgInvalid}    
                </Form.Group>
                <Form.Group as={Col} lg="6" >
                    <Input required value={adhar} className="form-control-alternative" type="text" placeholder="Enter Adhar No" onChange={e => setAdhar(e.target.value)} />
            {validateMsgValid}
            {validateMsgInvalid}    
            </Form.Group>

                
                </Row>
            <br></br>
               
                <Button color="primary" type="submit">
                    Submit
                </Button>

                </Form>
            </div>
            </Container>
        </div>
    );
};

const mapDispatchToProps =  {
    submitRegisteredUser : submitRegisteredUser,
    getMasterBankList: getMasterBankList
}

const mapStateToProps = (state) => ({
    RegisteredUserDetails: state.registeredUserDetails,
    masterBankList: state.masterBankList,
})

Register = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Register);