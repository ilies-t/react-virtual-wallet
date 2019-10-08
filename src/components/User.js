import React, { Component } from 'react';
// import logo from '../lib/assets/images/icon/brands/cnn.svg';

class User extends Component{
    render() {
        return(
            <header>
                <h1>Hello {this.props.name}!</h1>
            </header>
        );
    }
}

export default User;