// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';
import id from '../../helpers/uniqueid';

class Toggle extends Component {
  static defaultProps: {};
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
      noLabel,
      disabled,
      checked,
      onColor,
      offColor,
      onLabel,
      offLabel,
      mod,
      ...rest
    } = this.props;

    const checkedClass =
      checked ? theme.checked : theme.unchecked;

    const colorClass =
      checked ? theme[onColor] : theme[offColor];

    const activeLabel =
      noLabel ? null :
        checked ? onLabel : offLabel;

    const componentProps = {
      ...rest,
      disabled,
      type: 'checkbox',
      id: this.state.inputId,
    };

    const className = classNames(
      theme.toggle,
      checkedClass,
      colorClass,
      !!disabled && theme.disabled,
      resolveMods(theme, mod),
      propsClassName,
    );

    return (
      <div className={className}>
        <span className={theme.text}>{activeLabel}</span>
        <label className={theme.label} htmlFor={this.state.inputId} />
        <input className={theme.input} {...componentProps} />
      </div>
    );
  }
}

Toggle.defaultProps = {
  offColor: 'unchecked',
  onColor: 'checked',
  offLabel: 'off',
  onLabel: 'on',
};

Toggle.propTypes = {
  className: PropTypes.string,

  checked: PropTypes.bool.isRequired,
  offColor: PropTypes.oneOf(['primary', 'alternate', 'affirmative', 'warning', 'danger', 'unchecked']),
  onColor: PropTypes.oneOf(['primary', 'alternate', 'affirmative', 'warning', 'danger', 'checked']),
  offLabel: PropTypes.string,
  onLabel: PropTypes.string,
  noLabel: PropTypes.bool,
  disabled: PropTypes.bool,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    toggle: PropTypes.string.isRequired,

    // Elements
    input: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.string,

    // Colors
    primary: PropTypes.string,
    alternate: PropTypes.string,
    affirmative: PropTypes.string,
    warning: PropTypes.string,
    danger: PropTypes.string,
    default: PropTypes.string,

    // Mod
    checked: PropTypes.string.isRequired,
    unchecked: PropTypes.string.isRequired,
    disabled: PropTypes.string,
  }).isRequired,
};

export default Toggle;
