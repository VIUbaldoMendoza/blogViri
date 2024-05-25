const { User } = require("../db");

const verifyAdmin = async (req, res, next) => {
  const { userId } = req.body; // o desde los headers, dependiendo de tu implementación

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.isAdmin) { // Asumiendo que tienes un campo isAdmin en tu modelo de usuario
      return res.status(403).json({ error: "Unauthorized: Only admins can perform this action" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { verifyAdmin };
