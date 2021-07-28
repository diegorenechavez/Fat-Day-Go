import React, { Component } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { Link, NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.checkRoute = this.checkRoute.bind(this);
        this.sessionButtonToggle = this.sessionButtonToggle.bind(this);
        this.dropDown = this.dropDown.bind(this);
        this.handleDropDowntoggle = this.handleDropDowntoggle.bind(this);
        this.colorToggle = this.colorToggle.bind(this);
        this.state = {
            dropDown:false
        }
     }

componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

}

componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
}

    
    
handleScroll = () => {
    
    if (window.scrollY > 20 && this.props.location.pathname !== "/dashboard" ) {
        document.querySelector(".nav-belt").className = "nav-belt-scrolled";
        document.querySelector(".nav-left").style.width = "fit-content";
        document.querySelectorAll(".nav-links").forEach((node) => node.style.color = "#242424");
        document.getElementById("login") ? document.getElementById("login").style.color= "#104110" :document.querySelector(".greeting").style.color= "#242424";
        
        
    } else {
        document.querySelector(".nav-belt-scrolled").className = "nav-belt";
        document.querySelector(".nav-left").style.width = "33.333%";
        if (this.props.location.pathname === "/") {
            document.querySelectorAll(".nav-links").forEach((node) => node.style.color = "white");
        }
        document.getElementById("login") ? document.getElementById("login").style.color= "white" : document.querySelector(".greeting").style.color= "white";
        
    }
    
};
     checkRoute() {
         if (this.props.location.pathname === "/login"
             || this.props.location.pathname === "/signup") {
             return "text-contrast"
        } 
             
         return null
     }
    
    sessionButtonToggle() {
        if (this.props.currentUser) {
            return (
                 <div className="session-button-holder">
                    <p className="greeting" style={{color:this.colorToggle()}}>Hello,&nbsp;{ this.props.currentUserName.firstname ||"Gorgeous" }</p>
                    <button className="nav-session-links" onClick={()=> this.props.logout().then(()=> this.props.history.push("/")) }>Log Out</button>
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

    colorToggle() {
        if (this.props.location.pathname === "/") return "#ffffff"
        return "#242424"
    }

    dropDown() {
        if (this.state.dropDown) {
            return (
                <div id="dropdown-container" className="dropdown-container">
                    <button className="drop-down-close-button" onClick={this.handleDropDowntoggle }>✕</button>
                    <h4 className="menu-drop-down-header">Menu</h4>
                    <NavLink  className='drop-down-nav-links' to="/">About</NavLink>
                    <NavLink className='drop-down-nav-links' to="/posts">Blog</NavLink>
                    <NavLink className='drop-down-nav-links' to="/">Gallery</NavLink>
                    <NavLink className='drop-down-nav-links' to="/">Mystery Meals</NavLink>
                    <NavLink className='drop-down-nav-links' to="/">Contact Me</NavLink>
                    <NavLink className='drop-down-nav-links' to="/login">Login In</NavLink>
                    <NavLink className='drop-down-nav-links' to="/signup">Sign Up</NavLink>
                </div>
            )
        }
        return null;
    }

    handleDropDowntoggle() {
        if (!this.state.dropDown) {
            this.setState({ dropDown: true })
        } else {
            this.setState({ dropDown: false })
        }
    }

    
    
     render() {
    console.log(this.props)
        return (
            <nav className="nav-belt">
                <div className="nav-left">
                    <Link to="/">
                        <img className="logo-nav-belt" src={window.logoURL} alt="fat day go logo" />
                    </Link>
                    <h1 className="logo-text">fatdaygo</h1>
                </div>
                <div className="nav-middle">
                    <NavLink  className="nav-links" style={{color: this.colorToggle()}} to="/">About</NavLink>
                    <NavLink className="nav-links" style={{color: this.colorToggle()}} to="/posts">Blog</NavLink>
                    <NavLink className="nav-links"  style={{color: this.colorToggle()}}to="/">Gallery</NavLink>
                    <NavLink className="nav-links" style={{color: this.colorToggle()}} to="/">Mystery Meals</NavLink>
                    <NavLink className="nav-links" style={{ color: this.colorToggle() }} to="/">Contact Me</NavLink>
                    {this.props.currentUserName.cook ? <NavLink className='nav-links' to="/dashboard">Dashboard</NavLink> :null}

                </div>
                <div className="nav-right">
                   {this.sessionButtonToggle()}
                    <GoThreeBars onClick={()=>this.handleDropDowntoggle()} className="menu-bars" />
                    { this.dropDown()}
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)