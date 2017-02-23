import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Pagination from '../../src/components/pagination/pagination';

describe('Pagination', () => {
  const theme = { pagination: uniqueid() };
  // const pageRange = 2;
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

  it('should render a page number for each child.', () => {
    const wrapper = shallow(<Pagination theme={theme}>{data}</Pagination>);
    expect(wrapper.contains(0)).to.be.false;
    expect(wrapper.contains(3)).to.be.true;
  });

  describe('with a className attribute,', () => {
    const customClass = uniqueid();
    theme[customClass] = uniqueid();

    it('should contain that class.', () => {
      const wrapper = shallow(<Pagination className={customClass} theme={theme}>{data}</Pagination>);
      expect(wrapper.hasClass(theme[customClass])).to.be.true;
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
