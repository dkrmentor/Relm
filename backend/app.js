const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRoute = require('./Api/Authentication/login');
const ForgetPassRoute = require('./Api/Authentication/forget_password')
const { connectToDatabase, connection } = require('./Config/Database/databse');
const UserProfile = require('./Api/user/user_profile');
const jwt = require('jsonwebtoken');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('uploads'));
app.use(cors());


const authorization = async function (req, res, next) {
  if (req.originalUrl === '/login' || req.originalUrl === '/forget_password' || req.originalUrl.startsWith('/uploads/')) {
    next();
    return;
  }

  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    const userExist = await connection.promise().query('SELECT * FROM users WHERE token = ?', [token]);

    if (userExist.length > 0) {
      next();
      return;
    }
  }
  res.status(401).send({ "code": "unauthorized" });
}

app.use(authorization);
app.use('/', loginRoute);
app.use('/', ForgetPassRoute);
app.use('/', UserProfile);


app.listen(3000, () => {
  console.log('server created on 3000');
  connectToDatabase();
});


/*
    // Middleware to verify JWT token
    
function verifyToken(req, res, next) {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).json({ message: 'Bearer token is missing' });
  }

  const token = bearerToken.split(' ')[1]; // Extract the token from the "Bearer <token>" format

  jwt.verify(token, 'relm', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded; // Attach the decoded user information to the request object
    next();
  });
}

// Addinterest API endpoint
router.put('/addinterest/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const { interests } = req.body;

  const interestsJSON = JSON.stringify(interests);

  const query = 'UPDATE users SET interest = ? WHERE id = ?';
  const values = [interestsJSON, id];

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User data updated successfully' });
    }
  });
});

*/ 