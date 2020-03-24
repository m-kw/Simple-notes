import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './NoteAdd.module.scss';

const NoteAdd = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>NoteAdd</h2>
    </div>
  );
};

NoteAdd.propTypes = {
  className: PropTypes.string,
};

export default NoteAdd;
