import React from 'react';
import { shallow } from 'enzyme';
import HeaderCell from './HeaderCell';

describe('<HeaderCell />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<HeaderCell />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
