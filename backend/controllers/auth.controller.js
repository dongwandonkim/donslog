const User = require('../models/User');

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const newUser = await User.create({ email, password });

    req.session.user = newUser._id;

    res.send({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
};

module.exports = {
  signup,
};
