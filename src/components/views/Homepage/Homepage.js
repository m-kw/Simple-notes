import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Homepage</h2>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Homepage,
};
