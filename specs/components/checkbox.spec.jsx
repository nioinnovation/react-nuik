import React from 'react';
import uniqueid from 'lodash.uniqueid';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Checkbox from '../../src/components/checkbox/checkbox';

describe('A Checkbox', () => {
  const theme = {
    checkbox: uniqueid(),
  };

  it('should be a checkbox', () => {
    const wrapper = shallow(<Checkbox theme={theme} />);
    expect(wrapper.hasClass(theme.checkbox)).to.be.true;
    expect(wrapper.type()).to.equal('div');
  });
});
