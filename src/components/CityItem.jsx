import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_CITY } from '../actions'
import CityForm from './CityForm'

class CityItem extends Component {
  render() {
    return (
      <>
        <CityForm districtIndex={this.props.districtIndex} />
        <div className="cities">
          {this.props.store.districts[this.props.districtIndex].cities.map((c, index) =>
            <div key={index} className="city">
              <div className="city-content">
                <div>
                  <span>{index+1}. </span>
                  <b>{c.name}</b>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
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
)(CityItem)
