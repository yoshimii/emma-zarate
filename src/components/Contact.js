import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: 500,
    margin: 'auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
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
  
  const clearState = e => {

  }

  const handleSubmit = e => {
      e.preventDefault();
      setValues({...values,     name: '',
      email: '',
      message: '',})
  }
  return (
    <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
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
        defaultValue="Drop me a line"
        className={classes.textField}
        value={values.message}
        onChange={handleChange('message')}
        margin="normal"        
      />

    <Button variant="contained" onClick={handleSubmit} className={classes.button}>
        Submit
      </Button>
    </form>
  );
}