import mongoose from 'mongoose';

const ids = [
    'Tarjeta de Identidad',
    'Cedula de Ciudadania',
    'Tarjeta de Extranjeria',
    'Cedula de Extranjeria',
    'NIT',
    'Pasaporte',
];

const userModel = mongoose.Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        // "enum" condiciona un numero de respuestas predefinidas
        idType: { type: String, required: true, enum: ids },
        idNumber: {
            type: String,
            required: true,
            unique: true,
            immutable: true,
        },
        user: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        // Crea una fecha de creación y una de modificación
    },
    { timestamps: true }
);

export default mongoose.model('users', userModel);
