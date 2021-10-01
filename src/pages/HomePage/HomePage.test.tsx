import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';
import { shallow } from 'enzyme';

describe('<HomePage />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('it should mount', () => {
    expect(wrapper).toHaveLength(1);
  });
});
