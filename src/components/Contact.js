import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: 500,
    margin: 'auto',
    border: 'outset 10px #3f51b5',
    backgroundColor: '#fffff2'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: 'Nineteen ninety seven',
    borderRadius: '0px'
  },
  input: {
    display: 'none',
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
    multiline:'Controlled'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  // const clearState = e => {

  // }

  const handleSubmit = e => {
      e.preventDefault();
      setValues({...values,     name: '',
      email: '',
      message: '',})
  }
  return (
    <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
      <h1>Reach out!</h1>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
            <TextField
        id="standard-email"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
      />

      <TextField
        id="standard-multiline-static"
        label="Message"
        multiline
        rows="4"
        className={classes.textField}
        value={values.message}
        onChange={handleChange('message')}
        margin="normal"        
      />

    <Button variant="contained" onClick={handleSubmit} className={classes.button}>
        Submit
      </Button>
      <div className="contact-icons">
      <a href="https://twitter.com/emmargherd" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
      <a href="https://www.linkedin.com/in/emmazarate/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      <a href="https://github.com/yoshimii" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      <a href="mailto:zarate.emm@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
      </div>
    </form>
  );
}