// @flow

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';
import id from '../../helpers/uniqueid';

class Toggle extends Component {

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
      noLabel ? '' :
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
      theme[propsClassName],
    );

    return (
      <div className={className}>
        <label className={theme.label} htmlFor={this.state.inputId} >{activeLabel}</label>
        <input className={theme.input} {...componentProps} />
      </div>
    );
  }
}

Toggle.defaultProps = {
  offColor: 'default',
  onColor: 'affirmative',
  offLabel: 'off',
  onLabel: 'on',
};

Toggle.propTypes = {
  className: PropTypes.string,

  label: PropTypes.node,
  checked: PropTypes.bool.isRequired,
  offColor: PropTypes.oneOf(['primary', 'alternate', 'affirmative', 'warning', 'danger', 'default']),
  onColor: PropTypes.oneOf(['primary', 'alternate', 'affirmative', 'warning', 'danger', 'default']),
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
