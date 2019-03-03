import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import StarBorder from '@material-ui/icons/StarBorder';
import descriptionSorter from '../Experiences/utils';

const styles = theme => ({
  skill: {
    margin: theme.spacing.unit,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Projects extends React.Component {
  state = {};

  handleClick = (projectId) => {
    this.setState(state => ({ [projectId]: !state[projectId] }));
  };

  render() {
    const { classes, projects } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.title}>
          Projects
        </Typography>
        <List dense={false}>
          { projects.map((project) =>
            <Tooltip title={<React.Fragment>{ project.start_date } to { project.end_date ? project.end_date : 'Present' }</React.Fragment>} placement="left" key={project.id}>
              <div>
                <ListItem button onClick={() => this.handleClick(project.id)}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <b>{project.name}</b><br/>
                        { project.short_description }
                      </React.Fragment>
                    }
                    secondary={project.academy ? 'Personal Project': 'Professional Project' }
                  />
                  {this.state[project.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state[project.id]} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {
                      descriptionSorter(project.descriptions).map((description) =>
                        <ListItem key={description.id} className={classes.nested}>
                          <ListItemIcon><StarBorder /></ListItemIcon>
                          <ListItemText inset primary={description.description} />
                        </ListItem>
                      )
                    }
                  </List>
                </Collapse>
              </div>
            </Tooltip>
          )}
        </List>
      </React.Fragment>
    )
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
