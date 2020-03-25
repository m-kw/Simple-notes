import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import Modal from '@material-ui/core/Modal';

import { Note } from '../../common/Note/Note';
// import NoteAdd from '../NoteAdd/NoteAddContainer';

import clsx from 'clsx';

import styles from './Homepage.module.scss';

const Homepage = ({ className, notes, removeNote }) => {

  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Container maxWidth="lg">
      <div className={clsx(className, styles.root)}>

        {notes.map(el => (
          <Note key={el.id}
            id={el.id}
            title={el.title}
            content={el.content}
            removeNote={removeNote}
          />
        ))}

        <Fab
          color="primary"
          aria-label="add"
          className={styles.button}
          // onClick={handleOpen}
          href="/note/add"
        >
          <AddIcon />
        </Fab>
        {/* <Modal
          aria-labelledby="modal-newNote"
          aria-describedby="modal-add-new-note"
          open={open}
          onClose={handleClose}
        >
          <NoteAdd />
        </Modal> */}

      </div>
    </Container>
  );
};

Homepage.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.array,
  removeNote: PropTypes.func,
};

export default Homepage;
