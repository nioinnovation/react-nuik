// @flow

import React, { PropTypes } from 'react';

const SingleLine = (props: *) => {
  const {
    theme,
    ...rest
  } = props;
  return (<input className={theme.singleline} {...rest} />);
};

SingleLine.propTypes = {
  theme: PropTypes.shape({ singleline: PropTypes.string }),
};

export default SingleLine;
