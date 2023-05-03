const express = require('express');
const userRoutes = require('./routes/users.js');

module.exports = () => {
	const app = express();

	app.use(express.json());
	app.use(userRoutes);

	return app;
};
