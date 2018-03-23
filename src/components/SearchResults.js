import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Spin } from 'antd';
import uniqid from 'uniqid';
const { Meta } = Card;
// _.debounce((term) => { this.videoSearch(term), 300})
class SearchResults extends Component {


  render() {
  	const { moviesList, isLoading } = this.props;
  	if (isLoading) {
			return (
			  <div style={{ marginTop: '100px', textAlign: 'center'}}>
			    <Spin tip='Gimme a sec....' size='large' />
			  </div>
		   )
	  }

    if (!moviesList) {
      return (
        <div></div>
      )
    }

    const movies = moviesList.map((movie, idx) => {
    return (
  		<Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>
  		  <Link to={`/movie/${movie.imdbID}`}>
          <Card
            style={{width: '170px', margin: '20px 10px'}}
            hoverable
            cover={<img style={{height: '250px'}} alt="example" src={movie.Poster} />}>
            <Meta
              title={movie.Title}
            />
          </Card>
  		  </Link>

  		</Col>
      )
    })

    return (
       <div>
         <Row>{movies}</Row>
       </div>
    )
  }
}


export default SearchResults;
