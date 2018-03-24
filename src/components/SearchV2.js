import React from 'react';

const SearchV2 = ({handleInputChange}) => {
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
    <div style={style.searchBar}>
      <h5 style={style.heading}>Search for a movie, tv show or video game</h5>
      <input
        type="text"
        autoFocus='autofocus'
        style={style.searchInput}
        onChange={(e) => { handleInputChange(e) }}
        placeholder='Start typing here...'
      />
    </div>
    )
}

export default SearchV2;
