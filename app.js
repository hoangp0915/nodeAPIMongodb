const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRote = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
// dotenv.config();

app.use(bodyParser.json());
app.use(cors());
// Router
app.use('/posts', postsRote);
app.get('/', (req, res) => {
    res.send('Home');
})

// Config database
// process.env.DB_CONNECT
mongoose.connect(
    'mongodb://localhost:27017/mylib', 
    { useNewUrlParser: true },
    () => console.log('Connected DB!')
);
app.listen(8000);