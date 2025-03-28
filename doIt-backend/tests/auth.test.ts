import request from "supertest";
import app from "../server";
import { expect, test } from "vitest";

test("Deve registrar um novo usuário", async () => {
  const res = await request(app)
    .post("/auth/register")
    .send({ name: "teste", email: "teste2@teste.com", password: "123456" });

  expect(res.status).toBe(201);
  expect(res.body).toHaveProperty("token");
});

test("Login deve falhar com credenciais inválidas", async () => {
  const res = await request(app)
    .post("/auth/login")
    .send({ email: "inexistente@i.com", password: "senhaerrada" });

  expect(res.status).toBe(401);
  expect(res.body).toHaveProperty("error");
});
