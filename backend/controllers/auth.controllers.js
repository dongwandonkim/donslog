const User = require('../models/User');

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    req.session.user = { id: user._id, role: user.role };

    res.send({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const authCheck = async (req, res) => {
  try {
    const { user } = req.session;

    if (!user) {
      return res.status(401).send({ success: false, message: 'Unauthorized' });
    }

    const foundUser = await User.findById(req.session.user.id);
    if (!foundUser) {
      req.session = null;
      return res.send({ success: false, message: 'User not found' });
    }

    res.send({
      success: true,
      data: { email: foundUser.email, role: foundUser.role },
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
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

    req.session.user = { id: user._id, role: user.role };

    res.send({
      success: true,
      message: 'User logged in successfully',
      data: { email: user.email, role: user.role },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const logout = (req, res) => {
  req.session = null;

  res.send({ success: true, message: 'User logged out successfully' });
};

const protect = async (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send({ success: false, message: 'Unauthorized' });
  }
  req.user = req.session.user;
  next();
};

const restrictTo =
  (...roles) =>
  async (req, res, next) => {
    if (req.user && !roles.includes(req.session.user.role)) {
      return res.status(401).send({ success: false, message: 'Unauthorized' });
    }
    next();
  };

module.exports = {
  signup,
  login,
  logout,
  protect,
  restrictTo,
  authCheck,
};
