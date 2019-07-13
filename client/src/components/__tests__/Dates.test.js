import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Dates from '../Dates.jsx';
import CheckInCalender from '../CheckInCalender.jsx';
import CheckOutCalender from '../CheckOutCalender.jsx';


describe('Dates react component', () => {
  it('should render correctly', () => {
    shallow(<Dates />);    
  });

  it('displays check-in calender on check-in click', () => {
    const component = shallow(<Dates />);
    const button = component.find('.checkin-input')
    button.simulate('click');
    expect(component.containsMatchingElement(<CheckInCalender />)).toBe(true);
  })

  it('displays check-out calender on checkout click', () => {
    const component = shallow(<Dates />);
    const button = component.find('.checkout-input')
    button.simulate('click');
    expect(component.containsMatchingElement(<CheckOutCalender />)).toBe(true);
  })
});
