import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
	handleOnClick = () => {
		this.props.increaseCount()
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.clicks}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
  return {
    clicks: state.clicks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
