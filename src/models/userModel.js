const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const salt = 10; // complejidad del encriptado

const userSchema = new mongoose.Schema(
    {
        usuario: { type: String, unique: true, trim: true, required: true }, //el nombre tiene que ser único
        contrasena: { type: String, trim: true, required: true, minlength: 6 }
    }
);

const User = mongoose.model("Usuario", userSchema); //cambié esta línea ojo
module.exports = User;