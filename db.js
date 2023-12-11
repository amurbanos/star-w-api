const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;