// @flow

import { PropTypes, createElement, Component } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

class TextInput extends Component {

  static propTypes = {
    className: PropTypes.string,

    onMouseUp: PropTypes.func,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    helper: PropTypes.string,
    required: PropTypes.bool,

    type: PropTypes.oneOf([
      'email',
      'number',
      'password',
      'tel',
      'text',
      'url',
    ]),

    variant: PropTypes.oneOf([
      'single-line',
      'multi-line',
      'inline',
    ]),

    mod: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),

    theme: PropTypes.shape({
      // Base
      textInput: PropTypes.string.isRequired,

      // Variants
      singleLine: PropTypes.string,
      multiLine: PropTypes.string,
      inline: PropTypes.string,
    }).isRequired,
  };

  input: HTMLElement;

  handleMouseUp = (e: MouseEvent) => {
    if (this.input) this.input.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  }

  render() {
    const {
      className: propsClassName,
      theme,
      type,
      placeholder,
      label,
      helper,
      required,
      variant,
      mod,
      ...rest
    } = this.props;

    const component = variant === 'multiLine' ? 'text-area' : 'input';

    const modClassNames =
      Array.isArray(mod) ? mod.map(m => theme[m])
      : mod ? theme[mod]
      : undefined;

    const className = classNames(
      theme.textInput,
      {
        [theme[variant]]: !!variant,
      },
      modClassNames,
      propsClassName,
    );

    const elProps = {
      ...rest,
      className,
      type,
      placeholder,
      label,
      helper,
      required,
      ref: (el: HTMLElement) => { this.input = el; },
      onMouseUp: this.handleMouseUp,
    };

    return createElement(component, elProps);
  }
}

export { TextInput };
export default themr('textInput')(TextInput);
