import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import {
  setUser,
  users
} from '../../components/user/userReducer';

export class Page extends Component {
  componentDidMount() {
    const currentUserId = window.localStorage.getItem('currentUserId');
    const currentUser = _.find(users, ['id', parseInt(currentUserId)]);

    if (!_.isEmpty(currentUser) && !_.isEqual(this.props.currentUser, currentUser)) {
      this.props.setUser(currentUser);
    }
  }

  handleRoute(event) {
    event.preventDefault();

    const nextRoute = event.target.attributes.href.value;

    this.props.push(nextRoute);
  }

  render() {
    const {currentUser} = this.props;
    const loggedIn = !_.isEmpty(currentUser);

    return (
      <div className="page">
        <div className="page__nav" style={{"background": "#f00"}}>
          <a
            href={loggedIn ? "/logout" : "/login"}
            onClick={this.handleRoute.bind(this)}
          >{loggedIn ? "logout" : "login"}</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
  currentUser: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser
  };
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
)(Page);
