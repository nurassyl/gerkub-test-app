import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ADD_CITY} from '../actions'

class CityForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  addCity(e) {
    e.preventDefault()

    this.state.name = this.state.name.trim()

    if(this.state.name === '') {
      alert('Empty city name!')
      return
    }

    this.props.dispatch({
      type: ADD_CITY,
      districtIndex: this.props.districtIndex,
      name: this.state.name,
    })

    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.addCity.bind(this)}>
        <h4>Add city:</h4>
        <input
          type="text"
          onChange={event => this.setState({ name: event.target.value })}
          value={this.state.name}
        />
        <button type="submit">Add</button>
      </form>
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
)(CityForm)
