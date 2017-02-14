// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Twofold = (props: *) => {
  const {
    className: propsClassName,
    theme,
    active,
    heading,
    subheading,
    children,
    mod,
    ...rest
  } = props;


  const className = classNames(
    theme.twofold,
    resolveMods(theme, mod),
    theme[propsClassName],
  );

  const detailClassName = classNames(
    theme.detail,
    !!active && theme.active,
  );

  const iconClassName = classNames(
    !!active && theme.openIcon,
    !active && theme.closedIcon,
  );

  return (
    <div className={className}>
      <div className={theme.header}>
        <div className={theme.heading}>
          {heading}
        </div>
        <div className={theme.subheading}>
          {subheading}
        </div>
        <svg className={iconClassName} xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 30 30" width="30">
            <circle cx="0" cy="0" r="14" />
            <path d="M-6 -3 0 3 6 -3" />
        </svg>
      </div>
      <div className={detailClassName}>
        {children}
      </div>
    </div>
  );
};

Twofold.propTypes = {
  className: PropTypes.string,

  active: PropTypes.bool,

  children: PropTypes.node,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    twofold: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
    header: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};


export default Twofold;
