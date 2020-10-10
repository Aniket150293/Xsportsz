import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Laoading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import RegisterSport from "../containers/RegisterSport";
import Register from "../containers/Register";
import CreatedCustomerList from "../containers/CreatedCustomerList";

import Login from "../containers/Login";
import ForgotPassword from "../containers/ForgotPassword";
import ChangePassword from "../containers/ChangePassword";

let App = () => (
  <Router>
    <Header />
    <Laoading />
    {/* <div className="pt-5"> */}

    <Route path="/" exact component={Login} />

    {/* <Route path="/home" exact component={Home} /> */}

    <Route path="/register" component={Register} />
    {/* <Route path="/register-bank-admin/" component={Register} /> */}

    <Route path="/forgot-password/" component={ForgotPassword} />
    <Route path="/changePassword/" component={ChangePassword} />

    <Route path="/customer-list/" component={CreatedCustomerList} />
    {/* <Route path="/bank-admin-list/" component={CreatedCustomerList} /> */}

    {/* <Route path="/bank-list/" component={CreatedBankList} /> */}
    <Route path="/register-sport/" component={RegisterSport} />

    {/* <Route path="/report/" component={Report} /> */}

    {/* <Route path="/customer-registered-bank-list/" component={CustomerRegisteredBank} />

               <Route path="/transfer-money/" component={TransferMoney} />
               <Route path="/transfer-money-all/" component={TransferMoney} /> */}
    {/* 
          </div> */}
    <Footer />
  </Router>
);

export default App;
