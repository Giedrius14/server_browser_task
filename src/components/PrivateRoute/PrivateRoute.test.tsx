import React from 'react';
import PrivateRoute from './PrivateRoute';
import { shallow } from 'enzyme';

describe('<PrivateRoute />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<PrivateRoute />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('it should mount', () => {
    expect(wrapper).toHaveLength(1);
  });
});
