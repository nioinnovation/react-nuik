// @flow
// http://www.endlessicons.com/wp-content/uploads/2012/09/light-bulb-icon-614x460.png
import React, { PropTypes } from 'react';
import classNames from 'classnames';

import id from '../../helpers/uniqueid';


import resolveMods from '../../helpers/resolve-mods';

const List = (props: *) => {
  const {
    className: propsClassName,
    theme,
    variant,
    bullet,
    children,
    mod,
    ...rest
  } = props;

  const listItems = children.map( i => {
    return <li key={id()}>{i}</li>;
  })

  const className = classNames(
    theme.list,
    propsClassName,
    bullet,
    !!bullet && theme[bullet],
    resolveMods(theme, mod),
    theme[propsClassName],
  );

  console.log(className);

  return (
    <ul className={className} key={id}>
      {listItems.map(i => i)}
    </ul>
  );
};

List.propTypes = {
  className: PropTypes.string,

  // variant: PropTypes.oneOf([
  //   'before',
  //   'after',
  // ]),

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
    // before: PropTypes.string,
    // after: PropTypes.string,

  }).isRequired,
};


export default List;
