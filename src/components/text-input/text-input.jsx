// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';
import id from '../../helpers/uniqueid';

import Label from './label';
import Helper from './helper';

class TextInput extends Component {

  constructor(props: *) {
    super(props);
    this.state = {
      inputId: id(),
      isFocused: false,
      isFilled: !!props.value,
    };
  }

  state: {
    inputId: string,
    isFocused: boolean,
    isFilled: boolean,
  };

  componentDidMount() {
    if (this.props.autoFocus) { this.input.select(); }
  }

  componentWillReceiveProps(props: *) {
    this.setState({ isFilled: !!props.value });
  }

  input: HTMLInputElement;

  handleOnFocus = (e: Event) => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) { this.props.onFocus(e); }
  }

  handleOnBlur = (e: Event) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) { this.props.onBlur(e); }
  }

  handleOnChange = (e: Event) => {
    this.setState({ isFilled: !!this.input.value });
    if (this.props.onChange) { this.props.onChange(e); }
  }

  render() {
    const {
      className: propsClassName,
      theme,
      label,
      helper,
      variant,
      disabled,
      mod,
      value,
      ...rest
    } = this.props;

    const isMultilineVariant = variant === 'multiline';
    const Inner = isMultilineVariant ? 'textarea' : 'input';
    const innerProps = {
      ...rest,
      id: this.state.inputId,
      className: isMultilineVariant ? theme.multiline : theme.singleline,
      value,
      disabled,
      onFocus: this.handleOnFocus,
      onBlur: this.handleOnBlur,
      onChange: this.handleOnChange,
      ref: (el) => { this.input = el; },
    };

    const className = classNames(
      theme.textInput,
      resolveMods(theme, mod),
      propsClassName,
    );

    const labelClassName = classNames(
      this.state.isFocused && theme.labelWithFocus,
      this.state.isFilled && theme.labelWithValue,
    );

    return (
      <div className={className}>
        <Label theme={theme} className={labelClassName} htmlFor={this.state.inputId}>
          {label}
        </Label>
        <Inner {...innerProps} />
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
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,

  variant: PropTypes.oneOf([
    'singleline',
    'multiline',
  ]),

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,

  theme: PropTypes.shape({
    // Base
    textInput: PropTypes.string.isRequired,
    isInvalid: PropTypes.string,
    isFilled: PropTypes.string,

    // Variants
    singleLine: PropTypes.string,
    multiLine: PropTypes.string,

    // Elements
    helper: PropTypes.string,

    label: PropTypes.string,
    labelWithFocus: PropTypes.string,
    labelWithValue: PropTypes.string,
  }).isRequired,
};

export default TextInput;
