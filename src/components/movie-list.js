import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search-bar';


class MovieList extends Component {
  componentDidMount() {
    !this.props.moviesList ? this.props.fetchMovies('movie') : null
  }

  render() {
	const { moviesList } = this.props
	if (!moviesList) {
		return (
		<div>Loading...</div>
		)
	}

    const movies = moviesList.map((movie, idx) => {
    return (


	      <Link key={idx} to={`/movie/${movie.imdbID}`}>
          <div className='card text-center'>
            <img
              className='card-img-top img-fluid'
              id={movie.imdbID}
              src={movie.Poster}
            />
            <div className='card-block'>
              <h4 className='card-title'>{movie.Title}</h4>
            </div>
          </div>
		  </Link>


	     <Link key={idx} to={`/movie/${movie.imdbID}`}>
         <img

             id={movie.imdbID}
           src={movie.Poster}
           />
		  </Link>

      )
    })

    return (

       <div>
         <Link to={'/favorites'} >Favorites</Link>
         <SearchBar/>

         <h3>Search Results</h3>
         <div className='card-columns'>
           {movies}
         </div>
         <div>
           <SearchBar/>
           <h3>Search Results</h3>
           <ul>
             {movies}
           </ul>

         </div>
       </div>
     )
  }
}

function mapStateToProps(state) {
       return {
         moviesList: state.movies.moviesList
       }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);
