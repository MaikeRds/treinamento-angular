const express = require('express');
const cors =  require('cors');
const multiParty = require('connect-multiparty');

const app = express();
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use(express.json());

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

const multipartyMiddleware = multiParty({ uploadDir: './uploads' })

app.post('/upload', multipartyMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);

  res.json({ message: files });
});

app.use((err, req, res, next) => res.json({ error: err.message }));

app.listen(8000, () => {
  console.log('Servidor iniciado. Porta: 8000');
});