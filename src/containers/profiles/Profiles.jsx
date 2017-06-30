import './profiles.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Profile from '../../components/profile/Profile.jsx';

export class Profiles extends Component {
  render() {
    const {profiles} = this.props;

    return (
      <div className="profiles">
        <h1 className="profiles__heading">ProFiles</h1>
        {
          profiles.map((profile, index) => (
            <Profile
              key={index}
              profile={profile}
            />
          ))
        }
      </div>
    );
  }
}

Profiles.propTypes = {
  profiles: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    profiles: state.profilesReducer.profiles
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
