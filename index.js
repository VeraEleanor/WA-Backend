const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const collectionRouter = require('./routes/collection');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/collection', collectionRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

