// @flow

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

    const checkedClass =
      checked === true ? theme.checked :
      checked === false ? theme.unchecked :
      checked === 'mixed' ? theme.mixed :
      undefined;

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
      checkedClass,
      !!disabled && theme.disabled,
    );

    return (
      <div className={className} >
        <input className={inputClassName} {...componentProps} />
        <label className={labelClassName} htmlFor={this.state.inputId} >{label}</label>
      </div>
    );
  }
}

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
