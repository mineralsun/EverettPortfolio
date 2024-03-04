const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// TODO insert router for database data
const port = process.env.PORT || 5077;

/** -- MIDDLEWARE -- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** -- ROUTES -- **/
// TODO insert routes here
// (app.use('/api/ROUTENAME', routerName));

/** -- START SERVER -- **/
app.listen(port, function() {
    console.log('Listening on port:', port)
});