import React from 'react';
import { shallow, mount, render } from 'enzyme';
import GuestsPanel from '../GuestsPanel.jsx';


describe('GuestsPanel React Component', () => {
  it('should render correctly', () => {
    shallow(<GuestsPanel />);    
  });
});