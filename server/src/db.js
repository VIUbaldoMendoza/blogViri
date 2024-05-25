const { Sequelize } = require('sequelize');
require("dotenv").config();

const UserModel = require("./models/UserModel");
const PostModel = require("./models/PostModel");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Configuración de la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false }
);

// Definición de modelos a usar
UserModel(sequelize);
PostModel(sequelize);

// Crear las relaciones / asociaciones
const { User, Post } = sequelize.models;

// Un usuario puede tener muchos posts
User.hasMany(Post);

// Un post pertenece a un solo usuario
Post.belongsTo(User);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
