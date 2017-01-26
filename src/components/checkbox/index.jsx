// @flow

import React, { PropTypes, Component } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';
import id from '../../helpers/uniqueid';

class Checkbox extends Component {

  constructor() {
    super();
    this.state = {
      inputId: id(),
    };
  }

  state: {
    inputId: string
  };
  input: HTMLElement;

  render() {
    const {
      className: propsClassName,
      theme,
      label,
      variant,
      value,
      mod,
      checked,
      ...rest
    } = this.props;

    const componentProps = {
      ...rest,
      value,
      checked,
      type: 'checkbox',
      id: this.state.inputId,
      ref: (el) => { this.input = el; },
    };

    const className = classNames(
      theme.checkbox,
      !!variant && theme[variant],
      resolveMods(theme, mod),
      propsClassName,
    );
    console.log('className', className);

    // const labelClassName = classNames(
    //   this.state.isFocused && theme.labelWithFocus,
    //   value && theme.labelWithValue,
    // );

    return (
      <div className={className} >
        <input {...componentProps} />
        <label htmlFor={this.state.id}>{label}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,

  label: PropTypes.node,
  checked: PropTypes.bool,
  value: PropTypes.string,

  variant: PropTypes.oneOf([
    'block',
    'inline',
  ]),

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  // onFocus: PropTypes.func,
  // onBlur: PropTypes.func,

  theme: PropTypes.shape({
    // Base
    checkbox: PropTypes.string.isRequired,

    // Variants
    block: PropTypes.string,
    inline: PropTypes.string,

    // Elements
    label: PropTypes.string,
  }).isRequired,
};

export { Checkbox };
export default themr('checkbox')(Checkbox);
