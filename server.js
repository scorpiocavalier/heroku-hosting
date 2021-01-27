const express = require('express');
const app = express();

// set port by heroku or default 8080
const port = process.env.port || 8080;

// use static files from directory name
app.use(express.static(__dirname));

// routes
app.get('/', (req, res) => {
  res.render('index');
});

// server should listen to this port
app.listen(port, () => console.log(`Server running at port ${port}`));
