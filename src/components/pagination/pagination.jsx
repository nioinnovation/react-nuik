// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Pagination extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeArrayStart: 0,
    };
  }

  render() {
    const {
      className: propsClassName,
      theme,
      numberOfPages,
      onChange,
      active,
      children,
      mod,
      ...rest
    } = this.props;

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

    const activeArray = getActiveArray(this.state.activeArrayStart);
    // console.log(activeArray[0].key);

    const first = activeArray[0].key;
    const last = activeArray[activeArray.length - 1].key;
    const min = numberOfPages - first - 1;
    const prevStart = min > 0 ? min : 0;
    const nextArray = getActiveArray(last);
    const prevArray = getActiveArray(prevStart);
    console.log('first', first);
    console.log('last', last);
    console.log('active', active);
    console.log('next', nextArray);
    console.log('prev', prevArray);

    const handlePrev = () => {
      console.log('handleprev start value', prevStart);
      getActiveArray(prevStart);
      this.setState({ activeArrayStart: prevStart });
    };

    const handleNext = () => {
      console.log('handleNext start value', last);
      getActiveArray(last);
      this.setState({ activeArrayStart: last });
    };

    const className = classNames(
      theme.pagination,
      resolveMods(theme, mod),
      theme[propsClassName],
      ...rest,
    );

    return (
      <div className={className}>
        <button className={theme.prev} onClick={() => handlePrev(prevStart)}>prev</button>
        {activeArray}
        <button className={theme.next} onClick={(last) => handleNext(last)}>next</button>
      </div>
    );
  }
}

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
    prev: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pagination;
