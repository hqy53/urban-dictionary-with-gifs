require("dotenv").config();

const express = require("express");
const {getDefinitionOfTerm, getGif} = require("./service");

const app = express();
const PORT = process.env.PORT || 8888;

app.set('view engine', 'pug');
app.use(express.static('public'));


app.get("/definition", async (req, res) => {
  const term = req.query.term;
  const httpRes = await getDefinitionOfTerm(term);
  const data = httpRes.data;
  res.status(200).json(data);
});

app.get("/gif", async (req, res) => {
  const term = req.query.term;
  const httpRes = await getGif(term);
  const data = httpRes.data;
  res.status(200).json(data);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, function () {
  console.log(`This server set up at port 8888.`)
});

