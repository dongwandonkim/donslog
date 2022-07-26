const User = require('../models/User');

const signup = async (req, res) => {
  const { email, password } = req.body;

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

  if (!email || !password) {
    return res
      .status(400)
      .send({ success: false, message: 'Please provide email and password' });
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .send({ success: false, message: 'Invalid email or password' });
    }

    req.session.user = user._id;

    res.send({ success: true, message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  signup,
  login,
};
