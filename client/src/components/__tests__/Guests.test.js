import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Guests from '../Guests';
import GuestsPanel from '../GuestsPanel.jsx';


describe('Guests React Component', () => {
  it('should render correctly', () => {
    shallow(<Guests />);    
  });

  it('open up the guests panel', () => {
    const component = shallow(<Guests />);
    const button = component.find('.guestsButton')
    button.simulate('click');
    expect(component.containsMatchingElement(<GuestsPanel />)).toBe(true);
  })
});