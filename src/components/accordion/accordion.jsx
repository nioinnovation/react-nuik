// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Accordion = (props: *) => {
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
    resolveMods(theme, mod),
    theme[propsClassName],
  );

  return (
    <div>
      {children}
    </div>
  );
};

Accordion.propTypes = {
  className: PropTypes.string,

  variant: PropTypes.oneOf([
    'single',
    'multi',
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
    single: PropTypes.string,
    multi: PropTypes.string,

  }).isRequired,
};


export default Accordion;
