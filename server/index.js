const express = require('express');
app = express();
const path = require('path');



let externalRoutes = require('./routes/externalRoutes');
app.use('/externalRoutes', externalRoutes);


let contacts = require('./api/routes/contacts');
app.use('/contacts', contacts);



const PORT = process.env.PORT || 5000;



 // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  // app.get('*', function (request, response) {
  //   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  // });


  app.listen(PORT, function () {
    console.log(`Dev app listening on port ${PORT}!`);
  });
