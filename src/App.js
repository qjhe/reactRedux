import React, { Component } from 'react';
import { connect } from 'react-redux';
import Index from './js/view/index';
import './App.css';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(types, dispatch);
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
