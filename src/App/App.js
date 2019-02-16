import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './App.scss';

let cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx('app')}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
