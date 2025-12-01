import prisma from "../config/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authService = {
  register: async (data) => {
    const { 
      businessName, 
      firstName, 
      lastName, 
      dni, 
      email, 
      password 
    } = data;

    // Validaciones básicas
    if (!businessName || !firstName || !lastName || !dni || !email || !password) {
      throw new Error("Faltan campos obligatorios");
    }

    // Verificar si ya existe
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
        businessName,
        firstName,
        lastName,
        dni,
        email,
        password: hashedPassword,
      },
    });

    // Crear token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Quitar password
    const { password: _, ...safeUser } = user;

    return { user: safeUser, token };
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

    // Token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { password: _, ...safeUser } = user;

    return { user: safeUser, token };
  },
};
