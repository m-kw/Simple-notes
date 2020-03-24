import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './{{pascalCase name}}.module.scss';

const Component = ({ className }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>{{pascalCase name}}</h2>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as {{pascalCase name}},
};
