const pool = require('../models/db');


const favoritesController = {};


favoritesController.getAll = (req, res, next) => {

  if (!res.locals.userId) return next("User must be logged in to access this feature");
  
  const q = 'SELECT _id as id, name, description FROM favorites WHERE user_id = $1';
  const params = [res.locals.userId];
  pool.query(q, params)
    .then(result => {
      if (!result.rows.length) res.locals.rows = null;
      else res.locals.rows = result.rows;
      return next();
    })
    .catch(e => next(e));


};


favoritesController.addOne = (req, res, next) => {

  if (!res.locals.userId) return next("User must be logged in to access this feature");

  const q = 'INSERT INTO favorites (user_id, name, description) VALUES ($1, $2, $3) RETURNING _id';
  const params = [res.locals.userId, req.body.name, req.body.description];
  pool.query(q, params)
    .then(result => {
      if (!result.rows.length) res.locals.id = null;
      else res.locals.id = result.rows[0]._id;
      res.locals.userId = null;
      return next();
    })
    .catch(e => next(e));

};

favoritesController.removeOne = (req, res, next) => {

  if (!res.locals.userId) return next("User must be logged in to access this feature");

  const q = 'DELETE FROM favorites WHERE _id = $1 and user_id = $2';
  const params = [req.body.id, res.locals.userId];
  pool.query(q, params)
    .then(() => next())
    .catch(e => next(e));

};

module.exports = favoritesController;