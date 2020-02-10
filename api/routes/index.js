const movies = [
  {
    id: 1,
    name: 'The Fellowship Of The Ring',
    genre: 'Fantasy',
    rating: 10,
    explicit: false
  },
  {
    id: 2,
    name: 'The Two Towers',
    genre: 'Fantasy',
    rating: 10,
    explicit: false
  },
  {
    id: 3,
    name: 'The Return Of The King',
    genre: 'Fantasy',
    rating: 10,
    explicit: false
  }
];

const movie = [
  {
    id: 2,
    name: 'The Two Towers',
    genre: 'Fantasy',
    rating: 10,
    explicit: false
  }
];

const appRouter = app => {

  const route = '/api/v1/movies';

  app.route(route)
    .get((req, res) => {  // get all movies

      res.json(movies);
      
    })
    .post((req, res) => {  // create a movie     
      
      res.json([{
        id: Math.random() * (100000 - 10) + 10, // random ID, non bulletproof method
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        explicit: req.body.explicit
      }]);
      
    });
  
  app.route(`${route}/:id`)
    .get((req, res) => {  // get a single movie

      res.json(movie);
      
    })
    .put((req, res) => {  // update a movie
      // DB UPDATE
      res.send(req.params.id);
      
    })
    .delete((req, res) => {  // delete a movie
      // DB DELETE
      res.send(req.params.id);
      
    })

}

module.exports = appRouter;