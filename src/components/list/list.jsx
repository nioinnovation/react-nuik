// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import id from '../../helpers/uniqueid';


import resolveMods from '../../helpers/resolve-mods';

const List = (props: *) => {
  const {
    className: propsClassName,
    theme,
    variant,
    children,
    mod,
    ...rest
  } = props;

  const listItems = children ?
    children.length > 1 ?
    children.map(i => <li key={id()}>{i}</li>) :
    <li>{children}</li> :
    null;

  const className = classNames(
    theme.list,
    !!variant && theme[variant],
    resolveMods(theme, mod),
    theme[propsClassName],
    ...rest,
  );

  return (
    <ul className={className} key={id}>
      {listItems}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,

  variant: PropTypes.oneOf([
    'numbered',
    'none',
  ]),

  bullet: PropTypes.string,

  children: PropTypes.node,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    list: PropTypes.string.isRequired,

    // Variants
    numbered: PropTypes.string,
    none: PropTypes.string,

  }).isRequired,
};


export default List;
