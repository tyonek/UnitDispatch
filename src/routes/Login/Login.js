import React, { Component } from 'react';
import LoginForm from '../../component/Forms/loginForm/Login'

export default class Signup extends Component{
  render(){
    console.log(this.props)
    return (
      <div>
        <LoginForm currentUser={this.props.currentUser} {...this.props}/>
      </div>
    )
  }
}