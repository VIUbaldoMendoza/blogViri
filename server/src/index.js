const server = require("./app");
const { conn } = require("./db");
const PORT = 3001;

server.listen(PORT, () => {
    conn.sync({ force: true });  // Cambia a { force: false } en producción
    console.log(`Server listening on port ${PORT}`);
});
