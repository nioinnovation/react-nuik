// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Label = (props: *) => {
  const className = classNames(props.theme.label, props.className);
  return props.theme.label && React.Children.count(props.children) > 0
    ? <div className={className} htmlFor={props.htmlFor}>{props.children}</div>
    : null;
};

Label.propTypes = {
  theme: PropTypes.shape({
    label: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export default Label;
