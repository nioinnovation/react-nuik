// @flow
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';
import id from '../../helpers/uniqueid';

import Label from './label';
import Helper from './helper';

const SingleLine = (props: *) => {
  const {
    theme,
    variant,
    ...rest
  } = props;
  return (<input className={theme[variant]} {...rest} />);
};

const MultiLine = (props: *) => {
  const {
    value,
    theme,
    variant,
    ...rest
  } = props;
  return (<textarea className={theme[variant]} {...rest}>{value}</textarea>);
};

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

  input: HTMLInputElement;

  willReceiveProps(props: *) {
    this.setState({ isFilled: !!props.value });
  }

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
      mod,
      value,
      ...rest
    } = this.props;

    const helperText = variant === 'inline' ? null : helper;
    const makeInline = variant === 'inline' ? theme.small : null;

    const componentConstructor = variant === 'multiline' ? MultiLine : SingleLine;

    const componentProps = {
      ...rest,
      theme,
      variant,
      id: this.state.inputId,
      value,
      onFocus: this.handleOnFocus,
      onBlur: this.handleOnBlur,
      onChange: this.handleOnChange,
      ref: (el) => { this.input = el; },
    };

    const className = classNames(
      theme.textInput,
      makeInline,
      resolveMods(theme, mod),
      propsClassName,
    );

    const labelClassName = classNames(
      this.state.isFocused && theme.labelWithFocus,
      this.state.isFilled && theme.labelWithValue,
    );

    return (
      <div className={className}>
        <Label theme={theme} className={labelClassName} htmlFor={this.state.inputId} >{label}</Label>
        { componentConstructor(componentProps) }
        <Helper theme={theme}>{helperText}</Helper>
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
    'singleline',
    'multiline',
    'inline',
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
    inline: PropTypes.string,

    // Elements
    helper: PropTypes.string,

    label: PropTypes.string,
    labelWithFocus: PropTypes.string,
    labelWithValue: PropTypes.string,
  }).isRequired,
};

export default TextInput;
