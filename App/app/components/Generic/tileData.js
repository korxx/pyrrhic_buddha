// This file is shared across the demos.

import React from 'react';
import { Link } from "react-router-dom";
import routes from '../../constants/routes.json';
// Icons Material Ui
import HelpIcon from '@material-ui/icons/Help';
import FolderIcon from '@material-ui/icons/Folder';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// Core Material Ui
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Styles
import styles from './tileData.css';
// Personal Components



export const header = (
    <div className={styles.header}>
        <img src={'../app/assets/img/black_logo.png'} className={styles.logo}/>
    </div>
)

export const mainListItems = (
  
  <div>
    <ListItem button component={Link} to="/overview" > 
      <ListItemIcon>
        <TimelineIcon>
        </TimelineIcon>
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button component={Link} to="/content">
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Content" />
    </ListItem>
    <ListItem button component={Link} to="/assignments">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Assignments" />
    </ListItem>
    <ListItem button component={Link} to="/account">
      <ListItemIcon>
        <AccountIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    <ListItem button component={Link} to="/supervisor">
      <ListItemIcon>
        <SupervisorAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Supervisor" />
    </ListItem>
  </div>
);

export const auxiliaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
);