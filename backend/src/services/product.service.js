import prisma from "../config/prisma.js";

export const productService = {
  create: async (data) => {
    const { name, price, unit, description, imageUrl, sectionId, ownerId } = data;

    return await prisma.product.create({
      data: {
        name,
        price,
        unit,
        description,
        imageUrl,
        section: {
          connect: { id: sectionId }
        },
        owner: {
          connect: { id: ownerId }
        }
      }
    });
  },

  getBySection: async (sectionId) => {
    return prisma.product.findMany({
      where: { sectionId }
    });
  },

  update: async (id, data) => {
    return prisma.product.update({
      where: { id },
      data
    });
  },

  delete: async (id) => {
    return prisma.product.delete({
      where: { id }
    });
  }
};
