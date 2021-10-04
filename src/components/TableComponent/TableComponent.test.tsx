import React from 'react';
import { shallow } from 'enzyme';
import TableComponent from './TableComponent';
import { Sort } from '../../interfaces/ServerList';

describe('<TableComponent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <TableComponent
        handleSearch={jest.fn()}
        handleSortAction={jest.fn()}
        servers={[]}
        sortConfig={{} as Sort}
      />
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
