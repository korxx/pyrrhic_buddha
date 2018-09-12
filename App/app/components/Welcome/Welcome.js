// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import ImageWrapper from '../Generic/ImageWrapper';



type Props = {};
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
    position: 'absolute',
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
class Welcome extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
};


  render() {
    return (
      <div className={styles.container} data-tid="container">
      </div>
    );
  }
}

export default Welcome;