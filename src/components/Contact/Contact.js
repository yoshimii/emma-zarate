import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import './Contact.css';

const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 500,
    margin: 'auto',
    border: 'outset 10px #3f51b5',
    backgroundColor: '#fffff2'
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <h1>Catch me here:</h1>
      <div className="contact-icons">
      <a aria-label="Emma/'s LinkedIn Profile" href="https://www.linkedin.com/in/emmazarate/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      <a aria-label="Emma's GitHub Profile" href="https://github.com/yoshimii" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      <a aria-label="Email Emma" href="mailto:zarate.emm@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
      </div>
    </Paper>
  );
}