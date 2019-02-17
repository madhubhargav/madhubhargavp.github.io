import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import NameCard from '../NameCard/NameCard';
import mockData from '../utils/mockData.json';
import withRoot from '../withRoot';


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
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
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
              <Divider />
            </Paper>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(gridStyles)(App));
