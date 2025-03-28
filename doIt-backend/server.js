import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// Rotas
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error("Erro capturado:", err);

  res.status(err.status || 500).json({
    error: err.message || "Erro interno no servidor",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
