const getUsersHandler = (req, res) => {
    res.status(200).send("Aquí están los usuarios");
}

const getDetailHandler = (req, res) => {
    res.status(200).send("Detalle del usuario");
}

const createUserHandler = (req, res) => {
    res.status(200).send("Usuario creado");
}

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler,
};
