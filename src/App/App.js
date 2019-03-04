import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import NameCard from '../NameCard/NameCard';
// import mockData from '../utils/mockData.json';
import withRoot from '../withRoot';
import Skills from '../Skills/Skills';
import Experiences from '../Experiences/Experiences';
import TitleBar from '../AppBar/AppBar';
import Projects from '../Projects/Projects';


// const data = mockData.results[0];

const gridStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    paddingTop: 50,
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
  state = {
    data: {}
  };

  componentDidMount() {
    axios.get(`https://madhubhargavp.pythonanywhere.com/person`)
      .then(res => {
        const data = res.data;
        this.setState({ data: data.results[0] });
      })
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.root}>
        <TitleBar image_url={data.image_url} preferred_name={data.preferred_name} social={data.social} />
        { _.isEmpty(data) && <LinearProgress color="secondary" /> }
        <Grid container justify="center" alignItems="center">
          <Grid item></Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper} elevation={1}>
              <NameCard
                first_name={data.first_name}
                last_name={data.last_name}
                preferred_name={data.preferred_name}
                image_url={data.image_url}
                description={data.description}
                social={data.social} />
              {/* Skills */}
              <Divider />
              <br/>
              <Skills skills={data.skills} />

              {/*Experiences and Projects*/}
              <Grid container>
                <Grid item xs={12} lg={6}>
                  <Experiences experiences={data.experiences} />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Projects projects={data.projects} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(gridStyles)(App));
