import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import sortSkills from './utils';

const styles = theme => ({
  skill: {
    margin: theme.spacing.unit,
  }
});

class Skills extends React.Component {

  render() {
    const { classes, skills } = this.props;
    const sortedSkills = sortSkills(skills);
    return (
      <React.Fragment>
        <Typography variant="h6" className={classes.title}>
          Skills
        </Typography>
        { sortedSkills && sortedSkills.map((skill) =>
            <Tooltip title={skill.category.name} placement="top" key={skill.id}>
              <Chip
                label={skill.name}
                avatar={<Avatar>{skill.name.substring(0,2).toUpperCase()}</Avatar>}
                className={classes.skill}
              />
            </Tooltip>
          )
        }
        </React.Fragment>
    )
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
