import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './Writing.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    maxWidth: 700,
    margin: 'auto',
    textAlign: 'left',
    border: 'outset 10px #3f51b5',
    backgroundColor: '#fffff2'
  },
}));

export default function Writing() {
  const classes = useStyles();

  return (
    <>
      <section>
      <p>
        <Link href='https://dev.to/yoshimii/what-i-learned-from-my-first-time-with-terraform-and-ci-cd-25dd' target='_blank'>
          <Typography style={{color: "white"}} variat="h5" component="h3">
          What I Learned from My First Time with Terrafrom and CI/CD
            </Typography>
        </Link>
        <hr style={{width: "75%", marginBottom: "1rem"}}></hr>
        <Link href='https://dev.to/yoshimii/learning-react-make-it-accessible-now-1bb7' target='_blank'>
        <Typography style={{color: "white"}} variat="h5" component="h3">
          Learning React? Make it Accessible Now
        </Typography>
        </Link>
      </p>
    </section>
    </>
  );
}