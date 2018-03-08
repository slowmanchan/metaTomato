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
		const circleColors = {
		  red: 'red',
		  yellow: 'yellow',
		  green: 'green'
		}
		
		const { movie } = this.props

		if (!movie) {
			return (
			  <div>Loading...</div>
			)
		}

		const { Ratings, Genre } = movie;
	
		const formattedRatings = formatRatings(Ratings).map((formatRating, idx) => {
			console.log(formatRating)
		  return (
		    <div key={uniqid()} style={{ display: 'inline-block'}}>
			  <Progress
			    strokeColor='red'
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
        
		return (

					<div style={{ margin: '40px' }}>
						<Row>
							<Col xs={24} md={8}>
							  <div style={{ margin: '0 40px 40px 0'}}>
								<img style={{maxWidth: '100%'}} src={movie.Poster}/>
							  </div>
							</Col>
							<Col xs={24} md={16}>
								<h1 style={{fontWeight: '900'}}>{movie.Title}&nbsp;<span style={{ fontSize: 'small', fontWeight: 'normal', color: 'grey'}}>({movie.Year})</span></h1>
								<div style={{margin: '40px 0'}}>
									{formattedRatings}
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
