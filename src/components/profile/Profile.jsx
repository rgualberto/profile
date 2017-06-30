import './profile.scss';
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Profile extends Component {
  render() {
    const {
      profile
    } = this.props;

    return (
      <div className="profile">
        <div className="profile__image">
          <img src={profile.photo} aria-label="profile picture"/>
        </div>
        <div className="profile__details-container">
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
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profile;
