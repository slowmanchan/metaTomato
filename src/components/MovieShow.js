import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Progress, Button, Tag, Tabs, Icon, Divider, Spin } from 'antd';
import uniqid from 'uniqid';
import { formatRatings } from '../helpers/formatRatings.js';
import AddFavorite from './add-favorite';
const TabPane = Tabs.TabPane;

const MovieShow = (props) => {
	const { movie } = this.props;
	
	if (!movie || this.props.isLoading) {
			return (
			  <div style={{ marginTop: '100px', textAlign: 'center'}}>
			    <Spin tip='Gimme a sec....' size='large' />
			  </div>
			)
	}
	
	const { Ratings, Genre } = movie;
	
	const formattedRatings = formatRatings(Ratings).map((formatRating, idx) => {
			console.log(formatRating)
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
	
	const genres = Genre.split(',').map((item) => {
		return (
			<Tag
				color='geekblue'
				key={uniqid()}
			>
			{item}
			</Tag>
		)
	});
	
	return (
		<div style={{ margin: '40px' }}>
			<row>
				<col xs={24} md={8}>
				  <div style={{ margin: '0 40px 40px 0'}}>
					<img style={{maxwidth: '100%'}} src={movie.poster}/>
				  </div>
				</col>
				<col xs={24} md={16}>
					<h1 style={{fontweight: '900'}}>{movie.title}&nbsp;<span style={{ fontsize: 'small', fontweight: 'normal', color: 'grey'}}>({movie.year})</span></h1>
					<div style={{margin: '40px 0'}}>
						{formattedratings}
					</div>
					<div style={{marginbottom: '20px'}}>
						<addfavorite movie={movie}/>
						{' '}
						<button>+ watch list</button>
					</div>
					<h3>overview</h3>

					<p>{movie.plot}</p>
					{genres}
				</col>
			</row>
			<divider/>
			<row>
				<col>
					<tabs defaultactivekey="1">
						<tabpane tab={<span><icon type="person" />people</span>} key="1">
							<h2>actors</h2>
							<p>{movie.actors}</p>
							<h2>writers</h2>
							<p>{movie.writer}</p>
							<h2>director</h2>
							<p>{movie.director}</p>
						</tabpane>
						<tabpane tab={<span><icon type="award" />awards</span>} key="2">
							<h2>awards</h2>
							<p>{movie.awards}</p>
							<h2>box office</h2>
							<p>{movie.boxoffice}</p>
						</tabpane>
						<tabpane tab={<span>other</span>} key="3">
							tab 1
						</tabpane>
						<tabpane tab={<span><icon type="apple" />tab 1</span>} key="4">
							tab 1
						</tabpane>
						<tabpane tab={<span><icon type="apple" />tab 1</span>} key="5">
							tab 1
						</tabpane>
					</tabs>
				</col>
			</row>
		</div>
	)
}

export default MovieShow;