const app = require('./src/services/express.services');
const mongoose = require('./src/services/mongoose.services');

mongoose.connectDb();
app.start();