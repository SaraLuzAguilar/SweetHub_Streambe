import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authService = {
  register: async (data) => {
    const { nombre, email, password } = data;

    // ¿El correo ya existe?
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      throw new Error("El email ya está registrado");
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
      },
    });

    return user;
  },

  login: async ({ email, password }) => {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Credenciales inválidas");
    }

    // Crear token JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return { user, token };
  },
};
