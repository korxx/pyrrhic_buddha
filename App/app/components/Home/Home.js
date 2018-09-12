// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../constants/routes.json';
import styles from './Home.css';



import ImageWrapper from '../Generic/ImageWrapper';
import PasswordInput from './PasswordInput';
import UsernameInput from './UsernameInput';

type Props = {};


export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      username: ''
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
};


  render() {
    const { password } = this.state;
    const { username } = this.state;
    return (
      <div className={styles.container} id="login-container" data-tid="container">
        <ImageWrapper path={'./assets/img/black_logo.png'}/>
        <h3 className={styles.musa}>musaeum</h3>
        <div className={styles.username}>
          <UsernameInput 
            value={username}
          />
        </div>
        <div className={styles.password}>
          <PasswordInput 
                name="password"
                value={password}
                onChange={this.onChange}/>
        </div>
          <NavLink  to={routes.OVERVIEW} className={styles.link}>Login</NavLink>
          {this.props.children}
      </div>
    );
  }
}
