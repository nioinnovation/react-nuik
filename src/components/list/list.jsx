// @flow

import React from 'react';
import PropTypes from 'prop-types';
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

  const listItemClassName = classNames(
    theme.item,
    !!variant && theme[variant],
  );

  const listItems = children ?
    children.length > 1 ?
    children.map(i => <li className={listItemClassName} key={id()}>{i}</li>) :
    <li className={listItemClassName}>{children}</li> :
    null;

  const className = classNames(
    theme.list,
    resolveMods(theme, mod),
    propsClassName,
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
    item: PropTypes.string,

    // Variants
    numbered: PropTypes.string,
    none: PropTypes.string,

  }).isRequired,
};


export default List;
