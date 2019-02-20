import React, { Component } from 'react';

class Login extends Component {
    render() {
        return(
            <>
                <form>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit">Log In</button>
                </form>
            </>
        );
    }
}

export default Login;