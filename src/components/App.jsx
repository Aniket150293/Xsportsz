import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Laoading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import RegisterSport from "../containers/RegisterSport";
import Register from "../containers/Register";
import PlayerList from "../containers/PlayerList";

import Login from "../containers/Login";
import ForgotPassword from "../containers/ForgotPassword";
import ChangePassword from "../containers/ChangePassword";
import Payment from "../containers/Payment";
import Myregisteredsport from "../containers/Myregisteredsport";

let App = () => (
  <Router>
    <Header />
    <Laoading />
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/forgot-password/" component={ForgotPassword} />
    <Route path="/changePassword/" component={ChangePassword} />
    <Route path="/player-list/" component={PlayerList} />
    <Route path="/register-sport/" component={RegisterSport} />
    <Route path="/payment/" component={Payment} />
    <Route path="/my-registered-sports/" component={Myregisteredsport} />
    <Footer />
  </Router>
);

export default App;
