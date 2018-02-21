// @flow

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Accordion = (props: *) => {
  const {
    className: propsClassName,
    theme,
    variant,
    singleActive,
    children,
    mod,
    ...rest
  } = props;

  // function to adjust the active classes on the children as appropriate
  const clonedChildren = children.map((child) => {
    const makeActive = child.key === singleActive ? child.props.active : false;
    return React.cloneElement(child, {
      active: makeActive,
    });
  },
  );

  const variantChildren = variant === 'single' ? clonedChildren : children;

  const className = classNames(
    theme.accordion,
    resolveMods(theme, mod),
    propsClassName,
    ...rest,
  );

  return (
    <div className={className}>
      {variantChildren}
    </div>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,

  variant: PropTypes.oneOf([
    'single',
    'multiple',
  ]),
  singleActive: PropTypes.string,

  children: PropTypes.arrayOf(PropTypes.element).isRequired,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    accordion: PropTypes.string.isRequired,

    // Variants
    single: PropTypes.string,
    multiple: PropTypes.string,

  }).isRequired,
};

export default Accordion;
