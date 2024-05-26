const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/placement-cell", {
	// useNewUrlParser: true,
	// useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to mongodb Successfully');
});

module.exports = db;
