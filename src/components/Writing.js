import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    width: 700,
    margin: 'auto',
    textAlign: 'left'
  },
}));

export default function Writing() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
        Learning React? Make it accessible now.
        </Typography>
        <Typography component="p">
<br/> <h3>1️⃣ First things first: title page</h3>

The first thing a user with a screen-reader hears is the name of the page they've landed on. Make the name meaningful. Give the user some context! Yada yada, we know. Right? But, how do you name the different component routes of a single page application? Glad you asked! Enter:

React Document Title
A simple installation npm install --save react-document-title and you've got Yousef and yourself an NPM package with a 'declarative way to specify document.title in a single-page app.'
<br/>
<h3>2️⃣ This second thing just right out surprised me: modals</h3>

Modal was a word I never cared to learn much about. It's not really one of those buzzwords we hear talked about all the time like-- ahem, agile or, cough vanilla JavaScript. But they are actually everywhere and are notoriously not #a11y (another good buzzword) friendly.

It's those annoying boxes that block your view of what you really want to see. They say things like: 'Join today...,’ or 'Be the first to know...' when what they really mean is 'Give us your email address now.' Imagine not being able to escape that hell.

Now we can help others out of modal limbo with:

react-aria-modal
Yet another simple npm package that can help make people happier on the web.

react-aria-modal uses ARIA (Accessible Rich Internet Applications) attributes to achieve a fully accessible experience.

Just npm install react-aria-modaland the user can tab through the different fields in the modal as well as press escape to close it.

I love that someone took the time to build this, and as of this posting it does look like they are seeking co-maintainers! So, it's also a great opportunity to contribute to an open source project. Boom. Two birds one stone.

Disclosure: This last thing isn't React specific so feel free to move on, but it's super easy to apply and to remember to do. Promise.
<br/><h3>
3️⃣ Third thing and often overlooked is: contrast 🖤</h3>

It's arguable that design is the most fun part of a new project. While some people wish it was just done already, others wish they had more time to make things pixel perfect. Not everyone has the luxury of being that opinionated.

Color vision deficiency affects millions of web users around the world. Even those without it have had some experience with getting monitor or TV settings just right.

Can you imagine not having that choice as you scour Google for bread recipes? It just wouldn't be rye...t. In fact, it'd be downright sour. Wheat can't have that 🍞. I couldn't decide on the right bun. Not sorry. Anyway, here to help is:

WebAIM has been helping improve that experience since 1999. Really!

Their contrast checker tests your colors to see if they get the WCAG (Web Content Accessibility Guidelines) stamp of approval. You can easily check if your contrast ratio passes by testing foreground and background colors against each other. You need at least a 4.5:1 on normal sized text to pass AA level ratings. I fantasize about the moment I get to highlight the accessibility of my portfolio to a recruiter🌠.
<br/><br/>
As makers of internet things, it's up to us to make all the things for everyone. These are all quick ways to make immeasurable differences in people's lives for the better.
<br/><br/><Link href='https://dev.to/yoshimii/learning-react-make-it-accessible-now-1bb7' target='_blank'>Read the original post here</Link>
        </Typography>
      </Paper>
    </div>
  );
}