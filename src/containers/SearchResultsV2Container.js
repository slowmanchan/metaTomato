import { connect } from 'react-redux';
import React from 'react';
import uniqid from 'uniqid';
import ResultCard from '../components/ResultCard';
import ResultTabs from '../components/ResultTabs';

const SearchResultsV2Container = ({resultsList, isLoading}) => {
  if (!resultsList) {
    return (
      <div>No results</div>
    )
  }

  if (isLoading) {
    return (
      <div style={{ marginTop: '100px', textAlign: 'center'}}>
        <Spin tip='Gimme a sec....' size='large' />
      </div>
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

  return (
    <ResultTabs
      tvList={tvList}
      movieList={movieList}
      pplList={pplList}
    />
  )
}


function mapStateToProps(state) {
  return {
    resultsList: state.movies.resultsList
  }
}

export default connect(mapStateToProps, null)(SearchResultsV2Container);
