import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import List from '../../src/components/list/list';

describe('A List', () => {
  const theme = { list: uniqueid() };
  const child1 = <div/>;
  const child2 = <div/>;
  const child3 = <div/>;
  const child4 = <div/>;
  const child5 = <div/>;

  it('should have a list class.', () => {
    const wrapper = shallow(<List theme={theme}></List>);
    expect(wrapper.hasClass(theme.list)).to.be.true;
  });

  it('should create a <ul> tag.', () => {
    const wrapper = shallow(<List theme={theme}></List>);
    expect(wrapper.type()).to.equal('ul');
  });

  it('should render with no children.', () => {
    const wrapper = shallow(<List theme={theme} />);
    expect(wrapper.find('li').length).to.equal(0);
  });

  it('should render its children in <li> elements.', () => {
    const wrapper = shallow(<List theme={theme}>{child1}</List>);
    expect(wrapper.contains(child1)).to.be.true;
    expect(wrapper.children().type()).to.equal('li');
  });

  it('should render multiple children.', () => {
    const wrapper = shallow(<List theme={theme}>{child1}{child2}</List>);
    expect(wrapper.contains(child1, child2)).to.be.true;
    expect(wrapper.childAt(0).type()).to.equal('li');
    expect(wrapper.childAt(1).type()).to.equal('li');
  });

  describe('with a variant', () => {
    const variant = 'numbered';
    theme.numbered = uniqueid();

    it('should have a class with that variant on the list item.', () => {
      const wrapper = shallow(<List theme={theme} variant={variant}>{child1}</List>);
      expect(wrapper.find('li').hasClass(theme[variant])).to.be.true;
    });

  });

  describe('with a className attribute,', () => {
    const customClass = uniqueid();

    it('should contain that class.', () => {
      const wrapper = shallow(<List theme={theme} className={customClass}></List>);
      expect(wrapper.hasClass(customClass)).to.be.true;
    });
  });

  describe('with a theme with mods,', () => {
    const theme = {
      list: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<List theme={theme} mod="mod1" />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<List theme={theme} mod={['mod1', 'mod2']} />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
    });
  });

});
