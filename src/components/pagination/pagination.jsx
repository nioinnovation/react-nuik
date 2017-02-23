// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

import resolveMods from '../../helpers/resolve-mods';

class Pagination extends React.Component {
  constructor() {
    super();
    this.state = {
      activeArrayStart: 0,
      activePage: 1,
    };
  }

  render() {
    const {
      className: propsClassName,
      theme,
      numberOfPages,
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

    const Prev = () => (first > 1 ?
      <button className={theme.prev} onClick={() => handlePrev(prevStart)} /> :
      null);

    const Next = () => (adjustedEnd < pageArray.length ?
      <button className={theme.next} onClick={() => handleNext(prevStart + numberOfPages)} /> :
      null);

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
};

Pagination.propTypes = {
  className: PropTypes.string,

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
