import './no-route.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import Page from '../../containers/page/Page.jsx';

export class NoRoute extends Component {
  handleRoute(event) {
    event.preventDefault();
    this.props.push('/');
  }

  render() {
    return (
      <Page>
        <div className="no-route">
          <h1>Oops... No Page found</h1>
          <p>It looks like this page doesn't exist! <a href="/" onClick={this.handleRoute.bind(this)}>Click here</a> to start over.</p>
        </div>
      </Page>
    );
  }
}

NoRoute.propTypes = {
  push: PropTypes.func.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoRoute);
