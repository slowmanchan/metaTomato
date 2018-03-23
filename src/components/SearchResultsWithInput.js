import React, { Component } from 'react';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import { connect } from 'react-redux';
import { fetchMoviesThunk } from '../actions';
import { debounce } from 'lodash';

class SearchResultsWithInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }



  handleInputChange(e) {
    const { value } = e.target

    this.props.fetchMoviesThunk(value)
  }

  render() {
    const style = {
      searchBar: {
        padding: '20px',
        backgroundColor: 'white',
        fontSize: '4em'
      },
      heading: {
        fontWeight: '800'
      },
      searchInput: {
        border: 'none',
        fontWeight: '900'
      }
    }

    return (
      <div>
        <div style={style.searchBar}>
          <h5 style={style.heading}>Search for a movie, tv show or video game</h5>
          <input
            type="text"
            autoFocus='autofocus'
            style={style.searchInput}
            onChange={this.handleInputChange}
            placeholder='Start typing here...'
          />
        </div>
        <div>
          <SearchResultsContainer/>
        </div>
      </div>
    )
  }
}

export default connect(null, { fetchMoviesThunk })(SearchResultsWithInput);
