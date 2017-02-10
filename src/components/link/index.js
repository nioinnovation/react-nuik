// @flow

import React, { PropTypes, createElement, Component } from 'react';
import { themr } from 'react-css-themr';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Link extends Component {

  static defaultProps = {
    className: '',
    href: '',
  };

  static propTypes = {
    className: PropTypes.string,

    href: PropTypes.string,

    variant: PropTypes.oneOf([
      'icon',
      'count',
    ]),

    mod: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),

    variant: PropTypes.oneOf([
      'icon',
      'count',
    ]),

    theme: PropTypes.shape({
      // Base
      link: PropTypes.string.isRequired,

      // Variants
      icon: PropTypes.string,
      count: PropTypes.string,

    }).isRequired,
  };

  link: HTMLElement;

  render() {
    const {
      className: propsClassName,
      theme,
      href,
      children,
      variant,
      mod,
      ...rest
    } = this.props;

    const component = 'a';

    const className = classNames(
      theme.link,
      !!variant && theme[variant],
      resolveMods(theme, mod),
      propsClassName,
    );

    const elProps = {
      ...rest,
      className,
    };

    return <a className={className} href={href} variant={variant} {...rest}>{children}</a>;
  }
}

export { Link };
export default themr('link')(Link);
