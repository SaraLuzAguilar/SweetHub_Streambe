// backend/src/routes/product.routes.js

import { Router } from "express";
import { productController } from "../controllers/product.controller.js";

const router = Router();

// Crear un producto
router.post("/", productController.create);

// Obtener productos por sección
router.get("/:sectionId", productController.getBySection);

// Editar un producto
router.put("/:productId", productController.update);

// Eliminar un producto
router.delete("/:productId", productController.delete);

export default router;
