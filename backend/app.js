const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');
require('dotenv').config();

const app = express();

// Middleware
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.TOKEN_SECRET1, process.env.TOKEN_SECRET2],

    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(
  cors({
    origin: ['http://0.0.0.0:3000', 'http://localhost:3000'],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());

const userRouter = require('./routes/user.routes');
app.use('/api/users', userRouter);
const blogRouter = require('./routes/blog.routes');
app.use('/api/blogs', blogRouter);

module.exports = app;
