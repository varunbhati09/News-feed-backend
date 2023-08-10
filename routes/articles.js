const express = require('express');
const router = express.Router();

const savedArticles = {}; 

router.post('/save', (req, res) => {
  const { username, article } = req.body;
  savedArticles[username] = savedArticles[username] || [];
  savedArticles[username].push(article);
  res.json({ message: 'Article saved successfully' });
});

router.get('/saved/:username', (req, res) => {
  const username = req.params.username;
  const articles = savedArticles[username] || [];
  res.json({ savedArticles: articles });
});

module.exports = router;
