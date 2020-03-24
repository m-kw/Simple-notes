import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';

import styles from './MainLayout.module.scss';

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Header />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as MainLayout,
};
