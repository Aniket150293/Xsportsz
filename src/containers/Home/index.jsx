import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar ,Pie } from "react-chartjs-2";
import { getHomeDetails,getBankSpecificUserList } from '../../actions'
// reactstrap components
import ReactDatetime from "react-datetime";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,FormGroup,  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "./variables/charts.js";

export default function Home({getHomeDetails,getHomeDetailsSucsses,getBankSpecificUserList,getBankSpecificUserListSucsses}) {

  const [chartExample1Data,setchartExample1Data]=useState("")
  const [DoughnutData,setDoughnutData]=useState()
  const [startDate,setstartDate]=useState()
  const [endDate,setendDate]=useState()

  const [Users,setUsers]=useState()
  const [Banks,setBanks]=useState()
  const [Transations,setTransations]=useState()
  const [Accounts,setAccounts]=useState()

  if(window.Chart) parseOptions(Chart, chartOptions());

  React.useEffect(() => {
  if(startDate && endDate){
    console.log(startDate)
    console.log(endDate)
  }
  }, [startDate,endDate])

  React.useEffect(() => {
    if(getHomeDetailsSucsses)if(getHomeDetailsSucsses.status==200){
      setUsers(getHomeDetailsSucsses.data.Users)
      setBanks(getHomeDetailsSucsses.data.Banks)
      setTransations(getHomeDetailsSucsses.data.Transaction)
      setAccounts(getHomeDetailsSucsses.data.Accounts)
    }
  }, [getHomeDetailsSucsses])

  React.useEffect(() => {
    if(getBankSpecificUserListSucsses)if(getBankSpecificUserListSucsses.status==200){
getBankSpecificUserListSucsses.data.admin
    }
  }, [getBankSpecificUserListSucsses])

  React.useEffect(() => {
    getHomeDetails({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"))
    getBankSpecificUserList({"userId" : localStorage.getItem("userid")},localStorage.getItem("token"))
    setInterval(() => {
      setDoughnutData(getState());
    }, 5000);
    chartExample1["data1"]=
      canvas => {
        return {
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Performance",
              data: [50, 20, 5, 25, 10, 30, 15, 40, 40]
            }
          ]
        };
      }

    setchartExample1Data("data1")
  }, [])

  function toggleNavs(e, index) {
    e.preventDefault();
    chartExample1Data === "data1" ? setchartExample1Data("data2") : setchartExample1Data("data1")
  };

  function getRandomInt(min, max) {
	   return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getState = () => ({
  	labels: ['Red', 'Green', 'Yellow'],
  	datasets: [
  		{
  			data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
  			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  		}
  	]
  });

    return (
      <Container className="py-5"fluid>
        <div className="header pb-8 pt-md-3">
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="bg-danger shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-white text-uppercase text-muted mb-0"
                          >
                            New Users
                          </CardTitle>
                          <span className="text-white h2 font-weight-bold mb-0">
                            {Users}
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-white text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="bg-warning shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-white text-uppercase text-muted mb-0"
                          >
                            New Banks
                          </CardTitle>
                          <span className="text-white h2 font-weight-bold mb-0">
                            {Banks}
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-white text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="bg-success shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-white text-uppercase text-muted mb-0"
                          >
                            New Transations
                          </CardTitle>
                          <span className="text-white h2 font-weight-bold mb-0">
                            {Transations}
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-white text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="bg-info shadow card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-white text-uppercase text-muted mb-0"
                          >
                            New Accounts
                          </CardTitle>
                          <span className="text-white h2 font-weight-bold mb-0">
                            {Accounts}
                          </span>
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-white text-nowrap">Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
        </div>

        <Row className="mt--7">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h4 className="text-white mb-0">Transations</h4>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className="py-2 px-3"
                          href="#pablo"
                          onClick={e => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className="py-2 px-3"
                          data-toggle="tab"
                          href="#pablo"
                          onClick={e => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    height="180px"
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={e => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h4 className="mb-0">Accounts</h4>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    height="180px"
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h4 className="mb-0">Banks</h4>
                  </div>
                  <div className="col text-right">
                    <Row>
                    <Col xs={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "Date Picker Here"
                          }}
                          timeFormat={false}
                          renderDay={(props, currentDate, selectedDate) => {
                            let classes = props.className;
                            if (
                              startDate &&
                              endDate &&
                              startDate._d + "" === currentDate._d + ""
                            ) {
                              classes += " start-date";
                            } else if (
                              startDate &&
                              endDate &&
                              new Date(startDate._d + "") <
                                new Date(currentDate._d + "") &&
                              new Date(endDate._d + "") >
                                new Date(currentDate._d + "")
                            ) {
                              classes += " middle-date";
                            } else if (
                              endDate &&
                              endDate._d + "" === currentDate._d + ""
                            ) {
                              classes += " end-date";
                            }
                            return (
                              <td {...props} className={classes}>
                                {currentDate.date()}
                              </td>
                            );
                          }}
                          onChange={e => setstartDate(e)}
                        />
                      </InputGroup>
                    </FormGroup>
                    </Col>
                    <Col xs={6}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-calendar-grid-58" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "Date Picker Here"
                          }}
                          timeFormat={false}
                          renderDay={(props, currentDate, selectedDate) => {
                            let classes = props.className;
                            if (
                              startDate &&
                              endDate &&
                              startDate._d + "" === currentDate._d + ""
                            ) {
                              classes += " start-date";
                            } else if (
                              startDate &&
                              endDate &&
                              new Date(startDate._d + "") <
                                new Date(currentDate._d + "") &&
                              new Date(endDate._d + "") >
                                new Date(currentDate._d + "")
                            ) {
                              classes += " middle-date";
                            } else if (
                              endDate &&
                              endDate._d + "" === currentDate._d + ""
                            ) {
                              classes += " end-date";
                            }
                            return (
                              <td {...props} className={classes}>
                                {currentDate.date()}
                              </td>
                            );
                          }}
                          onChange={e => setendDate(e)}
                        />
                      </InputGroup>
                    </FormGroup>
                    </Col>
                    </Row>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Register Admin</th>
                    <th scope="col">Registered User</th>
                  </tr>
                </thead>
                <tbody>
                { getBankSpecificUserListSucsses ? getBankSpecificUserListSucsses.data.admin.map
                  ((item,index) => (
                    <tr>
                      <td>{item.bank}</td>
                      <td>{item.count}</td>
                      <td>{getBankSpecificUserListSucsses.data.user[index].count}</td>
                    </tr>
                  )):<tr></tr>
                }
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h4 className="mb-0">Total Users</h4>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                    <Pie data={DoughnutData}/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

  const mapDispatchToProps =  {
    getHomeDetails:getHomeDetails,
    getBankSpecificUserList:getBankSpecificUserList,
  }

  const mapStateToProps = (state) => ({
    getHomeDetailsSucsses:state.getHomeDetailsSucsses,
    getBankSpecificUserListSucsses:state.bankSpecificUserListSucsses,
  })


  Home = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home);
