import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CheckOutCalender from '../CheckOutCalender';


describe('CheckOutCalender React Component', () => {
  it('should render correctly', () => {
    shallow(<CheckOutCalender />);    
  });
});