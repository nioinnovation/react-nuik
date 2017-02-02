// @flow

import { PropTypes, createElement, Component } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Label extends Component {

  static defaultProps = {
    type: 'label',
  };

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,

    variant: PropTypes.oneOf([
      'primary',
      'alternate',
      'affirmative',
      'warning',
      'danger',
    ]),

    size: PropTypes.oneOf([
      'huge',
      'large',
      'small',
      'tiny',
    ]),

    mod: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),

    type: PropTypes.oneOf([
      'button',
      'submit',
      'reset',
      'menu',
    ]),

    theme: PropTypes.shape({
      // Base
      // TODO Define Base Styles

      // Variants
      primary: PropTypes.string,
      alternate: PropTypes.string,
      affirmative: PropTypes.string,
      warning: PropTypes.string,
      danger: PropTypes.string,

      // Size
      huge: PropTypes.string,
      large: PropTypes.string,
      small: PropTypes.string,
      tiny: PropTypes.string,
    }).isRequired,
  };

  button: HTMLElement;

  render() {
    const {
      children,
      className: propsClassName,
      theme,
      variant,
      size,
      mod,
      ...rest
    } = this.props;

    const component = href ? 'a' : 'button';

    const className = classNames(
      theme.label,
      !!variant && theme[variant],
      !!size && theme[size],
      resolveMods(theme, mod),
      propsClassName,
    );

    const elProps = {
      ...rest,
      className,
      ref: (el: HTMLElement) => { this.button = el; },
    };

    return createElement(component, elProps, children);
  }
}

export default Label;
