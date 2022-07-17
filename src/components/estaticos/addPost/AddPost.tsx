import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import './AddPost.css'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    },
    fixed: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }),
);

export default function AddPost() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Criar Postagem" aria-label="add">
        <Fab color="secondary" className={classes.fixed}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}