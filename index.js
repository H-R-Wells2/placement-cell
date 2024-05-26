const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startegy');
const port = process.env.PORT || 3000;


dotenv.config({ path: 'config/.env' });

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(
	session({
		secret: process.env.SESSION_SECRET || "chaman",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 1000 * 60 * 100 },
	})
);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));

app.listen(port, function (error) {
	if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});
