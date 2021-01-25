import express from 'express';

const bodyParser = require('body-parser');

let cookieParser = require('cookie-parser')

const app = express();

//app.use(cookieParser);
// Parse request of content-type - application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: false } ) );

// Parse request of content-type - application/json
app.use( bodyParser.json() );

let argSize = process.argv.slice(2).length;
let port  = process.argv.slice(2)[argSize - 1] || 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./resources/swagger.json');

var options = {
  customCss: '.swagger-ui .topbar { display: none }'
};

let routes = require('./routes/route.js')
routes.default(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.listen(port, () => {
    console.log("App started on port " + port);
})

process.on("uncaughtException", (err) => {
  console.log(err);
})