import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeforestationDashBoard from '../images/deforestation_dashboard_home.png';
import WaitingList from '../images/waiting_list.png';
import BetterReads from '../images/better_reads.png';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 440
  },
  media: {
    height: 140,
    backgroundPosition: 'top'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    //   Project 1
   <Grid 
   container
   direction="row"
   justify="center"
   alignItems="center"
   spacing={2}
   > 
    <Grid item>  
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={DeforestationDashBoard}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Deforestation Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Material UI, React, Node, Charts.js, Python <br/>Simple app where the user can display and store deforestation graphs and charts for quick secure access.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
        <Link href="https://github.com/bw-deforestationdashboard" target="_blank" rel="noopener" className={classes.link}>
          Code
        </Link>
        </Button>
        <Button size="small" color="primary">
        <Link href="https://deforestationdashboard.netlify.com/map-view" target="_blank" rel="noopener" className={classes.link}>
          Try It Out
        </Link>
        </Button>
      </CardActions>
    </Card>
    </Grid>
{/* Project 2 */}
<Grid item> 
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={WaitingList}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Waiting <br/>List
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Material UI, React, Reducer Pattern<br/>Host life just got easier. A host can update a party on the fly and keep track of check in time with automatic time stamps.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
        <Link href="https://github.com/yoshimii/reducer-todo" target="_blank" rel="noopener" className={classes.link}>
          Code
        </Link>
        </Button>
        <Button size="small" color="primary">
        <Link href="https://waitinglist.netlify.com/" target="_blank" rel="noopener" className={classes.link}>
          Try It Out
        </Link>
        </Button>
      </CardActions>
    </Card>
</Grid>{/*End Grid item 3 */}
{/* Project 3  */}
<Grid item> 
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={BetterReads}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Better Reads
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Material UI, React/Redux, Node, Python <br/> A smarter way to search. Uses machine learning and natural language processing to improve search results based on human speach instead of the standard genre/author search.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
        <Link href="https://github.com/better-reads-9-20/Front-End" target="_blank" rel="noopener" className={classes.link}>
          Code
        </Link>
        </Button>
        <Button size="small" color="primary">
        <Link href="https://betterreads.now.sh" target="_blank" rel="noopener" className={classes.link}>
          Try It Out
        </Link>
        </Button>
      </CardActions>
    </Card>
</Grid>{/*End Grid item 3 */}
</Grid>
  );
}