import './profile.scss';
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {push} from 'react-router-redux';
import Page from '../../containers/page/Page.jsx';
import {
  updateProfile
} from '../../containers/profiles/profilesReducer';

export class Profile extends Component {
  componentWillMount() {
    if (_.isEmpty(this.getProfile())) {
      this.props.push('/pageNotFound');
    }
  }

  getProfile() {
    const {
      match,
      profiles
    } = this.props;

    return _.find(profiles, ['userId', parseInt(match.params.userId)]);
  }

  toggleEdit(toggleState) {
    const {
      currentUser,
      updateProfile
    } = this.props;

    updateProfile(currentUser.id, {isEditMode: toggleState});
  }

  render() {
    const profile = this.getProfile();

    if (_.isEmpty(profile)) {
      return null;
    }

    const {
      match,
      currentUser
    } = this.props;
    const isCurrentProfile = currentUser.id === parseInt(match.params.userId);

    return (
      <Page>
        <div className="profile">
          <div className="profile__image">
            <img src={profile.photo} aria-label="profile picture"/>
          </div>
          <div className="profile__details-container">
            {(isCurrentProfile && !profile.isEditMode) &&
              <button
                type="button"
                className="profile__button-link"
                onClick={this.toggleEdit.bind(this, true)}
              >Edit Page</button>
            }
            <h1 className="profile__name">{profile.name}</h1>
            {!_.isEmpty(profile.location) &&
              <div className="profile__details">
                <span className="profile__details-label">Based out of</span>
                <p className="profile__details-value">{profile.location}</p>
              </div>
            }

            {!_.isEmpty(profile.education) &&
              <div className="profile__details">
                <span className="profile__details-label">Education</span>
                <div className="profile__details-value">
                  {
                    profile.education.map((entry, index) => (
                      <div className="profile__education-entry" key={index}>
                        <p className="profile__education-degree">{entry.degree}</p>
                        <p className="profile__education-school">{entry.school}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            }

            {!_.isEmpty(profile.currentProject) &&
              <div className="profile__details">
                <span className="profile__details-label">Current Project</span>
                <p className="profile__details-value">{profile.currentProject}</p>
              </div>
            }
          </div>

          <div className="profile__research-entries">
            Wikipedia entries here (Much Smart, Very Wow)
          </div>
        </div>
      </Page>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  profiles: PropTypes.array.isRequired,
  push: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    profiles: state.profilesReducer.profiles,
    currentUser: state.userReducer.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    push: bindActionCreators(push, dispatch),
    updateProfile: bindActionCreators(updateProfile, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
