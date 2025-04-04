## **🏗 Backend \- DoIt**

O backend do DoIt é uma API REST desenvolvida com **Node.js**, **Express.js** e **MySQL**, oferecendo autenticação JWT e gerenciamento de tarefas por usuário.

## **🛠 Tecnologias Utilizadas**

- Node.js
- Express.js
- MySQL + Knex
- JSON Web Token (JWT)
- Railway para deploy

## **📦 Como Rodar o Backend**

### **1\. Instale as Dependências**

cd backend

npm install

### **2\. Configure o Banco de Dados**

Crie um arquivo `.env` na raiz do backend e adicione as seguintes variáveis:

DB_HOST=seu_host

DB_USER=seu_usuario

DB_PASSWORD=sua_senha

DB_NAME=seu_banco

JWT_SECRET=sua_chave_secreta

### **3\. Rode as Migrations**

npx knex migrate:latest

### **4\. Inicie o Servidor**

npm run dev

A API estará disponível em `http://localhost:5000`

## **🔥 Endpoints**

| Método | Rota             | Descrição                           |
| ------ | ---------------- | ----------------------------------- |
| POST   | `/auth/register` | Registra um novo usuário            |
| POST   | `/auth/login`    | Faz login e retorna o token JWT     |
| GET    | `/tasks`         | Retorna todas as tarefas do usuário |
| POST   | `/tasks`         | Cria uma nova tarefa                |
| PUT    | `/tasks/:id`     | Atualiza uma tarefa existente       |
| DELETE | `/tasks/:id`     | Exclui uma tarefa                   |
