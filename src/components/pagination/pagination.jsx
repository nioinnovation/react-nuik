// @flow

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

const DirectionIcon = (props: *) => {
  const {
    href,
    onChange,
    theme,
    icon,
    end,
    direction,
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
  className: PropTypes.string,
  href: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  end: PropTypes.bool,
  direction: PropTypes.oneOf(['prev', 'next']),
  theme: PropTypes.shape({
    prev: PropTypes.string.isRequired,
    hidden: PropTypes.string.isRequired,
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

    const max = this.state.activeArrayStart + (1 * pageRange);
    // adjust end of array to be highest index
    const adjustedEnd = max > pageArray.length ? pageArray.length : max;

    const activeArray = getActiveArray(this.state.activeArrayStart, adjustedEnd);

    const first = (1 * activeArray[0].key);
    const last = (1 * activeArray[activeArray.length - 1].key);

    const min = first - pageRange - 1;
    // adjust beginning of array to be no less than 0
    const prevStart = min > 0 ? min : 0;

    const handlePrev = () => {
      getActiveArray(prevStart, prevStart + pageRange);
      this.setState({ activeArrayStart: prevStart, activePage: prevStart + 1 });
    };

    const handleNext = () => {
      getActiveArray(last, adjustedEnd);
      this.setState({ activeArrayStart: last, activePage: last + 1 });
    };

    const className = classNames(
      theme.pagination,
      resolveMods(theme, mod),
      theme[propsClassName],
      ...rest,
    );

    return (
      <div className={className}>
        <DirectionIcon href={children[prevStart]} onChange={() => handlePrev(prevStart)} theme={theme} icon={icon} end={first <= 1} direction="prev" />
        {activeArray}
        <DirectionIcon href={children[last]} onChange={() => handleNext(prevStart + pageRange)} theme={theme} icon={icon} end={adjustedEnd >= pageArray.length} direction="next" />
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

  children: PropTypes.node,

  mod: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),

  theme: PropTypes.shape({
    pagination: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    prev: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    hidden: PropTypes.string.isRequired,
    link: PropTypes.string,
    active: PropTypes.string,
  }).isRequired,
};

export default Pagination;
