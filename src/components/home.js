import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../actions';
import Sider from './sider';
import uniqid from 'uniqid';
import axios from 'axios';
import Auth from '../modules/Auth';
import { Carousel, Row, Col } from 'antd';
import 'antd/dist/antd.css'

class Home extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies()
  }


  render() {
    const { upComingMovies } = this.props;
    if (upComingMovies.length == 0) {
      return <div></div>
    }

    const movies = upComingMovies.slice(0,6).map((movie) => {
      return (
        <div style={{ position: 'relative' }} key={uniqid()}>
			  <img
				style={{ marginLeft: 'auto'}}
				src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
			  />
		  
          <div style={{  position: 'absolute', bottom: '48px', left: '46px', color: 'white' }}>
            <h1 style={{ color: 'white'}}>{movie.title}</h1>
            <p>{movie.overview.slice(0, 60)}...</p>
          </div>
        </div>

      )
    })

    return (
      <Row>
        <Col xs={24} >
          <Carousel style={{background: 'black'}}>
            {movies}
          </Carousel>
        </Col>
      </Row>



    )
  }
}


function mapStateToProps(state) {
  return {
      upComingMovies: state.movies.upComingMoviesList,
      isLoading: state.movies.isLoading
  }
}
export default connect(mapStateToProps, { fetchUpcomingMovies })(Home)
