import React, { Component } from 'react';
import {
	Row, Col, Progress, Button,
	Tag, Tabs, Icon, Divider, Spin
} from 'antd';
import uniqid from 'uniqid';
import { formatRatings } from '../helpers/formatRatings.js';
import AddFavorite from './add-favorite';
import RatingsCircles from './RatingsCircles'
import Person from './Person';
const TabPane = Tabs.TabPane;

class MovieShow extends Component {
	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id)
	}

	render() {

	  const { movie, isLoading, ratings, credits } = this.props;

		if (!movie || isLoading) {

			return (
			  <div style={{ marginTop: '100px', textAlign: 'center'}}>
					<Spin tip='Gimme a sec....' size='large' />
			  </div>
			)
		}

		const { genres } = movie; // Ratings,
		console.log(credits)

		const genreList = genres.map((genre) => {
			return (
				<Tag
					color='geekblue'
					key={uniqid()}
				>
					{genre.name}
				</Tag>
			)
		});

		const creditsList = credits.map((credit) => {
			return (
				<Person
					key={credit.id}
					name={credit.name}
					id={credit.id}
					imgSrc={credit.profile_path}
					character={credit.character}
				/>
			)
		})

		return (
			<div style={{ margin: '40px' }}>

				<Row>
					<Col xs={24} md={8}>
						<div style={{ margin: '0 40px 40px 0'}}>
							<img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
						</div>
					</Col>
					<Col xs={24} md={16}>
						<h1 style={{fontWeight: '900'}}>{movie.title}&nbsp;<span style={{ fontSize: 'small', fontWeight: 'normal', color: 'grey'}}>({movie.release_date})</span></h1>
						<div style={{margin: '40px 0'}}>
							<RatingsCircles
								ratings={ratings}
							/>
						</div>
						<div style={{marginBottom: '20px'}}>
							<p><i>"{movie.tagline.split('.').join(' ')}"</i></p>
							<AddFavorite movie={movie}/>
							{' '}
							<Button>+ Watch List</Button>
						</div>
						<h3>Overview</h3>

						<p>{movie.overview}</p>
						<p>Runtime: {movie.runtime} minutes</p>
						<p>Revenue: ${movie.revenue}</p>
						<p>Budget: ${movie.budget}</p>


						{genreList}
					</Col>

				</Row>


				<Divider/>
				<Row>

					<Col>
						<Tabs defaultActiveKey="1">
							<TabPane tab={<span><Icon type="person" />People</span>} key="1">
								{creditsList}
							</TabPane>
							<TabPane tab={<span><Icon type="award" />Awards</span>} key="2">

							</TabPane>
							<TabPane tab={<span>Other</span>} key="3">
								Tab 1
							</TabPane>
							<TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="4">
								Tab 1
							</TabPane>
							<TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="5">
								Tab 1
							</TabPane>
						</Tabs>
					</Col>
				</Row>
			</div>

	 )
  }
}

export default MovieShow;
