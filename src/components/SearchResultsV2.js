import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tabs, Icon, Col, Row, Card } from 'antd';
import uniqid from 'uniqid';
const TabPane = Tabs.TabPane;
const Meta = Card.Meta;

class SearchResultsV2 extends Component {

  render() {
    const { resultsList, isLoading } = this.props
    if (!resultsList) {
      return (
        <div>No results</div>
      )
    }
    const IMG_URL = 'https://image.tmdb.org/t/p/w500/'
    const tvList = [];
    const pplList = [];
    const movieList = [];

    resultsList.forEach((result) => {
      if (result.media_type === 'movie') {
        movieList.push(
            <Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>
              <Link to={`/movie/`}>
                <Card
                  style={{width: '170px', margin: '20px 10px'}}
                  hoverable
                  cover={<img style={{height: '250px'}} alt="example" src={`${IMG_URL}${result.poster_path}`} />}>
                  <Meta
                    title={result.title}
                  />
                </Card>
              </Link>

            </Col>
        )
      } else if (result.media_type === 'tv'){
        tvList.push(
            <Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>
              <Link to={`/movie/`}>
                <Card
                  style={{width: '170px', margin: '20px 10px'}}
                  hoverable
                  cover={<img style={{height: '250px'}} alt="example" src={`${IMG_URL}${result.poster_path}`} />}>
                  <Meta
                    title={result.name}
                  />
                </Card>
              </Link>

            </Col>
        )
      } else if (result.media_type === 'person') {
        pplList.push(
            <Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>
              <Link to={`/movie/`}>
                <Card
                  style={{width: '170px', margin: '20px 10px'}}
                  hoverable
                  cover={<img style={{height: '250px'}} alt="example" src={`${IMG_URL}${result.profile_path}`} />}>
                  <Meta
                    title={result.name}
                  />
                </Card>
              </Link>

            </Col>
        )
      }

    })

    console.log(resultsList)
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><Icon type="video-camera" />Movies</span>} key="1">
            <Row>
              {movieList}
            </Row>
          </TabPane>
          <TabPane tab={<span><Icon type="laptop" />TV</span>} key="2">
            {tvList}
          </TabPane>
          <TabPane tab={<span><Icon type="user" />People</span>} key="3">
            {pplList}
          </TabPane>
        </Tabs>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    resultsList: state.movies.resultsList
  }
}


export default connect(mapStateToProps, null)(SearchResultsV2);
