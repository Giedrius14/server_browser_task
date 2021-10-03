import React from 'react';
import { shallow } from 'enzyme';
import TableComponent from './TableComponent';

describe('<TableComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <TableComponent
        handleSearch={() => ({})}
        handleSortAction={() => ({})}
        servers={[]}
        sortConfig={{}}
      />
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
