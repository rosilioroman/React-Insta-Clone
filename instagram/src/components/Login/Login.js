import React, { Component } from 'react';
import './Login.css';

import InstagramLogo from '../../images/instagram-name-logo.jpg';

class Login extends Component {
    state = {
        username: ""
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        //prevent default behavior of <form> element
        e.preventDefault();

        //check that the user input a username
        if(!this.state.username) alert('Username field cannot be empty'); 

        //save the username in all lowercase in localStorage
        localStorage.setItem('username', this.state.username.toLowerCase());

        //un-mount and remount the component
        window.location.reload();
    }

    render() {
        return(
            <div className="login-view">
                <form onSubmit={this.handleLogin} className="login-form">
                    <img 
                        src={InstagramLogo} 
                        alt="Instagram name logo" 
                        className="insta-logo"
                    />
                    <input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        placeholder="password"
                        name="password"
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;