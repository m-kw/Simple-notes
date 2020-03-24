import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import { Note } from '../../common/Note/Note';

import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Homepage = ({ className, notes }) => {
  return (
    <Container maxWidth="lg">
      <div className={clsx(className, styles.root)}>

        {notes.map(el => (
          <Note key={el.id}
            title={el.title}
            content={el.content}
          />
        ))}

      </div>
    </Container>
  );
};

Homepage.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.array,
};

export default Homepage;
