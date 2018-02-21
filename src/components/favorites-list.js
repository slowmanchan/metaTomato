import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const FavoritesList = () => {
	var values = _.values(localStorage);
	
	const favorites = values.map((favorite) => {
		return <img src={JSON.parse(favorite).Poster} />
	})

	return (
		<div>
		<Link to={'/'} >Back</Link>
		<h2>Favorites</h2>
		  {favorites}
		</div>
	)
}

export default FavoritesList;