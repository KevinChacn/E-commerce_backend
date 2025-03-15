const { readData, saveData } = require('../storage');
const config = require('../config');

const userController = {};

// Campos obligatorios para creación de usuario
const REQUIRED_FIELDS = ['studentId', 'firstName', 'lastName', 'email', 'career', 'semester'];

userController.getAllUsers = async () => {
    try {
        const data = await readData();
        return data.users || [];
    } catch (error) {
        console.error('Error al recuperar usuarios:', error);
        throw new Error('Error interno del servidor');
    }
};

userController.getUserById = async (userId) => {
    try {
        const data = await readData();
        return (data.users || []).find(user => user.id === userId);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        throw new Error('Error interno del servidor');
    }
};

userController.addUser = async (body) => {
    try {
        // Validar campos requeridos
        const missingFields = REQUIRED_FIELDS.filter(field => !body[field]);
        if (missingFields.length > 0) {
            throw new Error(`Faltan campos requeridos: ${missingFields.join(', ')}`);
        }

        // Validar formato de email
        if (!/^\S+@\S+\.\S+$/.test(body.email)) {
            throw new Error('Formato de email inválido');
        }

        const data = await readData();
        
        // Verificar studentId único
        if ((data.users || []).some(user => user.studentId === body.studentId)) {
            throw new Error('El número de matrícula ya existe');
        }

        const newUser = {
            id: Date.now().toString(),
            ...body,
            semester: Number(body.semester),
            createdAt: new Date().toISOString(),
            status: 'active'
        };

        data.users = [...(data.users || []), newUser];
        await saveData(data);
        return newUser;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error; // Propagamos el error original
    }
};

userController.updateUserById = async (userId, body) => {
    try {
        const data = await readData();
        const users = data.users || [];
        const index = users.findIndex(user => user.id === userId);
        
        if (index === -1) {
            throw new Error('Usuario no encontrado');
        }

        // Validar semestre numérico
        if (body.semester && isNaN(body.semester)) {
            throw new Error('El semestre debe ser un número');
        }

        const updatedUser = {
            ...users[index],
            ...body,
            updatedAt: new Date().toISOString()
        };

        data.users[index] = updatedUser;
        await saveData(data);
        return updatedUser;
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        throw error;
    }
};

userController.deleteUserById = async (userId) => {
    try {
        const data = await readData();
        const initialLength = (data.users || []).length;
        data.users = (data.users || []).filter(user => user.id !== userId);
        
        if (data.users.length === initialLength) {
            throw new Error('Usuario no encontrado');
        }
        
        await saveData(data);
        return { message: 'Usuario eliminado exitosamente' };
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
    }
};

module.exports = userController;