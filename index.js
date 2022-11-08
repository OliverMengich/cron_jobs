const config = require('./config/index.js');
const scheduler = require('./scheduler.js');
scheduler.initCrons(config);