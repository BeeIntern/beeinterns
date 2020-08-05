const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/rate-article', (req, res) => {
  res.send({ success: true });
});

app.put('/suggest-news', (req, res) => {
  const text = req.body.content;
  // const content = textarea.value;   FeedbackForm правильно content а не text

  if (!text) {
    res.status(500);
  }

  res.send({
    success: !!text,
  });
});

app.listen(3001);
