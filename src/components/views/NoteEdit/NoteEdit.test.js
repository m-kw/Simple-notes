import React from 'react';
import { shallow } from 'enzyme';
import { NoteEditComponent } from './NoteEdit';

describe('Component NoteEdit', () => {
  it('should render without crashing', () => {
    const component = shallow(<NoteEditComponent />);
    expect(component).toBeTruthy();
  });
});
