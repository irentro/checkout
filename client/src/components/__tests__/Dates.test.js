import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Dates from '../Dates';
import CheckInCalender from '../CheckInCalender.jsx';
import CheckOutCalender from '../CheckOutCalender.jsx';


describe('Dates React Component', () => {
  it('should render correctly', () => {
    shallow(<Dates />);    
  });

  it('opens the first calendar on checkin click', () => {
    const component = shallow(<Dates />);
    const button = component.find('.checkinInput')
    button.simulate('click');
    expect(component.containsMatchingElement(<CheckInCalender />)).toBe(true);
  })

  it('opens the first calendar on checkin click', () => {
    const component = shallow(<Dates />);
    const button = component.find('.checkoutInput')
    button.simulate('click');
    expect(component.containsMatchingElement(<CheckOutCalender />)).toBe(true);
  })
});