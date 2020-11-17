import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg';
import {ADD_DISTRICT} from './actions'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.addDistrict('Kazaly')
  }

  addDistrict(name) {
    this.props.dispatch({
      type: ADD_DISTRICT,
      name,
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.store.districts.map((d, index) =>
            <li key={index}>{d.name}</li>
          )}
        </ul>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		store: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
