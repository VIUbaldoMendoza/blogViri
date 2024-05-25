const { Router } = require('express');
const { User } = require('../db');

const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = authRouter;
