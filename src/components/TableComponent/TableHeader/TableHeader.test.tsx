import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader';

describe('<TableHeader />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TableHeader />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
