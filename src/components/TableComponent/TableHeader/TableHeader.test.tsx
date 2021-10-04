import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TableHeader from './TableHeader';

describe('<TableHeader />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TableHeader
        handleSortAction={jest.fn()}
        sortConfig={{ fieldName: '', order: '' }}
      />
    );
  });

  test('It should mount', () => {
    expect(wrapper.length).toBe(1);
  });
});
