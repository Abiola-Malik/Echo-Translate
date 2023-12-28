require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use('/', (req, res) => {
  res.send('listening');
});
app.use('/translate', require('./routes/translate'));
