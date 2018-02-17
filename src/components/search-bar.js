import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    const { value } = e.target
    this.setState({ value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchMovies(this.state.value)
  }

  render() {
    return (
      <div>
        <form
          className='input-group'
          onSubmit={this.handleSubmit}
        >
          <input
            placeholder='Search for a movie meng.....'
            className='form-control'
            type='text'
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <span className='input-group-btn'>
            <button
              className='btn btn-primary'
              type='submit'
            >
              >
            </button>
          </span>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchMovies })(SearchBar);
