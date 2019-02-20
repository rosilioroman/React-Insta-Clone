import React, { Component } from 'react';

const authenticate = App => Login => (
    class extends Component {
        render() {
            if(false) {
                return <App />
            }

            return <Login />
        }
    }
)

export default authenticate;