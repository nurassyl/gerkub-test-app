import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import DistrictForm from './components/DistrictForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DistrictForm />
        <ul>
          {this.props.store.districts.map((d, index) =>
            <li key={index}>{d.name}</li>
          )}
        </ul>
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
