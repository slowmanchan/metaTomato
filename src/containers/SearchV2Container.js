import React, { Component } from 'react';
import SearchResultsV2Container from './SearchResultsV2Container';
import SearchV2 from '../components/SearchV2';
import { connect } from 'react-redux';
import { multiSearch } from '../actions';

class SearchV2Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { value } = e.target
    this.props.multiSearch(value)
  }

  render() {
    return (
      <div>
        <SearchV2 handleInputChange={this.handleInputChange} />
        <SearchResultsV2Container/>
      </div>
    )
  }
}

export default connect(null, { multiSearch })(SearchV2Container);
