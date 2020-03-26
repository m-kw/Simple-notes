import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import clsx from 'clsx';

import styles from './Note.module.scss';

const Component = ({ className, id, title, content, removeNote }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    removeNote(id);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Card className={styles.note} elevation={3}>
        <CardHeader
          title={title}
        />
        <CardContent>
          {content}
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          startIcon={<DeleteIcon />}
          onClick={(e) => handleDelete(e, id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={styles.button}
        >
          Edit
        </Button>
      </Card>

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  removeNote: PropTypes.func,
};

export {
  Component as Note,
};
