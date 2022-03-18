const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  let query = req.query.searchTerm;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=3&rating=g&lang=en`;
  if (query !== '') {
    const options = {
      url: url,
    };

    axios.request(options)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send('error');
    });
  }
  else {
    res.json('');
  }
})

app.listen(PORT, () => {console.log(`Server listeing on port ${PORT}`)});