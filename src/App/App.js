import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
// import classNames from 'classnames/bind';

// import styles from './App.scss';

// let cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
            <h1>Sai Madhu Bhargav Pallem</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
