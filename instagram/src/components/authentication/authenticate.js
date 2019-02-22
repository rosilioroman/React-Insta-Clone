import React, { Component } from 'react';

const authenticate = App => Login => (
    class extends Component {
        state = {
            isLoggedIn: false
        }

        //when the component mounts, check local storage for a 'username' key
        componentDidMount() {
            if(localStorage.getItem('username')) {
                this.setState({ isLoggedIn: true });
            }
        }

        render() {
            //if isLoggedIn is true, return the App component
            if(this.state.isLoggedIn) return <App />

            //by default, return the Login component
            return <Login />
        }
    }
)

export default authenticate;