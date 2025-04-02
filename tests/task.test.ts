import { expect, beforeAll, test } from "vitest";
import request from "supertest";
import app from "../server";

let token: string;

beforeAll(async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const res = await request(app).post("/auth/login").send({
    email: "teste@teste.com",
    password: "123456",
  });
  token = res.body.token;
});

test("API de Tarefas > Deve criar uma tarefa", async () => {
  const res = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${token}`) // Inclui o token
    .send({ title: "Nova Tarefa", description: "Teste de criação" });

  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty("id");
});
