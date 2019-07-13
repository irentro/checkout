import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CheckInCalender from '../CheckInCalender.jsx';


describe('CheckInCalender React Component', () => {
  it('should render correctly', () => {
    shallow(<CheckInCalender />);    
  });
});