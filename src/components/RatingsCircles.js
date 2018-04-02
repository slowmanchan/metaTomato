import React, { Component } from 'react';
import {
	Row, Col, Progress, Button,
	Tag, Tabs, Icon, Divider, Spin
} from 'antd';
import uniqid from 'uniqid';
import { formatRatings } from '../helpers/formatRatings.js';

class RatingsCircles extends Component {
  render() {
    const { ratings } = this.props

    if (!ratings) {
      return (
        <div>No ratings</div>
      )
    }

    let formattedRatings = formatRatings(ratings).map((formatRating, idx) => {
        return (
          <div key={uniqid()} style={{ display: 'inline-block'}}>
            <Progress
              type="circle"
              percent={formatRating.rating}
              width={80}
              strokeWidth={10}
            />
            <div style={{fontStyle: 'italic',margin: '10px',width: '60px', display: 'inline-block'}}>
              {formatRating.name}
            </div>
          </div>
        )
    });

    return (
      <div>
        {formattedRatings}
      </div>
    )
  }
}

export default RatingsCircles;
