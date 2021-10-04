import React from 'react';
import { shallow } from 'enzyme';
import TableRow from './TableRow';

describe('<TableRow />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TableRow name={''} distance={0} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
