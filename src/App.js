import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { REMOVE_DISTRICT } from './actions'
import DistrictForm from './components/DistrictForm'

class App extends Component {
  removeDistrict(index) {
    if(window.confirm('Are you sure?')) {
      this.props.dispatch({
        type: REMOVE_DISTRICT,
        index,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <DistrictForm />
        <div className="districts">
          {this.props.store.districts.map((d, index) =>
            <div key={index} className="district">
              <span>{d.name}</span>
              <button onClick={this.removeDistrict.bind(this, index)}>Remove</button>
            </div>
          )}
        </div>
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
