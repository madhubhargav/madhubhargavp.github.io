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
import descriptionSorter from './utils';

const styles = theme => ({
  skill: {
    margin: theme.spacing.unit,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Experiences extends React.Component {
  state = {};

  handleClick = (experienceId) => {
    this.setState(state => ({ [experienceId]: !state[experienceId] }));
  };

  render() {
    const { classes, experiences } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.title}>
          Experience
        </Typography>
        <List dense={false}>
          { experiences && experiences.map((experience) =>
            <Tooltip title={<React.Fragment>{ experience.start_date } to { experience.end_date ? experience.end_date : 'Present' }</React.Fragment>} placement="left" key={experience.id}>
              <div>
                <ListItem button onClick={() => this.handleClick(experience.id)}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <b>{experience.company_name}</b><br/>
                        { experience.designation }
                      </React.Fragment>
                    }
                    secondary={experience.location}
                  />
                  {this.state[experience.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state[experience.id]} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {
                      descriptionSorter(experience.descriptions).map((description) =>
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

Experiences.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experiences);
