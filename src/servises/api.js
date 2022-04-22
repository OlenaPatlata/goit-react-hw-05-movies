import axios from 'axios';
// http://api.themoviedb.org/3/movie/550?api_key=99164fc3e2a8208f1f5e9fb36b0f2eb5

// Запрос популярных фильмов
// https://api.themoviedb.org/3/trending/all/day?api_key=99164fc3e2a8208f1f5e9fb36b0f2eb5

// Поиск
// https://api.themoviedb.org/3/search/compani?api_key=99164fc3e2a8208f1f5e9fb36b0f2eb5&page=1

// Запрос по ID
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// Запрос по ревью фильма
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

// Запросо об актёрах
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '99164fc3e2a8208f1f5e9fb36b0f2eb5';
const PARAM = {
  trending: 'trending/all/day',
  search: 'search/',
  movieID: 'movie/',
  reviews: '/reviews',
  credits: '/credits',
};

const getTrendingMovies = async () => {
  const { data } = await axios.get(`/${PARAM.trending}?api_key=${API_KEY}`);
  return data;
};
const getMovieId = async id => {
  const { data } = await axios.get(
    `/${PARAM.movieID}${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getMovieIdReviews = async id => {
  const { data } = await axios.get(
    `/${PARAM.movieID}${id}${PARAM.reviews}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getMovieIdCredits = async id => {
  const { data } = await axios.get(
    `/${PARAM.movieID}${id}${PARAM.credits}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getSearchMovies = async compani => {
  const { data } = await axios.get(
    `/${PARAM.search}${compani}?api_key=${API_KEY}`
  );
  return data;
};
export {
  getTrendingMovies,
  getMovieId,
  getMovieIdReviews,
  getMovieIdCredits,
  getSearchMovies,
};
