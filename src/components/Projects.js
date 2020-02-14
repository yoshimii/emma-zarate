import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeforestationDashboard from '../images/deforestation_dashboard_home_tny.png';
import SpaceBeez from '../images/space_beez_dungeon.jpg'
import BetterReads from '../images/better_reads_tny.png';
import FutureHope from '../images/future_hope_tny.png';
import Census2020 from '../images/census_2020_atx_tny.png';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 440,
    border: 'outset 10px #3f51b5',
    backgroundColor: '#fffff2',
    fontSize: '10px',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    height: 140,
    backgroundPosition: 'top'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [ projects ] = useState([
      {   
          img: `${FutureHope}`,
          title: "Future Hope School",
          tech: "React + Redux, Cloud Firestore, Material UI",
          desc: "Retired professionals can sign up to be virtual mentors to students in need in Ghana and other parts of the world",
          github: "https://github.com/Lambda-School-Labs/future-hope-fe",
          url: "https://www.futurehopeschool.com/"
      },
      {   
        img: `${Census2020}`,
        title: "Census2020 ATX",
        tech: "React + Gatsby, US Web Design System",
        desc: "Open source microsite for the city of Austin, intended to increase participation in hard to count regions",
        github: "https://github.com/cityofaustin/census2020",
        url: "https://deploy-preview-61--atx-census-2020.netlify.com/en"
    },
    {   
      img: `${SpaceBeez}`,
      title: "Space Beez",
      tech: "Django/Python, React, Pusher, Bootstrap",
      desc: "Chat with other players in this massive multiuser dungeon game!",
      github: "https://github.com/muddier/CS-Build-Week-1",
      url: "https://github.com/muddier/CS-Build-Week-1"
  },
  {   
    img: `${DeforestationDashboard}`,
    title: "Deforestation Dashboard",
    tech: "React, Node/Express, Chart.js, Material UI",
    desc: "Securely display and store easy to digeset deforestation graphs and charts for quick access. ",
    github: "https://github.com/bw-deforestationdashboard/FrontEnd",
    url: "https://deforestationdashboard.netlify.com/map-view"
},
  ])

  return (
   <Grid 
   container
   direction="row"
   justify="center"
   alignItems="center"
   spacing={2}
   > 
   {projects.map((project) => {
     return <Grid item>  
     <Card className={classes.card}>
       <CardActionArea>
         <CardMedia
           className={classes.media}
           image={project.img}
           title={project.title}
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             {project.title}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
           {project.tech} <br/>{project.desc}
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
       <Button size="small" color="primary">
         <Link href={project.github} target="_blank" rel="noopener" className={classes.link}>
           Code
         </Link>
         </Button>
         <Button size="small" color="primary">
         <Link href={project.url} target="_blank" rel="noopener" className={classes.link}>
           Try It Out
         </Link>
         </Button>
       </CardActions>
     </Card>
     </Grid>
   })}
 
</Grid>
  );
}