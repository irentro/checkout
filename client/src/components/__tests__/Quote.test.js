import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Quote from '../Quote.jsx';

describe('Quote React Component', () => {
  it('should render correctly', () => {
    shallow(<Quote />);    
  });
});