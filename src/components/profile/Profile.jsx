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
import {
  searchWikiArticles
} from '../../utils';

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      searchError: false
    };

    this.handleSearch = _.throttle(this.handleSearch.bind(this), 200);
  }

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

  handleSearch() {
    const searchTerm = this.refs.search.value;

    if (!_.isEmpty(searchTerm)) {
      searchWikiArticles(searchTerm)
        .then(response => {
          this.setState({
            searchResults: response.data.query.search,
            searchError: false
          });
        })
        .catch(error => {
          console.log(error); // eslint-disable-line no-console
          this.setState({
            searchError: true
          });
        });
    } else {
      this.setState({
        searchResults: []
      });
    }
  }

  addResearch(result) {
    const {
      currentUser,
      updateProfile
    } = this.props;
    const profile = this.getProfile();
    const wikis = [
      ...profile.wikis,
      {
        title: result.title,
        uriParam: encodeURI(result.title)
      }
    ];

    updateProfile(currentUser.id, {wikis});
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
            {profile.isEditMode &&
              <h2>Currently Editing Page...</h2>
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

          {!_.isEmpty(profile.wikis) &&
            <div className="profile__research-entries">
              <h2>Research</h2>
              {
                profile.wikis.map(({title, uriParam}, index) => (
                  <div className="profile__research-entry" key={index}>
                    <h3>{title}</h3>
                    <p>
                      <a href={`https://en.wikipedia.org/wiki/${uriParam}`} target="_blank">Read more about {title} here</a>
                    </p>
                  </div>
              ))}

              {profile.isEditMode &&
                <div className="profile__research-edit">
                  <h2>Add Research</h2>

                  <p>Search for a wikipedia article below and select an article from the generated list below:</p>

                  <div className="profile__search-contain">
                    <label htmlFor="search">Search:</label>
                    <input
                      type="text"
                      ref="search"
                      className="profile__search-box text-box"
                      onChange={this.handleSearch}
                    />

                    {this.state.searchError &&
                      <div className="error">
                        It looks like something went wrong! Please try something else.
                      </div>
                    }
                  </div>

                  <p className="profile__research-results-info">
                    * Click on the article name to go to article page
                  </p>
                  <div className="profile__research-results">
                    <table>
                      <thead>
                        <tr>
                          <th>Select</th>
                          <th>Article</th>
                          <th>Snippet</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.searchResults.map((result, index) => (
                          <tr key={index}>
                            <td className="profile__research-result-select">
                              <button type="button" onClick={this.addResearch.bind(this, result)}>select</button>
                            </td>
                            <td className="profile__research-result-preview">
                              <a href={`https://en.wikipedia.org/wiki/${encodeURI(result.title)}`} target="_blank">{result.title}</a>
                            </td>
                            <td
                              className="profile__research-result-snippet"
                              dangerouslySetInnerHTML={{__html: result.snippet}}
                            />
                          </tr>
                        ))}
                        {_.isEmpty(this.state.searchResults) &&
                            <tr>
                              <td>Search results will appear here!</td>
                            </tr>
                        }
                      </tbody>
                    </table>
                  </div>

                  <button
                    type="button"
                    className="profile__button-link"
                    onClick={this.toggleEdit.bind(this, false)}
                  >Exit Edit Mode</button>
                </div>
              }

              // store entire state so app doesnt get tanked on refresh?
            </div>
          }
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
