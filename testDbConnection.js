import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function testConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    console.log("✅ Conexão bem-sucedida com o banco de dados!");
    await connection.end();
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
  }
}

testConnection();
