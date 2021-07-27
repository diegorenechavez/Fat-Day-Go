import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import Modal from "./modal/Modal";
import Nav from './navbar/NavbarContainer';
import Splash from './splash/SplashContainer';
import Login from './session/LoginContainer';
import SignUp from './session/SignUpContainer';
import {AuthRoute, ProtectedRoute} from '../util/routeUtil';
import DashBoardContainer from "./admin/DashBoardContainer";
import CreatePost from './admin/PostFormContainer'
import PostsIndexContainer from "./posts/PostsIndexContainer";
import EditPostFormContainer from './admin/EditPostFormContainer';
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
        <Route exact path="/posts" component={PostsIndexContainer} />
        <Route exact path="/" component={Splash} />
        <div className="dash-board-interface">
          <ProtectedRoute className="post-form-pos"   path="/dashboard/createPost" component={CreatePost } />
          <ProtectedRoute  path="/dashboard/posts/edit/:postId" component={EditPostFormContainer }/>
          <ProtectedRoute path="/dashboard" component={DashBoardContainer} />
        </div>
      
      </Switch>
    </div>
  );
};

export default App;