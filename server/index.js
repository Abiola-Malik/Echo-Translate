require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const corsOptions = {
  origin: [
    'http://example.com',
    'http://localhost:3000',
    'https://echo-translate.vercel.app',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable set cookie
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/', (req, res) => {
  res.send('listening');
});
app.use('/translate', require('./routes/translate'));
