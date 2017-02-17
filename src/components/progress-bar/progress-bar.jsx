// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Progress = (props: *) => {
  const {
    className: propsClassName,
    theme,
    percent,
    variant,
    mod,
    ...rest
  } = props;

  const className = classNames(
    theme.progress,
    !!variant && theme[variant],
    resolveMods(theme, mod),
    theme[propsClassName],
    ...rest,
  );

  const fillClassName = classNames(
    !!variant && theme[variant],
    resolveMods(theme, mod),
    theme[propsClassName],
  );

  return (
    <div className={className}>
      <div className={fillClassName} style={`${percent}`} />
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,

  variant: PropTypes.oneOf([
    'primary',
    'alternate',
    'affirmative',
    'warning',
    'danger',
  ]),

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    progress: PropTypes.string.isRequired,

    // Variants
    primary: PropTypes.string,
    alternate: PropTypes.string,
    affirmative: PropTypes.string,
    warning: PropTypes.string,
    danger: PropTypes.string,
  }).isRequired,
};

export default Progress;
