import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { GoogleApiLogin } from '../loginApi/GoogleApiLogin';

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    
    componentWillUnmount() {
        this.props.clearErrors()
    
    }

    handleChange(field) {
        return (e) => {
            this.setState({[field]:e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
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
    
    
    render() {
        return (
            <div className="login-container">
                <div className="login-message-container">
                    <div className="left-message-wrapper">
                        <h2 className="welcome-message">Welcome Back</h2>
                        <p className="session-instructions">
                        Hello again. please login with your personal info to stay connected with me.    
                        </p>
                        <button className="back-button-session" onClick={this.goBack }><AiOutlineArrowLeft id="session-back" />Back To Home</button>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <h2 className="session-message">Login</h2>
                    <div className="login-api-links"><GoogleApiLogin/></div>
                    { this.renderErrors()}
                    <input type="text" value={this.state.email} onChange={this.handleChange('email')} className="session-input" placeholder={'Email'}/>
                    <input type="password" value={this.state.password} onChange={this.handleChange('password')} className="session-input" placeholder="Password" />
                    <Link className="form-toggle" to="/signup">Not A Member? Sign Up</Link>
                    <input type="submit" value="Login" className="action-button session-action-primary" />
                    
                </form>
                
            </div>
        )
    }
}
