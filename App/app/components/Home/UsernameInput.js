import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { AccountCircle } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from "./UsernameInput.css";


class UsernameInput extends Component {
    constructor(props) {
      super(props);
  
    }
  
    render() {
      const { classes } = this.props;
  
      return (
        <TextField
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <AccountCircle
                    />
                </InputAdornment>
                ),
            }}
        />
      );
    }
  }

  UsernameInput.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
  };
  
  UsernameInput = withStyles(styles)(UsernameInput);

  export default UsernameInput;