import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Button } from '../../components/button';

describe('Button', () => {
  // buttons are required to have a theme object with at least a button class
  const theme = {
    button: 'button',
    primary: 'button--myVariant',
    large: 'button--large',
    custom: 'button--custom'
  }
  it('should be a button with a button property in the theme', () => {
    const wrapper = shallow(<Button theme={theme} />);
    expect(wrapper.hasClass('button')).to.be.true;
    expect(wrapper.type()).to.equal('button');
  });
  it('if it has a variant property, className should be the variant defined in the theme object', () => {
    const variant = 'primary';
    const wrapper = shallow(<Button variant={variant} theme={theme} />);
    expect(wrapper.hasClass('button--myVariant')).to.be.true;
    expect(wrapper.hasClass('button--variantThatIsNotInThemeObject')).to.be.false;
  });
  it('if it has a size property, className should map to the size defined in the theme object', () => {
    const size = 'large';
    const wrapper = shallow(<Button size={size} theme={theme} />);
    expect(wrapper.hasClass('button--large')).to.be.true;
  });
  it('if it has a mod property, className should map to the mode name defined in the theme', () => {
    const mod = 'custom';
    const wrapper = shallow(<Button mod={mod} theme={theme} />);
    expect(wrapper.hasClass('button--custom')).to.be.true;
  });
  it('should return a link if it has an href property', () => {
    const href = 'html://www.example.com';
    const wrapper = shallow(<Button href={href} theme={theme}/>);
    expect(wrapper.type()).to.equal('a');
  });
  it('should have an onMouseUp property that is a function', () => {
    const wrapper = shallow(<Button theme={theme} />);
    expect(wrapper.props()).to.have.property('onMouseUp');
    expect(wrapper.props().onMouseUp).to.be.a('function');
  });
  it('should have a ref property that is a function', () => {
    const wrapper = shallow(<Button theme={theme} />);
    expect(wrapper.node).to.have.property('ref');
    expect(wrapper.node.ref).to.be.a('function');
  });
});
