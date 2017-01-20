import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { TextInput } from '../../src/components/text-input';

describe('TextInput', () => {
  // buttons are required to have a theme object with at least a button class
  const theme = {
    textInput: 'textInput',
  }
  it('should be a text input', () => {
    const wrapper = shallow(<TextInput theme={theme} />);
    expect(wrapper.hasClass('textInput')).to.be.true;
    expect(wrapper.type()).to.equal('input');
  });
});
