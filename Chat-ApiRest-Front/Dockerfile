# Usa una imagen oficial de Node.js
FROM node:18-alpine

# Crea directorio de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY package.json .
COPY index.html .
COPY css/ ./css/
COPY js/ ./js/

# Instala live-server
RUN npm install -g live-server

# Puerto expuesto
EXPOSE 3000

# Comando para iniciar
CMD ["live-server", "--port=3000", "--no-browser"]