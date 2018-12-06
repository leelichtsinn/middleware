// create an express server
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const customMW = require('./custom_middleware');

const supplierRouter = require('./routers/supplier_router.js');
const itemRouter = require('./routers/item_router.js');

const server = express();
const PORT = process.env.PORT || 8000;

// middleware
server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

// routes
server.use('/api/suppliers', supplierRouter);
server.use('/api/items', itemRouter);

server.get('/', (req, res) => {
  res.send('we are live');
});

// listen
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
