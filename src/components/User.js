import React, { Component } from 'react';
// import logo from '../lib/assets/images/icon/brands/cnn.svg';

class User extends Component{
    render() {
        return(
            <header>
                <h1>Hi {this.props.name}!</h1>
                <h2>My balance</h2>
            </header>
        );
    }
}

export default User;