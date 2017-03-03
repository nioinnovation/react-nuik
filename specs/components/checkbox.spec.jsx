import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Checkbox from '../../src/components/checkbox/checkbox';

describe('A Checkbox', () => {
  const label = uniqueid();
  const theme = { checkbox: uniqueid() };

  it('should have a checkbox class.', () => {
    const wrapper = shallow(<Checkbox label={label} theme={theme} checked={true} />);
    expect(wrapper.hasClass(theme.checkbox)).to.be.true;
  });

  it('should be wrapped in a div', () => {
    const wrapper = shallow(<Checkbox label={label} theme={theme} checked={true} />);
    expect(wrapper.hasClass(theme.checkbox)).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain an input element.', () => {
    const wrapper = shallow(<Checkbox label={label} theme={theme} checked={true} />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should contain a label element.', () => {
    const wrapper = shallow(<Checkbox label={label} theme={theme} checked={true} />);
    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should render its label.', () => {
    const wrapper = shallow(<Checkbox label={label} theme={theme} checked={true} />);
    expect(wrapper.contains(label)).to.be.true;
  });

  describe('with checked === true property', () => {
    const label = uniqueid();
    const checkedTheme = {
      checkbox: uniqueid(),
      checked: uniqueid(),
      disabled: uniqueid(),
    };

    const wrapper = shallow(<Checkbox label={label} theme={checkedTheme} checked={true} disabled />);

    it('should have a checked class on the label element.', () => {
      expect(wrapper.hasClass(checkedTheme.checked)).to.be.true;
    });

    it('should also have a disabled class when disabled.', () => {
      expect(wrapper.hasClass(checkedTheme.disabled)).to.be.true;
    });
  });

  describe('with checked === false property', () => {
    const label = uniqueid();
    const uncheckedTheme = {
      checkbox: uniqueid(),
      checked: uniqueid(),
      disabled: uniqueid(),
    };
    const wrapper = shallow(<Checkbox label={label} theme={uncheckedTheme} checked={false} disabled />);

    it('should not have a checked class on the label element.', () => {
      expect(wrapper.hasClass(uncheckedTheme.checked)).to.be.false;
    });

    it('should have a disabled class when disabled.', () => {
      expect(wrapper.hasClass(uncheckedTheme.disabled)).to.be.true;
    });
  });

  describe('with checked === "mixed" property', () => {
    const label = uniqueid();
    const mixedTheme = {
      checkbox: uniqueid(),
      mixed: uniqueid(),
      disabled: uniqueid(),
    };
    const wrapper = shallow(<Checkbox label={label} theme={mixedTheme} checked='mixed' disabled />);

    it('should have a class of mixed on the label element.', () => {
      expect(wrapper.hasClass(mixedTheme.mixed)).to.be.true;
    });

    it('should have a disabled class when disabled.', () => {
      expect(wrapper.hasClass(mixedTheme.disabled)).to.be.true;
    });
  });

  describe('with a className attribute,', () => {
    const customClass = uniqueid();

    it('should contain that class.', () => {
      const wrapper = shallow(<Checkbox className={customClass} label={label} theme={theme} checked />);
      expect(wrapper.hasClass(customClass)).to.be.true;
    });
  });

  describe('with a theme with mods,', () => {
    const theme = {
      checkbox: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Checkbox theme={theme} mod="mod1" checked={true} />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Checkbox theme={theme} mod={['mod1', 'mod2']} checked={true} />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
    });
  });

});
