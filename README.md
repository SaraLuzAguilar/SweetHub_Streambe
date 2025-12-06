# Guía para Ejecutar el Proyecto

## Requisitos Previos

### Herramientas necesarias:
1. **Node.js** (versión 16 o superior)
   - Descargar desde: [nodejs.org](https://nodejs.org/)
   - Verificar instalación: `node --version`

2. **MySQL** 
   - SQL Server (puerto 3306)
   - MySQL Workbench (opcional, para gestión visual)

3. **Visual Studio Code**
   - Editor recomendado

4. **Git** (para control de versiones)
   - Verificar instalación: `git --version`

## Instalación y Configuración

### 1. Clonar el repositorio
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

### 2. Instalar dependencias
# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

### 3. Configurar base de datos
1. Ejecutar los scripts SQL ubicados en `/database

### 4. Configurar Prisma
```bash
cd backend
npx prisma generate
npx prisma db push
```

## ▶️ Ejecutar la Aplicación

### Terminal 1: Backend (puerto 4000)
```bash
cd backend
npm run dev
```

### Terminal 2: Frontend (puerto 3000)
```bash
cd frontend
npm run dev
```

### Terminal 3: MySQL (puerto 3306)
- Asegurar que MySQL esté corriendo

## Acceso a la aplicación
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000
- **Base de datos:** localhost:3306

## Estructura general del Proyecto
```
├── backend/          # Servidor Node.js
├── frontend/         # Aplicación React
├── database/         # Scripts SQL
└── README.md         # Este archivo
```

## Comandos Útiles
- `npm run dev` - Inicia servidor de desarrollo
- `npx prisma studio` - Interfaz visual para la base de datos
- `npm run build` - Crea versión de producción

