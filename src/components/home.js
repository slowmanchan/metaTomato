import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUpcomingMovies } from '../actions';
import { Carousel, Item, Caption } from 'react-bootstrap'

class Home extends Component {
  componentDidMount() {
    this.props.fetchUpcomingMovies()
  }
  render() {
    if (this.props.upComingMovies.length == 0) {
      return <div></div>
    }

    console.log()
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={`https://image.tmdb.org/t/p/w1280/${this.props.upComingMovies[1].backdrop_path}`} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
