import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import clsx from 'clsx';

import styles from './NoteEdit.module.scss';

const NoteEdit = ({ className, id, title, content, editNote, close }) => {

  const [note, setNote] = React.useState({
    id: id,
    title: title,
    content: content,
  });

  const handleChange = (event, name) => {
    setNote({ ...note, [name]: event.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await editNote(note);
    close();
  };

  return (
    <div className={clsx(className, styles.root, 'col-sm-12')}>
      <Card elevation={2} className={styles.card}>
        <form className={styles.form} autoComplete="off">
          <TextField
            id="title"
            label="Title"
            className={styles.input}
            required
            value={note.title}
            placeholder="Title"
            onChange={e => handleChange(e, 'title')}
          />
          <TextField
            id="content"
            label="Content"
            placeholder="Write your note here"
            multiline
            rows="15"
            variant="outlined"
            required
            className={styles.input}
            value={note.content}
            onChange={e => handleChange(e, 'content')}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            onClick={e => handleSave(e)}
          >
              Save
          </Button>
        </form>
      </Card>
    </div>
  );
};

NoteEdit.propTypes = {
  className: PropTypes.string,
  editNote: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  close: PropTypes.func,
};

export default NoteEdit;
