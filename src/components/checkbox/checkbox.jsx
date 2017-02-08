// @flow
// TODO: add indeterminate state

import React, { PropTypes, Component } from 'react';
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

  input: HTMLInputElement;

  render() {
    const {
      className: propsClassName,
      theme,
      label,
      mod,
      disabled,
      checked,
      ...rest
    } = this.props;

    const checkedClass = checked === true ? 'checked' :
    checked === false ? '' :
    'unknown';

    const componentProps = {
      ...rest,
      type: 'checkbox',
      id: this.state.inputId,
    };

    const className = classNames(
      theme.checkbox,
      resolveMods(theme, mod),
      propsClassName,
    );

    const inputClassName = classNames(
      theme.input,
    );

    const labelClassName = classNames(
      theme.label,
      theme[checkedClass],
      !!disabled && theme.disabled,
    );

    return (
      <div className={className} >
        <label className={labelClassName} htmlFor={this.state.inputId} >{label}</label>
        <input className={inputClassName} {...componentProps} />
      </div>
    );
  }
}

Checkbox.defaultProps = {
  checked: 'mixed',
};

Checkbox.propTypes = {
  className: PropTypes.string,

  label: PropTypes.node,
  checked: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['mixed']),
  ]).isRequired,
  disabled: PropTypes.bool,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    checkbox: PropTypes.string.isRequired,

    // Elements
    input: PropTypes.string,
    label: PropTypes.string,

    // Mod
    checked: PropTypes.string,
    unknown: PropTypes.string,
    disabled: PropTypes.string,
  }).isRequired,
};

export default Checkbox;
