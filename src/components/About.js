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

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <Paper square='false' className={classes.card}>
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
            Emma is a full-stack engineer whose curiosity took her around the globe. She found that most of the world's problems can be solved with technology (& a little heart). She has returned home to prove just that. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Paper>
  );
}

export default About;