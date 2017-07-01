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
      <div className="profile-card profile">
        <a href={`/profile/${profile.userId}`} className="profile__image" onClick={this.props.handleRoute}>
          <img src={profile.photo} aria-label="profile thumbnail"/>
        </a>
        <div className="profile__details-container">
          <h2 className="profile-card__name">
            <a
              href={`/profile/${profile.userId}`}
              onClick={this.props.handleRoute}
            >{profile.name}</a>
          </h2>
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

          <a href={`/profile/${profile.userId}`} className="profile-card__link" onClick={this.props.handleRoute}>Visit Profile</a>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  handleRoute: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

export default ProfileCard;
