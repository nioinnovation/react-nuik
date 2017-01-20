// @flow

import React, { PropTypes, createElement, Component } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';
import id from '../../helpers/uniqueid';

import Label from './label';
import Helper from './helper';
import MultiLine from './multi-line';
import SingleLine from './single-line';

class TextInput extends Component {

  constructor() {
    super();
    this.state = {
      inputId: id(),
      isFocused: false,
    };
  }

  state: {
    inputId: string,
    isFocused: boolean,
  };
  input: HTMLElement;

  handleOnFocus = (e: Event) => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) { this.props.onFocus(e); }
  }

  handleOnBlur = (e: Event) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) { this.props.onBlur(e); }
  }

  render() {
    const {
      className: propsClassName,
      theme,
      label,
      helper,
      variant,
      mod,
      value,
      ...rest
    } = this.props;

    const component = variant === 'multiLine' ? MultiLine : SingleLine;
    const componentProps = {
      ...rest,
      theme,
      id: this.state.inputId,
      value,
      onFocus: this.handleOnFocus,
      onBlur: this.handleOnBlur,
      ref: (el) => { this.input = el; },
    };

    const className = classNames(
      theme.textInput,
      !!variant && theme[variant],
      resolveMods(theme, mod),
      propsClassName,
    );

    const labelClassName = classNames(
      this.state.isFocused && theme.labelWithFocus,
      value && theme.labelWithValue,
    );

    return (
      <div className={className}>
        <Label theme={theme} className={labelClassName} htmlFor={this.state.inputId}>{label}</Label>
        { createElement(component, componentProps) }
        <Helper theme={theme}>{helper}</Helper>
      </div>
    );
  }
}

TextInput.propTypes = {
  className: PropTypes.string,

  label: PropTypes.node,
  helper: PropTypes.node,
  value: PropTypes.string,

  variant: PropTypes.oneOf([
    'single-line',
    'multi-line',
    'inline',
  ]),

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  theme: PropTypes.shape({
    // Base
    textInput: PropTypes.string.isRequired,
    isInvalid: PropTypes.string,

    // Variants
    singleLine: PropTypes.string,
    multiLine: PropTypes.string,
    inline: PropTypes.string,

    // Elements
    helper: PropTypes.string,

    label: PropTypes.string,
    labelWithFocus: PropTypes.string,
    labelWithValue: PropTypes.string,
  }).isRequired,
};

export { TextInput };
export default themr('textInput')(TextInput);
