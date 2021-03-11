import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  registerBankByAdmin,
  getRole,
  getSports,
  getSpetialization,
  submitRegisteredUser,
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
import "./registersport.css";

export default function RegisterSport({
  registerBankByAdmin,
  registeredBankDetailsByAdmin,
  getRole,
  getRolesuccess,
  getSports,
  getSportsSucsses,
  getSpetializationSucsses,
  getSpetialization,
  submitRegisteredUser,
  submitRegisteredUserSucsses,
}) {
  const [sport, setSport] = useState("");
  const [role, setRole] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [spetialization, setSpetialization] = useState("");
  const [gender, setGender] = useState();
  const [first_name, setfirst_name] = useState();
  const [middle_name, setmiddle_name] = useState();
  const [last_name, setlast_name] = useState();
  const [email, setemail] = useState();
  const [mobile, setmobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [birthDate, setBirthDate] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [disability, setDisability] = useState();
  const [disabilityDetails, setDisabilityDetails] = useState();
  const [achievement, setAchievement] = useState();
  const [levelPlayedOn, setLevelPlayedOn] = useState();
  const [accountNo, setAccountNo] = useState();
  const [ifsc, setIfsc] = useState();
  const [futurePlan, setFuturePlan] = useState();
  const [category, setCategory] = useState();
  const [clubName, setClubName] = useState();
  const [familyDetails, setFamilyDetails] = useState();
  const [termsAccept, setTermsAccept] = useState(false);

  var history = useHistory();
  var validateMsgValid = (
    // <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    <div></div>
  );
  var validateMsgInvalid = (
    <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
  );

  useEffect(() => {
    getSports(
      { userid: localStorage.getItem("userid") },

      localStorage.getItem("token")
    );
    submitRegisteredUser(
      { userid: localStorage.getItem("userid") },
      localStorage.getItem("token")
    );
    getRole(
      { userid: localStorage.getItem("userid") },
      localStorage.getItem("token")
    );
  }, []);

  React.useEffect(() => {
    if (submitRegisteredUserSucsses)
      if (submitRegisteredUserSucsses.status == 200) {
        setfirst_name(submitRegisteredUserSucsses.data.rows[0].first_name);
        setmiddle_name(submitRegisteredUserSucsses.data.rows[0].middle_name);
        setlast_name(submitRegisteredUserSucsses.data.rows[0].last_name);
        setemail(submitRegisteredUserSucsses.data.rows[0].email);
        setmobile(submitRegisteredUserSucsses.data.rows[0].mobile);
        setAddress(submitRegisteredUserSucsses.data.rows[0].address);
        setCity(submitRegisteredUserSucsses.data.rows[0].city);
        setBirthDate(submitRegisteredUserSucsses.data.rows[0].year_of_birth);
      }
  }, [submitRegisteredUserSucsses]);

  const [data1, setdata1] = useState();

  React.useEffect(() => {
    if (getSportsSucsses)
      if (getSportsSucsses.status == 200) {
        setdata1(getSportsSucsses.data);
      }
  }, [getSportsSucsses]);

  const [data2, setdata2] = useState();

  React.useEffect(() => {
    if (getSpetializationSucsses)
      if (getSpetializationSucsses.status == 200) {
        setdata2(getSpetializationSucsses.data);
      }
  }, [getSpetializationSucsses]);

  const [roledata, setroledata] = useState();
  React.useEffect(() => {
    if (getRolesuccess)
      if (getRolesuccess.status == 200) {
        setroledata(getRolesuccess.data);
      }
  }, [getRolesuccess]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      var data = {
        userid: localStorage.getItem("userid"),
        sport: sport,
        years: years,
        role: role,
        months: months,
        spetialization: spetialization,
        gender: gender,
        weight: weight,
        height: height,
        bloodGroup: bloodGroup,
        education: education,
        experience: experience,
        disability: disability,
        disabilityDetails: disabilityDetails,
        clubName: clubName,
        achievement: achievement,
        levelPlayedOn: levelPlayedOn,
        accountNo: accountNo,
        ifsc: ifsc,
        familyDetails: familyDetails,
        futurePlan: futurePlan,
        category: category,
      };
      registerBankByAdmin(data, localStorage.getItem("token"));
    }
    setIsSubmit(true);
  }
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
    if (registeredBankDetailsByAdmin)
      if (isSubmit) {
        if (registeredBankDetailsByAdmin.status == 200) {
          localStorage.setItem("first_name", first_name);
          localStorage.setItem("last_name", last_name);
          localStorage.setItem("middle_name", middle_name);
          localStorage.setItem("email", email);
          localStorage.setItem("mobile", mobile);
          NotificationModel("bg-success", "Details Added Sucssesfully");
          setRole("");
          setSport("");
          setYears("");
          setMonths("");
          setSpetialization("");
          setTimeout(() => {
            history.push("/payment");
          }, 2000);
        } else {
          NotificationModel(
            "bg-danger",
            "User Registration Failed. Please Try Again"
          );
        }
        setIsSubmit(false);
      }
  }, [registeredBankDetailsByAdmin]);

  return (
    <div className="py-5 " style={{ "background-color": "#333333" }}>
      <Modal
        className="modal-dialog modal-danger"
        contentClassName={Class}
        isOpen={Notification}
        toggle={NotificationClose}
      >
        <div className="modal-header">
          <div className="mt-1 modal-title heading">{Msg}</div>
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

      <Container className="cardPos">
        <Row>
          <Col lg="5">
            <Card
              className="shadow card-stats mb-4 mb-xl-0"
              style={{ "background-color": "#E92929" }}
            >
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-white text-uppercase text-muted mb-0"
                    >
                      Users Details
                    </CardTitle>
                    <hr />
                    <span className="mt-3 text-white font-weight-bold mb-0">
                      {"Username : " + first_name}
                      {" " + middle_name}
                      {" " + last_name}
                      <br />
                      {"Email : " + email}
                      <br />
                      {"Mobile : " + mobile}
                      <br />
                      {"Address : " + address}
                      <br />
                      {"City : " + city}
                      <br />
                      {"Birth Year : " + birthDate}
                      <br />
                    </span>
                  </div>
                </Row>
                {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-white text-nowrap">Since last month</span>
                      </p> */}
              </CardBody>
            </Card>
            <br></br>
            <Card
              className="shadow card-stats mb-4 mb-xl-0"
              style={{ "background-color": "#E92929" }}
            >
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-white text-uppercase text-muted mb-0"
                    >
                      Trial Form Fees
                    </CardTitle>
                    <hr />
                    <span className="mt-3 text-white font-weight-bold mb-0">
                      Rs. 294
                    </span>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="7">
            <div class="bg-secondary shadow card">
              <div className="card-body">
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    Sports Details
                  </small>
                </div>

                <Form noValidate validated={isSubmit} onSubmit={handleSubmit}>
                  <Row>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="11" sm="11">
                      <Input
                        required
                        value={role}
                        className="form-control-alternative"
                        type="select"
                        placeholder="Enter Role"
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">Select Role</option>
                        {roledata
                          ? roledata.map((item) => (
                              <option value={item.id}>{item.role}</option>
                            ))
                          : "not available"}
                      </Input>

                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                  </Row>
                  <Row>
                    <div class="form-check form-check-inline">
                      <Form.Group as={Col} lg="1" sm="1">
                        <span style={{ color: "red" }}>*</span>
                      </Form.Group>
                      <Form.Group as={Col} lg="3">
                        <Input
                          required
                          value="male"
                          className="form-control-alternative form-check-inline"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          class="form-check-label"
                          for="inlineRadio1"
                          value={gender}
                        >
                          Male
                        </label>
                      </Form.Group>
                      {validateMsgValid}
                      {validateMsgInvalid}
                      <Form.Group as={Col} lg="5">
                        <Input
                          required
                          value="female"
                          className="form-control-alternative form-check-inline"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          class="form-check-label"
                          for="inlineRadio2"
                          value={gender}
                        >
                          Female
                        </label>
                      </Form.Group>
                      {validateMsgValid}
                      {validateMsgInvalid}
                      <Form.Group as={Col} lg="4">
                        <Input
                          required
                          value="other"
                          className="form-control-alternative form-check-inline"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          class="form-check-label"
                          for="inlineRadio3"
                          value={gender}
                        >
                          Other
                        </label>
                        {validateMsgValid}
                        {validateMsgInvalid}
                      </Form.Group>
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </div>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="6" sm="6">
                      <Input
                        required
                        value={sport}
                        className="form-control-alternative"
                        type="select"
                        placeholder="Select Sport"
                        onChange={(e) => {
                          setSport(e.target.value);
                          getSpetialization(
                            {
                              sport_id: e.target.value,
                              userid: localStorage.getItem("userid"),
                            },
                            localStorage.getItem("token")
                          );
                        }}
                      >
                        <option value="">Select Sport</option>
                        {data1
                          ? data1.map((item) => (
                              <option value={item.id}>{item.name}</option>
                            ))
                          : "Not Available"}
                      </Input>
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                    <Form.Group as={Col} lg="5" sm="5">
                      <Input
                        value={spetialization}
                        className="form-control-alternative"
                        type="select"
                        placeholder="Select Spetialization"
                        onChange={(e) => setSpetialization(e.target.value)}
                      >
                        <option value="">Select Spetialization</option>
                        {data2
                          ? data2.map((item) => (
                              <option value={item.id}>{item.name}</option>
                            ))
                          : "Not Available"}
                      </Input>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="5" sm="5">
                      <Input
                        required
                        value={years}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Enter Age Years"
                        onChange={(e) => setYears(e.target.value)}
                      />
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="5" sm="5">
                      <Input
                        required
                        value={months}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Enter Age Months"
                        onChange={(e) => setMonths(e.target.value)}
                      />
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                  </Row>
                  <Row></Row>
                  <Row>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="3" sm="3">
                      <Input
                        required
                        value={weight}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Weight in Kgs"
                        onChange={(e) => setWeight(e.target.value)}
                      />
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="3" sm="3">
                      <Input
                        required
                        value={height}
                        className="form-control-alternative"
                        type="height"
                        placeholder="Height in Inches"
                        onChange={(e) => setHeight(e.target.value)}
                      />
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="3" sm="3">
                      <Input
                        required
                        value={bloodGroup}
                        className="form-control-alternative"
                        type="select"
                        placeholder="Blood Group"
                        onChange={(e) => setBloodGroup(e.target.value)}
                      >
                        <option value="">Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B+">B+</option>
                        <option value="B+">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </Input>
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="5" sm="5">
                      <Input
                        required
                        value={education}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Education/Qualification"
                        onChange={(e) => setEducation(e.target.value)}
                      />
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                    <Form.Group as={Col} lg="6" sm="6">
                      <Input
                        value={experience}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Experience"
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="1" sm="1">
                      <span style={{ color: "red" }}>*</span>
                    </Form.Group>
                    <Form.Group as={Col} lg="4" sm="4">
                      <Input
                        required
                        value={disability}
                        className="form-control-alternative"
                        type="select"
                        placeholder="Select Disability"
                        onChange={(e) => setDisability(e.target.value)}
                      >
                        <option value="">Select Disability</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Input>
                      {validateMsgValid}
                      {validateMsgInvalid}
                    </Form.Group>
                    <Form.Group as={Col} lg="7" sm="7">
                      <Input
                        value={disabilityDetails}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Details of Disability"
                        onChange={(e) => setDisabilityDetails(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="12" sm="12">
                      <Input
                        value={clubName}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Club's/Institution's Played For"
                        onChange={(e) => setClubName(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="6" sm="6">
                      <Input
                        value={achievement}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Achievements"
                        onChange={(e) => setAchievement(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} lg="6" sm="6">
                      <Input
                        value={levelPlayedOn}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Level's Played"
                        onChange={(e) => setLevelPlayedOn(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} lg="6" sm="6">
                      <Input
                        value={familyDetails}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Family Background"
                        onChange={(e) => setFamilyDetails(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} lg="6" sm="6">
                      <Input
                        value={futurePlan}
                        className="form-control-alternative"
                        type="text"
                        placeholder="Future Plan"
                        onChange={(e) => setFuturePlan(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <div class="form-check form-check-inline">
                      <Form.Group as={Col} lg="12">
                        <Input
                          required
                          value="termsAccept"
                          className="form-control-alternative form-check-inline"
                          type="checkbox"
                          onChange={(e) => {
                            setTermsAccept(e.target.checked);
                            console.log(e.target.checked);
                          }}
                        />
                        &nbsp;
                        <label class="form-check-label">
                          I Accept Terms of Services
                        </label>
                      </Form.Group>
                    </div>
                  </Row>

                  <br></br>
                  <Button
                    color="danger"
                    type="submit"
                    className=""
                    disabled={termsAccept !== false ? false : true}
                  >
                    Register Sport
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapDispatchToProps = {
  registerBankByAdmin: registerBankByAdmin,
  getRole: getRole,
  getSports: getSports,
  getSpetialization: getSpetialization,
  submitRegisteredUser: submitRegisteredUser,
};

const mapStateToProps = (state) => ({
  registeredBankDetailsByAdmin: state.registeredBankDetailsByAdmin,
  getRolesuccess: state.getRolesuccess,
  getSportsSucsses: state.getSportsSucsses,
  getSpetializationSucsses: state.getSpetializationSucsses,
  submitRegisteredUserSucsses: state.registeredUserDetails,
});

RegisterSport = connect(mapStateToProps, mapDispatchToProps)(RegisterSport);
