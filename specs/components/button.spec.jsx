import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import uniqueid from 'lodash.uniqueid';

import Button from '../../src/components/button/button';

describe('A Button', () => {
  const themeBase = {
    button: uniqueid(),
    link: uniqueid(),
    disabled: uniqueid(),
  }

  it('should have an onMouseUp property that is a function.', () => {
    const handleMouseUp = sinon.spy();
    const wrapper = shallow(<Button theme={themeBase} onMouseUp={handleMouseUp}/>);
    wrapper.find('button').simulate('mouseUp');
    expect(handleMouseUp.calledOnce).to.equal(true);
  });

  it('should render its children.', () => {
    const child = uniqueid();
    const anotherChild = uniqueid();
    const wrapper = shallow(<Button theme={themeBase} >{child}{anotherChild}</Button>);
    expect(wrapper.contains(child, anotherChild)).to.be.true;
  });

  it('should render a button element.', () => {
    const wrapper = shallow(<Button theme={themeBase} />);
    expect(wrapper.type()).to.equal('button');
  });

  it('should have a button class.', () => {
    const wrapper = shallow(<Button theme={themeBase} />);
    expect(wrapper.hasClass(themeBase.button)).to.be.true;
  });

  it('should include additional class names that are defined.', () => {
    const additionalClass = uniqueid();
    const wrapper = shallow(<Button className={additionalClass} theme={themeBase} />);
    expect(wrapper.hasClass(additionalClass)).to.be.true;
  });

  describe('that is disabled', () => {

    const theme = {
      button: uniqueid(),
      link: uniqueid(),
      disabled: uniqueid(),
      primary: uniqueid(),
      alternate: uniqueid(),
      affirmative: uniqueid(),
      warning: uniqueid(),
      danger: uniqueid(),
      huge: uniqueid(),
      large: uniqueid(),
      small: uniqueid(),
      tiny: uniqueid(),
      mod: uniqueid(),
      additionalClass: uniqueid(),
    };

    it('should render its children.', () => {
      const child = uniqueid();
      const anotherChild = uniqueid();
      const wrapper = shallow(<Button theme={{ button: uniqueid(), link: uniqueid(), disabled: uniqueid() }} disabled >{child}{anotherChild}</Button>);
      expect(wrapper.contains(child, anotherChild)).to.be.true;
    });

    it('should be a button element, even with an href.', () => {
      const wrapper = shallow(<Button theme={{ button: uniqueid(), link: uniqueid(), disabled: uniqueid() }} href="#" disabled />);
      expect(wrapper.type()).to.equal('button');
    })

    it('should at most have classes button, link, size, mod, additional class names, and disabled; even with a variant.', () => {
      const href = uniqueid();
      const additionalClass = uniqueid();
      const variantOptions = [
        'primary',
        'alternate',
        'affirmative',
        'warning',
        'danger',
      ];
      const sizeOptions = [
        'huge',
        'large',
        'small',
        'tiny',
      ];
      variantOptions.map(v => {
        sizeOptions.map(s => {
          const wrapper = shallow(<Button theme={theme} mod={theme.mod} variant={v} size={s} className={additionalClass} href={href} disabled />);
          expect(wrapper.props().className).to.equal(`${theme.button} ${theme.link} ${theme[s]} ${theme.disabled} ${additionalClass}`);
        });
      });
    });

  });

  describe('with an href property', () => {
    const href = uniqueid();
    it('should return a link.', () => {
      const wrapper = shallow(<Button href={href} theme={themeBase} />);
      expect(wrapper.type()).to.equal('a');
    });

    it('should have a link class.', () => {
      const wrapper = shallow(<Button href={href} theme={themeBase} />);
      expect(wrapper.hasClass(themeBase.link)).to.be.true;
    });

    it('should not have a class of "undefined" if the link class is not in the theme.', () => {
      const wrapper = shallow(<Button theme={themeBase} href={href} />);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

    it('should render its children.', () => {
      const child = uniqueid();
      const anotherChild = uniqueid();
      const wrapper = shallow(<Button href={href} theme={themeBase}>{child}{anotherChild}</Button>);
      expect(wrapper.contains(child, anotherChild)).to.be.true;
    });

  });

  describe('with a complete theme', () => {

    const theme = {
      button: uniqueid(),
      link: uniqueid(),
      disabled: uniqueid(),
      primary: uniqueid(),
      alternate: uniqueid(),
      affirmative: uniqueid(),
      warning: uniqueid(),
      danger: uniqueid(),
      huge: uniqueid(),
      large: uniqueid(),
      small: uniqueid(),
      tiny: uniqueid(),
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
        const wrapper = shallow(<Button theme={theme} variant={v} />);
        expect(wrapper.hasClass(theme[v])).to.be.true;
      });
    });

    it('should contain a class that matches the size\'s theme definition.', () => {
      const sizeOptions = [
        'huge',
        'large',
        'small',
        'tiny'
      ]
      sizeOptions.map(s => {
        const wrapper = shallow(<Button theme={theme} size={s} />);
        expect(wrapper.hasClass(theme[s])).to.be.true;
      });
    });

  });

  describe('with a theme with mods,', () => {

    const theme = {
      button: uniqueid(),
      link: uniqueid(),
      disabled: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<Button theme={theme} mod="mod1" />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<Button theme={theme} mod={['mod1', 'mod2']} />);
      expect(wrapper.hasClass(theme.mod1)).to.be.true;
      expect(wrapper.hasClass(theme.mod2)).to.be.true;
    });

  });

  describe('with a minimal theme,', () => {

    it('should ignore variants it can\'t resolve.', () => {
      const wrapper = shallow(<Button theme={themeBase} variant='primary' />);
      expect(wrapper.hasClass(themeBase.primary)).to.be.false;
    });

    it('should ignore sizes it can\'t resolve.', () => {
      const wrapper = shallow(<Button theme={themeBase} size='large' />);
      expect(wrapper.hasClass(themeBase.large)).to.be.false;
    });

    it('should not have a class of "undefined" if the variant is not in the theme.', () => {
      const wrapper = shallow(<Button theme={themeBase} variant='primary' />);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

    it('should not have a class of "undefined" if the size is not in the theme.', () => {
      const wrapper = shallow(<Button theme={themeBase} size='large' />);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

    it('should not have a class of "undefined" if the mod is not in the theme.', () => {
      const wrapper = shallow(<Button theme={themeBase} mod='custom' />);
      expect(wrapper.hasClass('undefined')).to.be.false;
    });

  });
});
