import React from 'react';
import Waves from '../images/Waves.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    maxWidth: 700
  },
  
});

const About = () => {
  const classes = useStyles();

  return (
    <Paper square={false} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Waves in Chiba"
          height="200"
          image={Waves}
          title="Waves in Chiba"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About the Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The fire to become a web developer first ignited during my education career. I discovered the immediacy of being able solve real problems with my own two hands. This unconventional career progression allowed me to leverage my understanding of customer facing needs and complex technical problems to create elegant and practical web apps.          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link href="https://twitter.com/emmargherd" target="_blank" rel="noopener" className={classes.link}>
          <TwitterIcon />
        </Link>
        </Button>
        <Link href="https://dev.to/yoshimii" target="_blank" rel="noopener" className={classes.link}>
        <i className="fab fa-dev fa-2x"></i>
        </Link>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Paper>
  );
}

export default About;