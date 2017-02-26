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
      label,
      disabled,
      checked,
      onColor,
      offColor,
      mod,
      ...rest
    } = this.props;

    const checkedClass =
      checked ? theme.checked : theme.unchecked;

    const componentProps = {
      ...rest,
      type: 'checkbox',
      id: this.state.inputId,
      // name: this.state.inputId,
    };

    const className = classNames(
      theme.toggle,
      checkedClass,
      !!disabled && theme.disabled,
      resolveMods(theme, mod),
      theme[propsClassName],
    );

    return (
      <div className={className} >
        <label className={theme.label} htmlFor={this.state.inputId} >{label}</label>
        <input className={theme.input} {...componentProps} />
      </div>
    );
  }
}

Toggle.defaultProps = {
  offColor: 'default',
  onColor: 'affirmative',
};

Toggle.propTypes = {
  className: PropTypes.string,

  label: PropTypes.node,
  checked: PropTypes.bool.isRequired,
  offColor: PropTypes.oneOf(['primary', 'alternate', 'affirmative', 'warning', 'danger', 'default']),
  onColor: PropTypes.oneOf(['primary', 'alternate', 'affirmative', 'warning', 'danger', 'default']),
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

    // Mod
    checked: PropTypes.string.isRequired,
    unchecked: PropTypes.string.isRequired,
    disabled: PropTypes.string,
  }).isRequired,
};

export default Toggle;
