import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import uniqueid from 'lodash.uniqueid';

import TextInput from '../../src/components/text-input/text-input';

describe('A TextInput', () => {
  const theme = {
    textInput: uniqueid(),
  };
  const wrapper = shallow(<TextInput theme={theme} />);

  it('should be a text input.', () => {
    expect(wrapper.hasClass(theme.textInput)).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });

  it('should contain a default input component.', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should contain a Label component.', () => {
    expect(wrapper.find('Label')).to.have.length(1);
  });

  it('should contain a Helper component.', () => {
    expect(wrapper.find('Helper')).to.have.length(1);
  });

  it('should have an onFocus property that is a function.', () => {
    const handleOnFocus = sinon.spy();
    const wrapperFocus = shallow(<TextInput theme={theme} onFocus={handleOnFocus} />);
    wrapperFocus.find('input').simulate('focus');
    expect(handleOnFocus.calledOnce).to.be.true;
  });

  it('should have an onBlur property that is a function.', () => {
    const handleOnBlur = sinon.spy();
    const wrapperBlur = shallow(<TextInput theme={theme} onBlur={handleOnBlur} />);
    wrapperBlur.find('input').simulate('blur');
    expect(handleOnBlur.calledOnce).to.be.true;
  });

  describe('with a className attribute', () => {
    const customClass = uniqueid();
    const wrapper = shallow(<TextInput theme={theme} className={customClass} />);

    it('should contain that class.', () => {
      expect(wrapper.hasClass(customClass)).to.be.true;
    });
  });

  describe('with variant of "multiline"', () => {
    const wrapper = shallow(<TextInput theme={theme} variant="multiline" />);

    it('should contain a textarea.', () => {
      expect(wrapper.find('textarea')).to.have.length(1);
    });
  });

  describe('with a label attribute', () => {
    const label = uniqueid();
    const id = uniqueid();
    theme.labelWithFocus = uniqueid();
    theme.labelWithValue = uniqueid();

    const wrapper = shallow(<TextInput theme={theme} label={label} />);

    it('should contain the label value.', () => {
      expect(wrapper.find('Label').children().contains(label)).to.be.true;
    });

    it('should contain the id of the input the label is for.', () => {
      wrapper.setState({ inputId: id });
      expect(wrapper.find('Label').props().htmlFor).to.equal(id);
    });

    describe('that is in focus', () => {
      it('should have a focused class on the label.', () => {
        wrapper.setState({ isFocused: true });
        expect(wrapper.find('Label').hasClass(theme.labelWithFocus)).to.be.true;
      });
    })

    describe('that is filled', () => {
      it('should have a filled class on the label.', () => {
        wrapper.setState({ isFilled: true });
        expect(wrapper.find('Label').hasClass(theme.labelWithValue)).to.be.true;
      });
    })

  });

  describe('with a helper attribute', () => {
    const id = uniqueid();
    const helper = uniqueid();
    theme.helper = uniqueid();

    const wrapperHelper = shallow(<TextInput theme={theme} helper={helper} />);

    it('should contain the helper value.', () => {
      expect(wrapperHelper.find('Helper').children().contains(helper)).to.be.true;
    });

    it('should have a helper class.', () => {
      expect(wrapperHelper.find('Helper').dive().hasClass(theme.helper)).to.be.true;
    });

  });

  describe('with a theme with mods,', () => {

    const modTheme = {
      textInput: uniqueid(),
      mod1: uniqueid(),
      mod2: uniqueid(),
    };

    it('should support a single mod.', () => {
      const wrapper = shallow(<TextInput theme={modTheme} mod="mod1" />);
      expect(wrapper.hasClass(modTheme.mod1)).to.be.true;
    });

    it('should support an array of mods.', () => {
      const wrapper = shallow(<TextInput theme={modTheme} mod={['mod1', 'mod2']} />);
      expect(wrapper.hasClass(modTheme.mod1)).to.be.true;
      expect(wrapper.hasClass(modTheme.mod2)).to.be.true;
    });

  });

});
