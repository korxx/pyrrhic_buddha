// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';

type Props = {};

class Content extends Component<Props> {
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
      <div data-tid="container">
        </div>
    );
  }
}

export default Content;