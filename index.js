/* Import our Modules */
const express    = require('express');
const bodyParser = require('body-parser');

let db = require('./models');

/* Express Setup */
let app  = express();
let http = require('http').Server(app);
app.rootName = 'bandwidth-v2-message-logger';
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8081));

function startServer() {
  app.use(bodyParser.json());
  app.set('models', require('./models'));
  app.use('/bandwidth', require('./routes/bandwidth_routes.js'));
  const port = process.env.PORT || 8081;
  app.listen(port, process.env.HOST || "0.0.0.0", function () {
    console.log(`${app.rootName} listening on port: ${port}`);
  });
}

/******************************************************************************
 * Migrate and sync Database
 * Set up server on configured port
 *****************************************************************************/
db.sequelize.sync().then(startServer);

module.exports = app;