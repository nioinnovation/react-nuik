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

  return (
    <div className="className">
      <h3 className={theme.heading}>
        {heading}
        <span className={theme.subheading}>
          {subheading}
        </span>
        <i className={theme.icon}>
          *
        </i>
      </h3>
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
    heading: PropTypes.string,
    subheading: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};


export default Twofold;
