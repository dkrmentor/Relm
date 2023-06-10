const express = require('express');
const router = express.Router();
const { connectToDatabase, connection } = require('../../Config/Database/databse')

router.get('/users', (req, res) => {
  const { username } = req.body;
 
  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    if (results.length > 0) {

      const { password, ...userWithoutPassword } = results[0];

      res.status(200).json({ success: 'Success', message: 'User founded', data: userWithoutPassword });
    }

  });
});

router.put('/resetpassword/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const query = 'UPDATE users SET password = ? WHERE id = ?';
  connection.query(query, [password, id], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    res.status(200).json({ success: 'Success', message: 'Password updated' });
  });
});


module.exports = router;