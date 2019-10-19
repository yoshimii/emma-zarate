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
import Proj2 from '../images/deforestation_dashboard_home.png'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
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
          image={Proj2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Deforestation Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Material UI, React, Node, Charts.js, Python Simple app where the user can display and store deforestation graphs and charts for quick secure access.
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
          image={Proj2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Deforestation Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Material UI, React, Node, Charts.js, Python Simple app where the user can display and store deforestation graphs and charts for quick secure access.
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
</Grid>{/*End Grid item 3 */}
{/* Project 3  */}
<Grid item> 
<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Proj2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Deforestation Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Material UI, React, Node, Charts.js, Python Simple app where the user can display and store deforestation graphs and charts for quick secure access.
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
</Grid>{/*End Grid item 3 */}
</Grid>
  );
}