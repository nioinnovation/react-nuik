// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Link = (props: *) => {
  const {
    className: propsClassName,
    theme,
    href,
    children,
    variant,
    mod,
    ...rest
  } = props;

  const className = classNames(
    theme.link,
    !!variant && theme[variant],
    resolveMods(theme, mod),
    propsClassName,
  );

  return <a className={className} href={href} {...rest} >{children}</a>;
};

Link.propTypes = {
  className: PropTypes.string,

  href: PropTypes.string.isRequired,

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


export default Link;
