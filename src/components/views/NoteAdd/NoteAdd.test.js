import React from 'react';
import { shallow } from 'enzyme';
import { NoteAddComponent } from './NoteAdd';

describe('Component NoteAdd', () => {
  it('should render without crashing', () => {
    const component = shallow(<NoteAddComponent />);
    expect(component).toBeTruthy();
  });
});
