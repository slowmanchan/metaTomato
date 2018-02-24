import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'
import { LinkContainer, InputGroup, Navbar, Form, FormGroup, FormControl, Button } from 'react-bootstrap'

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
      <FormGroup>

        <FormControl
          type="text"
          placeholder="Search for a movie...."
          value={this.state.value}
          onChange={this.handleInputChange}
        />{' '}

        <Button

          type="submit"
          onClick={this.handleSubmit}
          title='action'
        >
          go
        </Button>

      </FormGroup>
    )
  }
}


export default connect(null, { fetchMovies })(SearchBar);
