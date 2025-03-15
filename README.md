# Nombre del proyecto: gestion-usuarios backend
# Autor: Kevin Chacón

# Descripción: 
Este proyecto es un backend para gestión de usuarios universitarios desarrollado con Node.js y Express. Utiliza un sistema de almacenamiento local en archivo JSON (sin base de datos externa) para registrar:

- Datos básicos de estudiantes
- Información académica (carrera, semestre)
- Estados de matrícula

## Requisitos Previos
- Node.js instalado en tu sistema.
- MongoDB instalado y en ejecución en tu sistema.

# Paso a paso para la instalación y compilación del proyecto:
# 1. Clonar repositorio  
git clone https://github.com/KevinChacn/E-commerce_backend.git  
# 2. Instalar dependencias  
cd E-commerce_backend  
npm install  
# 3. Iniciar servidor  
npm run dev  

GET http://localhost:3000/api/users/getUsers  

GET http://localhost:3000/api/users/getUserById/:id  

POST http://localhost:3000/api/users/addOne

{  
    "studentId": "20230001",  
    "firstName": "Ana",  
    "lastName": "García",  
    "email": "ana.garcia@universidad.edu",  
    "career": "Ingeniería Informática",  
    "semester": 5  
}  

PUT http://localhost:3000/api/users/:id  

{  
    "semester": 6,  
    "status": "inactive"  
}  


DELETE http://localhost:3000/api/users/:id  


gestion-usuarios backend/  
│  
├── data/  
│   └── db.json        # Almacenamiento persistente  
│  
├── src/  
│   ├── controllers/  
│   │   └── users.controller.js  # Lógica de negocio  
│   │  
│   ├── routes/  
│   │   └── users.routes.js      # Definición de endpoints  
│   │  
│   ├── config.js       # Configuraciones  
│   ├── storage.js      # Sistema de archivos  
│   ├── app.js          # Configuración Express  
│   └── index.js        # Punto de entrada  
│  
├── package.json  
└── README.md  