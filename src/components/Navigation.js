import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Projects from './Projects';
import Writing from './Writing';
import About from './About';
import Contact from './Contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent',
    width: '100%'
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="centered tabs example"
          centered
        >
          <Tab label="About Emma" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Writing" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
          <Tab label="Resume" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className="about-panel" value={value} index={0} dir={theme.direction}>
          <About />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Writing />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Contact />
        </TabPanel>
      </SwipeableViews> 
    </div>
  );
}