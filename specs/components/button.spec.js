import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import Button from '../../lib/button/index.js';

describe('Button', () => {
  it('should be a Button with that can be assigned variants and sizes', () => {
    const variant = 'primary';
    const size = 'large';
    const wrapper = shallow(<Button variant={variant} size={size}/>);
    expect(wrapper.props().variant).to.equal('primary');
    expect(wrapper.props().size).to.equal('large');
    expect(wrapper.name()).to.equal('Button');
  });
  it('should return a link if it has an href property', () => {
    const href = 'html://www.example.com';
    const wrapper = shallow(<Button href={href} />);
    // expect(wrapper.type()).to.equal('a');
  });
});
