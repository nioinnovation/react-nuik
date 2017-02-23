// @flow

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Pagination extends Component {
  static defaultProps: {};
  constructor() {
    super();
    this.state = {
      activeArrayStart: 0,
      activePage: 1,
    };
  }

  state: {
    activeArrayStart: number,
    activePage: number,
  };

  render() {
    const {
      className: propsClassName,
      theme,
      numberOfPages,
      children,
      icon,
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

    const getActiveArray = (start, end) => pageArray.slice(start, end);

    const max = this.state.activeArrayStart + (1 * numberOfPages);
    const adjustedEnd = max > pageArray.length ? pageArray.length : max;

    const activeArray = getActiveArray(this.state.activeArrayStart, adjustedEnd);

    const first = (1 * activeArray[0].key);
    const last = (1 * activeArray[activeArray.length - 1].key);

    const min = first - numberOfPages - 1;
    const prevStart = min > 0 ? min : 0;

    const handlePrev = () => {
      getActiveArray(prevStart, prevStart + numberOfPages);
      this.setState({ activeArrayStart: prevStart, activePage: prevStart + 1 });
    };

    const handleNext = () => {
      this.setState({ activeArrayStart: last, activePage: last + 1 });
      getActiveArray(last, adjustedEnd);
    };

    const className = classNames(
      theme.pagination,
      resolveMods(theme, mod),
      theme[propsClassName],
      ...rest,
    );

    const prevClasses = classNames(
      theme.prev,
      first <= 1 && theme.hidden,
    );

    const nextClasses = classNames(
      theme.next,
      adjustedEnd >= pageArray.length && theme.hidden,
    );

    const Prev = () => (
      <button className={prevClasses} onClick={() => handlePrev(prevStart)}>
        {icon}
      </button>
    );

    const Next = () => (
      <button className={nextClasses} onClick={() => handleNext(prevStart + numberOfPages)}>
        {icon}
      </button>
    );

    return (
      <div className={className}>
        <Prev />
        {activeArray}
        <Next />
      </div>
    );
  }
}

Pagination.defaultProps = {
  numberOfPages: 6,
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 30 30" height="20" width="20">
      <circle cx="0" cy="0" r="14" stroke="none" />
      <path d="M-6 -3 0 3 6 -3" />
    </svg>
  ),
};

Pagination.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,

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
    hidden: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pagination;
