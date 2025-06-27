const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const { username, password } = req.body;

        const userExists = await pool.query('SELECT * FROM tusers WHERE use_username = $1', [username]);
        if(userExists.rows.length == 0) {
            return res.status(400).json({ error: 'User with this username doesn\'t exists.' });
        }

        const passwordInDB = userExists.rows[0].use_password;
        isMatch = await bcrypt.compare(username+password, passwordInDB)

        if(isMatch){
            return res.status(201).json({ message: 'Succes !' })
        }
        else {
            return res.status(400).json({ error: 'Wrong password.' });
        }
    } catch (error){
        console.error(error);
        res.status(500).json({error:'Server error'});
    }
});

module.exports = router;