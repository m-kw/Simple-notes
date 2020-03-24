import React from 'react';
import { shallow } from 'enzyme';
import { NoteComponent } from './Note';

describe('Component Note', () => {
  it('should render without crashing', () => {
    const component = shallow(<NoteComponent />);
    expect(component).toBeTruthy();
  });
});
