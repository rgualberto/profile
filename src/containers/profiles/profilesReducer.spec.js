import _ from 'lodash';
import sinon from 'sinon';
import {
  profilesReducer,
  hydrateProfiles,
  updateProfile,
  initialState,
  HYDRATE_PROFILES,
  UPDATE_PROFILE
} from './profilesReducer';

describe('Profiles Reducer', () => {
  if (!global.window.localStorage) {
    global.window.localStorage = {
      getItem() {
        return '{}';
      },
      setItem() {}
    };
  }

  it('returns initialState', () => {
    expect(profilesReducer(initialState)).toEqual(initialState);
  });

  it('returns hydrateProfiles action', () => {
    const expected = { type: HYDRATE_PROFILES };

    expect(hydrateProfiles()).toEqual(expected);
  });

  it('returns updateProfile action', () => {
    const args = {
      userId: 123,
      profileData: {}
    };
    const expected = {
      type: UPDATE_PROFILE,
      ...args
    };

    expect(updateProfile(args.userId, args.profileData)).toEqual(expected);
  });

  it('handles updateProfile action', () => {
    const newLocation = "New York";
    const args = {
      userId: 123,
      profileData: {
        location: newLocation
      }
    };
    const initialProfile = _.find(initialState.profiles, ['userId', args.userId]);
    const setItem = sinon.spy(global.window.localStorage, "setItem");

    expect(initialProfile.location).toEqual('Boston');

    const updatedState = profilesReducer(initialState, updateProfile(args.userId, args.profileData));
    const expectedUpdatedState = {
      ...initialState,
      profiles: [
        ..._.reject(initialState.profiles, ['userId', args.userId]),
        {
          ..._.find(initialState.profiles, ['userId', args.userId]),
          ...args.profileData
        }
      ]
    };

    expect(updatedState).toEqual(expectedUpdatedState);
    expect(setItem.callCount).toEqual(1);
  });
});
