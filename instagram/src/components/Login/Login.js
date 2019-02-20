import React, { Component } from 'react';

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
            <>
                <form onSubmit={this.handleLogin}>
                    <input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="password" 
                        placeholder="password"
                        name="password"
                    />
                    <button type="submit">Log In</button>
                </form>
            </>
        );
    }
}

export default Login;