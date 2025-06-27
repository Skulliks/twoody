// routes/registerRoute.js
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Запрос на регистрацию пришёл:', req.body);
    try {
        const { username, password, email } = req.body;
            
        const userExists = await pool.query('SELECT * FROM tusers WHERE use_username = $1', [username]);
        if(userExists.rows.length > 0) {
            return res.status(400).json({ error: 'User with this username already exists. Try another username' });
        }

        const hashedPassword = await bcrypt.hash(username + password, 10);
        await pool.query('INSERT INTO tusers (use_username, use_password, use_email) VALUES ($1, $2, $3)', [username, hashedPassword, email]);

        res.status(201).json({ message: 'Registration is succesfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Server error'});
    }
});

module.exports = router;