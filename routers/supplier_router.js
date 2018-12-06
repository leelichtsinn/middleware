const express = require('express');

const router = express.Router();

// middleware


// /api/supplier
router.get('/', (req, res) => {
  res.json({ suppliers: [
    'coffe roaster',
    'food vendor',
    'tea distributor'
  ]});
});

// /api/supplier
router.post('/', (req, res) => {
  const supplier = req.body;
  res.status(201).json({created: supplier});
});

// /api/supplier/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({deleted: id});
});

module.exports = router;
