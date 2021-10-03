import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ServerList from './ServerList';
import { shallow } from 'enzyme';

describe('<ServerList />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ServerList />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('it should mount', () => {
    expect(wrapper).toHaveLength(1);
  });
});
