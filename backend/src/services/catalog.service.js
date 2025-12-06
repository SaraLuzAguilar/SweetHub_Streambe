import prisma from "../config/prisma.js";

export const catalogService = {
  // Sections
  listSections: async (ownerId) => {
    const where = ownerId ? { ownerId: Number(ownerId) } : {};
    return prisma.section.findMany({
      where,
      include: { products: true }
    });
  },

  createSection: async ({ name, color, icon, ownerId }) => {
    return prisma.section.create({
      data: { name, color, icon, owner: { connect: { id: Number(ownerId) } } }
    });
  },

  updateSection: async (id, data) => {
    return prisma.section.update({
      where: { id: Number(id) },
      data
    });
  },

  deleteSection: async (id) => {
    // opcional: eliminar productos asociados primero
    await prisma.product.deleteMany({ where: { sectionId: Number(id) } });
    return prisma.section.delete({ where: { id: Number(id) } });
  },

  // Products
  listProductsBySection: async (sectionId) => {
    return prisma.product.findMany({
      where: { sectionId: Number(sectionId) },
      orderBy: { createdAt: "desc" }
    });
  },

  createProduct: async ({ name, price, unit, description, imageUrl, sectionId, ownerId }) => {
    return prisma.product.create({
      data: {
        name,
        price,
        unit,
        description,
        imageUrl,
        section: { connect: { id: Number(sectionId) } },
        owner: { connect: { id: Number(ownerId) } }
      }
    });
  },

  updateProduct: async (id, data) => {
    return prisma.product.update({
      where: { id: Number(id) },
      data
    });
  },

  deleteProduct: async (id) => {
    return prisma.product.delete({ where: { id: Number(id) } });
  }
};
