const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const helper = require("./src/lib/helper");
const config = require('./config/config');


const app = express();


app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('combined'));


helper.fileList('./src/routes').forEach(filePath => require(`./${filePath}`)(app));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const port = config.server.port;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
