// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const Pagination = (props: *) => {
  const {
    className: propsClassName,
    theme,
    numberOfPages,
    onChange,
    active,
    children,
    mod,
    ...rest
  } = props;

  // start on page 1
  // when number is clicked, active changes to new number
  // when prev/next is clicked active changes to next number
  // array changes to prev/next array...

  // const changeActive = (page) => {
  //   console.log(page);
  // };
  // create an array of links from all children
  const pageArray = children.map((url, i) => {
    const pageNumber = i + 1;
    const activeClass = (i + 1) === active ? 'active' : null;
    const linkClasses = classNames(
      theme.link,
      theme[activeClass],
    );

    const linkProps = {
      key: pageNumber,
      className: linkClasses,
      href: url,
      onClick: () => onChange(pageNumber),
    };

    return (
      <a {...linkProps} >
        {i + 1}
      </a>
    );
  });

  const getActiveArray = start => pageArray.slice(start, start + numberOfPages);

  const activeArray = getActiveArray(start);
  const first = activeArray[0];
  const last = activeArray[activeArray.length - 1];
  const prevStart = numberOfPages - first.key - 1;
  const nextArray = getActiveArray(last.key);
  const prevArray = getActiveArray(prevStart > 0 ? prevStart : 0);
  console.log(first.key);
  console.log(last.key);
  console.log('next', nextArray);
  console.log('prev', prevArray);

  const className = classNames(
    theme.pagination,
    resolveMods(theme, mod),
    theme[propsClassName],
    ...rest,
  );

  return (
    <div className={className}>
      <button className={theme.prev} onClick={() => getActiveArray(prevStart > 0 ? prevStart : 0)}>prev</button>
      {activeArray}
      <button className={theme.next} onClick={() => getActiveArray(last.key)}>next</button>
    </div>
  );
};

Pagination.defaultProps = {
  numberOfPages: 6,
};

Pagination.propTypes = {
  className: PropTypes.string,
  active: PropTypes.number.isRequired,
  onChange: PropTypes.func,

  numberOfPages: PropTypes.number,

  children: PropTypes.node,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    // Base
    pagination: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pagination;
