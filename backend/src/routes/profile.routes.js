// src/routes/profile.routes.js

import { Router } from 'express';
import prisma from '../config/prisma.js'; 
import { authMiddleware } from '../middlewares/auth.middleware.js'; 

const router = Router();

// ============================
//  1. ENDPOINT: GUARDAR/ACTUALIZAR PERFIL (POST)
// ============================
router.post('/perfil/guardar', authMiddleware, async (req, res) => {
    // El ID del usuario se obtiene del token verificado
    const userId = req.user.id; 
    
    // Extracción de datos para las dos tablas
    const { businessName, slogan, category, location, instagram, whatsapp, phone, 
            coverImageUrl, profileImageUrl, design_color, design_font, design_layout } = req.body;
    
    // Objeto con solo los campos para BusinessProfile
    const profileData = {
        slogan, category, location, instagram, whatsapp, phone, 
        coverImageUrl, profileImageUrl, design_color, design_font, 
        design_layout
    };
    
    try {
        // 1. Actualizar el BusinessName en la tabla 'User'
        await prisma.user.update({
            where: { id: userId },
            data: { businessName: businessName }
        });

        // 2. Usar UPSERT en la tabla 'BusinessProfile' (emprendimientos)
        const perfilActualizado = await prisma.businessProfile.upsert({
            where: { userId: userId }, 
            update: profileData,       
            create: {                  
                userId: userId,
                ...profileData
            },
        });
        
        return res.json({ success: true, message: 'Perfil y Diseño guardados con éxito.', data: perfilActualizado });
    } catch (error) {
        console.error('Error al guardar el perfil:', error);
        return res.status(500).json({ success: false, message: 'Error interno al guardar los datos.' });
    }
});

// ============================
//  2. ENDPOINT: OBTENER PERFIL (GET)
// ============================
// Este endpoint carga los datos del perfil cuando el usuario entra al panel de diseño
router.get('/perfil/obtener', authMiddleware, async (req, res) => {
    const userId = req.user.id;

    try {
        // 1. Obtener los campos del perfil (BusinessProfile)
        const profile = await prisma.businessProfile.findUnique({
            where: { userId: userId },
        });

        // 2. Obtener el businessName (que está en la tabla User)
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { businessName: true }
        });

        if (!user) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
        }

        // 3. Combinar los datos para enviarlos al frontend
        // Si no hay perfil (profile es null), enviamos solo el businessName y un perfil vacío.
        const combinedData = {
            businessName: user.businessName,
            ...profile // Esto será null si no existe, y el frontend debe manejarlo
        };
        
        return res.json({ success: true, data: combinedData });
    } catch (error) {
        console.error('Error al obtener el perfil:', error);
        return res.status(500).json({ success: false, message: 'Error interno del servidor.' });
    }
});


export default router;