import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Guests from '../Guests';


describe('Guests React Component', () => {
  it('should render correctly', () => {
    shallow(<Guests />);    
  });
});