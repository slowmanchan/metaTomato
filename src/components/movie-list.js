import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesThunk } from '../actions';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search-bar';
import {  ListGroup, ListGroupItem, Media} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Spinner from './spinner';
import svg from '../icons/doublering.svg';
import cube from '../icons/cube.gif';

class MovieList extends Component {
  componentDidMount() {
    !this.props.moviesList ? this.props.fetchMovies('movie') : null;
    this.props.fetchMoviesThunk('movie')
  }

  render() {
    console.log(this.props)
  	const { moviesList } = this.props
  	if (!moviesList) {
  		return (
  	    <div></div>
  		)
  	}

    const movies = moviesList.map((movie, idx) => {
    return (
      <ListGroupItem key={idx}>
        <LinkContainer to={`/movie/${movie.imdbID}`}>

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

        </LinkContainer>

      </ListGroupItem>

      )
    })

    return (
       <div className='container'>
         <h3>Search Results</h3>
         {this.props.isLoading ? <div className='text-center'><img src={cube} /></div> :  <ListGroup>{movies}</ListGroup>}
         </div>
    )
 }
}

function mapStateToProps(state) {
  return {
     moviesList: state.movies.moviesList,
     isLoading: state.movies.isLoading
  }
}

export default connect(mapStateToProps, { fetchMovies, fetchMoviesThunk })(MovieList);
