const express = require('express');
const router = express.Router();

const userInterests = {}; 

router.post('/update', (req, res) => {
  const { username, interests } = req.body;
  userInterests[username] = interests;
  res.json({ message: 'Interests updated successfully' });
});

module.exports = router;
