export const routes = {
  home: '/',
  moviesList: '/movies',
  movieEdit: '/movie-edit',
  movieEditParam: '/movie-edit/:movieId',
  movieAdd: '/movie-add',
}

export const api = {
  endpoints: {
    movies: 'http://localhost:5000/api/v1/movies'
  }
}

export const selectParameters = {
  genre: [
    'Action',
    'Adventure',
    'Comedy',
    'Criminal',
    'Drama',
    'Fantasy',
    'Historical',
    'Horror',
    'Musical',
    'Science Fiction',
    'War',
    'Western'
  ],
  rating: [
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ]
}

