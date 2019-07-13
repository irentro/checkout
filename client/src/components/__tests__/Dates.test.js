import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Dates from '../Dates';


describe('Dates React Component', () => {
  it('should render correctly', () => {
    shallow(<Dates />);    
  });
});