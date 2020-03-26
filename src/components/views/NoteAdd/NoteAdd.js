import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import clsx from 'clsx';
import shortid from 'shortid';

import styles from './NoteAdd.module.scss';
import { Container } from '@material-ui/core';
// import { Redirect } from 'react-router-dom';

class NoteAdd extends React.Component {
  state = {
    note: {
      id: shortid.generate(),
      title: '',
      content: '',
    },
  }

  handleChange = async (event, name) => {
    await this.setState({ note: {...this.state.note, [name]: event.target.value } });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addNote(this.state.note);
    this.props.close();
  };

  render() {
    const { className } = this.props;
    const { note } = this.state;

    return (
      <div className={clsx(className, styles.root)}>
        <h2>Add new note</h2>
        <Card elevation={2} className={styles.card}>
          <form className={styles.form} autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              id="title"
              label="Title"
              className={styles.input}
              required
              value={note.title}
              placeholder="Title"
              onChange={e => this.handleChange(e, 'title')}
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
              onChange={e => this.handleChange(e, 'content')}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
            >
                Save
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

NoteAdd.propTypes = {
  className: PropTypes.string,
  addNote: PropTypes.func,
  close: PropTypes.func,
};

export default NoteAdd;
