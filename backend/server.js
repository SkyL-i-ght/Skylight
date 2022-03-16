// require express 
// setup a server port 
// send static files such as html files and styling files
// setup router handlers to receive and send back responses to the front-end
const express = require('express'); // make sure to npm install express
const app = express();
const PORT = 3434;
const path = require('path'); // make sure to npm install path



//route error handler 
app.use((req,res)=>res.sendStatus(400));
// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });



app.listen(PORT, ()=>{
    console.log(`Listening on Port:${PORT}`);
})