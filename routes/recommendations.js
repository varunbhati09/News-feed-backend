const express = require('express');
const router = express.Router();

// Mock recommended articles (replace with actual recommendations logic)
const recommendedArticles = {
  user1: [
    { id: 1, title: 'Recommended Article 1', description: 'Description 1' },
    { id: 2, title: 'Recommended Article 2', description: 'Description 2' },
  ],
  user2: [
    { id: 3, title: 'Recommended Article 3', description: 'Description 3' },
    { id: 4, title: 'Recommended Article 4', description: 'Description 4' },
  ],
};

router.get('/:username', (req, res) => {
  const username = req.params.username;
  const articles = recommendedArticles[username] || [];
  res.json({ recommendedArticles: articles });
});

module.exports = router;
