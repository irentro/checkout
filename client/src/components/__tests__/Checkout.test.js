import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Checkout from '../Checkout';


describe('Checkout React Component', () => {
  it('should render correctly', () => {
    shallow(<Checkout />);    
  });
});