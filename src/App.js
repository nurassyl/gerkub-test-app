import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { REMOVE_DISTRICT, TOGGLE_MORE } from './actions'
import DistrictForm from './components/DistrictForm'
import CityItem from './components/CityItem'

class App extends Component {
  removeDistrict(index) {
    if(window.confirm('Are you sure?')) {
      this.props.dispatch({
        type: REMOVE_DISTRICT,
        index,
      })
    }
  }

  toggleMore(index) {
    this.props.dispatch({
      type: TOGGLE_MORE,
      index,
    })
  }

  render() {
    return (
      <div className="App">
        <DistrictForm />
        <div className="districts">
          {this.props.store.districts.map((d, index) =>
            <div key={index} className="district">
              <div className="district-content">
                <div>
                  <span>{index+1}. </span>
                  <b>{d.name}</b>
                </div>
                <div>
                  <button onClick={this.toggleMore.bind(this, index)}>More..</button>
                  <button onClick={this.removeDistrict.bind(this, index)}>Remove</button>
                </div>
              </div>

              {d.isMoreShown && (
                <div className="district-more-content">
                  <CityItem districtIndex={index} />
                </div>
              )}
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
