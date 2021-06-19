import React, { Component } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            firstname: "",
            lastname:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.checkRoute = this.checkRoute.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({[field]:e.currentTarget.value})
        }
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }
    goBack() {
        this.props.history.push('/')
    }

    renderErrors() {
        if (this.props.errors.length) {
            return (
                <ul className="session-errors">
                    {this.props.errors.map(error => <li className="error-message">{error }</li>)}
                </ul>
            )
        }
        return null
    }

    checkRoute() {
        if (this.props.location.pathname === "/signup") return "switch-ui"
        return 'login-container'
    }
    
    
    render() {
        return (
            <div className={this.checkRoute()}>
                <div className="login-message-container">
                    <div className="left-message-wrapper">
                        <h2 className="welcome-message">Welcome To The Chaos</h2>
                        <p className="session-instructions">
                        Hello, please sign up with your personal info to stay connected with me.    
                        </p>
                        <button className="back-button-session" onClick={this.goBack }><AiOutlineArrowLeft id="session-back" />Back To Home</button>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <h2 className="session-message">Sign Up</h2>
                    <div className="login-api-links"></div>
                    {this.renderErrors()}
                    <input type="text" value={this.state.firstname} onChange={this.handleChange('firstname')} className="session-input" placeholder={'First Name'} />
                    <input type="text" value={this.state.lastname} onChange={this.handleChange('lastname')} className="session-input" placeholder={'Last Name'}/>
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')} className="session-input" placeholder={'Email'}/>
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} className="session-input" placeholder="Password" />
                    <Link className="form-toggle" to="/login">Already A Member? Login In</Link>
                    <input type="submit" value="Sign Up" className="action-button session-action-primary" />
                    
                </form>
                
            </div>
        )
    }
}

export default withRouter(SignUp)