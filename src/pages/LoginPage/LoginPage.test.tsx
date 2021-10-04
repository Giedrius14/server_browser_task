import React from 'react';
import LoginPage from './LoginPage';
import { shallow } from 'enzyme';

describe('<LoginPage />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('it should mount', () => {
    expect(wrapper).toHaveLength(1);
  });
});
