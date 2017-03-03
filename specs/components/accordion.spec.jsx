import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Accordion from '../../src/components/accordion/accordion';
import Twofold from '../../src/components/twofold/twofold';

describe('An Accordion', () => {
  const theme = { accordion: uniqueid() };

  const themeTwofold = {
    twofold: uniqueid(),
    detail: uniqueid(),
    active: uniqueid(),
  };

  it('should have a accordion class.', () => {
    const wrapper = shallow(
      <Accordion theme={theme}>
        <Twofold theme={themeTwofold} active />
        <Twofold theme={themeTwofold} active />
      </Accordion>);
    expect(wrapper.hasClass(theme.accordion)).to.be.true;
  });

  it('should be a <div>.', () => {
    const wrapper = shallow(
      <Accordion theme={theme}>
        <Twofold theme={themeTwofold} active />
        <Twofold theme={themeTwofold} active />
      </Accordion>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should render its children.', () => {
    const wrapper = shallow(
      <Accordion theme={theme}>
        <Twofold theme={themeTwofold} active />
        <Twofold theme={themeTwofold} active />
      </Accordion>);
    expect(wrapper.contains(<Twofold theme={themeTwofold} active />)).to.be.true;
  });

  describe('with a "single" variant,', () => {
    const active = true;
    const wrapper = shallow(
      <Accordion theme={theme} variant="single" singleActive="T2">
        <Twofold key="T1" theme={themeTwofold} active={active} />
        <Twofold key="T2" theme={themeTwofold} active={active} />
        <Twofold key="T3" theme={themeTwofold} active={active} />
      </Accordion>
    );

    it('should have at most one active class at a time.', () => {
    expect(wrapper.children().filterWhere(child => child.props().active === true)).to.have.length(1);
    });
  });

  describe('with a className attribute,', () => {
    const additionalClass = uniqueid();
    const wrapper = shallow(
      <Accordion className={additionalClass} theme={theme}>
        <Twofold theme={themeTwofold} active />
        <Twofold theme={themeTwofold} active />
      </Accordion>
    );
    it('should contain that class.', () => {
      expect(wrapper.hasClass(additionalClass)).to.be.true;
    });
  });

  describe('with a theme with mods,', () => {
    theme.mod1 = uniqueid();
    theme.mod2 = uniqueid();

    it('should support a single mod.', () => {
      const wrapper = shallow(
        <Accordion theme={theme} mod="mod1" >
          <Twofold theme={themeTwofold} active />
          <Twofold theme={themeTwofold} active />
        </Accordion>
      );
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(
        <Accordion theme={theme} mod={['mod1', 'mod2']} >
          <Twofold theme={themeTwofold} active />
          <Twofold theme={themeTwofold} active />
        </Accordion>
      );
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
    });
  });

});
