import express from 'express';

const app = express();
const indexRouter = require('./routes/index');
const port = 1245;

app.listen(port);
app.use(indexRouter);

 
module.exports = app;