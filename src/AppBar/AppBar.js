import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from '@material-ui/core/Link';


const styles = theme => ({
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  grow: {
    flexGrow: 1,
  },
});

class TitleBar extends Component {
  render() {
    const { classes, image_url, preferred_name, social } = this.props;
    return (
        <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Avatar alt="Avatar" src={image_url} className={classes.avatar}/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            {preferred_name}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
          <Link color="inherit" href={social && social.github} target="_blank" className={classes.link}>
            <FontAwesomeIcon icon={faGithub} className={classes.leftIcon} size="2x"/>
          </Link>&nbsp;
          <Link color="inherit" href={social && social.linkedin} target="_blank" className={classes.link}>
            <FontAwesomeIcon icon={faLinkedin} className={classes.leftIcon} size="2x"/>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(TitleBar);
