import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';


const styles = theme => ({
  avatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
  intro: {
    width: '100%',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  link: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class NameCard extends Component {
  render() {
    const {
      first_name,
      last_name,
      preferred_name,
      description,
      image_url,
      social,
      classes
    } = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Avatar alt="Avatar" src={image_url} className={classes.avatar}/>
        </Grid>
        <Grid item className={classes.intro}>
          <Tooltip title={`${first_name} ${last_name}`} placement="top">
            <Typography variant="h4" color="textPrimary" noWrap>{preferred_name}</Typography>
          </Tooltip>
          <Chip label={social.phone} icon={<PhoneIcon />} variant="outlined" className={classes.chip}/>
          <Chip label={social.email} icon={<MailIcon />} variant="outlined" className={classes.chip}/>
          <br />
          <Link color="textPrimary" href={social.github} target="_blank" className={classes.link}>
            <FontAwesomeIcon icon={faGithub} className={classes.leftIcon} size="2x"/>
          </Link>
          <Link color="textPrimary" href={social.linkedin} target="_blank" className={classes.link}>
            <FontAwesomeIcon icon={faLinkedin} className={classes.leftIcon} size="2x"/>
          </Link>
          <Typography color="textSecondary" paragraph>
            <i>{description}</i>
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(NameCard);
