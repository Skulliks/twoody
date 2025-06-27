const express = require('express');
const path = require('path');
const pool = require('./db');
const app = express();
app.use(express.json());

const registerRoute = require('./route/registerRoute')
app.use('/register', registerRoute);

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/tusers', async (req, res) => {
  try{
    const result = await pool.query('SELECT * FROM tusers;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error with getting users');
  }
})


app.listen(PORT, () => {
  console.log(`Server working on: http://localhost:${PORT}`);
});