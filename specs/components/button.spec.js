import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Button from '../../lib/button/index.js';

describe('Button', () => {
  it('should be a button element with a bunch of variants', () => {
    const variant = 'primary';
    const href = 'html://www.example.com';
    const wrapper = shallow(<Button variant={variant} />);
    console.log(wrapper);
    expect(wrapper.props().varient).to.equal('primary');

    expect(wrapper.contains(<button />)).to.equal(true);
    // expect(wrapper.find('svg')).to.have.length(1);
    // expect(wrapper.hasClass('dashboard__window-icon')).to.equal(true);
    // expect(wrapper.find('use')).to.have.length(1);
    // expect(wrapper.node.props.children.props).to.have.key('xlinkHref');
    // expect(wrapper.node.props.children.props.xlinkHref).to.equal('./images/icons.svg#water');
  });
});
