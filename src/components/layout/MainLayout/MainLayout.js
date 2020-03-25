import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Header } from '../Header/Header';
// import Homepage from '../../views/Homepage/HomepageContainer';
// import NoteAdd from '../../views/NoteAdd/NoteAdd';

import styles from './MainLayout.module.scss';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Header />
      {children}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  Component as MainLayout,
};
