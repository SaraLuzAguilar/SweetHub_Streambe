import express from "express";
import { catalogController } from "../controllers/catalog.controller.js";
import { uploadSingle } from "../config/multer.js";

const router = express.Router();

// Sections
router.get("/sections", catalogController.listSections);
router.post("/sections", catalogController.createSection);
router.put("/sections/:id", catalogController.updateSection);
router.delete("/sections/:id", catalogController.deleteSection);

// Products
router.get("/sections/:sectionId/products", catalogController.listProductsBySection);
router.post("/sections/:sectionId/products", uploadSingle.single("image"), catalogController.createProduct);
router.put("/products/:id", uploadSingle.single("image"), catalogController.updateProduct);
router.delete("/products/:id", catalogController.deleteProduct);

export default router;
