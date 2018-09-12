// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

import Button from '@material-ui/core/Button';

import OverviewTabs from './OverviewTabs';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { header, mainListItems, auxiliaryListItems } from '../Generic/tileData';

const drawerWidth = 190;

const styles = theme => ({
  root: {
    flexGrow: 1,
    // Use this when height is making hard time
    position: 'absolute',
    top: 0,
    bottom: 0, 
    left: 0,
    right: 0
    
  },
  appFrame: {
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

});

class Overview extends React.Component {
  state = {
    anchor: 'left',
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const { list } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame} style={{ height: '100%'}}>
          <Drawer 
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor={anchor}
          >
            <List>{header}</List>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{auxiliaryListItems}</List>
          </Drawer>
          <AppBar
              position="absolute"
              className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
            >
            <OverviewTabs/>
          </AppBar> 
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);