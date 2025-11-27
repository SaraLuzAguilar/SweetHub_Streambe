import { authService } from "../services/auth.service.js";

export const authController = {
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({ ok: true, user });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { user, token } = await authService.login(req.body);
      res.json({ ok: true, user, token });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },
};
