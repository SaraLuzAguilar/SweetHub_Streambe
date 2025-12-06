import { productService } from "../services/product.service.js";

export const productController = {
  create: async (req, res) => {
    try {
      const product = await productService.create(req.body);
      res.json({ ok: true, product });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  getBySection: async (req, res) => {
    try {
      const sectionId = Number(req.params.sectionId);
      const products = await productService.getBySection(sectionId);
      res.json({ ok: true, products });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const productId = Number(req.params.productId);
      const product = await productService.update(productId, req.body);
      res.json({ ok: true, product });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const productId = Number(req.params.productId);
      await productService.delete(productId);
      res.json({ ok: true });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },
};
