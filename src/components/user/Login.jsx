import './login.scss';
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import {
  setUser,
  setInvalidLogin,
  users
} from './userReducer';
import Page from '../../containers/page/Page.jsx';

export class Login extends Component {
  componentWillMount() {
    if (!_.isEmpty(this.props.currentUser)) {
      this.props.push('/');
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.username).focus();
  }

  componentDidUpdate() {
    if (!_.isEmpty(this.props.currentUser)) {
      this.props.push('/');
      return;
    }

    ReactDOM.findDOMNode(this.refs.username).focus();
  }

  handleSubmit(event) {
    event.preventDefault();

    const validUser = _.find(users, {
      "name": this.refs.username.value,
      "password": this.refs.password.value
    });

    if (!_.isEmpty(validUser)) {
      this.props.setUser(validUser);
      window.localStorage.setItem('currentUserId', validUser.id);
    } else {
      this.props.setInvalidLogin(true);
    }
  }

  render() {
    const {invalidLogin} = this.props;

    return (
      <Page>
        <form className="login">
          <fieldset>
            <legend>Login Info</legend>
            {invalidLogin &&
              <div className="login__error">Username/Password combination invalid. Please adjust.</div>
            }
            <div className="login__field">
              <label htmlFor="login-username">Username:</label>
              <input ref="username" type="text" name="login-username" id="login-username" />
            </div>
            <div className="login__field">
              <label htmlFor="login-password">Password:</label>
              <input ref="password" type="password" name="login-password" id="login-password" />
            </div>

            <button
              type="submit"
              className="login__button"
              onClick={this.handleSubmit.bind(this)}
            >Submit</button>
          </fieldset>
        </form>
      </Page>
    );
  }
}

Login.propTypes = {
  currentUser: PropTypes.object.isRequired,
  invalidLogin: PropTypes.bool.isRequired,
  push: PropTypes.func.isRequired,
  setInvalidLogin: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
    invalidLogin: state.userReducer.invalidLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: bindActionCreators(setUser, dispatch),
    setInvalidLogin: bindActionCreators(setInvalidLogin, dispatch),
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
