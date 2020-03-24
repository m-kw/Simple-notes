import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

        <Fab
          color="primary"
          aria-label="add"
          className={styles.button}
          href="/note/app"
        >
          <AddIcon />
        </Fab>

      </div>
    </Container>
  );
};

Homepage.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.array,
};

export default Homepage;
