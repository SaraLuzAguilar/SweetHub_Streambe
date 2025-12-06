import { catalogService } from "../services/catalog.service.js";

export const catalogController = {
  // Sections
  listSections: async (req, res) => {
    try {
      const sections = await catalogService.listSections(req.query.ownerId);
      res.json({ ok: true, sections });
    } catch (err) {
      res.status(500).json({ ok: false, message: err.message });
    }
  },

  createSection: async (req, res) => {
    try {
      const ownerId = Number(req.body.ownerId); // o usar token para obtener owner
      const section = await catalogService.createSection({ ...req.body, ownerId });
      res.status(201).json({ ok: true, section });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  updateSection: async (req, res) => {
    try {
      const updated = await catalogService.updateSection(Number(req.params.id), req.body);
      res.json({ ok: true, section: updated });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  deleteSection: async (req, res) => {
    try {
      await catalogService.deleteSection(Number(req.params.id));
      res.json({ ok: true });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  // Products
  listProductsBySection: async (req, res) => {
    try {
      const products = await catalogService.listProductsBySection(Number(req.params.sectionId));
      res.json({ ok: true, products });
    } catch (err) {
      res.status(500).json({ ok: false, message: err.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const sectionId = Number(req.params.sectionId);
      const ownerId = Number(req.body.ownerId); // o extraer del token
      const payload = { ...req.body, sectionId, ownerId };

      if (req.file) {
        // ruta pública
        payload.imageUrl = `/uploads/${req.file.filename}`;
      }

      const product = await catalogService.createProduct(payload);
      res.status(201).json({ ok: true, product });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const payload = { ...req.body };
      if (req.file) payload.imageUrl = `/uploads/${req.file.filename}`;

      const product = await catalogService.updateProduct(id, payload);
      res.json({ ok: true, product });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await catalogService.deleteProduct(Number(req.params.id));
      res.json({ ok: true });
    } catch (err) {
      res.status(400).json({ ok: false, message: err.message });
    }
  }
};
