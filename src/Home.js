import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import './App.css';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Profile from './Profile';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    await this.props.oktaAuth.signInWithRedirect();
  }
  async logout() {
    await this.props.oktaAuth.signOut();
  }

  render() {
    let body = null;
    if (this.props.authState?.isAuthenticated) {
      body = (
        <div className="Buttons">
          <button class="button" onClick={this.logout}>Logout</button>
          {/* Replace me with your root component. */}
          <Profile></Profile>
        </div>
      );
    } else {
      body = (
        <div className="Buttons">
          <button class="button" onClick={this.login}>Login</button>
        </div>
      );
    }

    return (
      <div className="Saran">
        <header className="App-header">
          {body}
        </header>
      </div>
    );
  }
});