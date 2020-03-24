import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './MainLayout.module.scss';

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>MainLayout</h2>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as MainLayout,
};
