import React, {Component} from 'react';
import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.header}></h1>
            </div>
        )
    }
}

export default Header;