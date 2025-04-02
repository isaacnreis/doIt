# Usa a imagem do Node.js
FROM node:20-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para dentro do container
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante dos arquivos do backend
COPY . .

# Expõe a porta 5000
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["npm", "start"]
