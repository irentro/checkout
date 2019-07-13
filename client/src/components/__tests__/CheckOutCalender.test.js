import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CheckoutCalender from '../CheckoutCalender.jsx';


describe('CheckoutCalender React Component', () => {
  it('should render correctly', () => {
    shallow(<CheckoutCalender />);    
  });
});