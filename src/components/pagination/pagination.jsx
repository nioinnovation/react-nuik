// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Pagination extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeArrayStart: 0,
      activePage: 1
    };
  }

  render() {
    const {
      className: propsClassName,
      theme,
      numberOfPages,
      // onChange,
      // active,
      children,
      mod,
      ...rest
    } = this.props;

    const active = this.state.activePage;

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
        onClick: () => this.setState({ activePage: pageNumber }),
      };

      return (
        <a {...linkProps} >
          {i + 1}
        </a>
      );
    });

    const getActiveArray = start => pageArray.slice(start, start + numberOfPages);

    const activeArray = getActiveArray(this.state.activeArrayStart);
    console.log('active array length', activeArray.length);

    const first = (1 * activeArray[0].key);
    const last = (1 * activeArray[numberOfPages - 1].key);
    const min = first - numberOfPages - 1;
    const max = pageArray.length;
    console.log('max', max);
    const prevStart = min > 0 ? min : 0;
    const nextStart = last + numberOfPages < max ? last : pageArray.length - numberOfPages;
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
      this.setState({ activeArrayStart: prevStart, activePage: prevStart + 1 });
    };

    const handleNext = () => {
      console.log('handleNext start value', nextStart);
      this.setState({ activeArrayStart: nextStart, activePage: nextStart + 1 });
      getActiveArray(last);
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
        <button className={theme.next} onClick={() => handleNext(nextStart)}>next</button>
      </div>
    );
  }
}

Pagination.defaultProps = {
  numberOfPages: 6,
};

Pagination.propTypes = {
  className: PropTypes.string,
  // active: PropTypes.number.isRequired,
  // onChange: PropTypes.func,

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
