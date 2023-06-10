const express = require('express');
const router = express.Router();
const {connectToDatabase,connection} = require('../../Config/Database/databse');
const jwt = require('jsonwebtoken');


router.post('/login', (req, res) => {
 
  const { username, password } = req.body;
  connection.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
        return;
      }

      if (results.length > 0) {
        const { id, password } = results[0];  
         
        const token = jwt.sign({ id, password }, 'relm', { expiresIn: '48h' });
        connection.query('UPDATE users SET token = ? WHERE id = ?', [token, id]);

        res.status(200).json({ success: true, message: 'Login successful', id, token });  
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    }
  );
});



module.exports = router;
  