const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.status(200).send('some text');
});

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
