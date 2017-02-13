// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Accordion = (props: *) => {
  const {
    className: propsClassName,
    theme,
    // href,
    // icon,
    variant,
    children,
    mod,
    ...rest
  } = props;

  const iconVariant = variant ? theme[variant] : theme.before;

  const className = classNames(
    theme.accordion,
    !!icon && iconVariant,
    resolveMods(theme, mod),
    theme[propsClassName],
  );

  return <a className={className} href={href} data-icon={icon} {...rest} >{children}</a>;
};

Accordion.propTypes = {
  className: PropTypes.string,

  // href: PropTypes.string.isRequired,

  variant: PropTypes.oneOf([
    // 'before',
    // 'after',
  ]),

  // icon: PropTypes.string,

  children: PropTypes.node,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    accordion: PropTypes.string.isRequired,

    // Variants
    before: PropTypes.string,
    after: PropTypes.string,

  }).isRequired,
};


export default Accordion;
