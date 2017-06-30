import './profile.scss';
import './profile-card.scss';
import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ProfileCard extends Component {
  render() {
    const {
      profile
    } = this.props;

    return (
      <div className="profile-card">
        <div className="profile-card__image">
          <img src={profile.photo} aria-label="profile thumbnail"/>
        </div>
        <div className="profile-card__details-container">
          <h2 className="profile-card__name">{profile.name}</h2>
          {!_.isEmpty(profile.location) &&
            <div className="profile__details">
              <span className="profile__details-label">Based out of:</span>
              <p className="profile__details-value">{profile.location}</p>
            </div>
          }

          {!_.isEmpty(profile.education) &&
            <div className="profile__details">
              <span className="profile__details-label">Education:</span>
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
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileCard;
