import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const statementIds = [1, 2, 3];

class Statement extends Component {
  render() {
    return <div className="statement">{this.props.id}</div>;
  }
}

class App extends Component {
  coors() {
    let arr = [];
    for (let i = 0; i < statementIds.length; i++) {
      arr.push(
        ReactDOM.findDOMNode(
          this.refs['statement-' + (i + 1)]
        ).getBoundingClientRect()
      );
    }
    console.log(arr);
  }
  componentDidMount() {
    this.coors();
  }
  render() {
    const statements = statementIds.map(id => {
      return (
        <Statement ref={'statement-' + id} key={'statement-' + id} id={id} />
      );
    });
    return (
      <div className="container">
        <div className="row box">
          <div className={'col box'}>
            <div className="svg">left</div>
            {statements}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
