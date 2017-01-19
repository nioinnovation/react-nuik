import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Button } from '../../components/button';

describe('Button', () => {
  // buttons are required to have a theme object with at least a button class
  const theme = {
    button: 'ahae',
    primary: 'asdga',
    large: 'ahfafe',
    custom: 'agas',
    one: 'rqeya',
    two: 'ahfa'
  }
  it('should be a button with a button property in the theme', () => {
    const wrapper = shallow(<Button theme={theme} />);
    expect(wrapper.hasClass(theme.button)).to.not.be.an('undefined');
    expect(wrapper.hasClass(theme.button)).to.be.true;
    expect(wrapper.type()).to.equal('button');
  });
  it('if it has a variant property, className should be the variant defined in the theme object', () => {
    const variant = 'primary';
    const wrapper = shallow(<Button variant={variant} theme={theme} />);
    expect(wrapper.hasClass('undefined')).to.be.false;
    expect(wrapper.hasClass(theme[variant])).to.be.true;
  });
  it('if it has a size property, className should map to the size defined in the theme object', () => {
    const size = 'large';
    const wrapper = shallow(<Button size={size} theme={theme} />);
    expect(wrapper.hasClass('undefined')).to.be.false;
    expect(wrapper.hasClass(theme[size])).to.be.true;
  });
  it('if it has a mod property, className should map to the mod name defined in the theme', () => {
    const mod = 'custom';
    const wrapper = shallow(<Button mod={mod} theme={theme} />);
    expect(wrapper.hasClass('undefined')).to.be.false;
    expect(wrapper.hasClass(theme[mod])).to.be.true;
  });
  it('if it has a mod property that is an array, className should map to each mod name defined in the theme', () => {
    const mod = ['one', 'two'];
    const wrapper = shallow(<Button mod={mod} theme={theme} />);
    expect(wrapper.hasClass('undefined')).to.be.false;
    expect(wrapper.hasClass(theme[mod[0]])).to.be.true;
    expect(wrapper.hasClass(theme[mod[1]])).to.be.true;
  });
  it('should return a link if it has an href property', () => {
    const href = 'html://www.example.com';
    const wrapper = shallow(<Button href={href} theme={theme}/>);
    expect(wrapper.type()).to.equal('a');
  });
  it('should have an onMouseUp property that is a function', () => {
    const handleMouseUp = sinon.spy();
    const wrapper = shallow(<Button theme={theme} onMouseUp={handleMouseUp} />);
    wrapper.find('button').simulate('mouseUp');
    expect(handleMouseUp.calledOnce).to.equal(true);
  });
});
