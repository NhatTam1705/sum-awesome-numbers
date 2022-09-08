let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.json())
var sumRouter = require('./routes/sum');
app.use('/api/sum', sumRouter);
app.listen(port);

console.log('RESTful API server started on: ' + port);