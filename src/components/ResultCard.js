import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col} from 'antd';
const { Meta } = Card;

const ResultCard = ({ title, imgSrc }) => {
  return (
    <Col  xs={24} sm={12} md={8} lg={4}>
      <Link to={`/movie/`}>
        <Card
          style={{width: '170px', margin: '20px 10px'}}
          hoverable
          cover={<img style={{height: '250px'}} alt="example" src={imgSrc} />}>
          <Meta
            title={title}
          />
        </Card>
      </Link>
    </Col>
  )
}

export default ResultCard;
