import { authService } from "../services/auth.service.js";

export const authController = {
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);

      res.status(201).json({
        ok: true,
        user: {
          id: user.id,
          businessName: user.businessName,
          firstName: user.firstName,
          lastName: user.lastName,
          dni: user.dni,
          email: user.email,
          createdAt: user.createdAt,
        },
      });

    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { user, token } = await authService.login(req.body);

      res.json({
        ok: true,
        token,
        user: {
          id: user.id,
          businessName: user.businessName,
          firstName: user.firstName,
          lastName: user.lastName,
          dni: user.dni,
          email: user.email,
          createdAt: user.createdAt,
        },
      });

    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },
};
