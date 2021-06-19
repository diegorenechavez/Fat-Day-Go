import React, { Component } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { Link, NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.checkRoute = this.checkRoute.bind(this);
        this.sessionButtonToggle = this.sessionButtonToggle.bind(this);
     }

componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}
    
    
handleScroll = () => {
    if (window.scrollY > 20) {
        document.querySelector(".nav-belt").className = "nav-belt-scrolled";
        document.querySelectorAll(".nav-links").forEach((node) => node.style.color = "#242424");
        document.getElementById("login") ? document.getElementById("login").style.color= "#104110" :document.querySelector(".greeting").style.color= "#242424";
        
        
    } else {
        document.querySelector(".nav-belt-scrolled").className = "nav-belt";
        document.querySelectorAll(".nav-links").forEach((node) => node.style.color = "white");
        document.getElementById("login") ? document.getElementById("login").style.color= "white" : document.querySelector(".greeting").style.color= "white";
        
    }
};
     checkRoute() {
         if (this.props.location.pathname === "/login"
             || this.props.location.pathname === "/signup"
             || this.props.location.pathname === "/dashboard") {
             return "text-contrast"
        } 
             
         return null
     }
    
    sessionButtonToggle() {
        if (this.props.currentUser) {
            return (
                 <div className="session-button-holder">
                    <p className="greeting">Hello,&nbsp;{ this.props.currentUserName.firstname }</p>
                    <button className="nav-session-links" onClick={()=> this.props.logout() }>Log Out</button>
                    </div>
            )
        }
        return (
            <div className="session-button-holder">
                <NavLink activeClassName="text-contrast" id="login" to='/login'>
                    <div id="login-text" className={this.checkRoute()}>Login</div>
                </NavLink>
                <Link to='/signup' className="sign-up-button-wrapper">
                    Sign Up
                </Link>
            </div>
        )
    }
    
     render() {
    console.log(this.props)
        return (
            <nav className="nav-belt">
                <div className="nav-left">
                    <img className="logo-nav-belt" src={window.logoURL } alt="fat day go logo" />
                    <h1 className="logo-text">fatdaygo</h1>
                </div>
                <div className="nav-middle">
                    <NavLink  className='nav-links' to="/">About</NavLink>
                    <NavLink className='nav-links' to="/">Blog</NavLink>
                    <NavLink className='nav-links' to="/">Gallery</NavLink>
                    <NavLink className='nav-links' to="/">Mystery Meals</NavLink>

                </div>
                <div className="nav-right">
                   {this.sessionButtonToggle()}
                    <GoThreeBars className="menu-bars"/>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)