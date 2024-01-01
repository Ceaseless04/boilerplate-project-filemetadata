var express = require('express');
var cors = require('cors');
var app = express();
const multer_file = require('multer');
require('dotenv').config()

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// POST request for file upload
app.post('/api/fileanalyse', multer_file({}).single('upfile'), (req, res) => {
  const name = req.file.originalname;
  const type = req.file.mimetype;
  const size = req.file.size;
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ name, type, size });
});

app.get('/api/fileanalyse',)

const port = process.env.PORT;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});