import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
    borderRadius: '0px',
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
    multiline:'Controlled',
    status: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
    const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setValues({ status: "SUCCESS" });
      } else {
        setValues({ status: "ERROR" });
      }
    };
    xhr.send(data);
    setValues({...values,     name: '',
    email: '',
    message: '',})
  }
  return (
    <form onSubmit={handleSubmit} className={classes.container} action="https://formspree.io/meqzedqn" method="POST" noValidate autoComplete="off">
      <h1>Reach out!</h1>
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        name="name"
      />
        <TextField
        id="standard-email"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChange('email')}
        margin="normal"
        name="email"
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
        name="message"        
      />
      {values.status === "SUCCESS" ? <p>Thanks for your message! I'll get in touch as soon as I'm available.</p> : 
      <button variant="contained"
        className="MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-263">
          <span className="MuiButton-label">
            SUBMIT
          </span>
          <span className="MuiTouchRipple-root"></span>
      </button>}
      {values.status === "ERROR" && <p>Don't forget to leave a message!</p>} 

      <div className="contact-icons">
      <a href="https://www.linkedin.com/in/emmazarate/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
      <a href="https://github.com/yoshimii" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
      <a href="mailto:zarate.emm@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
      </div>
    </form>
  );
}