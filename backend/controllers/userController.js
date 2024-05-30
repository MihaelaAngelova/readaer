const bcrypt = require('bcrypt');
const pool = require('../config/db');

const addUser = async (req, res) => {
  const { firstName, lastName, email, password, country, gender, dob } = req.body;
  try {
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10); // salt = 10
    
    const text = 'INSERT INTO users (first_name, last_name, email, password, country, gender, date_of_birth) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const values = [firstName, lastName, email, hashedPassword, country, gender, dob];
    
    const result = await pool.query(text, values);
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addUser };
