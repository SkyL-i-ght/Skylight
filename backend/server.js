require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const api = require('./routers/api');

app.use(express.json());

app.use('/api', api);

// 404 error handler 
app.use('*', (req,res) => res.sendStatus(404));

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});