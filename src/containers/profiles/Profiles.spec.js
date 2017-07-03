import React from 'react';
import {Profiles} from './Profiles.jsx';
import {shallow} from 'enzyme';
import {initialState} from './profilesReducer';

describe('Profiles Container', () => {
  it('renders profiles', () => {
    const wrapper = shallow(
      <Profiles
        profiles={initialState.profiles}
        push={() => undefined}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
