import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../actions';
import uniqid from 'uniqid';
import axios from 'axios';
import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';
import { Carousel, Row, Col, List, Card } from 'antd';
const { Meta } = Card;

import 'antd/dist/antd.css'

class Home extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies()
  }

  render() {
    const style = {
      upComingList: {
        padding: '20px',
        backgroundColor: '#f5da55',
        height: '280px',
        overflow: 'auto'
      }
    }

    const { upComingMovies } = this.props;
    if (upComingMovies.length == 0) {
      return <div></div>
    }

    const movies = upComingMovies.slice(0,6).map((movie) => {
      return (

            <div style={{ position: 'relative' }} key={uniqid()}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  style={{ marginLeft: 'auto', overflow: 'hidden'}}
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
              </Link>
                <div style={{  position: 'absolute', bottom: '48px', left: '46px', color: 'white' }}>
                  <h1 style={{ color: 'white'}}>{movie.title}</h1>
                  <p>{movie.overview.slice(0, 60)}...</p>
                </div>

              </div>


      )
    })

    const moviesList = upComingMovies.slice(6, 14).map((movie) => {
      return (
        <Col key={uniqid()} xs={24} md={6}>
          <Link to={`/movie/${movie.id}`}>
            <Card
              hoverable
              style={{margin: '10px'}}
              cover={<img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>}
            >
              <Meta
                title={movie.title}
                description={movie.overview.slice(0, 100)}
              />
            </Card>
          </Link>
        </Col>
          )
    })
     console.log(upComingMovies)
    return (
      <div>
        <Row>
          <div style={{ margin: '20px'}}>
            <Col xs={24} >
              <Carousel
                effect='fade'
                autoplay
                style={{background: 'black'}}>
                {movies}
              </Carousel>
            </Col>

          </div>
        </Row>
        <Row>
          <div style={{margin: '20px'}}>
            <h1 style={{margin: '60px 10px', fontWeight: '800'}}>Upcoming Movies</h1>
            <div>
              {moviesList}
            </div>
          </div>
          </Row>
        </div>

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
