// @flow

import React, { PropTypes } from 'react';

const Helper = (props: *) => {
  const helperClass = props.variant === 'inline'
    ? props.theme.helperInline : props.theme.helper;
  return props.theme.helper && React.Children.count(props.children) > 0
    ? <div className={helperClass}>{props.children}</div>
    : null;
};

Helper.propTypes = {
  theme: PropTypes.shape({
    helper: PropTypes.string,
    helperInline: PropTypes.string,
  }),
  variant: PropTypes.oneOf(['singleline', 'multiline', 'inline']),
  children: React.PropTypes.node,
};

export default Helper;
