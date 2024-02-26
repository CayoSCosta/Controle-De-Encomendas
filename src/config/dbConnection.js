const mysql = require('mysql2/promise');

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('Conectado ao banco de dados MySQL com sucesso');
    return connection;
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados', error);
    process.exit(1);
  }
};

module.exports = connectDB;
