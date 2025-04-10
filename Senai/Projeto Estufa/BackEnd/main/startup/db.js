const mysql = require('mysql2/promise');

// 🔹 Configuração da conexão com o banco
const pool = mysql.createPool({
    host: 'localhost',   // Endereço do seu banco (geralmente 'localhost')
    user: 'root',        // Usuário do banco de dados
    password: 'root',        // Senha do banco (se tiver)
    database: 'estufa', // Nome do banco de dados
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
