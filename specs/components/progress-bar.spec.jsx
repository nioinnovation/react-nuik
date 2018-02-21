import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import uniqueid from 'lodash.uniqueid';

import Progress from '../../src/components/progress-bar/progress-bar';

describe('A Progress Bar', () => {
  const theme = {
    progress: uniqueid(),
    fill: uniqueid(),
  }
  const percent = 0.5;

  it('should render a div element.', () => {
    const wrapper = shallow(<Progress theme={theme} percent={percent} />);
    expect(wrapper.type()).to.equal('div');
  });

  it('should have a progress class.', () => {
    const wrapper = shallow(<Progress theme={theme} percent={percent} />);
    expect(wrapper.hasClass(theme.progress)).to.be.true;
  });

  it('should have a fill class.', () => {
    const wrapper = shallow(<Progress theme={theme} percent={percent} />);
    expect(wrapper.find('div > div').hasClass(theme.fill)).to.be.true;
  });

  it('should have an element with a fill class whose style has a width propotional to the percent value.', () => {
    const wrapper = shallow(<Progress theme={theme} percent={percent} />);
    expect(wrapper.findWhere(n => n.hasClass(theme.fill)).prop('style').width).to.equal(`${percent * 100}%`);
  });

  it('should include additional class names that are defined.', () => {
    const additionalClass = uniqueid();
    const wrapper = shallow(
      <Progress
        className={additionalClass}
        theme={theme}
        percent={percent}
      />
    );
    expect(wrapper.hasClass(additionalClass)).to.be.true;
  });

  describe('that is disabled', () => {
    const themeDisabled = {
      progress: uniqueid(),
      fill: uniqueid(),
      disabled: uniqueid(),
      primary: uniqueid(),
      alternate: uniqueid(),
      affirmative: uniqueid(),
      warning: uniqueid(),
      danger: uniqueid(),
    };

    it('should not have a variant class.', () => {
      const variantOptions = [
        'primary',
        'alternate',
        'affirmative',
        'warning',
        'danger',
      ];
      variantOptions.map((v) => {
          const wrapper = shallow(<Progress theme={themeDisabled} percent={percent} variant={v} disabled />);
          expect(wrapper.findWhere(n => n.hasClass(themeDisabled.fill)).hasClass(themeDisabled[v])).to.be.false;
      });
    });
  });

  describe('with a complete theme', () => {
    const themeAll = {
      progress: uniqueid(),
      fill: uniqueid(),
      primary: uniqueid(),
      alternate: uniqueid(),
      affirmative: uniqueid(),
      warning: uniqueid(),
      danger: uniqueid(),
    };

    it('should contain a class that matches the variant\'s theme definition.', () => {
      const variantOptions = [
        'primary',
        'alternate',
        'affirmative',
        'warning',
        'danger'
      ];
      variantOptions.map(v => {
        const wrapper = shallow(<Progress theme={themeAll} percent={percent} variant={v} />);
        expect(wrapper.findWhere(n => n.hasClass(themeAll.fill)).hasClass(themeAll[v])).to.be.true;
      });
    });
  });

  describe('with a theme with mods,', () => {
    const themeMod = {
      progress: uniqueid(),
      fill: uniqueid(),
      disabled: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Progress theme={themeMod} mod="mod1" percent={percent} />);
      expect(wrapper.hasClass(themeMod.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Progress theme={themeMod} mod={['mod1', 'mod2']} percent={percent} />);
      expect(wrapper.hasClass(themeMod.mod1)).to.be.true;
      expect(wrapper.hasClass(themeMod.mod2)).to.be.true;
    });
  });

  describe('with a minimal theme,', () => {
    it('should ignore variants it can\'t resolve.', () => {
      const wrapper = shallow(<Progress theme={theme} variant='primary' percent={percent} />);
      expect(wrapper.findWhere(n => n.hasClass(theme.fill)).hasClass(theme.primary)).to.be.false;
    });

    it('should not have a class of "undefined" if the variant is not in the theme.', () => {
      const wrapper = shallow(<Progress theme={theme} variant='primary' percent={percent} />);
      expect(wrapper.findWhere(n => n.hasClass(theme.fill)).hasClass('undefined')).to.be.false;
    });
  });
});
