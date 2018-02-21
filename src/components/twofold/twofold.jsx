// @flow

import React from 'react';
import PropTypes from 'prop-types';

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
    onChange,
    icon,
    ...rest
  } = props;

  const className = classNames(
    theme.twofold,
    resolveMods(theme, mod),
    propsClassName,
    ...rest,
  );

  const detailClassName = classNames(
    theme.detail,
    !!active && theme.active,
  );

  // adjust the classes on the icon element as appropriate
  const clonedIcon = React.cloneElement(icon, {
    className: classNames(
      icon.props.className,
      theme.icon,
      active ? theme.iconOpen : theme.iconClosed,
    ),
  });

  return (
    <div className={className}>
      <a tabIndex="0" className={theme.header} onClick={onChange}>
        <div className={theme.heading}>
          {heading}
        </div>
        <div className={theme.subheading}>
          {subheading}
        </div>
        { clonedIcon }
      </a>
      <div className={detailClassName}>
        {children}
      </div>
    </div>
  );
};

Twofold.defaultProps = {
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 30 30" height="30" width="30">
      <circle cx="0" cy="0" r="14" stroke="none" />
      <path d="M-6 -3 0 3 6 -3" />
    </svg>
  ),
};

Twofold.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  icon: PropTypes.element,

  active: PropTypes.bool.isRequired,

  children: PropTypes.node,

  onChange: PropTypes.func,

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
    iconOpen: PropTypes.string,
    iconClosed: PropTypes.string,
  }).isRequired,
};

export default Twofold;
