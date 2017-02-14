// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Twofolds = (props: *) => {
  const {
    className: propsClassName,
    theme,
    active,
    children,
    mod,
    ...rest
  } = props;


  const className = classNames(
    theme.twofold,
    resolveMods(theme, mod),
    theme[propsClassName],
  );

  return (
    <div className="className">
    </div>
  );
};

Twofolds.propTypes = {
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

    // Variants
    before: PropTypes.string,
    after: PropTypes.string,

  }).isRequired,
};


export default Twofolds;
