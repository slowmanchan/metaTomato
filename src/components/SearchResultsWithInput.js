import React, { Component } from 'react';

class SearchResultsWithInput extends Component {
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
            autoFocus='autofocus'
            style={style.searchInput}
            placeholder='Start typing here...'
          />
        </div>
      </div>
    )
  }
}

export default SearchResultsWithInput;
