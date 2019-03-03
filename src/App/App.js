import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import NameCard from '../NameCard/NameCard';
import mockData from '../utils/mockData.json';
import withRoot from '../withRoot';
import Skills from '../Skills/Skills';
import Experiences from '../Experiences/Experiences';
import TitleBar from '../AppBar/AppBar';


const data = mockData.results[0];

const gridStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  grow: {
    flexGrow: 1,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TitleBar image_url={data.image_url} preferred_name={data.preferred_name} social={data.social} />
        <Grid container justify="center" alignItems="center">
          <Grid item></Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper} elevation={1}>
              <NameCard
                first_name={data.first_name}
                last_name={data.last_name}
                preferred_name={data.preferred_name}
                image_url={data.image_url}
                description={data.description}
                social={data.social} />
              {/* Experiences */}
              <Divider />
              <br/>
              <Experiences experiences={data.experiences} />
              {/* Skills */}
              <Divider />
              <br/>
              <Skills skills={data.skills} />
            </Paper>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(gridStyles)(App));
