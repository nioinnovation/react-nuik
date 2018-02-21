// @flow

import React from 'react';
import PropTypes from 'prop-types';

const Helper = (props: *) => (
  props.theme.helper && React.Children.count(props.children) > 0
    ? <div className={props.theme.helper}>{props.children}</div>
    : null
  );

Helper.propTypes = {
  theme: PropTypes.shape({
    helper: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default Helper;
