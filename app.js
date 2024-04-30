const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');
const routes = require('./routes/routes');
const port = 8080;


process.on('uncaughtException', (error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(router);
router.use('/',routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })