const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('./db')();
const duckRouter = require('./routes/duckRoutes');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Greet on root route
app.get('/', (req, res) => res.send('The ducks are coming!'));

// General middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:5173',
      /https:\/\/wd37-rubber-ducks\.netlify\.app/,
    ],
  })
);
app.use(cookieParser());

// Routes
app.use('/ducks', duckRouter);
app.use('/users', userRouter);

// Error handling
app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
