const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');

dotenv.config('./config/env');

const app = express();

// Middleware
app.use(
  cookieSession({
    name: 'session',
    keys: [
      /* secret keys */
    ],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

module.exports = app;
