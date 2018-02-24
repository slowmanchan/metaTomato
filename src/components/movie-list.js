import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search-bar';
import { ListGroup, ListGroupItem, Media} from 'reactstrap';

class MovieList extends Component {
  componentDidMount() {
    !this.props.moviesList ? this.props.fetchMovies('movie') : null
  }

  render() {
    console.log(this.props)
	const { moviesList } = this.props
	if (!moviesList) {
		return (
		<div>Loading...</div>
		)
	}

    const movies = moviesList.map((movie, idx) => {
    return (
      <ListGroupItem>
        <Link to={`/movie/${movie.imdbID}`}>
          <div>
            <Media>
              <Media left>
                <Media object
                  src={movie.Poster}
                  style={{width: '100px'}}
                  id={movie.imdbID}

                />
              </Media>
              <Media body>
                <Media heading>
                  {movie.Title}
                </Media>
                <ul>
                  <li>  Type: {movie.Type}</li>
                  <li>Year: {movie.Year} </li>
                  <li>  imdbID: {movie.imdbID}</li>
                  <li>Poster Link: {movie.Poster}</li>
                </ul>

              </Media>

            </Media>
          </div>
        </Link>

      </ListGroupItem>

      )
    })
    console.log(this.props.moviesList)
    return (

       <div className='container'>

         <h3>Search Results</h3>
         <ListGroup>
           {movies}
         </ListGroup>

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
