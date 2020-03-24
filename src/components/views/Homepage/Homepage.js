import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { CardContent } from '@material-ui/core';

const Homepage = ({ className, notes }) => {
  return (
    <Container maxWidth="lg">
      <div className={clsx(className, styles.root)}>

        {notes.map(el => (
          <Card key={el.id} className={styles.note} elevation={3}>
            <CardHeader
              title={el.title}
            />
            <CardContent>
              {el.content}
            </CardContent>
          </Card>
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
