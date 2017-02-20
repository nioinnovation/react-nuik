import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Accordion from '../../src/components/accordion/accordion';

describe('An Accordion', () => {
  const theme = { accordion: uniqueid() };

  it('should have a accordion class.', () => {
    const wrapper = shallow(<Accordion theme={theme}/>);
    expect(wrapper.hasClass(theme.accordion)).to.be.true;
  });

  it('should be a <div>.');

  it('should render its children.');

  describe('with a className attribute,', () => {
    it('should contain that class.');
  });

  describe('with a theme with mods,', () => {
    it('should support a single mod.');

    it('should support an array of mods.');
  });

});
