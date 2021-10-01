import React from 'react';
import '@testing-library/jest-dom/extend-expect';
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
