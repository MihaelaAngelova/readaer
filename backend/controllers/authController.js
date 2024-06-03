const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const text = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const user = await pool.query(text, values);
    
    if (user.rows.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }
    
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid user or password' });
    }
    
    const token = jwt.sign({ id: user.rows[0].id, email: user.rows[0].email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ jwt: token, user: { id: user.rows[0].id, email: user.rows[0].email, firstName: user.rows[0].first_name, lastName: user.rows[0].last_name } });
    
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { loginUser };
