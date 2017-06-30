import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import {
  setUser
} from './userReducer';

export class Logout extends Component {
  componentWillMount() {
    this.props.setUser({});
    window.localStorage.removeItem('currentUserId');
    this.props.push('/');
  }

  render() {
    return null;
  }
}

Logout.propTypes = {
  push: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: bindActionCreators(setUser, dispatch),
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
