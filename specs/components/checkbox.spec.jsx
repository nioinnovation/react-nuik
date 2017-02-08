import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Checkbox from '../../src/components/checkbox/checkbox';

describe('A Checkbox', () => {
  const label = uniqueid();
  const theme = { checkbox: uniqueid() };
  const wrapper = shallow(<Checkbox label={label} theme={theme} />);

  it('should have a checkbox class.', () => {
    expect(wrapper.hasClass(theme.checkbox)).to.be.true;
  });

  it('should be wrapped in a div', () => {
    expect(wrapper.hasClass(theme.checkbox)).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain an input element.', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should contain a label element.', () => {
    expect(wrapper.find('label')).to.have.length(1);
  });

  it('should render its label.', () => {
    expect(wrapper.contains(label)).to.be.true;
  });

  describe('that is checked', () => {
    const label = uniqueid();
    const checkedTheme = {
      checkbox: uniqueid(),
      checked: uniqueid(),
      disabled: uniqueid(),
    };

    const wrapper = shallow(<Checkbox label={label} theme={checkedTheme} checked={true} disabled />);

    it('should have a checked class on the label element.', () => {
      expect(wrapper.find('label').hasClass(checkedTheme.checked)).to.be.true;
    });

    it('should also have a disabled class when disabled.', () => {
      expect(wrapper.find('label').hasClass(checkedTheme.disabled)).to.be.true;
    });
  });

  describe('that has a checked = false property', () => {
    const label = uniqueid();
    const uncheckedTheme = {
      checkbox: uniqueid(),
      checked: uniqueid(),
      disabled: uniqueid(),
    };
    const wrapper = shallow(<Checkbox label={label} theme={uncheckedTheme} checked={false} disabled />);

    it('should not have a checked class on the label element.', () => {
      expect(wrapper.find('label').hasClass(uncheckedTheme.checked)).to.be.false;
    });

    it('should have a disabled class when disabled.', () => {
      expect(wrapper.find('label').hasClass(uncheckedTheme.disabled)).to.be.true;
    });
  });

  describe('that does not have a checked property', () => {
    const label = uniqueid();
    const checkedTheme = {
      checkbox: uniqueid(),
      unknown: uniqueid(),
      disabled: uniqueid(),
    };
    const wrapper = shallow(<Checkbox label={label} theme={checkedTheme} disabled/>);

    it('should have a class of unknown on the label element.', () => {
      expect(wrapper.find('label').hasClass(checkedTheme.unknown)).to.be.true;
    });

    it('should also have a class of disabled when disabled.', () => {
      expect(wrapper.find('label').hasClass(checkedTheme.disabled)).to.be.true;
    });
  });

  describe('with a theme with mods,', () => {
    const theme = {
      checkbox: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Checkbox theme={theme} mod="mod1" />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Checkbox theme={theme} mod={['mod1', 'mod2']} />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
    });
  });

});
