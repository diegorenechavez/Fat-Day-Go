import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import Modal from "./modal/Modal";
import Nav from './navbar/NavbarContainer';
import Splash from './splash/SplashContainer';
import Login from './session/LoginContainer';
import SignUp from './session/SignUpContainer';
import {AuthRoute, ProtectedRoute} from '../util/routeUtil';
import DashBoardContainer from "./admin/DashBoardContainer";
// import SessionForm from "./session/SessionFormContainer"
// import LoginForm from "./session/LoginFormContainer"
// import Splash from "./splash/Splash"
// import ChatInterface from "./chat/ChatInterfaceContainer";
// import {AuthRoute,ProtectedRoute} from '../route_util/routeUtil'

const App = () => {
  return (
    <div>
     
      <Nav/>
      <Switch>
        <AuthRoute  path="/login" component={Login}/>
        <AuthRoute path="/signup" component={SignUp} />
        <ProtectedRoute path="/dashboard" component={DashBoardContainer } />
        <Route exact path="/" component={Splash} />
      
      </Switch>
    </div>
  );
};

export default App;