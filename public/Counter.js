import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { counterActions } from './actions';
import SiteLayout from './frames/SiteLayout';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  click(){
    this.props.testClick();
  }

  click2(){
    this.props.minusClick();
  }

  click3(){
    this.props.squareClick();
  }

  click4(){
    this.props.resetClick();
  }

  render(){
    return(
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <button onClick={this.click.bind(this)}>ADD</button>
        <button onClick={this.click2.bind(this)}>SUBTRACT</button>
        <button onClick={this.click3.bind(this)}>SQUARED</button>
        <button onClick={this.click4.bind(this)}>RESET</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testClick: () => dispatch(counterActions("Add")),
    minusClick: () => dispatch(counterActions("Minus")),
    squareClick: () => dispatch(counterActions("squared")),
    resetClick: () => dispatch(counterActions("reset"))
  }
};

const mapStateToProps = (state) => {
  return state;
};

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default DefaultApp;
