## **DoIt \- Gerenciador de Tarefas**

DoIt é um aplicativo fullstack para gerenciamento de tarefas, desenvolvido com **Nuxt.js 3** no frontend e **Node.js \+ Express \+ MySQL** no backend. A aplicação permite que usuários autenticados criem, editem e excluam tarefas de forma intuitiva e eficiente.

### **🚀 Demonstração**

🔗 [Acesse a Demo](https://doit-jade.vercel.app/)

## **🛠 Tecnologias Utilizadas**

### **Frontend**

- Nuxt.js 3
- Vue.js
- TypeScript
- Pinia (gerenciamento de estado)
- Tailwind CSS
- Vue Router

### **Backend**

- Node.js
- Express.js
- MySQL
- Knex
- JSON Web Token (JWT) para autenticação
- Railway para deploy

## **⚡ Funcionalidades**

- CRUD de tarefas vinculadas a usuários
- Autenticação com JWT
- Interface responsiva e otimizada para SEO
- Persistência de dados com MySQL
- Deploy backend no Railway e frontend no Vercel

## **📦 Como Rodar o Projeto**

### **1\. Clone o Repositório**

git clone https://github.com/seu-usuario/doit.git  
 cd doit

### **2\. Configuração do Backend**

cd backend  
 npm install

- Configure o banco de dados no `.env`

DB_HOST=seu_host  
DB_USER=seu_usuario  
DB_PASSWORD=sua_senha  
DB_NAME=seu_banco  
JWT_SECRET=sua_chave_secreta

- Rode as migrations e inicie o servidor

npx knex migrate:latest  
 npm run dev

### **3\. Configuração do Frontend**

cd ../frontend  
 npm install  
 npm run dev

O projeto estará acessível em `http://localhost:3000`
