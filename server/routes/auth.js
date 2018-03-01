const express = require('express');
const authHelper = require('../helpers/auth_helpers.js');

const router = new express.Router();

router.post('/signup', (req, res) => {
	const validationResult = authHelper.validateSignupForm(req.body);
	if (!validationResult.success) {
		return res.status(400).json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		})
	}
	return res.status(200).end();
})

router.post('/login', (req, res) => {
	const validationResult = authHelper.validateLoginForm(req.body);
	if (!validationResult.success) {
		return res.status(400).json({
			success: false,
			message: validationResult.message,
			errors: validationResult.errors
		});
	}
	return res.status(200).end();
})

module.exports = router;
