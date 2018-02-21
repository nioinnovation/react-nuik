// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { themr } from 'react-css-themr';

const $Loader = (props: *) => {
  const {
    loading,
    complete,
    icon,
    children,
    theme,
    result,
  } = props;

  if (!loading && !complete) { return null; }

  return (
    <div className={theme.loader}>
      <div className={theme.decorationOuter} />
      <div className={theme.decorationMiddle} />
      <div className={theme.decorationInner} />
      <div
        className={classNames(
          theme.result,
          complete && theme.complete,
          result && theme[result],
        )}
      >
        <div className={theme.icon}>{ icon }</div>
        <div className={theme.message}>{ children }</div>
      </div>
    </div>
  );
};

$Loader.defaultProps = {
  loading: false,
  complete: false,
};

$Loader.propTypes = {
  loading: PropTypes.bool,
  complete: PropTypes.bool,
  result: PropTypes.oneOf([
    'affirmative',
    'warning',
    'danger',
  ]),
  icon: PropTypes.node,
  children: PropTypes.node,

  theme: PropTypes.shape({
    loader: PropTypes.string,

    result: PropTypes.string,
    complete: PropTypes.string,

    affirmative: PropTypes.string,
    warning: PropTypes.string,
    danger: PropTypes.string,

    icon: PropTypes.string,
    message: PropTypes.string,

    decorationOuter: PropTypes.string,
    decorationMiddle: PropTypes.string,
    decorationInner: PropTypes.string,
  }),
};

export { $Loader };
export default themr('loader')($Loader);
