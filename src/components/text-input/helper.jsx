// @flow

import React, { PropTypes } from 'react';

const Helper = (props: *) => (
  props.theme.helper && React.Children.count(props.children) > 0
    ? <div className={props.theme.helper}>{props.children}</div>
    : null
);

Helper.propTypes = {
  theme: PropTypes.shape({
    helper: PropTypes.string,
  }),
  children: React.PropTypes.node,
};

export default Helper;
