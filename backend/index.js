const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('./db')();
const duckRouter = require('./routes/duckRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

// Greet on root route
app.get('/', (req, res) => res.send('The ducks are coming!'));

// General middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/ducks', duckRouter);

// Error handling
app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
