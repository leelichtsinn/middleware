const express = require('express');

const router = express.Router();

// middleware

// /api/items
router.get('/', (req, res) => {
  res.json({ items: [
    { name: 'coffee beans', s_id: 1 },
    { name: 'food vendor', s_id: 2 },
    { name: 'tea distributor', s_id: 3 },
    { name: 'chocolate syrup', s_id: 4 }
  ]});
});

// /api/items
router.post('/', (req, res) => {
  const item = req.body;
  res.status(201).json({created: item});
});

// /api/items/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({deleted: id});
});

module.exports = router;
