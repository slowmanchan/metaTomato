import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tabs, Icon, Col, Row, Card } from 'antd';
import ResultCard from './ResultCard';

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
            <ResultCard
              key={uniqid()}
              imgSrc={`${IMG_URL}${result.poster_path}`}
              title={result.title}
            />
          )
      } else if (result.media_type === 'tv'){
          tvList.push(
            <ResultCard
              key={uniqid()}
              imgSrc={`${IMG_URL}${result.poster_path}`}
              title={result.name}
            />
          )
      } else if (result.media_type === 'person') {
          pplList.push(
            <ResultCard
              key={uniqid()}
              imgSrc={`${IMG_URL}${result.profile_path}`}
              title={result.name}
            />
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
