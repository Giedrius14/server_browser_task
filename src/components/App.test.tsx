import App from './App';
import { shallow } from 'enzyme';
import * as React from 'react';

describe(`App Component`, () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('correctly renders the component without crash', () => {
    expect(wrapper).toHaveLength(1);
  });
});
