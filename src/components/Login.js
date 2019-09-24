import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();
    this.state = { msg: "" };
  }
  envia(event) {
    event.preventDefault();
    fetch("localhost:8080/api/public/login", requestInfo)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          this.setState({ msg: "Não foi possível fazer o login." });
        }
      })
      .then(token => {});
  }
  render() {
    return (
      <div className="login-box">
        <h1 className="header-logo">InstaPhoto</h1>
        <span>{this.state.msg}</span>
        <form onSubmit={this.envia}>
          <input type="text" ref={input => (this.login = input)} />
          <input type="password" ref={input => (this.senha = input)} />
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
}

export default Login;
