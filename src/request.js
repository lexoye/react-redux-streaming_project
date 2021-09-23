const APIKEY = '141c27e40694ec6ec6cdc2d8084d2199';

const requests = {
  fetchNetflixOriginals: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc`,
  fetchTrending: `/trending/movie/week?api_key=${APIKEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
}

export default requests;


