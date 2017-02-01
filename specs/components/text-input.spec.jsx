import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TextInput from '../../src/components/text-input/text-input';

describe('A TextInput', () => {
  const theme = {
    textInput: uniqueid(),
  };

  it('should be a text input', () => {
    const wrapper = shallow(<TextInput theme={theme} />);
    expect(wrapper.hasClass(theme.textInput)).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });
});
