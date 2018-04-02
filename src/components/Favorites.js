import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import { Card, Row, Col, Spin, Icon } from 'antd';
const { Meta } = Card;

class Favorites extends Component  {
	componentDidMount() {
	  this.props.fetchFavorites()
	}

  render() {
		const {favorites, isLoading} = this.props
		if (!favorites || isLoading) {
			return (
			  <div style={{ marginTop: '100px', textAlign: 'center'}}>
					<Spin tip='Gimme a sec....' size='large' />
			  </div>
			)
		}
	  console.log(favorites)
	    const favoritesList = favorites.map((favorite) => {
			return (



					<Col key={uniqid()} xs={24} sm={12} md={8} lg={4}>

						<Card
							style={{width: '170px', margin: '20px 10px'}}
							hoverable
							cover={<Link to={`/movie/${favorite.id}`}><img style={{height: '250px'}} alt="example" src={`https://image.tmdb.org/t/p/w500/${favorite.poster}`} />	</Link>}
							actions={[<Icon type='delete' onClick={(id) => { this.props.deleteFavorite(favorite._id)}}></Icon>, <Icon type='ellipsis'/>]}
						>

								<Meta
									title={favorite.title}
								/>

							</Card>

					</Col>
			)

	    })

		return (
			<div style={{ margin: '40px'}}>
				<h1 style={{fontWeight: '900'}}>Favorites</h1>
				<Row>{favoritesList}</Row>
			</div>

		)
	}

}

export default Favorites;
