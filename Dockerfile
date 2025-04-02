# Usa a imagem oficial do Node.js
FROM node:20-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências
RUN npm install

# Compila o projeto
RUN npm run build

# Expõe a porta do Nuxt.js
EXPOSE 3000

# Comando para rodar o Nuxt
CMD ["npm", "run", "preview"]
