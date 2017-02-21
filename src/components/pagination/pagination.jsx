// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Pagination = (props: *) => {
  const {
    className: propsClassName,
    theme,
    variant,
    children,
    mod,
    ...rest
  } = props;

  const className = classNames(
    theme.accordion,
    !!variant && theme[variant],
    resolveMods(theme, mod),
    theme[propsClassName],
    ...rest,
  );

  return (
    <div className={className}>
      {children}
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,

  variant: PropTypes.oneOf([
    'single',
    'multi',
  ]),

  children: PropTypes.node,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    accordion: PropTypes.string.isRequired,

    // Variants
    single: PropTypes.string,
    multi: PropTypes.string,

  }).isRequired,
};

export default Pagination;
