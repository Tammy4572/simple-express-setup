const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');


var application = express();
application.engine('mustache', mustache());

application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.urlencoded());

application.listen(3000);