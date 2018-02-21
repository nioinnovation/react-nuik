import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Twofold from '../../src/components/twofold/twofold';

describe('A Twofold', () => {
  const theme = {
    twofold: uniqueid(),
    detail: uniqueid(),
    active: uniqueid(),
  };
  const active = false;
  const child = uniqueid();
  const detail = uniqueid();

  it('should have a twofold class.', () => {
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.hasClass(theme.twofold)).to.be.true;
  });

  it('should be wrapped in a <div>.', () => {
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain a clickable <a> tag.', () => {
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.find('a')).to.have.length(1);
  });

  it('should contain a header.', () => {
    theme.header = uniqueid();
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.findWhere(n => n.hasClass(theme.header))).to.have.length(1);
  });

  it('should contain a heading.', () => {
    theme.heading = uniqueid();
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.findWhere(n => n.hasClass(theme.header))).to.have.length(1);
  });

  it('should contain a subheading.', () => {
    theme.subheading = uniqueid();
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.findWhere(n => n.hasClass(theme.subheading))).to.have.length(1);
  });

  it('should contain an icon.', () => {
    theme.icon = uniqueid();
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.findWhere(n => n.hasClass(theme.icon))).to.have.length(1);
  });

  it('should contain a detail element.', () => {
    theme.icon = uniqueid();
    const wrapper = shallow(<Twofold theme={theme} active={active} />);
    expect(wrapper.findWhere(n => n.hasClass(theme.detail))).to.have.length(1);
  });

  it('should render its children in the detail element.', () => {
    const wrapper = shallow(<Twofold theme={theme} active={active}>{child}</Twofold>);
    expect(wrapper.findWhere(n => n.hasClass(theme.detail)).contains(child)).to.be.true;
  });

  describe('when active,', () => {

    it('should have an active class on on the detail.', () => {
      const wrapper = shallow(<Twofold theme={theme} active>{child}</Twofold>);
      expect(wrapper.findWhere(n => n.hasClass(theme.detail)).hasClass(theme.active)).to.be.true;
    });

    it('should have an open class on on the icon.', () => {
      theme.iconOpen = uniqueid();
      const wrapper = shallow(<Twofold theme={theme} active>{child}</Twofold>);
      expect(wrapper.findWhere(n => n.hasClass(theme.icon)).hasClass(theme.iconOpen)).to.be.true;
    });
  });

  describe('when not active,', () => {

    it('should not have an active class on on the detail.', () => {
      const wrapper = shallow(<Twofold theme={theme} active={false}>{child}</Twofold>);
      expect(wrapper.findWhere(n => n.hasClass(theme.detail)).hasClass(theme.active)).to.be.false;
    });

    it('should have a closed class on on the icon.', () => {
      theme.iconClosed = uniqueid();
      const wrapper = shallow(<Twofold theme={theme} active={false}>{child}</Twofold>);
      expect(wrapper.findWhere(n => n.hasClass(theme.icon)).hasClass(theme.iconClosed)).to.be.true;
    });
  });

  describe('with a className attribute,', () => {
    const customClass = uniqueid();

    it('should contain that class.', () => {
      const wrapper = shallow(<Twofold theme={theme} active className={customClass} >{child}</Twofold>);
      expect(wrapper.hasClass(customClass)).to.be.true;
    });
  });

  describe('with a theme with mods,', () => {
    const themeWithMods = {
      twofold: uniqueid(),
      detail: uniqueid(),
      active: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Twofold theme={themeWithMods} active mod="mod1" >{child}</Twofold>);
      expect(wrapper.hasClass(themeWithMods.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Twofold theme={themeWithMods} active mod={['mod1', 'mod2']} >{child}</Twofold>);
      expect(wrapper.hasClass(themeWithMods.mod1)).to.be.true;
      expect(wrapper.hasClass(themeWithMods.mod2)).to.be.true;
    });
  });

});
