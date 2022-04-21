import axios from 'axios';
// http://api.themoviedb.org/3/movie/550?api_key=99164fc3e2a8208f1f5e9fb36b0f2eb5

// Запрос популярных фильмов
// https://api.themoviedb.org/3/trending/all/day?api_key=99164fc3e2a8208f1f5e9fb36b0f2eb5

// Поиск
// https://api.themoviedb.org/3/search/company?api_key=99164fc3e2a8208f1f5e9fb36b0f2eb5&page=1

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
  search: '',
  movieID: 'movie/',
  reviews: '',
  credits: '',
};

const getTrendingMovies = async () => {
  const moviesTrend = await axios.get(`/${PARAM.trending}?api_key=${API_KEY}`);
  return moviesTrend;
};

const getMovieId = async id => {
  const movieId = await axios.get(
    `/${PARAM.movieID}${id}?api_key=${API_KEY}&language=en-US`
  );
  return movieId;
};

const getMovieIdReviews = async id => {
  const movieId = await axios.get(
    `/${PARAM.movieID}${id}?api_key=${API_KEY}&language=en-US`
  );
  return movieId;
};

export { getTrendingMovies, getMovieId, getMovieIdReviews };
