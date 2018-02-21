// @flow

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Progress = (props: *) => {
  const {
    className: propsClassName,
    theme,
    percent,
    variant,
    mod,
    disabled,
    ...rest
  } = props;

  const className = classNames(
    theme.progress,
    resolveMods(theme, mod),
    propsClassName,
    ...rest,
  );

  const fillClassName = classNames(
    theme.fill,
    !!disabled && theme.disabled,
    !disabled && !!variant && theme[variant],
  );

  return (
    <div className={className}>
      <div className={fillClassName} style={{ width: `${percent * 100}%` }} />
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number.isRequired,

  variant: PropTypes.oneOf([
    'primary',
    'alternate',
    'affirmative',
    'warning',
    'danger',
  ]),

  disabled: PropTypes.bool,
  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    progress: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,

    // Variants
    primary: PropTypes.string,
    alternate: PropTypes.string,
    affirmative: PropTypes.string,
    warning: PropTypes.string,
    danger: PropTypes.string,
  }).isRequired,
};

export default Progress;
