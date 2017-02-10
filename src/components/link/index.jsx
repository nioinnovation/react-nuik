// @flow

import React, { PropTypes, Component } from 'react';
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

    children: PropTypes.node,

    mod: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),

    theme: PropTypes.shape({
      // Base
      link: PropTypes.string.isRequired,

      // Variants
      icon: PropTypes.string,
      count: PropTypes.string,

    }).isRequired,
  };

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

    const className = classNames(
      theme.link,
      !!variant && theme[variant],
      resolveMods(theme, mod),
      propsClassName,
    );

    return <a className={className} href={href} {...rest}>{children}</a>;
  }
}

export { Link };
export default themr('link')(Link);
