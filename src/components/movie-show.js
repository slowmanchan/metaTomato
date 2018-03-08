import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie} from '../actions';
import { Link } from 'react-router-dom';
import AddFavorite from './add-favorite';
import { Row, Col, Progress, Button, Tag, Tabs, Icon, Divider } from 'antd';
import { formatRatings } from '../helpers/formatRatings.js';
import uniqid from 'uniqid';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;

class MovieShow extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id)
	}
	render() {
		const { movie } = this.props

		if (!movie) {
			return (
			  <div>Loading...</div>
			)
		}

		const { Ratings, Genre } = movie
    console.log(movie)
		const formattedRatings = formatRatings(Ratings)
    const genres = Genre.split(',').map((item) => {
			return (
				<Tag
					color='geekblue'
					key={uniqid()}
				>
					{item}
				</Tag>
			)
		})
		console.log(genres)
		return (

					<div style={{margin: '40px'}}>
						<Row>
							<Col xs={24} md={8}>
								<img style={{width: '300px'}} src={movie.Poster}/>
							</Col>
							<Col xs={24} md={16}>
								<h1 style={{fontWeight: '900'}}>{movie.Title}&nbsp;<span style={{ fontSize: 'small', fontWeight: 'normal', color: 'grey'}}>({movie.Year})</span></h1>
								<div style={{margin: '40px 0'}}>

									<Progress
										type="circle"
										percent={formattedRatings[1]}
										width={80}
									/>
									<div style={{fontStyle: 'italic',margin: '10px',width: '60px', display: 'inline-block'}}>
										Rotten Tomatoes
									</div>
									<Progress type="circle" percent={formattedRatings[2]} width={80}/>
									<div style={{fontStyle: 'italic',margin: '10px',display: 'inline-block'}}>
										MetaCritic
									</div>
									<Progress type="circle" percent={formattedRatings[0]} width={80}/>
									<div style={{fontStyle: 'italic',margin: '10px',display: 'inline-block'}}>
										IMdb
									</div>
								</div>
								<div style={{marginBottom: '20px'}}>
									<AddFavorite movie={movie}/>
									{' '}
									<Button>+ Watch List</Button>
								</div>
								<h3>Overview</h3>

								<p>{movie.Plot}</p>
								{genres}
							</Col>
						</Row>
						<Divider/>
						<Row>
							<Col>
								<Tabs defaultActiveKey="1">
									<TabPane tab={<span><Icon type="person" />People</span>} key="1">
										<h2>Actors</h2>
										<p>{movie.Actors}</p>
										<h2>Writers</h2>
										<p>{movie.Writer}</p>
										<h2>Director</h2>
										<p>{movie.Director}</p>
									</TabPane>
									<TabPane tab={<span><Icon type="award" />Awards</span>} key="2">
										<h2>Awards</h2>
										<p>{movie.Awards}</p>
										<h2>Box Office</h2>
										<p>{movie.BoxOffice}</p>
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

function mapStateToProps(state) {
	return {
	  movie: state.movies.selectedMovie
	}
}

export default connect(mapStateToProps, { fetchMovie })(MovieShow)
