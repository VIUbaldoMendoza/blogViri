const { User } = require("../db");

const createUser = async (req, res) => {
  try {
    const { name, email, phone, isAdmin } = req.body;
    const newUser = await User.create({ name, email, phone, isAdmin });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
};
