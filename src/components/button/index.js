// @flow

import { PropTypes, createElement, Component } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Button extends Component {

  static defaultProps = {
    type: 'button',
  };

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,

    href: PropTypes.string,
    onMouseUp: PropTypes.func,

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
      button: PropTypes.string.isRequired,

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

  handleMouseUp = (e: MouseEvent) => {
    if (this.button) this.button.blur();
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  }

  render() {
    const {
      children,
      className: propsClassName,
      href,
      theme,
      variant,
      size,
      mod,
      ...rest
    } = this.props;

    const component = href ? 'a' : 'button';

    const className = classNames(
      theme.button,
      !!variant && theme[variant],
      !!size && theme[size],
      resolveMods(theme, mod),
      propsClassName,
    );

    const elProps = {
      ...rest,
      className,
      ref: (el: HTMLElement) => { this.button = el; },
      onMouseUp: this.handleMouseUp,
    };

    return createElement(component, elProps, children);
  }
}

export { Button };
export default themr('button')(Button);
