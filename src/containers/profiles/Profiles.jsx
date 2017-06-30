import './profiles.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import Page from '../page/Page.jsx';
import ProfileCard from '../../components/profile/ProfileCard.jsx';

export class Profiles extends Component {
  handleRoute(event) {
    event.preventDefault();

    const nextRoute = event.target.attributes.href.value;

    this.props.push(nextRoute);
  }

  render() {
    const {profiles} = this.props;

    return (
      <Page>
        <div className="profiles">
          <h1 className="profiles__heading">ProFiles</h1>
          {
            profiles.map((profile, index) => (
              <ProfileCard
                key={index}
                profile={profile}
                handleRoute={this.handleRoute.bind(this)}
              />
            ))
          }
        </div>
      </Page>
    );
  }
}

Profiles.propTypes = {
  profiles: PropTypes.array.isRequired,
  push: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    profiles: state.profilesReducer.profiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
  push: bindActionCreators(push, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
