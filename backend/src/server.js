// backend/src/server.js

// ============================
//  IMPORTS PRINCIPALES
// ============================
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Cargar variables de entorno
dotenv.config();

// Crear servidor Express
const app = express();


// ============================
//  MIDDLEWARES GLOBALES
// ============================

// Permitir solicitudes desde frontend
app.use(cors());

// Permitir recibir JSON en requests
app.use(express.json());

// Resolver __dirname en ESModules (sin esto, uploads no funciona)
const __dirname = path.resolve();

// Carpeta estática donde irán las imágenes subidas
// Ej: http://localhost:4000/uploads/imagen.jpg
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// ============================
//  IMPORTACIÓN DE RUTAS
// ============================

import mainRoutes from "./routes/index.js";
import catalogRoutes from "./routes/catalog.routes.js";
import productRoutes from "./routes/product.routes.js";
import profileRoutes from "./routes/profile.routes.js";

// ============================
//  REGISTRO DE RUTAS
// ============================

// Rutas generales (auth, etc.)
app.use("/api", mainRoutes);

// Rutas del catálogo (secciones)
app.use("/api/catalog", catalogRoutes);

// Rutas de productos
app.use("/api/products", productRoutes);

// Rutas del perfil (Diseño/Personalización)
app.use("/api", profileRoutes);

// ============================
//  INICIAR SERVIDOR
// ============================

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor SweetHub corriendo en http://localhost:${PORT}`);
});
