const express = require('express');
const router = express.Router();

const userInterests = {}; // Replace with a proper data store

router.post('/update', (req, res) => {
  const { username, interests } = req.body;
  userInterests[username] = interests;
  res.json({ message: 'Interests updated successfully' });
});

module.exports = router;
