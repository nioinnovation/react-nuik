import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import uniqueid from 'lodash.uniqueid';

import { Button } from '../../components/button';

describe('A Button', () => {
  const child = uniqueid();

  it('should have an onMouseUp property that is a function.', () => {
    const handleMouseUp = sinon.spy();
    const wrapper = shallow(<Button theme={{button: 'button'}} onMouseUp={handleMouseUp}>{child}</Button>);
    wrapper.find('button').simulate('mouseUp');
    expect(handleMouseUp.calledOnce).to.equal(true);
  });


  it('should render its children.', () => {
    const anotherChild = uniqueid();
    const wrapper = shallow(<Button theme={{button: 'button'}}>{child}{anotherChild}</Button>);
    expect(wrapper.contains(child, anotherChild)).to.be.true;
  });


  it('should render a button element.', () => {
    const theme = {
      button: uniqueid()
    };
    const wrapper = shallow(<Button theme={theme}>{child}</Button>);
    expect(wrapper.type()).to.equal('button');
  });

  it('should have a button class.', () => {
    const theme = {
      button: uniqueid()
    };
    const wrapper = shallow(<Button theme={theme}>{child}</Button>);
    expect(wrapper.hasClass(theme.button)).to.be.true;
  });

  describe('with an href property', () => {

    it('should return a link.', () => {
      const href = uniqueid();
      const wrapper = shallow(<Button href={href} theme={{button: 'button'}}>{child}</Button>);
      expect(wrapper.type()).to.equal('a');
    });

  });

  describe('with a complete theme', () => {

    const theme = {
      button: uniqueid(),
      primary: uniqueid(),
      alternate: uniqueid(),
      affirmative: uniqueid(),
      warning: uniqueid(),
      danger: uniqueid(),
      huge: uniqueid(),
      large: uniqueid(),
      small: uniqueid(),
      tiny: uniqueid()
    };

    it('should contain a class that matches the variant\'s theme definition.', () => {
      const variantOptions = [
        'primary',
        'alternate',
        'affirmative',
        'warning',
        'danger'
      ]
      variantOptions.map(v => {
        const wrapper = shallow(<Button theme={theme} variant={v}>{child}</Button>);
        expect(wrapper.hasClass(theme[v])).to.be.true
      })

    });

    it('should contain a class that matches the size\'s theme definition.', () => {
      const sizeOptions = [
        'huge',
        'large',
        'small',
        'tiny'
      ]
      sizeOptions.map(s => {
        const wrapper = shallow(<Button theme={theme} size={s}>{child}</Button>);
        expect(wrapper.hasClass(theme[s])).to.be.true
      })
    });

  });

  describe('with a theme with mods,', () => {

    const theme = {
      button: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Button theme={theme} mod="mod1">{child}</Button>);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Button theme={theme} mod={['mod1', 'mod2']}>{child}</Button>);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
    });

    it('should ignore mods it can\'t resolve.', () => {
      const wrapper = shallow(<Button theme={theme} mod={['mod0', 'mod1', 'mod2']}>{child}</Button>);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
      expect(wrapper.hasClass(theme.mod0)).to.be.false;
    });
  });

  describe('with a minimal theme,', () => {

    const theme = {
      button: uniqueid()
    };

    it('should ignore variants it can\'t resolve.', () => {
      const wrapper = shallow(<Button theme={theme} variant={'primary'}>{child}</Button>);
      expect(wrapper.hasClass(theme.primary)).to.be.false;
    });

    it('should ignore sizes it can\'t resolve.', () => {
      const wrapper = shallow(<Button theme={theme} size={'large'}>{child}</Button>);
      expect(wrapper.hasClass(theme.large)).to.be.false;
    });

    it('should not have a class of "undefined" if the variant is not in the theme.', () => {
      const wrapper = shallow(<Button theme={theme} variant='primary'>{child}</Button>);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

    it('should not have a class of "undefined" if the size is not in the theme.', () => {
      const wrapper = shallow(<Button theme={theme} size='large'>{child}</Button>);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

    it('should not have a class of "undefined" if the mod is not in the theme.', () => {
      const wrapper = shallow(<Button theme={theme} mod='custom'>{child}</Button>);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

  });
});
