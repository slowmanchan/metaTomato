import React from 'react'
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const Person = ({ name, imgSrc, id, character }) => {
  return (
    <Col  xs={24} sm={12} md={8} lg={4}>
      <Link to={`/movie/`}>
        <Card
          style={{width: '170px', margin: '20px 10px'}}
          hoverable
          cover={<img style={{height: '250px'}} alt="example" src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} />}>
          <Meta
            title={character ? character : 'unknown'}
            description={name}
          />
        </Card>
      </Link>
    </Col>
  )
}

export default Person
