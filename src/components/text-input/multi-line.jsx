// @flow

import React, { PropTypes } from 'react';

const MultiLine = (props: *) => {
  const {
    value,
    theme,
    ...rest
  } = props;
  return (<textarea className={theme.multiline} {...rest}>{value}</textarea>);
};

MultiLine.propTypes = {
  theme: PropTypes.shape({ multiline: PropTypes.string }),
  value: PropTypes.string,
};

export default MultiLine;
