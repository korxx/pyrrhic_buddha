import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from "./ImageWrapper.css";

type Props = {};

class ImageWrapper extends Component{
    props: Props;

    render() {
        const {path} = this.props;

        return(
            <div className={styles.wrapper} align="center">
                <img className={styles.image} src={path} />
            </div>
        )
    }

}

export default ImageWrapper;