import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Pagination from '../../src/components/pagination/pagination';

describe('Pagination', () => {
  const theme = { pagination: uniqueid() };
  const data = [uniqueid(), uniqueid(), uniqueid(), uniqueid(), uniqueid()];
  const child = data[0];

  it('should have a pagination class.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.hasClass(theme.pagination)).to.be.true;
  });

  it('should be a <div>.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a prev and a next icon.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.find('DirectionIcon')).to.have.length(2);
  });

  it('should contain an array of links.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.find('a')).to.have.length(data.length);
  });

  it('should contain the number of links contained in its pageRange property.', () => {
    const wrapper = shallow(<Pagination pageRange={1} theme={theme}>{data}</Pagination>);
    expect(wrapper.find('a')).to.have.length(1);
  });

  it('should have exactly one link with an active class.', () => {
    theme.active = uniqueid();
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    const active = wrapper.findWhere(n => n.hasClass(theme.active));
    expect(active).to.have.length(1);
  });

  it('should render a page number for each child.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.contains(0)).to.be.false;
    expect(wrapper.contains(3)).to.be.true;
  });

  it('should have a DirectionIcon with an href property.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.find('DirectionIcon').first().props().href).to.exist;
  });

  it('should have a first DirectionIcon with an end property of true and a direction property of "prev".', () => {
    const wrapper = shallow(<Pagination pageRange={3} theme={theme} >{data}</Pagination>);
    expect(wrapper.find('DirectionIcon').first().prop('end')).to.be.true;
    expect(wrapper.find('DirectionIcon').last().prop('end')).to.be.false;
    expect(wrapper.find('DirectionIcon').first().prop('direction')).to.equal('prev');
  });

  it('should have a final DirectionIcon with an end property of true and a direction property of "next".', () => {
    const wrapper = shallow(<Pagination pageRange={uniqueid() * 1} theme={theme} >{data}</Pagination>);
    expect(wrapper.find('DirectionIcon').last().prop('end')).to.be.true;
    expect(wrapper.find('DirectionIcon').last().prop('direction')).to.equal('next');
  });

  describe('with a className attribute,', () => {
    const customClass = uniqueid();

    it('should contain that class.', () => {
      const wrapper = shallow(<Pagination className={customClass} theme={theme}>{data}</Pagination>);
      expect(wrapper.hasClass(customClass)).to.be.true;
    });
  });

  describe('with a theme with mods,', () => {
    const themeWithMods = {
      pagination: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Pagination theme={themeWithMods} mod="mod1" >{data}</Pagination>);
      expect(wrapper.hasClass(themeWithMods.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Pagination theme={themeWithMods} mod={['mod1', 'mod2']} >{data}</Pagination>);
      expect(wrapper.hasClass(themeWithMods.mod1)).to.be.true;
      expect(wrapper.hasClass(themeWithMods.mod2)).to.be.true;
    });
  });

});
