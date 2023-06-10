const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { connectToDatabase, connection } = require('../../Config/Database/databse');
const fs = require('fs');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../uploads/'.replace(/ /g, '_')))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, uniqueSuffix)
  }
});

const upload = multer({ storage: storage });

router.put('/userprofile/:id', async (req, res) => {

  console.log("working");

  const { id } = req.params;
  const { name, birthday, gender, current_city, email, known_languages } = req.body;

  console.log(req.body);
  console.log(req.params.id);

  // const contentFile = req.files;
  // let content = [];

  // if (content) {
  //   for (let index = 0; index < contentFile.length; index++) {
  //     const element = contentFile[index];

  //     content.push("http://192.168.0.130:3000" + "/uploads/" + element.filename);
  //   }
  // }



  try {
    if (gender === "") {

      const query = 'UPDATE users SET interest = ?, images = ? WHERE id = ?';
      const values = [JSON.stringify({ "interests": interest }), id];

      connection.query(query, values, (error, results) => {
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({ message: 'Internal Server Error' });
          return;
        }

        res.status(200).json({ message: 'User profile updated successfully' });
      });

    } else {
      const query = 'UPDATE users SET name = ?, birthday = ?, gender = ?, current_city = ?, email = ?, known_languages = ?, images = ? WHERE id = ?';
      const values = [name, birthday, gender, current_city, email, known_languages, JSON.stringify({ "images": content }), id];

      connection.query(query, values, (error, results) => {
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({ message: 'Internal Server Error' });
          return;
        }

        res.status(200).json({ message: 'User profile updated successfully' });
      });
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.get('/getuser/:id', (req, res) => {
  const { id } = req.params;

  try {
    const query = 'SELECT * FROM users WHERE id = ?';
    const values = [id];

    connection.query(query, values, (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }

      if (results.length === 0) {
        res.status(401).json({ message: 'User not found' });
      } else {
        const { password, ...userWithoutPassword } = results[0];
        res.status(200).json({ data: userWithoutPassword });
      }
    });
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


router.put('/addinterest/:id', (req, res) => {
  const { id } = req.params;
  const { interests } = req.body;

  const interestsJSON = JSON.stringify(interests);

  const query = 'UPDATE users SET interest = ? WHERE id = ?';
  const values = [interestsJSON, id];

  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    res.status(401).json({ message: 'Bearer token is missing' });
    return;
  }

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



module.exports = router;
