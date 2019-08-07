const mongoose = require('mongoose')
const User = require('../models/users')

// const URI = process.env.MONGODB_URI;

module.exports = {
  add: (req, res) => {
    err => {
				let result = {};
				let status = 201;

				if (!err) {
					const { name, password } = req.body;
					const user = new User({ name, password });
					user.save((err, user) => {
						if (!err) {
							result.status = status;
							result.result = user;
						} else {
							status = 500;
							result.status = status;
							result.error = err.message;
						}
						res.status(status).send(result);
					});
				} else {
					status = 500;
					result.status = status;
					result.error = err.message;
					res.status(status).send(result);
				}
			};
    return;
  }
}