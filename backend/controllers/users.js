const pool = require('../models/db');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const SALT_ROUNDS = 12;

const userController = {};

userController.signUp = (req, res, next) => {

  const q =  `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING _id;`;
  bcrypt.hash(req.body.password, SALT_ROUNDS)
    .then(hash => pool.query(q, [req.body.username, hash]))
    .then(r => {
      res.locals.id = r.rows[0]._id;
      console.log(`User ${res.locals.id} created`);
      return next();
    })
    .catch(e => {
      /* Error handling if the username already exists */
      if (e.constraint === 'users_username_key') {
          // constraint is returned from pg command/error when same username is entered 
        const err = {
          log: 'This username already exists.',
          status: 400,
          message: {err: 'This username already exists.'}
        }
        return next(err);
      }
      return next(e);
    });
  
};

userController.login = (req, res, next) => {

  const q = `SELECT _id, password FROM users WHERE username = $1;`;
  const err = {
    log: 'Incorrect username and/or password',
    status: 401,
    message: {err: 'Incorrect username and/or password'}
  };
  pool.query(q, [req.body.username])
    .then(r => {
      if (!r.rows.length) return next(err);
      res.locals.userId = r.rows[0]._id;
      return bcrypt.compare(req.body.password, r.rows[0].password);
    })
    .then(result => {
      if(!result) return next(err);
      const ssid = uuid.v4();
      const ssidString = `INSERT INTO sessions (user_id, ssid) VALUES ($1, $2) RETURNING ssid;`;
      const queryParams = [res.locals.userId, ssid];
      return pool.query(ssidString, queryParams);
    })
    .then(sessions => {
      res.cookie('ssid', sessions.rows[0].ssid, { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
      return next();
    })
    .catch(e => next(e));
}

userController.logout = (req, res, next) => {
  res.cookie('ssid', '', { maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: true });
  return next();
};

userController.authenticate = (req, res, next) => {
  const ssidQuery = `SELECT user_id FROM sessions WHERE ssid = $1`;
  const params = [req.cookies.ssid];
  pool.query(ssidQuery, params)
    .then(r => {
      if (!r.rows.length) res.locals.userId = null;
      else res.locals.userId = r.rows[0].user_id;
      console.log(`User ${res.locals.userId} authenticated`)
      return next();
    })
    .catch(e => next());
};


module.exports = userController;