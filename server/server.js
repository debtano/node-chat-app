const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
let app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
