import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, fetchMoviesThunk } from '../actions'
import { withRouter } from 'react-router-dom'
import { Input } from 'antd';
const Search = Input.Search;

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

  handleSubmit() {
    this.props.fetchMoviesThunk(this.state.value)
    .then(() => this.props.history.push('/search-results'))
  }

  render() {
    console.log(this.state.value)
    return (

       <Search
         type="text"
         placeholder="Search for a movie...."
         value={this.state.value}
         onChange={this.handleInputChange}
         enterButton="Search"
         size="large"
         onSearch={this.handleSubmit}
       />
    )
  }
}


export default withRouter(connect(null, { fetchMovies, fetchMoviesThunk })(SearchBar));
