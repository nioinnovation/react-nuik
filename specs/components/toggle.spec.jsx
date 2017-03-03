import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Toggle from '../../src/components/toggle/toggle';

describe('A Toggle', () => {
  const theme = {
    toggle: uniqueid(),
    checked: uniqueid(),
    unchecked: uniqueid(),
    required: uniqueid(),
  };

  it('should have a toggle class.', () => {
    const wrapper = shallow(<Toggle theme={theme} checked />);
    expect(wrapper.hasClass(theme.toggle)).to.be.true;
  });

  it('should be wrapped in a div', () => {
    const wrapper = shallow(<Toggle theme={theme} checked />);
    expect(wrapper.hasClass(theme.toggle)).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain an input element.', () => {
    const wrapper = shallow(<Toggle theme={theme} checked />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should contain a label element.', () => {
    const wrapper = shallow(<Toggle theme={theme} checked />);
    expect(wrapper.find('label')).to.have.length(1);
    // expect(wrapper.find('label').children()).to.have.length(1);
  });

  it('should contain a span with a child.', () => {
    const wrapper = shallow(<Toggle theme={theme} checked />);
    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.find('span').children()).to.have.length(1);
  });

  it('should contain the onLabel text when checked.', () => {
    const wrapper = shallow(<Toggle onLabel='thing that is on' theme={theme} checked />);
    expect(wrapper.contains('thing that is on')).to.be.true;
  });

  it('should contain the offLabel text when unchecked.', () => {
    const wrapper = shallow(<Toggle offLabel='thing that is off' theme={theme} checked={false} />);
    expect(wrapper.contains('thing that is off')).to.be.true;
  });

  it('should contain the onColor class when checked.', () => {
    theme.primary = uniqueid();
    const wrapper = shallow(<Toggle onColor="primary" theme={theme} checked />);
    expect(wrapper.hasClass(theme.primary)).to.be.true;
  });

  it('should contain the offColor class when unchecked.', () => {
    theme.danger = uniqueid();
    const wrapper = shallow(<Toggle offColor="danger" theme={theme} checked={false} />);
    expect(wrapper.hasClass(theme.danger)).to.be.true;
  });

  it('should include additional class names that are defined.', () => {
    const additionalClass = uniqueid();
    const wrapper = shallow(
      <Toggle
        className={additionalClass}
        theme={theme}
        checked
      />
    );
    expect(wrapper.hasClass(additionalClass)).to.be.true;
  });

  describe('with a checked property', () => {
    const label = uniqueid();
    const checkedTheme = {
      toggle: uniqueid(),
      checked: uniqueid(),
      unchecked: uniqueid(),
      affirmative: uniqueid(),
      disabled: uniqueid(),
    };

    const wrapper = shallow(<Toggle theme={checkedTheme} checked disabled />);

    it('should have a checked class on the label element.', () => {
      expect(wrapper.hasClass(checkedTheme.checked)).to.be.true;
    });

    it('should have the default onColor class.', () => {
      expect(wrapper.hasClass(checkedTheme.checked)).to.be.true;
    });

    it('should have the default onLabel text.', () => {
      expect(wrapper.contains('on')).to.be.true;
    });

    it('should also have a disabled class when disabled.', () => {
      expect(wrapper.hasClass(checkedTheme.disabled)).to.be.true;
    });
  });

  describe('with checked === false property', () => {
    const uncheckedTheme = {
      toggle: uniqueid(),
      checked: uniqueid(),
      unchecked: uniqueid(),
      disabled: uniqueid(),
    };
    const wrapper = shallow(<Toggle theme={uncheckedTheme} checked={false} disabled />);

    it('should not have a checked class on the label element.', () => {
      expect(wrapper.hasClass(uncheckedTheme.checked)).to.be.false;
    });

    it('should have the default offColor class.', () => {
      expect(wrapper.hasClass(uncheckedTheme.unchecked)).to.be.true;
    });

    it('should have the default offLabel text.', () => {
      expect(wrapper.contains('off')).to.be.true;
    });

    it('should have a disabled class when disabled.', () => {
      expect(wrapper.hasClass(uncheckedTheme.disabled)).to.be.true;
    });
  });

  describe('with a noLabel property', () => {
    const noLabelTheme = {
      toggle: uniqueid(),
      checked: uniqueid(),
      label: uniqueid(),
      unchecked: uniqueid(),
    };
    const wrapper = shallow(<Toggle noLabel theme={noLabelTheme} checked={false} />);

    it('should not have any label content.', () => {
      expect(wrapper.find('span').children()).to.have.length(0);
    });
  });

  describe('with a theme with mods,', () => {
    const themeWithMods = {
      toggle: uniqueid(),
      checked: uniqueid(),
      unchecked: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Toggle theme={themeWithMods} mod="mod1" checked />);
      expect(wrapper.hasClass(themeWithMods.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Toggle theme={themeWithMods} mod={['mod1', 'mod2']} checked />);
      expect(wrapper.hasClass(themeWithMods.mod1)).to.be.true;
      expect(wrapper.hasClass(themeWithMods.mod2)).to.be.true;
    });
  });

});
