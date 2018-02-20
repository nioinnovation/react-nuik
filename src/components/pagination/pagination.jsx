// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const DirectionIcon = (props: *) => {
  const {
    href,
    onChange,
    icon,
    end,
    direction,
    theme,
  } = props;

  const iconClasses = classNames(
    theme[direction],
    end && theme.hidden,
  );

  return (
    <a href={href} className={iconClasses} onClick={onChange}>
      {icon}
    </a>
  );
};

DirectionIcon.propTypes = {
  href: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  end: PropTypes.bool,
  direction: PropTypes.oneOf(['prev', 'next']),
  theme: PropTypes.shape({
    prev: PropTypes.string,
    next: PropTypes.string,
    hidden: PropTypes.string,
  }).isRequired,
};

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
      pageRange,
      children,
      icon,
      mod,
      ...rest
    } = this.props;

    const active = this.state.activePage;

    const pageArray = children.map((url, i) => {
      const pageNumber = i + 1;
      const activeClass = pageNumber === active ? 'active' : null;
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
          {pageNumber}
        </a>
      );
    });

    const first = this.state.activeArrayStart;
    const last = (1 * this.state.activeArrayStart) + pageRange;

    // adjust beginning of array to be no less than 0
    const min = first - pageRange;
    const prevStart = min > 0 ? min : 0;

    // adjust end of array to be at most highest index
    const adjustedEnd = last > pageArray.length ? pageArray.length : last;

    const getActiveArray = (start, end) => pageArray.slice(start, end);

    const activeArray = getActiveArray(this.state.activeArrayStart, adjustedEnd);

    const handlePrev = () => {
      getActiveArray(prevStart, prevStart + pageRange);
      this.setState({ activeArrayStart: prevStart, activePage: prevStart + 1 });
    };

    const handleNext = () => {
      this.setState({ activeArrayStart: last, activePage: last + 1 });
      getActiveArray(this.state.activeArrayStart, adjustedEnd);
    };

    const className = classNames(
      theme.pagination,
      resolveMods(theme, mod),
      propsClassName,
      ...rest,
    );

    return (
      <div className={className}>
        <DirectionIcon href={children[this.state.activeArrayStart]} onChange={() => handlePrev(prevStart)} theme={theme} icon={icon} end={first <= 1} direction="prev" />
        {activeArray}
        <DirectionIcon href={children[this.state.activeArrayStart]} onChange={() => handleNext(prevStart + pageRange)} theme={theme} icon={icon} end={adjustedEnd >= pageArray.length} direction="next" />
      </div>
    );
  }
}

Pagination.defaultProps = {
  pageRange: 6,
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

  pageRange: PropTypes.number,

  children: PropTypes.node.isRequired,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    pagination: PropTypes.string.isRequired,
    link: PropTypes.string,
    active: PropTypes.string,
  }).isRequired,
};

export default Pagination;
