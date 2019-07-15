import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Checkout from '../Checkout';

describe('Checkout React Component', () => {
  it('should render correctly', () => {
    shallow(<Checkout />);    
  });

  const wrapper = shallow(<Checkout />)

  it('should increase adults by 1', () => {
    const instance = wrapper.instance();
    wrapper.setState({
      adults: 1,
      maxGuests: 10
    });
    instance.incrementAdults();
    expect(wrapper.state('adults')).toStrictEqual(2)
  });

  it('should decrease adults by 1', () => {
    const instance = wrapper.instance();
    wrapper.setState({
      adults: 2,
    });
    instance.decrementAdults();
    expect(wrapper.state('adults')).toStrictEqual(1)
  });

  it('should increase children by 1', () => {
    const instance = wrapper.instance();
    wrapper.setState({
      children: 1,
      maxGuests: 10
    });
    instance.incrementChildren();
    expect(wrapper.state('children')).toStrictEqual(2)
  });

  it('should decrease children by 1', () => {
    const instance = wrapper.instance();
    wrapper.setState({
      children: 2
    });
    instance.decrementChildren();
    expect(wrapper.state('children')).toStrictEqual(1)
  });

  it('should increase infants by 1', () => {
    const instance = wrapper.instance();
    wrapper.setState({
      infants: 1
    });
    instance.incrementInfants();
    expect(wrapper.state('infants')).toStrictEqual(2)
  });

  it('should decrease infants by 1', () => {
    const instance = wrapper.instance();
    wrapper.setState({
      infants: 2
    });
    instance.decrementInfants();
    expect(wrapper.state('infants')).toStrictEqual(1)
  });
});