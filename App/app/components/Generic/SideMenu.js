import React from 'react';
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
import { header, mainListItems, auxiliaryListItems } from './tileData';

import  SimpleCard from './SimpleCard';
import  GuttersGrid from './GuttersGrid';

const drawerWidth = 190;


class SideMenu extends React.Component {
  state = {
    anchor: 'left',
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;
    const { list } = this.props;


    return (
      <div>
        <div style={{ height: '100%'}}>
          <AppBar position="absolute">
            <IconTabs/>
          </AppBar>
          <Drawer 
            variant="permanent"
            anchor={anchor}
          >
            <List>{header}</List>
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{auxiliaryListItems}</List>
          </Drawer>
        </div>
      </div>
    );
  }
}


export default SideMenu;