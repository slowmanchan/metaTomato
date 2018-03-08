
export function formatRatings(ratings) {
  return ratings.map((rating) => {
    if (rating.Value.length <= 3 || rating.Value === '100%') {
      return { name: rating.Source, rating: +rating.Value.replace('%', '')}
    } else if (rating.Value.split('/')[1] === '100') {
	return {  name: rating.Source, rating: (+rating.Value.split('/')[0]) }
    } else if (rating.Value.split('/')[1] === '10') {
      return {  name: 'IMDB', rating: (rating.Value.split('/')[0] * 10) }
    }
  })
}
